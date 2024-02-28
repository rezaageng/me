'use client'

import {
  useScroll,
  motion,
  type MotionStyle,
  useTransform
} from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const HomeEnd = (): JSX.Element => {
  // * hooks
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  // * animation
  const sectionAnimation: MotionStyle = {
    opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0])
  }

  const cometAnimation: MotionStyle = {
    scale: 0.3,
    y: useTransform(scrollYProgress, [0, 1], ['-50%', '-16%'])
  }

  const landAnimation: MotionStyle = {
    y: useTransform(scrollYProgress, [0, 0.75], ['120%', '0%']),
    scale: useTransform(scrollYProgress, [0.7, 1], [1, 1.2])
  }

  const sophieAnimation: MotionStyle = {
    y: useTransform(scrollYProgress, [0, 0.75], ['100%', '0%']),
    scale: useTransform(scrollYProgress, [0.7, 1], [1, 1.5]),
    transformOrigin: useTransform(
      scrollYProgress,
      [0.75, 1],
      ['bottom', 'center']
    )
  }

  return (
    <motion.section
      ref={ref}
      style={sectionAnimation}
      className="relative left-[calc(-50vw+50%)] h-[300svh] w-svw"
    >
      <div className="h-96 w-full bg-gradient-to-b from-transparent to-[#06344E]" />
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <div
          data-testid="home-end-sky"
          className="absolute h-full w-full bg-gradient-to-b from-[#06344E] to-[#0F4E6B]"
        />
        <div
          data-testid="home-end-comet"
          className="absolute flex h-full w-full items-center justify-center"
        >
          <motion.div
            style={cometAnimation}
            className="h-[1812px] w-[318px] overflow-clip"
          >
            <Image
              src="/assets/images/sophie/comet.png"
              alt="comet"
              height={1812}
              width={956}
              className="min-h-[1812px] min-w-[956px] animate-comet object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          data-testid="home-end-land"
          style={landAnimation}
          className="absolute bottom-0 origin-bottom scale-150 md:scale-100"
        >
          <Image
            src="/assets/images/sophie/land.png"
            alt="land"
            width={1920}
            height={1080}
            draggable={false}
          />
        </motion.div>
        <motion.div
          data-testid="home-end-sophie"
          style={sophieAnimation}
          className="absolute bottom-0 origin-bottom scale-150 md:scale-100"
        >
          <Image
            src="/assets/images/sophie/sophie.png"
            alt="sophie"
            width={1920}
            height={1080}
            draggable={false}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomeEnd
