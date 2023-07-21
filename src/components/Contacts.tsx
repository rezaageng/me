'use client'

import { type Social, type ContactsProps } from '@/@types'
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
import { v4 as uuidv4 } from 'uuid'
import { transition } from '@/constants/framer-motion'

const Contacts = ({
  className,
  iconSize = 16,
  animate = false
}: ContactsProps): JSX.Element => {
  const hoverAnimation: TargetAndTransition | VariantLabels = {
    y: [0, -10],
    scale: [1, 1.5],
    marginTop: [0, 16],
    color: ['#fff', '#259D97'],
    transition
  }

  const socials: Social[] = [
    {
      icon: <FiGithub data-testid="contact-icon" size={iconSize} />,
      link: 'https://github.com/rezaageng'
    },
    {
      icon: <FiTwitter data-testid="contact-icon" size={iconSize} />,
      link: 'https://twitter.com/rezaageng_'
    },
    {
      icon: <FiInstagram data-testid="contact-icon" size={iconSize} />,
      link: 'https://www.instagram.com/rezaageng_/'
    },
    {
      icon: <FiLinkedin data-testid="contact-icon" size={iconSize} />,
      link: 'https://www.linkedin.com/in/rezaageng/'
    },
    {
      icon: <FiMail data-testid="contact-icon" size={iconSize} />,
      link: 'mailto:waiting@gmail.com'
    }
  ]

  return (
    <motion.ul className={className}>
      {socials.map(({ icon, link }, index) => (
        <motion.li
          key={uuidv4()}
          whileHover={animate ? hoverAnimation : undefined}
        >
          <a href={link} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default Contacts
