import TerminalError from '@/components/terminal/TerminalError'
import { render, screen } from '@testing-library/react'

test('should render the correct error message when command is provided', () => {
  render(<TerminalError command="foo" />)
  expect(screen.getByText(/command not found: foo/i)).toBeInTheDocument()
})

test('should render the correct error message when option is provided', () => {
  render(<TerminalError option="bar" />)
  expect(screen.getByText(/option not found: bar/i)).toBeInTheDocument()
})

test('should render the correct error message when neither command nor option is provided', () => {
  render(<TerminalError />)
  expect(screen.getByText(/not found:/i)).toBeInTheDocument()
})

test('should render the correct help message', () => {
  render(<TerminalError />)
  expect(screen.getByText(/try "xe --help"/i)).toBeInTheDocument()
})
