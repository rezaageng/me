// eslint-disable-next-line jest/no-mocks-import
import { server } from '@/__mocks__/server'
import TerminalExperience from '@/components/terminal/TerminalExperience'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { render, screen, within } from '@testing-library/react'
import { type ReactNode } from 'react'
import { rest } from 'msw'

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

test('should render loading in inital', () => {
  render(<TerminalExperience />, { wrapper })

  const loading = screen.getByText(/loading/i)

  expect(loading).toBeInTheDocument()
})

test('should render error if fetch error', async () => {
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

  render(<TerminalExperience />, { wrapper })

  const error = await screen.findByText(/failed/i)

  expect(error).toBeInTheDocument()
})

test('should render experience list', async () => {
  render(<TerminalExperience />, { wrapper })

  const list = await screen.findByRole('list')

  expect(list).toBeInTheDocument()
})

test('should render experience list with correct number of items', async () => {
  render(<TerminalExperience />, { wrapper })

  const list = await screen.findByRole('list')
  const listItems = await within(list).findAllByRole('listitem')

  expect(listItems).toHaveLength(3)
})

test('should render correct experience title', async () => {
  render(<TerminalExperience />, { wrapper })

  const experienceTitle = await screen.findAllByTestId('experience-title')

  expect(experienceTitle[0]).toHaveTextContent('Web Developer')
  expect(experienceTitle[1]).toHaveTextContent('Front-end Developer')
  expect(experienceTitle[2]).toHaveTextContent('Mobile Developer')
})

test('should render correct company name', async () => {
  render(<TerminalExperience />, { wrapper })

  const companyName = await screen.findAllByTestId('company-name')

  expect(companyName[0]).toHaveTextContent('miHoYo Co., Ltd')
  expect(companyName[1]).toHaveTextContent('Google LLC')
})

test('should render correct employment type', async () => {
  render(<TerminalExperience />, { wrapper })

  const employmentType = await screen.findAllByTestId('employment-type')

  expect(employmentType[0]).toHaveTextContent('Internship')
  expect(employmentType[1]).toHaveTextContent('Full-time')
  expect(employmentType[2]).toHaveTextContent('Part-time')
})

test('should render start-end date', async () => {
  render(<TerminalExperience />, { wrapper })

  const startEndDate = await screen.findAllByTestId('start-end-date')

  expect(startEndDate[0]).toHaveTextContent('Jun 2021 - Aug 2021')
  expect(startEndDate[1]).toHaveTextContent('Sep 2021 - Present')
  expect(startEndDate[2]).toHaveTextContent('Apr 2022 - Jul 2022')
})
