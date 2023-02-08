'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = (): JSX.Element => {
  const pathName = usePathname()

  console.log(pathName)

  return (
    <nav className="flex w-full justify-between p-4">
      <h1>rezaa</h1>
      <ul className="fixed top-0 left-0 flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-secondary-800 text-2xl font-bold">
        <li>
          <Link
            className={`${
              pathName === '/' ? 'text-accent-1' : ''
            } hover:animate-pulse`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathName === '/projects' ? 'text-accent-1' : ''
            } hover:animate-pulse`}
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathName === '/another-side' ? 'text-accent-1' : ''
            } hover:animate-pulse`}
            href="/another-side"
          >
            Another Side
          </Link>
        </li>
        <li>
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
