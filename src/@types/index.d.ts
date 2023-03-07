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
  animate?: boolean
}

interface Social {
  icon: JSX.Element
  link: string
}

// * framerStore
interface FramerState {
  transition: Transition
}

// * useResponsive
interface Responsive {
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2xl: boolean
}

// * useSmooth
type Smooth = (
  value: MotionValue<number>,
  input: number[],
  output: number[]
) => MotionValue<any>

// * API
interface HomeResponse {
  data: {
    id: number
    attributes: {
      title: string
      subtitle: string
      description: string
      anotherSide: string
    }
  }
}
