import HomeMain from '@/components/HomeMain'
import { render, screen } from '@testing-library/react'

test('main character should be rendered', () => {
  render(<HomeMain />)
  const component = screen.getByTestId('main-character')
  expect(component).toBeInTheDocument()
})

test('title should be rendered', () => {
  render(<HomeMain />)
  const title = screen.getByTestId('title')
  expect(title).toBeInTheDocument()
})

test('subtitle should be rendered', () => {
  render(<HomeMain />)
  const subtitle = screen.getByTestId('subtitle')
  expect(subtitle).toBeInTheDocument()
})

test('description should be rendered', () => {
  render(<HomeMain />)
  const description = screen.getByTestId('description')
  expect(description).toBeInTheDocument()
})

test('button should be rendered', () => {
  render(<HomeMain />)
  const component = screen.getByRole('button')
  expect(component).toBeInTheDocument()
})

test('button should be enabled', () => {
  render(<HomeMain />)
  const component = screen.getByRole('button')
  expect(component).toBeEnabled()
})
