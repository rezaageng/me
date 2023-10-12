'use client'

import { type Social } from '@/@types'
import { transition } from '@/constants/framer-motion'
import {
  type TargetAndTransition,
  type VariantLabels,
  motion
} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  social: Social
  animate?: boolean
}

const ContactItem = ({ social, animate = false }: Props): JSX.Element => {
  const hoverAnimation: TargetAndTransition | VariantLabels = {
    y: [0, -10],
    scale: [1, 1.5],
    marginTop: [0, 16],
    color: ['#fff', '#259D97'],
    transition
  }

  return (
    <motion.li key={uuidv4()} whileHover={animate ? hoverAnimation : undefined}>
      <a href={social.link} target="_blank" rel="noreferrer">
        {social.icon}
      </a>
    </motion.li>
  )
}
export default ContactItem
