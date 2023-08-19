'use client'

import languageColors from '@/constants/language-colors.json'
import ordinal from '@/helpers/ordinal'
import timeConvert from '@/helpers/time-convert'
import { useRef, useState } from 'react'
import { SiWakatime } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid'
import {
  AnimatePresence,
  type AnimationProps,
  motion,
  type MotionStyle,
  useScroll
} from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'

interface Props {
  className?: string
  data: WakaWeek
}

const HomeWakaWeek = ({ className = '', data }: Props): JSX.Element => {
  // * hooks
  const [isLang, setIsLang] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  // * animations
  const initial: AnimationProps['initial'] = { opacity: 0 }
  const animate: AnimationProps['animate'] = {
    opacity: 1,
    transition: {
      ease: 'easeInOut'
    }
  }
  const exit: AnimationProps['exit'] = {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.2
    }
  }

  const wrapperScroll: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 0.8], [0, 1])
  }

  return (
    <motion.div
      ref={ref}
      style={wrapperScroll}
      data-testid="bento-leet"
      className={`${className} relative w-full overflow-hidden rounded-3xl`}
    >
      <div className="absolute h-full w-full rounded-3xl border border-white bg-primary bg-opacity-50 p-8 backdrop-blur-lg backdrop-filter" />
      <div className="relative flex h-full flex-col justify-between gap-4 px-8 py-8 md:py-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-4xl font-semibold text-transparent  sm:text-3xl md:text-4xl">
              WakaTime
            </h2>
            <div>
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  setIsLang((state) => !state)
                }}
                whileTap={{ scale: 0.7 }}
                className="aspect-square rounded border border-white border-opacity-20 p-2"
              >
                <SiWakatime />
              </motion.button>
            </div>
          </div>

          <span className="text-white/75">Last week stats </span>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {!isLang ? (
            <motion.ul
              initial={initial}
              animate={animate}
              exit={exit}
              key="waka-stats-11"
              className="grid grid-cols-2 gap-4"
            >
              <li data-testid="world-rank">
                <div className="flex font-semibold">
                  <span className="text-3xl">{data.worldRank}</span>
                  <span className="text-lg">{ordinal(data.worldRank)}</span>
                </div>
                <span className="line-clamp-1 text-white/75">World Rank</span>
              </li>
              <li data-testid="country-rank">
                <div className="flex font-semibold">
                  <span className="text-3xl">{data.countryRank}</span>
                  <span className="text-lg">{ordinal(data.countryRank)}</span>
                </div>
                <span className="line-clamp-1 text-white/75">
                  {process.env.NEXT_PUBLIC_WAKA_COUNTRY ?? 'Country'} Rank
                </span>
              </li>
              <li data-testid="hours-coded">
                <div className="flex items-baseline font-semibold">
                  <span className="text-3xl">
                    {timeConvert(data.totalSeconds, 'hours')}
                  </span>
                  <span className="text-lg">H&nbsp;</span>
                  <span className="text-3xl">
                    {timeConvert(data.totalSeconds, 'minutes')}
                  </span>
                  <span className="text-lg">M</span>
                </div>
                <span className="line-clamp-1 text-white/75">Coding Time</span>
              </li>
              <li data-testid="daily-average">
                <div className="flex items-baseline font-semibold">
                  <span className="text-3xl">
                    {timeConvert(data.dailyAverage, 'hours')}
                  </span>
                  <span className="text-lg">H&nbsp;</span>
                  <span className="text-3xl">
                    {timeConvert(data.dailyAverage, 'minutes')}
                  </span>
                  <span className="text-lg">M</span>
                </div>
                <span className="line-clamp-1 text-white/75">
                  Daily Average
                </span>
              </li>
            </motion.ul>
          ) : (
            <motion.ul
              data-testid="lang-list"
              initial={initial}
              animate={animate}
              exit={exit}
              key="waka-langs-30"
              className="flex flex-col overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary-400"
            >
              {data.languages.map((lang) => (
                <li
                  data-testid="lang"
                  key={uuidv4()}
                  className="flex items-center gap-2 border-t border-white border-opacity-20 pr-2 leading-10"
                >
                  <div
                    style={{
                      backgroundColor:
                        languageColors[
                          lang.name as keyof typeof languageColors
                        ] ?? '#676767'
                    }}
                    className="h-4 w-4 rounded-full"
                  />
                  <div className="flex w-full justify-between">
                    <span>{lang.name}</span>
                    <span className="text-white/75">{lang.total}</span>
                  </div>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default HomeWakaWeek
