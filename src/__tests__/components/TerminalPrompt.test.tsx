import TerminalPrompt from '@/components/terminal/TerminalPrompt'
import { fireEvent, render, screen } from '@testing-library/react'

test('should render terminal prompt', () => {
  render(<TerminalPrompt index={0} />)
  const terminalPrompt = screen.getByTestId('terminal-prompt')

  expect(terminalPrompt).toBeInTheDocument()
})

test('should render terminal next version', () => {
  render(<TerminalPrompt index={0} />)
  const terminalNextVersion = screen.getByTestId('terminal-next-ver')

  expect(terminalNextVersion).toBeInTheDocument()
})

test('should render terminal next version with correct text', () => {
  render(<TerminalPrompt index={0} />)
  const terminalNextVersion = screen.getByTestId('terminal-next-ver')

  expect(terminalNextVersion).toHaveTextContent('v13.4.5')
})

test('should render terminal prompt with correct text', () => {
  render(<TerminalPrompt index={0} />)
  const terminalPrompt = screen.getByTestId('terminal-prompt')

  expect(terminalPrompt).toHaveTextContent('rezaa@xe ~')
})

test('should render enabled input', () => {
  render(<TerminalPrompt index={0} />)
  const terminalInput = screen.getByTestId('terminal-input')

  expect(terminalInput).not.toHaveAttribute('disabled')

  const inputText = 'test input'
  fireEvent.change(terminalInput, { target: { value: inputText } })

  expect(terminalInput).toHaveValue(inputText)
})

test('should submit form', () => {
  render(<TerminalPrompt index={0} />)
  const terminalInput = screen.getByTestId('terminal-input')

  const inputText = 'xe'
  fireEvent.change(terminalInput, { target: { value: inputText } })

  fireEvent.submit(terminalInput)

  expect(terminalInput).toHaveValue(inputText)
})
