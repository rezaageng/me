'use client'

import Counter from '@/components/Counter'
import useSmooth from '@/hooks/useSmooth'
import { format, parseISO } from 'date-fns'
import { motion, type MotionStyle, useScroll } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  data: WakaAllTime['data']
  className?: string
}

const HomeWakaAll = ({ className = '', data }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  const wrapperScroll: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0.7, 1], [0, 1])
  }

  // * var(s)
  const codingTime = data.total_seconds / 3600 //* convert to hours

  return (
    <motion.div
      style={wrapperScroll}
      ref={ref}
      data-testid="bento-waka-all"
      className={`${className} relative w-full overflow-hidden rounded-3xl`}
    >
      <div className="absolute h-full w-full rounded-3xl border border-white bg-primary bg-opacity-50 p-8 backdrop-blur-lg backdrop-filter" />
      <div className="flex h-full flex-col items-center justify-center p-6">
        <div
          data-testid="coding-time"
          className="z-10 bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text"
        >
          <Counter
            viewMargin="-200px"
            from={codingTime - 100}
            to={codingTime}
            className="text-7xl font-bold text-transparent lg:text-8xl"
          />
          <span className="text-2xl font-bold text-transparent sm:text-xl md:text-2xl">
            Hrs
          </span>
        </div>
        <p data-testid="start-date" className="z-10 w-40 text-center">
          Coding Time Since {format(parseISO(data.range.start), 'MMMM d, yyyy')}
        </p>
      </div>
    </motion.div>
  )
}
export default HomeWakaAll
