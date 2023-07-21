// eslint-disable-next-line jest/no-mocks-import
import { server } from '@/__mocks__/server'
import TerminalSkills from '@/components/terminal/TerminalSkills'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
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
    // ✅ no more errors on the console
    error: () => {}
  }
})

const wrapper = ({ children }: { children: ReactNode }): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

afterEach(() => {
  queryCache.clear()
})

test('renders loading state when fetching data', async () => {
  render(<TerminalSkills categoryId={null} />, { wrapper })

  expect(screen.getByText('loading...')).toBeInTheDocument()
})

test('renders error state when fetch fails', async () => {
  server.use(
    rest.get(
      '/api/skill-categories',
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
  render(<TerminalSkills categoryId={null} />, { wrapper })

  expect(await screen.findByText('failed to get data')).toBeInTheDocument()
})

test('should render all skills when categoryId is not provided', async () => {
  render(<TerminalSkills categoryId={null} />, { wrapper })

  const divElements = await screen.findAllByTestId('skill-category')
  const liElements = await screen.findAllByRole('listitem')

  expect(divElements).toHaveLength(2)
  expect(liElements).toHaveLength(4)
})

test('should render skills for a given categoryId', async () => {
  render(<TerminalSkills categoryId={1} />, { wrapper })

  const divElements = await screen.findAllByTestId('skill-category')
  const liElements = await screen.findAllByRole('listitem')

  expect(divElements).toHaveLength(1)
  expect(liElements).toHaveLength(2)
})
