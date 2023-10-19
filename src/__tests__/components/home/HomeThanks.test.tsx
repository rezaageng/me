/* eslint-disable jest/no-mocks-import */
import linkResponse from '@/__mocks__/link-response'
import HomeThanks from '@/components/home/HomeThanks'
import { render, screen } from '@testing-library/react'

const link = linkResponse

test('should render built with', () => {
  render(<HomeThanks link={link.data} />)

  const text = screen.getByText('// built with')

  expect(text).toBeInTheDocument()
})

test('should render tech title', () => {
  render(<HomeThanks link={link.data} />)

  const text = screen.getByText('{...}')

  expect(text).toBeInTheDocument()
})

test('should render technologies', () => {
  render(<HomeThanks link={link.data} />)

  const list = screen.getAllByTestId('tech-list')

  expect(list).toHaveLength(5)

  expect(list[0]).toHaveTextContent('TypeScript')
  expect(list[1]).toHaveTextContent('Next.js')
  expect(list[2]).toHaveTextContent('Tailwind CSS')
  expect(list[3]).toHaveTextContent('Framer Motion')
  expect(list[4]).toHaveTextContent('Lenis')
})

test('should render thanks title', () => {
  render(<HomeThanks link={link.data} />)

  const text = screen.getByText('~')

  expect(text).toBeInTheDocument()
})

test('should render dish list', () => {
  render(<HomeThanks link={link.data} />)

  const list = screen.getAllByTestId('dish-list')

  expect(list).toHaveLength(3)

  expect(list[0]).toHaveTextContent('Countless cups of coffee')
  expect(list[1]).toHaveTextContent('Fresh milk')
  expect(list[2]).toHaveTextContent('Pocky')
})

test('should render songs title', () => {
  render(<HomeThanks link={link.data} />)

  const text = screen.getByText('')

  expect(text).toBeInTheDocument()
})

test('should render songs list', () => {
  render(<HomeThanks link={link.data} />)

  const list = screen.getAllByTestId('song-list')

  expect(list).toHaveLength(11)

  expect(list[0]).toHaveTextContent('JKT48')
  expect(list[1]).toHaveTextContent('Eve')
  expect(list[2]).toHaveTextContent('Kyanai')
  expect(list[3]).toHaveTextContent('JVKE')
  expect(list[4]).toHaveTextContent('YOASOBI')
  expect(list[5]).toHaveTextContent('AKB48')
  expect(list[6]).toHaveTextContent('NDX A.K.A')
  expect(list[7]).toHaveTextContent('Fuji Kaze')
  expect(list[8]).toHaveTextContent('もさを。')
  expect(list[9]).toHaveTextContent('YoRI')
  expect(list[10]).toHaveTextContent('YOAKE')
})

test('should render contact title', () => {
  render(<HomeThanks link={link.data} />)

  const text = screen.getByText('&&')

  expect(text).toBeInTheDocument()
})

test('should render contact list', () => {
  render(<HomeThanks link={link.data} />)

  const list = screen.getAllByTestId('contact-list')

  expect(list).toHaveLength(5)
})
