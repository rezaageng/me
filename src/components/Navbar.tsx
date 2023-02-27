import { motion, useAnimationControls, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import { v4 as uuidv4 } from 'uuid'
import NavbarList from './NavbarList'
import { usePathname } from 'next/navigation'
import { IoMenu } from 'react-icons/io5'
import NavbarInformation from './NavbarInformation'
import { type NavbarListData } from '@/@types'
import useFramerStore from '@/store/framerStore'
import { useMediaQuery } from 'react-responsive'

const Navbar = (): JSX.Element => {
  // * states
  const [isInitial, setIsInitial] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const { transition } = useFramerStore((state) => state)
  const [isLg, setIsLg] = useState(false)

  // * hooks

  const [blockScroll, allowScroll] = useScrollBlock()
  const pathName = usePathname()
  const largeScreen = useMediaQuery({ query: '(min-width: 1024px)' })

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
  }, [isVisible, navControl, transition])

  // * nav menu animation on mobile
  useEffect(() => {
    if (isOpen && !isLg) {
      void menuControl.start({
        x: [windowWidth, 0],
        transition
      })
    }
    if (!isOpen && !isLg) {
      void menuControl.start({
        x: [0, windowWidth],
        transition
      })
    }
    if (isLg) {
      void menuControl.start({
        x: 0
      })
    }
  }, [isOpen, isLg, menuControl, transition, windowWidth])

  // * prevent navbar from animating on initial load
  useEffect(() => {
    setIsLg(largeScreen)
    if (largeScreen) {
      setIsInitial(false)
    }
  }, [isLg, isOpen, largeScreen])

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
      className="fixed top-0 left-0 z-10 flex w-full justify-between bg-primary bg-opacity-50 p-4 backdrop-blur-sm backdrop-filter lg:px-8"
    >
      <div className="z-20 flex w-full justify-between text-xl text-accent-1 lg:block lg:w-auto lg:justify-start">
        <h1>rezaa</h1>
        {!isLg ? (
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
        className={`fixed top-0 left-0 flex h-[100dvh] w-full flex-col bg-secondary-800 p-16 lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0 ${
          isInitial ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <ul
          data-testid="navbar-list"
          className="flex flex-1 flex-col items-center justify-center gap-5  text-2xl  font-bold  lg:flex-row lg:text-base lg:font-normal"
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
        {!isLg ? <NavbarInformation /> : null}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
