'use client'

import {
  type AnimationProps,
  motion,
  useScroll,
  type MotionStyle,
  useSpring,
  useTransform
} from 'framer-motion'
import useFramerStore from '@/stores/framerStore'
import { useRef, useState } from 'react'
import useSmooth from '@/hooks/useSmooth'
import Terminal from './terminal/Terminal'
import { type HomeResponse } from '@/@types/home'
import CirclesBg from './background/CirclesBg'

const HomeMain = ({ data }: HomeResponse): JSX.Element => {
  // * hooks
  const [isActive, setIsActive] = useState<boolean>(true)

  const ref = useRef<HTMLDivElement>(null)

  const { transition } = useFramerStore((state) => state)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '1']
  })

  // * check is section active
  scrollYProgress.on('change', (value) => {
    if (value >= 0 && value < 1) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  // * animation variables
  const initial: AnimationProps['initial'] = { y: 100, opacity: 0 }
  const animate: AnimationProps['animate'] = { y: 0, opacity: 1 }

  // * scroll animation
  const value = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const text: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 0.2], [1, 0])
  }

  const background: MotionStyle = {
    opacity: useTransform(value, [0, 0.8], [1, 0])
  }

  const terminal: MotionStyle = {
    rotateX: useSmooth(scrollYProgress, [0, 0.2], [3, 0]),
    scale: useSmooth(scrollYProgress, [0, 0.2], [0.8, 1])
  }

  return (
    <section
      ref={ref}
      className="relative  min-h-[100dvh] max-w-5xl"
      data-testid="home-main"
    >
      <CirclesBg
        style={{
          display: isActive ? 'flex' : 'none',
          ...background
        }}
        isActive={isActive}
        className="fixed left-0 -z-10 flex h-full w-full scale-100 flex-col items-center justify-center lg:scale-125"
      />
      <div className="flex flex-col justify-center px-6 py-4">
        <div className="flex h-[50dvh] flex-col items-center justify-center lg:h-[64dvh]">
          <motion.div
            style={{
              display: isActive ? 'flex' : 'none',
              ...text
            }}
            className="fixed flex flex-col justify-center gap-2 px-6 py-4 sm:max-w-md lg:max-w-2xl"
          >
            <motion.h1
              initial={initial}
              animate={animate}
              transition={transition}
              data-testid="home-title"
              className="w-auto text-6xl font-bold lg:text-9xl"
            >
              {data?.attributes.title}
            </motion.h1>
            <motion.h2
              initial={initial}
              animate={animate}
              transition={{ ...transition, delay: 0.2 }}
              data-testid="home-subtitle"
              className="font-light text-white/75 lg:text-2xl"
            >
              {data?.attributes.subtitle}
            </motion.h2>
          </motion.div>
        </div>
        <div style={{ perspective: '20em' }}>
          <Terminal style={terminal} className="z-10 object-bottom" />
        </div>
      </div>
    </section>
  )
}
export default HomeMain
