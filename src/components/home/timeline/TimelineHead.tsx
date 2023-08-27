import useSmooth from '@/hooks/useSmooth'
import { motion, type MotionStyle, type MotionValue } from 'framer-motion'
import { useState } from 'react'

interface Props extends AnimationProps {
  scrollYProgress: MotionValue<number>
  children: string
}

const TimelineHead = ({
  children,
  scrollYProgress,
  ...props
}: Props): JSX.Element => {
  const [isInView, setIsInView] = useState(false)

  const { start, center, end } = props

  scrollYProgress.on('change', (v) => {
    setIsInView(v >= start && v <= end + 0.1)
  })

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

  return (
    <motion.div
      style={{
        display: !isInView ? 'none' : 'flex',
        perspective: '20rem'
      }}
      className="p-6"
    >
      <motion.h2
        data-testid="timeline-title"
        style={titleAnimation}
        className="bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-4xl font-semibold text-transparent"
      >
        {`[ ...${children} ]`}
      </motion.h2>
    </motion.div>
  )
}
export default TimelineHead
