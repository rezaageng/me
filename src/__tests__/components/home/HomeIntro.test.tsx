/* eslint-disable jest/no-mocks-import */
import homeRes from '@/__mocks__/home-response'
import { render, screen, waitFor } from '@testing-library/react'
import '@/__mocks__/intersectionObserverMock'
import HomeIntro from '@/components/home/HomeIntro'

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: () => 'false'
  })
}))

test('should render title', () => {
  render(<HomeIntro data={homeRes.data} />)

  const title = screen.getByTestId('home-title')

  expect(title).toHaveTextContent('rezaa')
})

test('should render subtitle', () => {
  render(<HomeIntro data={homeRes.data} />)

  const subtitle = screen.getByTestId('home-subtitle')

  expect(subtitle).toHaveTextContent('Front-end')
})

test('should render with 0 opacity on initial', () => {
  render(<HomeIntro data={homeRes.data} />)

  const title = screen.getByTestId('home-title')
  const subtitle = screen.getByTestId('home-subtitle')

  expect(title).toHaveStyle({ opacity: 0 })
  expect(subtitle).toHaveStyle({ opacity: 0 })
})

test('should run animation that change the opacity to 1', async () => {
  jest.useFakeTimers()
  render(<HomeIntro data={homeRes.data} />)

  const title = screen.getByTestId('home-title')
  const subtitle = screen.getByTestId('home-subtitle')

  await waitFor(
    () => {
      expect(title).toHaveStyle({ opacity: 1 })
    },
    { timeout: 2000 }
  )
  await waitFor(
    () => {
      expect(subtitle).toHaveStyle({ opacity: 1 })
    },
    { timeout: 2000 }
  )
})

test('should render with transformY 100 on initial', () => {
  render(<HomeIntro data={homeRes.data} />)

  const title = screen.getByTestId('home-title')
  const subtitle = screen.getByTestId('home-subtitle')

  expect(title).toHaveStyle({ transform: 'translateY(100px) translateZ(0)' })
  expect(subtitle).toHaveStyle({ transform: 'translateY(100px) translateZ(0)' })
})

test('should run animation that change the transformY to none', async () => {
  render(<HomeIntro data={homeRes.data} />)

  const title = screen.getByTestId('home-title')
  const subtitle = screen.getByTestId('home-subtitle')

  await waitFor(
    () => {
      expect(title).toHaveStyle({ transform: 'none' })
    },
    { timeout: 3000 }
  )
  await waitFor(
    () => {
      expect(subtitle).toHaveStyle({ transform: 'none' })
    },
    { timeout: 3000 }
  )
})
