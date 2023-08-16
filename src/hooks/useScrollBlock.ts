import { useRef } from 'react'

const safeDocument: Document | undefined =
  typeof document !== 'undefined' ? document : undefined

export const useScrollBlock = (): [() => void, () => void] => {
  const scrollBlocked = useRef(false)

  const html = safeDocument?.documentElement
  const body = safeDocument?.body

  const blockScroll = (): void => {
    if (
      body === undefined ||
      body.style === undefined ||
      scrollBlocked.current ||
      html === undefined
    )
      return

    const scrollBarWidth = window.innerWidth - html.clientWidth
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right')
      ) ?? 0

    html.style.position = 'relative' /* [1] */
    html.style.overflow = 'hidden' /* [2] */
    body.style.position = 'relative' /* [1] */
    body.style.overflow = 'hidden' /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

    scrollBlocked.current = true
  }

  const allowScroll = (): void => {
    if (
      body === undefined ||
      body.style === undefined ||
      !scrollBlocked.current ||
      html === undefined
    )
      return

    html.style.position = ''
    html.style.overflow = ''
    body.style.position = ''
    body.style.overflow = ''
    body.style.paddingRight = ''

    scrollBlocked.current = false
  }

  return [blockScroll, allowScroll]
}
