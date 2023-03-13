import HomeSkills from '@/components/HomeSkills'
import { render, screen } from '@testing-library/react'

test('hand should be rendered', () => {
  render(<HomeSkills />)
  const component = screen.getByTestId('hand')
  expect(component).toBeInTheDocument()
})

test('3d canvas should be rendered', () => {
  render(<HomeSkills />)
  const component = screen.getByTestId('3d-canvas')
  expect(component).toBeInTheDocument()
})
