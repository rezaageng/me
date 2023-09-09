'use client'

import { type ProjectsResponse } from '@/@types/projects'
import useSmooth from '@/hooks/useSmooth'
import { useScroll, motion } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PinnedProject from './projects/PinnedProject'
import useResponsive from '@/hooks/useResponsive'

interface Props {
  data: ProjectsResponse['data']
}

const HomeProjects = ({ data }: Props): JSX.Element => {
  // * hooks
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref
  })

  const isLg = useResponsive(1024)

  // * vars

  const animationBreakpoint = useMemo<AnimationProps[]>(() => {
    const tmp: AnimationProps[] = []

    const length = data.length + 1
    const breakpoint = 1 / length

    for (let i = 0; i < length; i++) {
      tmp.push({
        start: breakpoint * i,
        center: breakpoint * (i + 0.5),
        end: breakpoint * (i + 1)
      })
    }

    return tmp
  }, [data.length])

  const wrapperHeight = useMemo<number>(
    () => 100 * (data.length + 1),
    [data.length]
  )

  // * animations
  const x = useSmooth(scrollYProgress, [0, 1], [0, -640 * data.length])

  // useEffect(() => {
  //   console.log(data)
  // }, [])

  return (
    <section
      ref={ref}
      style={{
        height: isLg ? `${wrapperHeight}dvh` : 'auto'
      }}
    >
      <div className="sticky top-0 h-auto lg:flex lg:h-[100dvh] lg:items-center">
        <motion.div
          style={isLg ? { x } : {}}
          className="h-full gap-6 lg:flex lg:gap-4"
        >
          <div className="p-6 lg:flex lg:flex-col lg:justify-center">
            <h2 className="bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-4xl font-semibold text-transparent  sm:text-6xl">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-center">
            {data.map((project, i) => (
              <PinnedProject
                key={uuidv4()}
                project={project}
                animation={{ scrollYProgress, ...animationBreakpoint[i + 1] }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default HomeProjects
