'use client'

import { useEffect, useState } from 'react'

interface ResponsiveState {
  windowWidth: number
  isDesiredWidth: boolean
}

const useResponsive = (minWidth: number): boolean => {
  const [state, setState] = useState<ResponsiveState>({
    windowWidth: 0,
    isDesiredWidth: false
  })

  useEffect(() => {
    const currentWindowWidth = window.innerWidth
    const isDesiredWidth = currentWindowWidth > minWidth

    setState({ windowWidth: currentWindowWidth, isDesiredWidth })
  }, [minWidth])

  useEffect(() => {
    const resizeHandler = (): void => {
      const currentWindowWidth = window.innerWidth
      const isDesiredWidth = currentWindowWidth > minWidth

      setState({ windowWidth: currentWindowWidth, isDesiredWidth })
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [minWidth, state.windowWidth])

  return state.isDesiredWidth
}

export default useResponsive
