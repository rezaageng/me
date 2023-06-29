import { rest } from 'msw'

export const handlers = [
  rest.get(
    `${process.env.API_URL}/api/home`,
    async (req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json({
          data: {
            id: 1,
            attributes: {
              title: "Hello, I'm rezaa.",
              subtitle:
                'Front-end developer and Informatics Engineering student at Pasundan University',
              createdAt: '2023-02-06T07:37:17.769Z',
              updatedAt: '2023-06-25T06:35:18.416Z',
              publishedAt: '2023-02-06T07:44:18.682Z',
              anotherSide: 'i like games, anime, manga, and manhwa',
              summary: 'I like to code especially in front end dev heheheheh'
            }
          },
          meta: {}
        })
      )
  ),
  rest.get(
    '/api/home',
    async (req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json({
          data: {
            id: 1,
            attributes: {
              title: "Hello, I'm rezaa.",
              subtitle:
                'Front-end developer and Informatics Engineering student at Pasundan University',
              createdAt: '2023-02-06T07:37:17.769Z',
              updatedAt: '2023-06-25T06:35:18.416Z',
              publishedAt: '2023-02-06T07:44:18.682Z',
              anotherSide: 'i like games, anime, manga, and manhwa',
              summary: 'I like to code especially in front end dev heheheheh'
            }
          },
          meta: {}
        })
      )
  ),
  rest.get(
    '/api/skill-categories',
    async (req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json({
          data: [
            {
              id: 1,
              attributes: {
                category: 'Programming and Markup Languages',
                createdAt: '2023-06-19T10:05:59.643Z',
                updatedAt: '2023-06-19T10:23:16.177Z',
                skills: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        name: 'JavaScript',
                        createdAt: '2023-06-19T10:08:40.913Z',
                        updatedAt: '2023-06-19T10:08:40.913Z'
                      }
                    },
                    {
                      id: 2,
                      attributes: {
                        name: 'TypeScript',
                        createdAt: '2023-06-19T10:10:41.361Z',
                        updatedAt: '2023-06-19T10:10:41.361Z'
                      }
                    }
                  ]
                }
              }
            },
            {
              id: 4,
              attributes: {
                category: 'Testing',
                createdAt: '2023-06-19T10:08:20.882Z',
                updatedAt: '2023-06-19T10:23:29.227Z',
                skills: {
                  data: [
                    {
                      id: 28,
                      attributes: {
                        name: 'Jest',
                        createdAt: '2023-06-19T10:18:31.241Z',
                        updatedAt: '2023-06-19T10:18:31.241Z'
                      }
                    },
                    {
                      id: 29,
                      attributes: {
                        name: 'React Testing Library',
                        createdAt: '2023-06-19T10:18:41.226Z',
                        updatedAt: '2023-06-19T10:18:41.226Z'
                      }
                    }
                  ]
                }
              }
            }
          ]
        })
      )
  )
]
