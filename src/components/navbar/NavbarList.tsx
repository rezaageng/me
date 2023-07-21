import { type NavbarListProps } from '@/@types'
import Link from 'next/link'
import NavbarUnderline from './NavbarUnderline'

const NavbarList = ({
  name,
  route,
  pathName,
  underline = true,
  onClick,
  icon
}: NavbarListProps): JSX.Element => {
  return (
    <li className="relative">
      {pathName === route && underline ? <NavbarUnderline /> : null}

      <Link
        data-testid="navbar-list-link"
        className={`${
          pathName === route ? 'text-accent-1' : ''
        } flex items-center gap-2 hover:animate-pulse`}
        onClick={onClick}
        href={route}
      >
        {icon}
        {name}
      </Link>
    </li>
  )
}
export default NavbarList
