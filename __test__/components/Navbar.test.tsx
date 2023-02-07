import Navbar from '@/components/Navbar'
import { render, screen } from '@testing-library/react'

test('renders navbar', () => {
  render(<Navbar />)
  const navbar = screen.getByRole('navigation')
  expect(navbar).toBeInTheDocument()
})

test('renders title', () => {
  render(<Navbar />)
  const title = screen.getByRole('heading')
  expect(title.innerHTML).toBe('rezaa')
})

test('renders links', () => {
  render(<Navbar />)
  const links = screen.getAllByRole('link')
  expect(links.length).toBe(4)
})

test('renders link text', () => {
  render(<Navbar />)
  const links = screen.getAllByRole('link')
  expect(links[0].innerHTML).toBe('Home')
  expect(links[1].innerHTML).toBe('Projects')
  expect(links[2].innerHTML).toBe('Another Side')
  expect(links[3].innerHTML).toBe('About')
})

test('renders link href', () => {
  render(<Navbar />)
  const links = screen.getAllByRole('link')
  expect(links[0].getAttribute('href')).toBe('/')
  expect(links[1].getAttribute('href')).toBe('/projects')
  expect(links[2].getAttribute('href')).toBe('/another-side')
  expect(links[3].getAttribute('href')).toBe('/about')
})
