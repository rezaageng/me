import { type Vector3 } from '@react-three/fiber'
import { type SpringOptions, type Transition } from 'framer-motion'

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
type Responsive = (query: number) => boolean

// * useSmooth
type Smooth = (
  value: MotionValue<number>,
  input: number[],
  output: number[],
  config?: SpringOptions
) => MotionValue<any>

// * helpers
type IsFloat = (number: number) => boolean

// * home
interface HomeSkillsIconProps {
  icon: string
  position: Vector3
}

// * api meta
interface Meta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}
