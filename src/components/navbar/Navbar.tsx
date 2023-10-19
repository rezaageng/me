'use client'

import {
  AnimatePresence,
  type MotionStyle,
  motion,
  useScroll
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import { v4 as uuidv4 } from 'uuid'
import NavbarList from './NavbarList'
import { type NavbarListData } from '@/@types'
import useResponsive from '@/hooks/useResponsive'
import {
  GiMagicGate,
  GiFizzingFlask,
  GiDelighted,
  GiSuspicious
} from 'react-icons/gi'
import useSmooth from '@/hooks/useSmooth'
import { usePathname } from 'next/navigation'

const Navbar = (): JSX.Element => {
  // * states
  const [isOpen, setIsOpen] = useState(false)
  const [isInitial, setIsInitial] = useState(true)

  // * hooks
  const [blockScroll, allowScroll] = useScrollBlock()
  const pathName = usePathname()
  const isLg = useResponsive(1024)

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setIsInitial(false)
  }, [])

  // * handler
  const toggleMenu = (): void => {
    if (!isOpen) {
      blockScroll()
      setIsOpen(true)
    } else {
      allowScroll()
      setIsOpen(false)
    }
  }

  // * navbar data
  const navData: NavbarListData[] = [
    {
      name: 'Home',
      route: '/',
      icon: <GiMagicGate size={24} data-testid="navbar-icon" />
    },
    {
      name: 'Projects',
      route: '/projects',
      icon: <GiFizzingFlask size={24} data-testid="navbar-icon" />
    },
    {
      name: 'Another Side',
      route: '/another-side',
      icon: <GiDelighted size={24} data-testid="navbar-icon" />
    },
    {
      name: 'About',
      route: '/about',
      icon: <GiSuspicious size={24} data-testid="navbar-icon" />
    }
  ]

  // * animations
  const backgroundAnimation: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 0.01], [0, 1])
  }

  const paddingAnimation: MotionStyle = {
    paddingLeft: useSmooth(scrollYProgress, [0, 0.01], [12, 24]),
    paddingRight: useSmooth(scrollYProgress, [0, 0.01], [12, 24])
  }

  return (
    <nav>
      {!isLg && isOpen ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.8
            }}
            exit={{
              opacity: 0
            }}
            onClick={toggleMenu}
            className="fixed left-0 top-0 z-50 min-h-[100dvh] w-full bg-primary"
          />
        </AnimatePresence>
      ) : null}
      <motion.div
        style={!isLg ? paddingAnimation : undefined}
        className="fixed left-0 top-0 z-50 flex w-full justify-center py-5 lg:py-8"
      >
        <div className="w-full max-w-4xl">
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="relative flex flex-col overflow-hidden rounded-full p-4 lg:px-8"
          >
            <motion.div
              style={backgroundAnimation}
              className="absolute left-0 top-0 h-full w-full rounded-full bg-primary bg-opacity-50 backdrop-blur-lg backdrop-filter"
            />
            <div className="relative flex w-full justify-between text-xl text-accent-1">
              <h1>rezaa</h1>
              {isLg ? (
                <ul
                  data-testid="navbar-list"
                  className="relative flex items-center justify-center gap-5  text-2xl  font-bold   lg:text-base lg:font-normal"
                >
                  {navData.map(({ name, route, icon }) => (
                    <NavbarList
                      key={uuidv4()}
                      name={name}
                      route={route}
                      icon={icon}
                    />
                  ))}
                </ul>
              ) : (
                <button onClick={toggleMenu} className="block lg:hidden">
                  {navData.find(({ route }) => route === pathName)?.icon ?? (
                    <GiMagicGate size={24} data-testid="navbar-icon" />
                  )}
                </button>
              )}
            </div>
          </motion.div>
          <AnimatePresence>
            {isInitial || (isOpen && !isLg) ? (
              <motion.div
                layoutId="menu"
                initial={{ opacity: 0, y: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                    restDelta: 0.001
                  }
                }}
                exit={{
                  opacity: 0,
                  y: -15
                }}
                className={`${
                  isInitial ? 'hidden' : 'flex'
                } mt-4 w-full flex-col gap-6 rounded-3xl bg-primary bg-opacity-50 px-4 py-6 backdrop-blur-lg backdrop-filter`}
              >
                <ul
                  data-testid="navbar-list"
                  className="flex flex-1 flex-col items-start justify-start gap-5 text-base font-normal"
                >
                  {navData.map(({ name, route, icon }) => (
                    <NavbarList
                      key={uuidv4()}
                      name={name}
                      route={route}
                      underline={false}
                      onClick={toggleMenu}
                      icon={icon}
                    />
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
