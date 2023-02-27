import { type Responsive } from '@/@types'
import { useEffect, useState } from 'react'

export const useResponsive = (): Responsive => {
  const [isSm, setIsSm] = useState(false)
  const [isMd, setIsMd] = useState(false)
  const [isLg, setIsLg] = useState(false)
  const [isXl, setIsXl] = useState(false)
  const [is2xl, setIs2xl] = useState(false)

  const responsiveHandler = (): void => {
    const width = window.innerWidth
    if (width <= 640) {
      setIsSm(false)
      setIsMd(false)
      setIsLg(false)
      setIsXl(false)
      setIs2xl(false)
    }
    if (width > 640 && width <= 768) {
      setIsSm(true)
      setIsMd(false)
      setIsLg(false)
      setIsXl(false)
      setIs2xl(false)
    }
    if (width > 768 && width <= 1024) {
      setIsSm(true)
      setIsMd(true)
      setIsLg(false)
      setIsXl(false)
      setIs2xl(false)
    }
    if (width > 1024 && width <= 1280) {
      setIsSm(true)
      setIsMd(true)
      setIsLg(true)
      setIsXl(false)
      setIs2xl(false)
    }
    if (width > 1280) {
      setIsSm(true)
      setIsMd(true)
      setIsLg(true)
      setIsXl(true)
      setIs2xl(false)
    }
    if (width > 1536) {
      setIsSm(true)
      setIsMd(true)
      setIsLg(true)
      setIsXl(true)
      setIs2xl(true)
    }
  }

  useEffect(() => {
    responsiveHandler()
    window.addEventListener('resize', () => {
      responsiveHandler()
    })

    return () => {
      window.removeEventListener('resize', () => {
        responsiveHandler()
      })
    }
  }, [])

  return { isSm, isMd, isLg, isXl, is2xl }
}
