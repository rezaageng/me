import { type Responsive } from '@/@types'
import { useEffect, useState } from 'react'

export const useResponsive: Responsive = (query) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${query}px)`)

    if (media.matches !== state) setState(media.matches)

    const listener = (): void => {
      setState(media.matches)
    }

    media.addEventListener('change', listener)

    return (): void => {
      media.removeEventListener('change', listener)
    }
  }, [query, state])

  return state
}
