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

// * api response
interface Meta {
  pagination?: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  url: string
}

interface ApiImage {
  id: number
  attributes: {
    alternativeText: string | null
    caption: string | null
    formats: {
      thumbnail: ImageFormat
      small: ImageFormat
      medium: ImageFormat
      large: ImageFormat
    }
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: string
    updatedAt: string
  } & ImageFormat
}
