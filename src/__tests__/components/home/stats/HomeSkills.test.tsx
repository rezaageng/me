/* eslint-disable jest/no-mocks-import */
import HomeSkills from '@/components/home/stats/HomeSkills'
import skillsResponse from '@/__mocks__/skills-response'
import { fireEvent, render, screen } from '@testing-library/react'

test('should render title', () => {
  render(<HomeSkills data={skillsResponse.data} />)

  const title = screen.getByTestId('skills-title')

  expect(title.innerHTML).toBe('Skills')
})

test('should render 3d canvas', async () => {
  render(<HomeSkills data={skillsResponse.data} />)

  const canvas = await screen.findByTestId('3d-canvas')

  expect(canvas).toBeInTheDocument()
})

test('should render enabled button', () => {
  render(<HomeSkills data={skillsResponse.data} />)

  const button = screen.getByRole('button')

  expect(button).toBeEnabled()
})

test('should render skill list when button on click', async () => {
  render(<HomeSkills data={skillsResponse.data} />)

  const button = screen.getByRole('button')
  const canvas = await screen.findByTestId('3d-canvas')

  expect(canvas).toBeInTheDocument()

  fireEvent.click(button)

  const list = screen.getByTestId('skills-list')

  expect(list).toBeInTheDocument()
})

test('should render all skills', async () => {
  render(<HomeSkills data={skillsResponse.data} />)

  const categories = screen.getAllByTestId('skill-categories')
  const skills = screen.getAllByTestId('skills')
  const button = screen.getByRole('button')
  const canvas = await screen.findByTestId('3d-canvas')

  expect(canvas).toBeInTheDocument()

  fireEvent.click(button)

  expect(categories).toHaveLength(2)
  expect(skills).toHaveLength(4)
})
