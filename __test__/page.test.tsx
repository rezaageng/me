import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

test('render text', () => {
  render(<Home />)
  const text = screen.getByText(/Hello/i)
  expect(text).toBeInTheDocument()
})
