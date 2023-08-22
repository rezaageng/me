'use client'

import {
  motion,
  type Transition,
  useAnimationControls,
  type MotionStyle
} from 'framer-motion'
import { useEffect } from 'react'

interface CirclesBgProps {
  className?: string
  isActive?: boolean
  style?: MotionStyle
}

const CirclesBg = ({
  className = '',
  isActive = true,
  style
}: CirclesBgProps): JSX.Element => {
  const controller1 = useAnimationControls()
  const controller2 = useAnimationControls()
  const controller3 = useAnimationControls()

  useEffect(() => {
    const transition: Transition = {
      repeat: Infinity,
      duration: 8
    }

    if (isActive) {
      void controller1.start({
        x: [0, -100, -150, 0],
        y: [-100, -200, 0, -100],
        scale: [1, 1.2, 1.3, 1],
        transition
      })

      void controller2.start({
        x: [170, 170, 0, 170],
        y: [20, -200, -100, 20],
        scale: [1.2, 1, 1, 1.2],
        transition
      })

      void controller3.start({
        x: [150, 50, 0, 150],
        y: [-150, -50, -150, -150],
        scale: [1, 1.4, 1, 1],
        transition
      })
    } else {
      controller1.stop()
      controller2.stop()
      controller3.stop()
    }

    return () => {
      controller1.stop()
      controller2.stop()
      controller3.stop()
    }
  }, [controller1, controller2, controller3, isActive])

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      <motion.div
        data-testid="circle"
        animate={controller1}
        className="absolute h-64 w-52 rounded-full bg-accent-1 blur-3xl"
      />
      <motion.div
        data-testid="circle"
        animate={controller2}
        className="absolute h-64 w-52 rounded-full bg-accent-2 blur-3xl"
      />
      <motion.div
        data-testid="circle"
        animate={controller3}
        className="absolute h-64 w-52 rounded-full bg-accent-3 blur-3xl"
      />
    </motion.div>
  )
}
export default CirclesBg
