import HomeSkills from '@/components/home/stats/HomeSkills'
import { render, screen } from '@testing-library/react'

test('sould render title', () => {
  render(<HomeSkills />)

  const component = screen.getByTestId('skills-title')

  expect(component).toBeInTheDocument()
})

test('3d canvas should be rendered', () => {
  render(<HomeSkills />)

  const component = screen.getByTestId('3d-canvas')

  expect(component).toBeInTheDocument()
})
