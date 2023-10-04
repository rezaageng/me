import Navbar from '@/components/navbar/Navbar'
import NavbarUnderline from '@/components/navbar/NavbarUnderline'

import { fireEvent, render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

test('should render navbar', () => {
  render(<Navbar />)
  const navbar = screen.getByRole('navigation')

  expect(navbar).toBeInTheDocument()
})

test('should render title', () => {
  render(<Navbar />)
  const title = screen.getByRole('heading')

  expect(title.innerHTML).toBe('rezaa')
})

test('should render button', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})

test('button should be clickable', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')

  expect(button).toBeEnabled()
})

test('should render navigation menu', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const menu = screen.getByTestId('navbar-list')

  expect(menu).toBeInTheDocument()
})

test('should render links', async () => {
  render(<Navbar />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const links = await screen.findAllByTestId('navbar-list-link')

  expect(links).toHaveLength(4)
})

test('links texts should not be empty', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const links = screen.getAllByRole('link')

  expect(links[0]).toHaveTextContent('Home')
  expect(links[1]).toHaveTextContent('Projects')
  expect(links[2]).toHaveTextContent('Another Side')
  expect(links[3]).toHaveTextContent('About')
})

test('should render icons', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const icons = screen.getAllByTestId('navbar-icon')

  expect(icons).toHaveLength(5)
})

test('links hrefs should not be empty', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const links = screen.getAllByRole('link')

  expect(links[0].getAttribute('href')).toBe('/')
  expect(links[1].getAttribute('href')).toBe('/projects')
  expect(links[2].getAttribute('href')).toBe('/another-side')
  expect(links[3].getAttribute('href')).toBe('/about')
})

test('should render navbar underline', async () => {
  render(<NavbarUnderline />)
  const underline = screen.getByTestId('navbar-underline')

  expect(underline).toBeInTheDocument()
})
