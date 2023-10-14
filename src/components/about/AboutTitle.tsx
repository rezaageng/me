'use client'

import { type HomeResponse } from '@/@types/home'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import Contacts from '../contact/Contacts'
import { transition } from '@/constants/framer-motion'

interface Props {
  data: HomeResponse['data']
  link: Link['data']
}

const AboutTitle = ({ data, link }: Props): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const arrowControl = useAnimationControls()

  // * animations
  useEffect(() => {
    if (isHover) {
      void arrowControl.start({
        x: 4,
        y: -4
      })
    } else {
      void arrowControl.start({
        x: 0,
        y: 0
      })
    }

    return () => {
      arrowControl.stop()
    }
  }, [arrowControl, isHover])

  return (
    <div className="sticky top-[120px]">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={transition}
        className="mb-4 text-5xl font-semibold text-white"
      >
        Reza Ageng Trihandoko
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ ...transition, delay: 0.1 }}
        className="text-gray-300/75"
      >
        {data?.attributes.subtitle}
      </motion.p>
      <motion.a
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ ...transition, delay: 0.2 }}
        href={link.attributes.resume}
        target="_blank"
        className="inline-flex items-center gap-1 text-accent-1 hover:animate-pulse"
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false)
        }}
      >
        View Résumé
        <motion.div animate={arrowControl}>
          <PiArrowUpRightBold />
        </motion.div>
      </motion.a>
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ ...transition, delay: 0.3 }}
      >
        <Contacts
          className="mt-4 flex gap-2"
          iconSize={20}
          link={{
            email: link.attributes.email,
            gitHub: link.attributes.gitHub,
            instagram: link.attributes.instagram,
            linkedIn: link.attributes.linkedIn,
            twitter: link.attributes.twitter
          }}
        />
      </motion.div>
    </div>
  )
}
export default AboutTitle
