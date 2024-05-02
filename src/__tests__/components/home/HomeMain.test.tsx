/* eslint-disable jest/no-mocks-import */
import homeRes from '@/__mocks__/home-response'
import HomeMain from '@/components/home/HomeMain'
import { render, screen } from '@testing-library/react'
import '@/__mocks__/intersectionObserverMock'

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: () => 'false'
  })
}))

test('should render background', () => {
  render(<HomeMain data={homeRes.data} />)

  const circles = screen.getAllByTestId('circle')

  expect(circles).toHaveLength(3)
})

test('should render intro', () => {
  render(<HomeMain data={homeRes.data} />)

  const element = screen.getByTestId('home-intro')

  expect(element).toBeInTheDocument()
})

test('should render summary', () => {
  render(<HomeMain data={homeRes.data} />)

  const element = screen.getByTestId('home-summary')

  expect(element).toBeInTheDocument()
})
