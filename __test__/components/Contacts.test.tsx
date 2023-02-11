import Contacts from '@/components/Contacts'
import { render, screen } from '@testing-library/react'

test('contacts should be rendered', () => {
  render(<Contacts />)
  const contacts = screen.getByRole('list')
  expect(contacts).toBeInTheDocument()
})

test('contacts should have 5 items', () => {
  render(<Contacts />)
  const contacts = screen.getAllByRole('listitem')
  expect(contacts.length).toBe(5)
})

test('contacts should have 5 links', () => {
  render(<Contacts />)
  const contacts = screen.getAllByRole('link')
  expect(contacts.length).toBe(5)
})

test('contacts should have 5 icons', () => {
  render(<Contacts />)
  const contacts = screen.getAllByTestId('contact-icon')
  expect(contacts.length).toBe(5)
})

test('contacts should have 5 links with href', () => {
  render(<Contacts />)
  const contacts = screen.getAllByRole('link')
  expect(contacts[0].getAttribute('href')).toBe('https://github.com/rezaageng')
  expect(contacts[1].getAttribute('href')).toBe(
    'https://twitter.com/rezaageng_'
  )
  expect(contacts[2].getAttribute('href')).toBe(
    'https://www.instagram.com/rezaageng_/'
  )
  expect(contacts[3].getAttribute('href')).toBe(
    'https://www.linkedin.com/in/rezaageng/'
  )
  expect(contacts[4].getAttribute('href')).toBe('mailto:waiting@gmail.com')
})

test('contacts should have 5 links with target', () => {
  render(<Contacts />)
  const contacts = screen.getAllByRole('link')
  expect(contacts[0].getAttribute('target')).toBe('_blank')
  expect(contacts[1].getAttribute('target')).toBe('_blank')
  expect(contacts[2].getAttribute('target')).toBe('_blank')
  expect(contacts[3].getAttribute('target')).toBe('_blank')
  expect(contacts[4].getAttribute('target')).toBe('_blank')
})

test('contacts should have 5 links with rel', () => {
  render(<Contacts />)
  const contacts = screen.getAllByRole('link')
  expect(contacts[0].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[1].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[2].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[3].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[4].getAttribute('rel')).toBe('noreferrer')
})
