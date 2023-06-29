import HomeMain from '@/components/HomeMain'
import { render, screen } from '@testing-library/react'

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
