import HomeEnd from '@/components/home/HomeEnd'
import { render, screen } from '@testing-library/react'

test('should render sky', () => {
  render(<HomeEnd />)

  const background = screen.getByTestId('home-end-sky')

  expect(background).toBeInTheDocument()
})

test('should render comet', () => {
  render(<HomeEnd />)

  const comet = screen.getByTestId('home-end-comet')

  expect(comet).toBeInTheDocument()
})

test('should render land', () => {
  render(<HomeEnd />)

  const land = screen.getByTestId('home-end-land')

  expect(land).toBeInTheDocument()
})

test('should render sophie', () => {
  render(<HomeEnd />)

  const sophie = screen.getByTestId('home-end-sophie')

  expect(sophie).toBeInTheDocument()
})
