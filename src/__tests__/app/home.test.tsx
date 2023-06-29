import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

test('home page should be rendered', async () => {
  render(await Home())
  const component = screen.getByTestId('home-main')
  expect(component).toBeInTheDocument()
})
