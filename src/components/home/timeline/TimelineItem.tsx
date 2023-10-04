import useSmooth from '@/hooks/useSmooth'
import { type MotionValue, motion, type MotionStyle } from 'framer-motion'
import { useState } from 'react'

interface Animation extends AnimationProps {
  scrollYProgress: MotionValue<number>
}

interface Props {
  data: {
    title: string
    date: string
    subtitle: string
    location?: string | null
    description: string
  }
  animation: Animation
}

const TimelineItem = ({ data, animation }: Props): JSX.Element => {
  const [isInView, setIsInView] = useState(false)

  const { start, center, end, scrollYProgress } = animation

  scrollYProgress.on('change', (v) => {
    setIsInView(v >= start && v <= end + 0.1)
  })

  const dateAnimation: MotionStyle = {
    y: useSmooth(scrollYProgress, [start, (start + center) / 2], [20, 0]),
    opacity: useSmooth(
      scrollYProgress,
      [start, (start + center) / 2, (center + end) / 2, end],
      [0, 1, 1, 0]
    )
  }

  const titleAnimation: MotionStyle = {
    y: useSmooth(scrollYProgress, [(start + center) / 2, center], [-20, 0]),
    rotateX: useSmooth(
      scrollYProgress,
      [(start + center) / 2, center],
      [20, 0]
    ),
    opacity: useSmooth(
      scrollYProgress,
      [(start + center) / 2, center, (center + end) / 2, end],
      [0, 1, 1, 0]
    )
  }

  const subtitleAnimation: MotionStyle = {
    y: useSmooth(scrollYProgress, [(start + center) / 2, center], [20, 0]),
    rotateX: useSmooth(
      scrollYProgress,
      [(start + center) / 2, center],
      [-20, 0]
    ),
    opacity: useSmooth(
      scrollYProgress,
      [(start + center) / 2, center, (center + end) / 2, end],
      [0, 1, 1, 0]
    )
  }

  const descriptionAnimation: MotionStyle = {
    opacity: useSmooth(
      scrollYProgress,
      [center, (center + end) / 2, end],
      [0, 1, 0]
    )
  }

  return (
    <motion.div
      data-testid="timeline-item"
      style={{
        display: !isInView ? 'none' : 'flex',
        perspective: '20rem'
      }}
      className="absolute flex-col gap-2 p-6"
    >
      <motion.span
        data-testid="timeline-item-date"
        style={dateAnimation}
        className="text-white/75"
      >
        {data.date}
      </motion.span>
      <motion.h3
        data-testid="timeline-item-title"
        style={titleAnimation}
        className="text-4xl font-semibold"
      >
        {data.title}
      </motion.h3>
      <motion.div style={subtitleAnimation} className="flex flex-col">
        <span data-testid="timeline-item-subtitle" className="text-xl">
          {data.subtitle}
        </span>
        <span data-testid="timeline-item-location" className="text-lg">
          {data.location}
        </span>
      </motion.div>
      <motion.p
        data-testid="timeline-item-description"
        style={descriptionAnimation}
        className="text-lg text-white/75"
      >
        {data.description}
      </motion.p>
    </motion.div>
  )
}
export default TimelineItem
