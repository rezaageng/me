import { type HomeResponse } from '@/@types'
import Image from 'next/image'
import { type AnimationProps, motion } from 'framer-motion'
import useFramerStore from '@/store/framerStore'

const HomeMain = ({ data }: HomeResponse): JSX.Element => {
  const initial: AnimationProps['initial'] = { y: 100, opacity: 0 }
  const animate: AnimationProps['animate'] = { y: 0, opacity: 1 }
  const { transition } = useFramerStore((state) => state)

  return (
    <div
      data-testid="home-main"
      className="relative m-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-8 py-4 lg:static lg:min-h-screen lg:flex-row lg:items-center lg:justify-evenly"
    >
      <Image
        className="self-center"
        data-testid="main-character"
        src="/assets/images/mc.png"
        width={512}
        height={748}
        alt="rezaa"
      />
      <div className="absolute bottom-4 flex flex-col pr-8 lg:static lg:pr-0">
        <div className="h-48 w-full bg-gradient-to-t from-primary lg:hidden" />
        <div className="flex flex-col gap-4 bg-primary">
          <motion.h1
            initial={initial}
            animate={animate}
            transition={transition}
            data-testid="title"
            className="w-auto text-4xl font-bold lg:text-5xl"
          >
            {data?.attributes.title}
          </motion.h1>
          <motion.h2
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: 0.2 }}
            data-testid="subtitle"
            className="text-2xl font-bold opacity-75"
          >
            {data?.attributes.subtitle}
          </motion.h2>
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: 0.4 }}
            data-testid="description"
            className="lg:max-w-sm"
          >
            {data?.attributes.description}
          </motion.p>
          <motion.button
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: 0.6 }}
            className="self-start rounded-full bg-accent-1 px-8 py-2 text-2xl"
          >
            Start
          </motion.button>
        </div>
      </div>
    </div>
  )
}
export default HomeMain
