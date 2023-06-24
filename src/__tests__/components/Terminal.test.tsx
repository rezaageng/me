import Terminal from '@/components/terminal/Terminal'
import { render, screen } from '@testing-library/react'

test('should render terminal', () => {
  render(<Terminal />)
  const terminal = screen.getByTestId('terminal')

  expect(terminal).toBeInTheDocument()
})

test('should render terminal buttons', () => {
  render(<Terminal />)
  const terminalButtons = screen.getAllByTestId(/terminal-button/i)

  expect(terminalButtons).toHaveLength(3)
})

test('should render terminal buttons with correct colors', () => {
  render(<Terminal />)
  const terminalButtons = screen.getAllByTestId(/terminal-button/i)

  expect(terminalButtons[0]).toHaveClass('bg-red-500')
  expect(terminalButtons[1]).toHaveClass('bg-yellow-500')
  expect(terminalButtons[2]).toHaveClass('bg-green-500')
})
