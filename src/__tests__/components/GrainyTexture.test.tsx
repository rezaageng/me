import GrainyTexture from '@/components/GrainyTexture'
import { render, screen } from '@testing-library/react'

test('should render svg', () => {
  render(<GrainyTexture />)

  const svg = screen.getByTestId('grainy-texture')

  expect(svg).toBeInTheDocument()
})

test('should render filter', () => {
  render(<GrainyTexture />)

  const filter = screen.getByTestId('grainy-texture-filter')

  expect(filter).toBeInTheDocument()
})

test('should render feTurbulence', () => {
  render(<GrainyTexture />)

  const feTurbulence = screen.getByTestId('grainy-texture-feTurbulence')

  expect(feTurbulence).toBeInTheDocument()
})

test('should render feTurbulence with correct props', () => {
  render(<GrainyTexture />)

  const feTurbulence = screen.getByTestId('grainy-texture-feTurbulence')

  expect(feTurbulence).toHaveAttribute('type', 'turbulence')
  expect(feTurbulence).toHaveAttribute('baseFrequency', '0.65')
  expect(feTurbulence).toHaveAttribute('stitchTiles', 'stitch')
})
