'use client'

import {
  motion,
  type Transition,
  useAnimationControls,
  useScroll
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import { v4 as uuidv4 } from 'uuid'
import NavbarList from './NavbarList'
import { usePathname } from 'next/navigation'
import { IoMenu } from 'react-icons/io5'
import NavbarInformation from './NavbarInformation'

const Navbar = (): JSX.Element => {
  // * states
  const [isInitial, setIsInitial] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isSm, setIsSm] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  // * hooks
  const [blockScroll, allowScroll] = useScrollBlock()
  const smallScreen = useMediaQuery({ query: '(min-width: 640px)' })
  const pathName = usePathname()

  // * animation controls
  const navControl = useAnimationControls()
  const menuControl = useAnimationControls()

  // * scrollYProgress
  const { scrollYProgress } = useScroll()

  // * set window width
  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
      })
    }
  }, [])

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
    const transition: Transition = {
      type: 'spring',
      stiffness: 300,
      damping: 50,
      restDelta: 0.001
    }

    if (isVisible) {
      void navControl.start({
        y: 0,
        transition
      })
    } else {
      void navControl.start({
        y: -64,
        transition
      })
    }
  }, [isVisible, navControl])

  // * nav menu animation on mobile
  useEffect(() => {
    if (isOpen && !isSm) {
      void menuControl.start({
        x: [windowWidth, 0],
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
        x: [0, windowWidth],
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 50,
          restDelta: 0.001
        }
      })
    }
    if (isSm) {
      void menuControl.start({
        x: 0
      })
    }
  }, [isOpen, isSm, menuControl, windowWidth])

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

  // * navbar data
  const navData: NavbarListData[] = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Projects',
      route: '/projects'
    },
    {
      name: 'Another Side',
      route: '/another-side'
    },
    {
      name: 'About',
      route: '/about'
    }
  ]

  return (
    <motion.nav
      animate={navControl}
      className="fixed top-0 left-0 flex w-full justify-between bg-primary p-4"
    >
      <div className="z-10 flex w-full justify-between text-xl text-accent-1 sm:block sm:w-auto sm:justify-start">
        <h1>rezaa</h1>
        {!isSm ? (
          <button
            onClick={() => {
              setIsOpen((state) => !state)
              setIsInitial(false)
            }}
          >
            <IoMenu size={32} />
          </button>
        ) : null}
      </div>
      <motion.div
        animate={menuControl}
        className={`fixed top-0 left-0 flex h-screen w-full flex-col bg-secondary-800 p-12 sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:p-0 ${
          isInitial ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <ul
          data-testid="navbar-list"
          className="flex flex-1 flex-col items-center justify-center gap-5  text-2xl  font-bold  sm:flex-row sm:text-base sm:font-normal"
        >
          {navData.map(({ name, route }) => (
            <NavbarList
              key={uuidv4()}
              name={name}
              route={route}
              pathName={pathName}
              onClick={() => {
                setIsOpen(false)
              }}
            />
          ))}
        </ul>
        {!isSm ? <NavbarInformation /> : null}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
