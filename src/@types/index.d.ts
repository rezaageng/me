import { type Vector3 } from '@react-three/fiber'
import { type SpringOptions } from 'framer-motion'

// * global
type ClassName = string | undefined

// * navbar
interface NavbarListData {
  name: string
  route: string
  icon: JSX.Element
}

interface NavbarListProps extends NavbarListData {
  pathName: string | null
  underline?: boolean
  onClick?: () => void
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
      thumbnail: ImageFormat & { path: string | null }
      small: ImageFormat & { path: string | null }
      medium: ImageFormat & { path: string | null }
      large: ImageFormat & { path: string | null }
    }
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: string
    updatedAt: string
  } & ImageFormat
}
