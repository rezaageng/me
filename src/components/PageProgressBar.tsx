'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

const PageProgressBar = (): JSX.Element => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      data-testid="page-progress-bar"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-20 h-1 origin-left bg-gradient-to-r from-accent-3 to-accent-1"
    />
  )
}
export default PageProgressBar
