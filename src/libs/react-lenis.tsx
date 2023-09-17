'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LenisProvider = ({ children }: Props): JSX.Element => {
  return <ReactLenis root>{children}</ReactLenis>
}

export default LenisProvider
