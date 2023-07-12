// eslint-disable-next-line jest/no-mocks-import
import { server } from '@/__mocks__/server'
import TerminalContact from '@/components/terminal/TerminalContact'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { type ReactNode } from 'react'

const queryCache = new QueryCache()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  },
  logger: {
    // eslint-disable-next-line no-console
    log: console.log,
    // eslint-disable-next-line no-console
    warn: console.warn,
    error: () => {}
  }
})

const wrapper = ({ children }: { children: ReactNode }): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

afterEach(() => {
  queryCache.clear()
})

test('should render loading on initial', () => {
  render(<TerminalContact />, { wrapper })

  const loading = screen.getByText(/loading/i)

  expect(loading).toBeInTheDocument()
})

test('should render error message on error', async () => {
  server.use(
    rest.get(
      '/api/contact',
      async (_req, res, ctx) =>
        await res(
          ctx.status(500),
          ctx.json({
            data: null,
            error: {
              status: 500,
              name: 'InternalServerError',
              message: 'Internal Server Error',
              details: {}
            }
          })
        )
    )
  )

  render(<TerminalContact />, { wrapper })

  const errorMessage = await screen.findByText(/failed to get data/i)

  expect(errorMessage).toBeInTheDocument()
})

test('should render list', async () => {
  render(<TerminalContact />, { wrapper })

  const contact = await screen.findByRole('list')

  expect(contact).toBeInTheDocument()
})

test('should render corrent contact', async () => {
  render(<TerminalContact />, { wrapper })

  const contact = await screen.findAllByRole('link')

  expect(contact[0]).toHaveTextContent('GitHub')
  expect(contact[1]).toHaveTextContent('Twitter')
  expect(contact[2]).toHaveTextContent('Instagram')
  expect(contact[3]).toHaveTextContent('LinkedIn')
  expect(contact[4]).toHaveTextContent('rezaageng47@gmail.com')
})

test('should render correct link', async () => {
  render(<TerminalContact />, { wrapper })

  const contact = await screen.findAllByRole('link')

  expect(contact[0]).toHaveAttribute('href', 'https://github.com/rezaageng')
  expect(contact[1]).toHaveAttribute('href', 'https://twitter.com/rezaageng_')
  expect(contact[2]).toHaveAttribute('href', 'https://instagram.com/rezaageng_')
  expect(contact[3]).toHaveAttribute(
    'href',
    'https://linkedin.com/in/rezaageng'
  )
  expect(contact[4]).toHaveAttribute('href', 'mailto:rezaageng47@gmail.com')
})
