import Footer from '@/components/Footer'
import { render, screen } from '@testing-library/react'

test('should render footer', () => {
  render(<Footer />)

  const footer = screen.getByTestId('footer')

  expect(footer).toBeInTheDocument()
})

test('should render footer text', () => {
  render(<Footer />)

  const footerText = screen.getByText('Built with 󰣐 in 2023')
  const footerText2 = screen.getByText('Part of')
  const footerText3 = screen.getByText('@aftrschool')

  expect(footerText).toBeInTheDocument()
  expect(footerText2).toBeInTheDocument()
  expect(footerText3).toBeInTheDocument()
  expect(footerText3).toHaveAttribute('href', 'https://github.com/aftrschool')
})
