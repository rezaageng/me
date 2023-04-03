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
import { useEffect, useMemo, useRef, useState } from 'react'
import useSmooth from '@/hooks/useSmooth'

const HomeMain = ({ data }: HomeResponse): JSX.Element => {
  // * hooks
  const [isAnimate, setIsAnimate] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const titleControl = useAnimationControls()
  const subtitleControl = useAnimationControls()
  const descriptionControl = useAnimationControls()
  const buttonControl = useAnimationControls()

  const { transition } = useFramerStore((state) => state)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['100vh', '0vh']
  })

  // * animation
  const initial: AnimationProps['initial'] = useMemo(() => {
    return { y: 100, opacity: 0 }
  }, [])
  const animate: AnimationProps['animate'] = useMemo(() => {
    return { y: 0, opacity: 1 }
  }, [])

  const mc: MotionStyle = {
    scale: useSmooth(scrollYProgress, [0, 1], [0.9, 1]),
    filter: useTransform(
      scrollYProgress,
      [0, 0.2, 0.4, 1],
      [
        'brightness(0) opacity(0)',
        'brightness(0)',
        'brightness(0.2)',
        'brightness(1)'
      ]
    ),
    opacity: useSmooth(scrollYProgress, [0, 0.1], [0, 1])
  }

  scrollYProgress.on('change', (progress) => {
    if (progress <= 0.2) {
      setIsAnimate(true)
    } else {
      setIsAnimate(false)
    }
  })
  useEffect(() => {
    if (isAnimate) {
      void titleControl.start({
        ...initial,
        transition: { ...transition, delay: 0.4 }
      })
      void subtitleControl.start({
        ...initial,
        transition: { ...transition, delay: 0.3 }
      })
      void descriptionControl.start({
        ...initial,
        transition: { ...transition, delay: 0.2 }
      })
      void buttonControl.start({
        ...initial,
        transition: { ...transition, delay: 0 }
      })
    } else {
      void titleControl.start({
        ...animate,
        transition: { ...transition, delay: 0.2 }
      })
      void subtitleControl.start({
        ...animate,
        transition: { ...transition, delay: 0.4 }
      })
      void descriptionControl.start({
        ...animate,
        transition: { ...transition, delay: 0.6 }
      })
      void buttonControl.start({
        ...animate,
        transition: { ...transition, delay: 0.8 }
      })
    }
  }, [
    animate,
    buttonControl,
    descriptionControl,
    initial,
    isAnimate,
    subtitleControl,
    titleControl,
    transition
  ])

  return (
    <div ref={ref} className="min-h-[100dvh] ">
      <div className="fixed w-full">
        <div
          data-testid="home-main"
          className="relative flex min-h-[100dvh] max-w-7xl flex-col justify-center px-8 py-4 lg:static lg:min-h-screen lg:flex-row lg:items-center lg:justify-between"
        >
          <motion.div
            initial={{
              scale: 0.9,
              filter: 'brightness(0) opacity(0)',
              opacity: 1
            }}
            animate={{
              scale: 1,
              filter: [
                'brightness(0) opacity(0)',
                'brightness(0)',
                'brightness(0.2)',
                'brightness(1)'
              ]
            }}
            transition={{
              duration: 1
            }}
            style={mc}
            className="flex justify-center sm:justify-start"
          >
            <Image
              data-testid="main-character"
              src="/assets/images/mc.png"
              width={512}
              height={748}
              alt="rezaa"
              priority
            />
          </motion.div>
          <div className="absolute bottom-4 flex flex-col pr-8 lg:static lg:pr-0">
            <div className="h-48 w-full bg-gradient-to-t from-primary lg:hidden" />
            <div className="flex flex-col gap-4 bg-primary">
              <motion.h1
                initial={initial}
                animate={titleControl}
                data-testid="title"
                className="w-auto text-4xl font-bold lg:text-5xl"
              >
                {data?.attributes.title}
              </motion.h1>
              <motion.h2
                initial={initial}
                animate={subtitleControl}
                data-testid="subtitle"
                className="text-2xl font-bold opacity-75"
              >
                {data?.attributes.subtitle}
              </motion.h2>
              <motion.p
                initial={initial}
                animate={descriptionControl}
                data-testid="description"
                className="lg:max-w-sm"
              >
                {data?.attributes.description}
              </motion.p>
              <motion.button
                initial={initial}
                animate={buttonControl}
                className="self-start rounded-full bg-accent-1 px-8 py-2 text-2xl"
              >
                Start
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeMain
