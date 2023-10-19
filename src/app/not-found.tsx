'use client'

import Link from 'next/link'
import { PiArrowRight } from 'react-icons/pi'
import { motion, useAnimation } from 'framer-motion'
import Lottie from 'lottie-react'
import kiki from '@/lottie/kiki.json'
import { useEffect, useState } from 'react'
import { transition } from '@/constants/framer-motion'

const NotFound = (): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const arrowControl = useAnimation()

  // * animation
  useEffect(() => {
    if (isHover) {
      void arrowControl.start({
        x: 4
      })
    }
    if (!isHover) {
      void arrowControl.start({
        x: 0
      })
    }

    return () => {
      arrowControl.stop()
    }
  }, [arrowControl, isHover])

  return (
    <section className="flex min-h-[100svh] flex-col items-center p-6">
      <div className="fixed left-0 top-0 -z-10 h-[100svh] w-full bg-gradient-to-b from-[#06344E] to-[#0F4E6B]" />
      <motion.div
        initial={{ opacity: 0, x: '200%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
      >
        <Lottie animationData={kiki} loop />
      </motion.div>
      <div className="z-10 -mt-20 flex flex-col items-center gap-2 lg:-mt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="text-center text-3xl font-semibold lg:text-5xl"
        >
          Nothing
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xl text-accent-1 hover:animate-pulse"
            onMouseEnter={() => {
              setIsHover(true)
            }}
            onMouseLeave={() => {
              setIsHover(false)
            }}
          >
            <span>return home</span>
            <motion.div animate={arrowControl}>
              <PiArrowRight />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
export default NotFound
