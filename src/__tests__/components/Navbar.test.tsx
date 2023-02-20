import Navbar from '@/components/Navbar'
import NavbarUnderline from '@/components/NavbarUnderline'
import { fireEvent, render, screen } from '@testing-library/react'

test('renders should be rendered', () => {
  render(<Navbar />)
  const navbar = screen.getByRole('navigation')

  expect(navbar).toBeInTheDocument()
})

test('title should be rendered', () => {
  render(<Navbar />)
  const title = screen.getByRole('heading')

  expect(title.innerHTML).toBe('rezaa')
})

test('button should be rendered', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})

test('button should be clickable', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')

  expect(button).toBeEnabled()
})

test('navigation menu should be rendered', () => {
  render(<Navbar />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const menu = screen.getByTestId('navbar-list')

  expect(menu).toBeInTheDocument()
})

test('links should be rendered', async () => {
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

  expect(links[0].innerHTML).toBe('Home')
  expect(links[1].innerHTML).toBe('Projects')
  expect(links[2].innerHTML).toBe('Another Side')
  expect(links[3].innerHTML).toBe('About')
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

test('underline animation should be rendered when it clicked', async () => {
  render(<NavbarUnderline />)
  const underline = screen.getByTestId('navbar-underline')

  expect(underline).toBeInTheDocument()
})

test('navbar information should be rendered', () => {
  render(<Navbar />)
  const navbarInformation = screen.getByTestId('navbar-information')

  expect(navbarInformation).toBeInTheDocument()
})

test('navbar art information should be rendered', () => {
  render(<Navbar />)
  const navbarArt = screen.getByTestId('navbar-art')

  expect(navbarArt).toBeInTheDocument()
})

test('navbar art information should not be empty', () => {
  render(<Navbar />)
  const navbarArt = screen.getByTestId('navbar-art')

  expect(navbarArt).toHaveTextContent('art by:')
})

test('navbar art link should be rendered', () => {
  render(<Navbar />)
  const navbarArtLink = screen.getByTestId('navbar-art-link')

  expect(navbarArtLink).toBeInTheDocument()
})

test('navbar art link should not be empty', () => {
  render(<Navbar />)
  const navbarArtLink = screen.getByTestId('navbar-art-link')

  expect(navbarArtLink.textContent).toBe('xe')
})