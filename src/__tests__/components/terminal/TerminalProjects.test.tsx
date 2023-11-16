// eslint-disable-next-line jest/no-mocks-import
import { server } from '@/__mocks__/server'
import TerminalProjects from '@/components/terminal/TerminalProjects'
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

test('should render loading state on initial', () => {
  render(<TerminalProjects />, { wrapper })

  const loading = screen.getByText('Loading...')

  expect(loading).toBeInTheDocument()
})

test('should render error state on error', async () => {
  server.use(
    rest.get(
      '/api/projects',
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

  render(<TerminalProjects />, { wrapper })

  const error = await screen.findByText(/failed/i)

  expect(error).toBeInTheDocument()
})

test('should render project titles', async () => {
  render(<TerminalProjects />, { wrapper })

  const titles = await screen.findAllByTestId('project-title')

  expect(titles).toHaveLength(2)
  expect(titles[0]).toHaveTextContent('Nothing')
  expect(titles[1]).toHaveTextContent('medjed')
})

test('should render project descriptions', async () => {
  render(<TerminalProjects />, { wrapper })

  const descriptions = await screen.findAllByTestId('project-description')

  expect(descriptions).toHaveLength(2)
  expect(descriptions[0]).toHaveTextContent(
    'im the bone of my sword steel is my body and iron is my blood ahahhahh'
  )
  expect(descriptions[1]).toHaveTextContent('i say goodbye my dearest')
})

test('should has correct link', async () => {
  render(<TerminalProjects />, { wrapper })

  const links = await screen.findAllByTestId('project-link')

  expect(links).toHaveLength(2)
  expect(links[0]).toHaveAttribute('href', '/projects/nothing')
  expect(links[1]).toHaveAttribute('href', '/projects/medjed')
})

test('should render description with 3 max lines', async () => {
  render(<TerminalProjects />, { wrapper })

  const descriptions = await screen.findAllByTestId('project-description')

  expect(descriptions[0]).toHaveClass('line-clamp-3')
  expect(descriptions[1]).toHaveClass('line-clamp-3')
})
