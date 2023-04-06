import { type HomeResponse } from '@/@types'
import Image from 'next/image'
import {
  type AnimationProps,
  motion,
  useScroll,
  type MotionStyle,
  useTransform,
  useAnimationControls
} from 'framer-motion'
import useFramerStore from '@/store/framerStore'
import { useEffect, useRef, useState } from 'react'
import useSmooth from '@/hooks/useSmooth'

const HomeMain = ({ data }: HomeResponse): JSX.Element => {
  // * hooks
  const [isActive, setIsActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const { transition } = useFramerStore((state) => state)
  const squareControl = useAnimationControls()
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
  const text: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 1], [1, 0])
  }

  const mcWrapper: MotionStyle = {
    y: useSmooth(scrollYProgress, [0, 0.1], [350, 0], {
      stiffness: 150,
      damping: 30,
      restDelta: 0.001
    }),
    opacity: useSmooth(scrollYProgress, [0.9, 1], [1, 0])
  }

  const mc: MotionStyle = {
    scale: useSmooth(scrollYProgress, [0.1, 1], [0.9, 1]),
    filter: useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.4, 0.6],
      [
        'brightness(0) opacity(0)',
        'brightness(0)',
        'brightness(0.2)',
        'brightness(1)'
      ]
    ),
    opacity: useSmooth(scrollYProgress, [0, 0.1], [0, 1])
  }

  // * idle animation
  useEffect(() => {
    if (isActive) {
      void squareControl.start({
        rotate: [0, 360, 0],
        transition: {
          repeat: Infinity,
          duration: 20,
          ease: 'backInOut'
        }
      })
    } else {
      squareControl.stop()
    }

    return () => {
      squareControl.stop()
    }
  }, [isActive, squareControl])

  return (
    <section
      ref={ref}
      className="min-h-[150dvh]  max-w-7xl"
      data-testid="home-main"
    >
      <div className="fixed w-full">
        <div className="flex flex-col justify-center px-6 py-4">
          <div className="flex h-[50dvh] flex-col  items-center justify-center">
            <motion.div
              style={text}
              className="flex flex-col justify-center gap-2 bg-primary sm:max-w-md"
            >
              <motion.h1
                initial={initial}
                animate={animate}
                transition={transition}
                data-testid="title"
                className="w-auto text-6xl font-bold"
              >
                {data?.attributes.title}
              </motion.h1>
              <motion.h2
                initial={initial}
                animate={animate}
                transition={{ ...transition, delay: 0.2 }}
                data-testid="subtitle"
                className="text-white/75"
              >
                {data?.attributes.subtitle}
              </motion.h2>
              {/* <motion.p
                initial={initial}
                animate={descriptionControl}
                data-testid="description"
                className="lg:max-w-sm"
              >
                {data?.attributes.description}
              </motion.p> */}
              {/* <motion.button
                initial={initial}
                animate={buttonControl}
                className="self-start rounded-full bg-accent-1 px-8 py-2 text-2xl"
              >
                Start
              </motion.button> */}
            </motion.div>
          </div>
          <div className="fixed top-0 left-0  h-[100dvh] w-full">
            <motion.div
              style={mcWrapper}
              className="relative flex h-full items-center justify-center"
            >
              <motion.div
                animate={squareControl}
                className="absolute aspect-square w-72 rounded-[3rem] bg-accent-1 sm:w-96 sm:rounded-[4rem]"
              />
              <motion.div style={mc} className="absolute w-96 sm:w-[28rem]">
                <Image
                  data-testid="main-character"
                  src="/assets/images/mc.png"
                  width={512}
                  height={748}
                  alt="rezaa"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeMain
