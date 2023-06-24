import Terminal from '@/components/terminal/Terminal'
import { fireEvent, render, screen } from '@testing-library/react'

test('should render terminal prompt', () => {
  render(<Terminal />)
  const terminalPrompt = screen.getByTestId('terminal-prompt')

  expect(terminalPrompt).toBeInTheDocument()
})

test('should render terminal next version', () => {
  render(<Terminal />)
  const terminalNextVersion = screen.getByTestId('terminal-next-ver')

  expect(terminalNextVersion).toBeInTheDocument()
})

test('should render terminal next version with correct text', () => {
  render(<Terminal />)
  const terminalNextVersion = screen.getByTestId('terminal-next-ver')

  expect(terminalNextVersion).toHaveTextContent('v13.4.5')
})

test('should render terminal prompt with correct text', () => {
  render(<Terminal />)
  const terminalPrompt = screen.getByTestId('terminal-prompt')

  expect(terminalPrompt).toHaveTextContent('rezaa@xe ~')
})

test('should render enabled input', () => {
  render(<Terminal />)
  const terminalInput = screen.getByTestId('terminal-input')

  expect(terminalInput).not.toHaveAttribute('disabled')

  const inputText = 'test input'
  fireEvent.change(terminalInput, { target: { value: inputText } })

  expect(terminalInput).toHaveValue(inputText)
})
