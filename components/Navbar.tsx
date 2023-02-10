'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useAnimationControls, useScroll } from 'framer-motion'
import NavbarUnderline from './NavbarUnderline'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useScrollBlock } from '@/hooks/useScrollBlock'

const Navbar = (): JSX.Element => {
  // * states
  const [isInitial, setIsInitial] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isSm, setIsSm] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)

  // * hooks
  const [blockScroll, allowScroll] = useScrollBlock()
  const smallScreen = useMediaQuery({ query: '(min-width: 640px)' })
  const pathName = usePathname()

  // * animation controls
  const navControl = useAnimationControls()
  const menuControl = useAnimationControls()

  // * scrollYProgress
  const { scrollYProgress } = useScroll()

  //  * navabar animation on scroll
  useEffect(() => {
    scrollYProgress.on('change', (progress) => {
      if (progress > previousScrollPosition + 0.1) {
        setIsVisible(false)
        setPreviousScrollPosition(scrollYProgress.get())
      } else if (progress < previousScrollPosition - 0.1) {
        setIsVisible(true)
        setPreviousScrollPosition(scrollYProgress.get())
      }
    })
  }, [previousScrollPosition, scrollYProgress])

  useEffect(() => {
    if (isVisible) {
      void navControl.start({
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 50,
          restDelta: 0.001
        }
      })
    } else {
      void navControl.start({
        y: -100,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 100,
          restDelta: 0.001
        }
      })
    }
  }, [isVisible, navControl])

  // * nav menu animation on mobile
  useEffect(() => {
    if (isOpen && !isSm) {
      void menuControl.start({
        x: [650, 0],
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 50,
          restDelta: 0.001
        }
      })
    }
    if (!isOpen && !isSm) {
      void menuControl.start({
        x: [0, 650],
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 100,
          restDelta: 0.001
        }
      })
    }
    if (isSm) {
      void menuControl.start({
        x: 0
      })
    }
  }, [isOpen, isSm, menuControl])

  // * prevent navbar from animating on initial load
  useEffect(() => {
    setIsSm(smallScreen)
    if (smallScreen) {
      setIsInitial(false)
    }
  }, [smallScreen])

  // * block scroll when nav menu is open
  useEffect(() => {
    if (isOpen) {
      blockScroll()
    } else {
      allowScroll()
    }
  }, [allowScroll, blockScroll, isOpen])

  return (
    <motion.nav
      animate={navControl}
      className="fixed top-0 left-0 flex w-full justify-between bg-primary p-4"
    >
      <div className="z-10 flex w-full justify-between text-accent-1 sm:block sm:w-auto sm:justify-start">
        <h1>rezaa</h1>
        {!isSm ? (
          <button
            onClick={() => {
              setIsOpen((state) => !state)
              setIsInitial(false)
            }}
          >
            menu
          </button>
        ) : null}
      </div>
      {!isInitial ? (
        <motion.ul
          animate={menuControl}
          className="fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-5 bg-secondary-800 text-2xl font-bold sm:static sm:h-auto sm:w-auto sm:flex-row sm:bg-transparent sm:text-base sm:font-normal"
        >
          <li className="relative">
            {pathName === '/' ? <NavbarUnderline /> : null}
            <Link
              className={`${
                pathName === '/' ? 'text-accent-1' : ''
              } after:contents hover:animate-pulse`}
              href="/"
            >
              Home
            </Link>
          </li>
          <motion.li className="relative">
            {pathName === '/projects' ? <NavbarUnderline /> : null}
            <Link
              className={`${
                pathName === '/projects' ? 'text-accent-1' : ''
              } hover:animate-pulse`}
              href="/projects"
            >
              Projects
            </Link>
          </motion.li>
          <motion.li className="relative">
            {pathName === '/another-side' ? <NavbarUnderline /> : null}
            <Link
              className={`${
                pathName === '/another-side' ? 'text-accent-1' : ''
              } hover:animate-pulse`}
              href="/another-side"
            >
              Another Side
            </Link>
          </motion.li>
          <li className="relative">
            {pathName === '/about' ? <NavbarUnderline /> : null}
            <Link
              className={`${
                pathName === '/about' ? 'text-accent-1' : ''
              } hover:animate-pulse`}
              href="/about"
            >
              About
            </Link>
          </li>
        </motion.ul>
      ) : null}
    </motion.nav>
  )
}

export default Navbar
