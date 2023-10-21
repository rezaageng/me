'use client'

import { type HomeResponse } from '@/@types/home'
import useSmooth from '@/hooks/useSmooth'
import { type MotionStyle, motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'

const HomeSummary = ({ data }: { data: HomeResponse['data'] }): JSX.Element => {
  // * hooks
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    margin: '-50% 0px'
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // * animations
  const textAnimation: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0])
  }

  return (
    <section
      ref={ref}
      className="flex min-h-[200dvh] flex-col items-center justify-center"
      data-testid="home-summary"
    >
      <div
        style={{
          perspective: '20rem'
        }}
        className={`${
          isInView ? 'block' : 'hidden'
        } fixed top-1/2 w-full max-w-3xl -translate-y-1/2 p-6`}
      >
        <motion.p
          style={textAnimation}
          data-testid="short-summary"
          className="text-center text-2xl lg:text-3xl lg:leading-normal"
        >
          {data?.attributes.shortSummary}
        </motion.p>
      </div>
    </section>
  )
}

export default HomeSummary
