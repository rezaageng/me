import TerminalHelp from '@/components/terminal/TerminalHelp'
import { render, screen, within } from '@testing-library/react'

test('should render the correct version number', () => {
  render(<TerminalHelp />)
  expect(screen.getByText(/version 0.1.0/i)).toBeInTheDocument()
})

test('should render the correct usage message', () => {
  render(<TerminalHelp />)
  expect(screen.getByText(/usage: xe \[option\]/i)).toBeInTheDocument()
})

test('should render the correct list of options', () => {
  render(<TerminalHelp />)
  const optionsList = screen.getAllByRole('list')
  expect(optionsList[0]).toBeInTheDocument()
  expect(optionsList[1]).toBeInTheDocument()

  expect(within(optionsList[0]).getAllByRole('listitem')).toHaveLength(6)
  expect(within(optionsList[1]).getAllByRole('listitem')).toHaveLength(1)
})
