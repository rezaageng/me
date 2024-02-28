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
    target: ref,
    offset: ['start end', 'end end']
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
    () => 150 * (data.length + 2),
    [data.length]
  )

  // * animations
  const x = useSmooth(scrollYProgress, [0, 1], [1280, -1280 * data.length])

  return (
    <section
      ref={ref}
      style={{
        height: isLg ? `${wrapperHeight}svh` : 'auto'
      }}
      className="relative left-[calc(-50vw+50%)] w-svw"
    >
      <div className="sticky top-0 h-auto overflow-hidden lg:flex lg:h-svh lg:items-center">
        <motion.div
          style={isLg ? { x } : {}}
          className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:flex lg:items-center lg:gap-96"
        >
          {data.map((project, i) => (
            <PinnedProject
              key={uuidv4()}
              project={project}
              animation={{ scrollYProgress, ...animationBreakpoint[i + 1] }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HomeProjects
