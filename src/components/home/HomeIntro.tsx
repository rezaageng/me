import { type HomeResponse } from '@/@types/home'
import { transition } from '@/constants/framer-motion'
import useSmooth from '@/hooks/useSmooth'
import {
  useScroll,
  type AnimationProps,
  type MotionStyle,
  motion,
  useInView
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import Terminal from '../terminal/Terminal'
import { useKawaiiStore } from '@/stores/kawaii-store'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

const HomeIntro = ({ data }: { data: HomeResponse['data'] }): JSX.Element => {
  // * hooks
  const [kawaii, setKawaii] = useKawaiiStore((state) => [
    state.kawaii,
    state.setKawaii
  ])

  const isKawaii = useSearchParams().get('kawaii')

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '1']
  })

  // * animation variables
  const initial: AnimationProps['initial'] = { y: 100, opacity: 0 }
  const animate: AnimationProps['animate'] = { y: 0, opacity: 1 }

  // * scroll animation

  const text: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 0.2], [1, 0])
  }

  const terminal: MotionStyle = {
    rotateX: useSmooth(scrollYProgress, [0, 0.2], [3, 0]),
    scale: useSmooth(scrollYProgress, [0, 0.2], [0.8, 1])
  }

  // * lifecycle
  useEffect(() => {
    if (isKawaii !== 'true' && isKawaii !== 'false') return

    setKawaii(isKawaii === 'true')
  }, [isKawaii, setKawaii])

  return (
    <section
      ref={ref}
      className="relative  min-h-svh max-w-5xl"
      data-testid="home-intro"
    >
      <div className="flex flex-col justify-center px-6 py-4">
        <div className="flex h-[50svh] flex-col items-center justify-center lg:h-[56svh]">
          <motion.div
            style={{
              display: isInView ? 'flex' : 'none',
              ...text
            }}
            className="fixed flex flex-col justify-center gap-2 px-6 py-4 sm:max-w-md lg:max-w-2xl"
          >
            {kawaii ? (
              <motion.div
                initial={{ ...initial, scale: 0 }}
                animate={{ ...animate, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-8"
              >
                <Image
                  src="/assets/images/rezaa-kawaii.png"
                  alt="kawaii logo"
                  priority
                  width={4057}
                  height={2159}
                />
              </motion.div>
            ) : (
              <>
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
              </>
            )}
          </motion.div>
        </div>
        <div style={{ perspective: '20rem' }}>
          <Terminal style={terminal} className="z-10 object-bottom" />
        </div>
      </div>
    </section>
  )
}

export default HomeIntro
