import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
// import { setupServer } from 'msw/node'
// import { type DefaultBodyType, type PathParams, rest } from 'msw'
// import { type HomeResponse } from '@/@types'

// const server = setupServer(
//   rest.get<DefaultBodyType, PathParams, HomeResponse>(
//     '/home',
//     (req, res, ctx) =>
//       res(
//         ctx.json({
//           data: {
//             id: 1,
//             attributes: {
//               title: 'Hello',
//               subtitle: 'front-end developer',
//               description: 'I am a front-end developer',
//               anotherSide: 'i love kasumi'
//             }
//           }
//         })
//       )
//   )
// )

// beforeAll(() => {
//   server.listen()
// })
// afterEach(() => {
//   server.resetHandlers()
// })
// afterAll(() => {
//   server.close()
// })

test('home page should be rendered', () => {
  render(<Home />)
  const component = screen.getByTestId('home-main')
  expect(component).toBeInTheDocument()
})
