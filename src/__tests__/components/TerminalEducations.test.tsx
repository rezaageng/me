// eslint-disable-next-line jest/no-mocks-import
import { server } from '@/__mocks__/server'
import TerminalEducations from '@/components/terminal/TerminalEducations'
import {
  QueryClient,
  QueryCache,
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
  render(<TerminalEducations />, { wrapper })

  const loading = screen.getByText(/loading/i)

  expect(loading).toBeInTheDocument()
})

test('should render error message on error', async () => {
  server.use(
    rest.get(
      '/api/experiences',
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

  render(<TerminalEducations />, { wrapper })

  const errorMessage = await screen.findByText(/failed/i)

  expect(errorMessage).toBeInTheDocument()
})

test('should render school/university name', async () => {
  render(<TerminalEducations />, { wrapper })

  const schoolName = await screen.findAllByTestId('school-name')

  expect(schoolName[0]).toHaveTextContent(
    'Katapang Public Vocational High School 1'
  )
  expect(schoolName[1]).toHaveTextContent('Pasundan University')
})

test('should render majors name', async () => {
  render(<TerminalEducations />, { wrapper })

  const majorsName = await screen.findAllByTestId('majors')

  expect(majorsName[0]).toHaveTextContent('Software Engineering')
  expect(majorsName[1]).toHaveTextContent('Informatics Engineering')
})

test('should render start-end date', async () => {
  render(<TerminalEducations />, { wrapper })

  const date = await screen.findAllByTestId('date')

  expect(date[0]).toHaveTextContent('Jul 2018 - Jun 2021')
  expect(date[1]).toHaveTextContent('Sep 2022 - Sep 2026')
})
