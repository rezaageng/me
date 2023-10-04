'use client'

import { useScroll, type MotionStyle, useInView } from 'framer-motion'
import { useRef } from 'react'
import useSmooth from '@/hooks/useSmooth'
import { type HomeResponse } from '@/@types/home'
import CirclesBg from '../background/CirclesBg'
import HomeSummary from './HomeSummary'
import HomeIntro from './HomeIntro'

const HomeMain = ({ data }: HomeResponse): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '1']
  })

  const background: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.5, 1], [1, 0])
  }

  return (
    <section ref={ref}>
      <CirclesBg
        style={{
          display: isInView ? 'flex' : 'none',
          ...background
        }}
        isActive={isInView}
        className="fixed left-0 -z-10 flex h-full w-full scale-100 flex-col items-center justify-center lg:scale-125"
      />
      <HomeIntro data={data} />
      <HomeSummary data={data} />
    </section>
  )
}

export default HomeMain
