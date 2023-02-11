import { type NavbarListProps } from '@/@types'
import Link from 'next/link'

import NavbarUnderline from './NavbarUnderline'

const NavbarList = ({
  name,
  route,
  pathName,
  onClick
}: NavbarListProps): JSX.Element => {
  return (
    <li className="relative">
      {pathName === route ? <NavbarUnderline /> : null}
      <Link
        data-testid="navbar-list-link"
        className={`${
          pathName === route ? 'text-accent-1' : ''
        } after:contents hover:animate-pulse`}
        onClick={onClick}
        href={route}
      >
        {name}
      </Link>
    </li>
  )
}
export default NavbarList
