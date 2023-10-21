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
  underline?: boolean
  onClick?: () => void
}

// * Contacts
interface ContactsProps {
  className?: ClassName
  iconSize?: number
  animate?: boolean
  link: {
    gitHub: string
    linkedIn: string
    email: string
    twitter: string
    instagram: string
  }
}

interface Social {
  icon: JSX.Element
  link: string
}

// * useResponsive
type Responsive = (query: number) => boolean

// * useSmooth
type Smooth = <O>(
  value: MotionValue<number>,
  input: number[],
  output: O[],
  config?: SpringOptions
) => MotionValue<O>

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

interface Seo {
  id: number
  metaTitle: string
  metaDescription: string
  keywords: string
  metaRobots: string | null
  structuredData: string | null
  metaViewport: string | null
  canonicalUrl: string
  metaImage: {
    data: ApiImage
  }
  metaSocial: Array<{
    id: number
    socialNetwork: string
    title: string
    description: string
    image: {
      data: ApiImage
    }
  }>
}
