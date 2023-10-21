'use client'

import { motion } from 'framer-motion'

interface Props {
  id: string
  from: string
  to: string
}

const SvgGradientMotion = ({ id, from, to }: Props): JSX.Element => {
  return (
    <svg data-testid="svg-gradient" width="0" height="0">
      <motion.linearGradient
        id={id}
        gradientTransform="rotate(180 0.5 0.5)"
        animate={{
          gradientTransform: ['rotate(0 0.5 0.5)', 'rotate(180 0.5 0.5)'],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse'
          }
        }}
      >
        <stop stopColor={from} offset="0%" />
        <stop stopColor={to} offset="100%" />
      </motion.linearGradient>
    </svg>
  )
}
export default SvgGradientMotion
