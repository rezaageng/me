import SvgGradientMotion from '@/components/SvgGradientMotion'
import { render, screen } from '@testing-library/react'

test('should render svg gradient motion', () => {
  render(<SvgGradientMotion id="gh-gradient" from="#259D97" to="#1A6A87" />)

  const svg = screen.getByTestId('svg-gradient')

  expect(svg).toBeInTheDocument()
})
