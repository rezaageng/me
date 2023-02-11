import { type Transition } from 'framer-motion'

// * global
type ClassName = string | undefined

// * navbar
interface NavbarListData {
  name: string
  route: string
}

interface NavbarListProps extends NavbarListData {
  pathName: string | null
  onClick: () => void
}

// * Contacts
interface ContactsProps {
  className?: ClassName
  iconSize?: number
}

// * framerStore
interface FramerState {
  transition: Transition
}
