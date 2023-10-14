'use client'

import useResponsive from '@/hooks/useResponsive'
import CirclesBg from '../background/CirclesBg'

export const AboutBg = (): JSX.Element | null => {
  const isLg = useResponsive(1024)

  if (!isLg) return null

  return (
    <CirclesBg className="fixed top-1/2 -z-50 m-auto flex h-full w-full max-w-5xl translate-x-28 flex-col" />
  )
}
