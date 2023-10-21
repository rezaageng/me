'use client'

import { transition } from '@/constants/framer-motion'
import { motion } from 'framer-motion'

interface Props {
  data: string
}

const AboutSummary = ({ data }: Props): JSX.Element => {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={transition}
    >
      {data}
    </motion.p>
  )
}
export default AboutSummary
