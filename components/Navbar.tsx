'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import NavbarUnderline from './NavbarUnderline'

const Navbar = (): JSX.Element => {
  const pathName = usePathname()

  return (
    <nav className="flex w-full justify-between bg-primary p-4">
      <h1>rezaa</h1>
      <ul className="fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-5 bg-secondary-800 text-2xl font-bold sm:static sm:h-auto sm:w-auto sm:flex-row sm:bg-transparent sm:text-base sm:font-normal">
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
      </ul>
    </nav>
  )
}

export default Navbar
