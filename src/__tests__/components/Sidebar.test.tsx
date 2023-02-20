import Sidebar from '@/components/Sidebar'
import { render, screen } from '@testing-library/react'

test('sidebar should be rendered', () => {
  render(<Sidebar />)
  const sidebar = screen.getByTestId('sidebar')

  expect(sidebar).toBeInTheDocument()
})

test('contacts should be rendered', () => {
  render(<Sidebar />)
  const contacts = screen.getByRole('list')

  expect(contacts).toBeInTheDocument()
})

test('line should be rendered', () => {
  render(<Sidebar />)
  const line = screen.getByTestId('line')

  expect(line).toBeInTheDocument()
})
