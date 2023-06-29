// eslint-disable-next-line jest/no-mocks-import
import { server } from '@/__mocks__/server'
import TerminalSummary from '@/components/terminal/TerminalSummary'
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

test('renders loading state', async () => {
  render(<TerminalSummary />, { wrapper })

  expect(screen.getByText('Loading...')).toBeInTheDocument()
})

test('renders error state', async () => {
  server.use(
    rest.get(
      '/api/home',
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

  render(<TerminalSummary />, { wrapper })

  expect(await screen.findByTestId('summary-error')).toBeInTheDocument()
})

test('renders summary', async () => {
  render(<TerminalSummary />, { wrapper })

  expect(await screen.findByTestId('summary')).toBeInTheDocument()
})
