'use client'

import { type ContactsProps } from '@/@types'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter
} from 'react-icons/fi'
import {
  motion,
  type TargetAndTransition,
  type VariantLabels
} from 'framer-motion'
import useFramerStore from '@/store/framerStore'

const Contacts = ({
  className,
  iconSize,
  animate
}: ContactsProps): JSX.Element => {
  const { transition } = useFramerStore((state) => state)

  const hoverAnimation: TargetAndTransition | VariantLabels = {
    y: [0, -5],
    scale: [1, 1.2],
    color: ['#fff', '#259D97'],
    transition
  }

  return (
    <motion.ul className={className}>
      <motion.li whileHover={animate ? hoverAnimation : undefined}>
        <a href="https://github.com/rezaageng" target="_blank" rel="noreferrer">
          <FiGithub data-testid="contact-icon" size={iconSize} />
        </a>
      </motion.li>
      <motion.li whileHover={animate ? hoverAnimation : undefined}>
        <a
          href="https://twitter.com/rezaageng_"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter data-testid="contact-icon" size={iconSize} />
        </a>
      </motion.li>
      <motion.li whileHover={animate ? hoverAnimation : undefined}>
        <a
          href="https://www.instagram.com/rezaageng_/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram data-testid="contact-icon" size={iconSize} />
        </a>
      </motion.li>
      <motion.li whileHover={animate ? hoverAnimation : undefined}>
        <a
          href="https://www.linkedin.com/in/rezaageng/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin data-testid="contact-icon" size={iconSize} />
        </a>
      </motion.li>
      <motion.li whileHover={animate ? hoverAnimation : undefined}>
        <a href="mailto:waiting@gmail.com" target="_blank" rel="noreferrer">
          <FiMail data-testid="contact-icon" size={iconSize} />
        </a>
      </motion.li>
    </motion.ul>
  )
}

Contacts.defaultProps = {
  animate: false
}

export default Contacts
