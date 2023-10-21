/* eslint-disable jest/no-mocks-import */
import linkResponse from '@/__mocks__/link-response'
import Contacts from '@/components/contact/Contacts'
import { render, screen } from '@testing-library/react'

const link = linkResponse.data

test('contacts should be rendered', () => {
  render(
    <Contacts
      link={{
        email: link.attributes.email,
        gitHub: link.attributes.gitHub,
        instagram: link.attributes.instagram,
        linkedIn: link.attributes.linkedIn,
        twitter: link.attributes.twitter
      }}
    />
  )

  const contacts = screen.getByRole('list')
  expect(contacts).toBeInTheDocument()
})

test('contacts should have 5 items', () => {
  render(
    <Contacts
      link={{
        email: link.attributes.email,
        gitHub: link.attributes.gitHub,
        instagram: link.attributes.instagram,
        linkedIn: link.attributes.linkedIn,
        twitter: link.attributes.twitter
      }}
    />
  )

  const contacts = screen.getAllByRole('listitem')
  expect(contacts).toHaveLength(5)
})

test('contacts should have 5 links', () => {
  render(
    <Contacts
      link={{
        email: link.attributes.email,
        gitHub: link.attributes.gitHub,
        instagram: link.attributes.instagram,
        linkedIn: link.attributes.linkedIn,
        twitter: link.attributes.twitter
      }}
    />
  )

  const contacts = screen.getAllByRole('link')
  expect(contacts).toHaveLength(5)
})

test('contacts should have 5 icons', () => {
  render(
    <Contacts
      link={{
        email: link.attributes.email,
        gitHub: link.attributes.gitHub,
        instagram: link.attributes.instagram,
        linkedIn: link.attributes.linkedIn,
        twitter: link.attributes.twitter
      }}
    />
  )

  const contacts = screen.getAllByTestId('contact-icon')
  expect(contacts).toHaveLength(5)
})

test('contacts should have 5 links with href', () => {
  render(
    <Contacts
      link={{
        email: link.attributes.email,
        gitHub: link.attributes.gitHub,
        instagram: link.attributes.instagram,
        linkedIn: link.attributes.linkedIn,
        twitter: link.attributes.twitter
      }}
    />
  )

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
  expect(contacts[4].getAttribute('href')).toBe('mailto:rezaageng47@gmail.com')
})

test('contacts should have 5 links with target', () => {
  render(
    <Contacts
      link={{
        email: link.attributes.email,
        gitHub: link.attributes.gitHub,
        instagram: link.attributes.instagram,
        linkedIn: link.attributes.linkedIn,
        twitter: link.attributes.twitter
      }}
    />
  )

  const contacts = screen.getAllByRole('link')
  expect(contacts[0].getAttribute('target')).toBe('_blank')
  expect(contacts[1].getAttribute('target')).toBe('_blank')
  expect(contacts[2].getAttribute('target')).toBe('_blank')
  expect(contacts[3].getAttribute('target')).toBe('_blank')
  expect(contacts[4].getAttribute('target')).toBe('_blank')
})

test('contacts should have 5 links with rel', () => {
  render(
    <Contacts
      link={{
        email: link.attributes.email,
        gitHub: link.attributes.gitHub,
        instagram: link.attributes.instagram,
        linkedIn: link.attributes.linkedIn,
        twitter: link.attributes.twitter
      }}
    />
  )

  const contacts = screen.getAllByRole('link')
  expect(contacts[0].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[1].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[2].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[3].getAttribute('rel')).toBe('noreferrer')
  expect(contacts[4].getAttribute('rel')).toBe('noreferrer')
})
