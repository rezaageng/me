'use client'

import { useScroll } from 'framer-motion'
import { useMemo, useRef } from 'react'
import TimelineItem from './timeline/TimelineItem'
import { type ExperiencesResponse } from '@/@types/experiences'
import { type EducationsResponse } from '@/@types/educations'
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'
import TimelineHead from './timeline/TimelineHead'

interface Props {
  experience: ExperiencesResponse['data']
  educations: EducationsResponse['data']
}

const HomeTimeline = ({ experience, educations }: Props): JSX.Element => {
  // * hooks
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref
  })

  const animationBreakpoint = useMemo<AnimationProps[]>(() => {
    const tmp: AnimationProps[] = []

    const length = experience.length + educations.length + 2
    const breakpoint = 1 / length

    for (let i = 0; i < length; i++) {
      tmp.push({
        start: breakpoint * i,
        center: breakpoint * (i + 0.5),
        end: breakpoint * (i + 1)
      })
    }

    return tmp
  }, [educations.length, experience.length])

  const wrapperHeight = useMemo<number>(
    () => 100 * (experience.length + educations.length + 2),
    [educations.length, experience.length]
  )

  return (
    <section
      ref={ref}
      style={{
        height: `${wrapperHeight}dvh`
      }}
      className="flex"
    >
      <div className="sticky top-0 flex h-[100dvh] w-full items-center overflow-hidden md:w-1/2">
        <TimelineHead
          data-testid="experience-title"
          scrollYProgress={scrollYProgress}
          {...animationBreakpoint[0]}
        >
          experience
        </TimelineHead>
        {experience.map((exp, i) => (
          <TimelineItem
            animation={{
              scrollYProgress,
              ...animationBreakpoint[i + 1]
            }}
            key={uuidv4()}
            data={{
              date: `${format(
                new Date(exp.attributes.startDate),
                'MMM yyyy'
              )} - ${
                exp.attributes.endDate !== null
                  ? format(new Date(exp.attributes.endDate), 'MMM yyyy')
                  : 'Present'
              }`,
              title: exp.attributes.title,
              subtitle: `${exp.attributes.employmentType}${
                exp.attributes.companyName !== null
                  ? ' · ' + exp.attributes.companyName
                  : ''
              }`,
              description: exp.attributes.description,
              location: exp.attributes.location
            }}
          />
        ))}
        <TimelineHead
          scrollYProgress={scrollYProgress}
          {...animationBreakpoint[experience.length + 1]}
        >
          educations
        </TimelineHead>
        {educations.map((edu, i) => (
          <TimelineItem
            animation={{
              scrollYProgress,
              ...animationBreakpoint[i + experience.length + 2]
            }}
            key={uuidv4()}
            data={{
              date: `${format(
                new Date(edu.attributes.startDate),
                'MMM yyyy'
              )} - ${format(new Date(edu.attributes.endDate), 'MMM yyyy')}`,
              title: edu.attributes.name,
              subtitle: edu.attributes.major,
              description: edu.attributes.description,
              location: edu.attributes.location
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HomeTimeline
