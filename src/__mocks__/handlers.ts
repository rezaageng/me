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
  ),
  rest.get(
    `${process.env.API_URL}/api/experiences`,
    async (req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json({
          data: [
            {
              id: 1,
              attributes: {
                createdAt: '2023-06-30T12:01:05.619Z',
                updatedAt: '2023-06-30T12:23:57.479Z',
                title: 'Web Developer',
                employmentType: 'Internship',
                companyName: 'miHoYo Co., Ltd',
                locationType: 'On-site',
                startDate: '2021-06-01',
                endDate: '2021-08-31',
                description:
                  'Developed a web application using React.js and TypeScript',
                currentlyEmployed: false,
                location: 'Shanghai, China'
              }
            },
            {
              id: 2,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Front-end Developer',
                employmentType: 'Full-time',
                companyName: 'Google LLC',
                locationType: null,
                startDate: '2021-09-01',
                endDate: null,
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Mountain View, California, United States'
              }
            },
            {
              id: 3,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Mobile Developer',
                employmentType: 'Part-time',
                companyName: 'Meta Platforms, Inc.',
                locationType: null,
                startDate: '2022-04-01',
                endDate: '2022-06-31',
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Developed an application using Flutter'
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  ),
  rest.get(
    '/api/experiences',
    async (req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json({
          data: [
            {
              id: 1,
              attributes: {
                createdAt: '2023-06-30T12:01:05.619Z',
                updatedAt: '2023-06-30T12:23:57.479Z',
                title: 'Web Developer',
                employmentType: 'Internship',
                companyName: 'miHoYo Co., Ltd',
                locationType: 'On-site',
                startDate: '2021-06-01',
                endDate: '2021-08-31',
                description:
                  'Developed a web application using React.js and TypeScript',
                currentlyEmployed: false,
                location: 'Shanghai, China'
              }
            },
            {
              id: 2,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Front-end Developer',
                employmentType: 'Full-time',
                companyName: 'Google LLC',
                locationType: null,
                startDate: '2021-09-01',
                endDate: null,
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Mountain View, California, United States'
              }
            },
            {
              id: 3,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Mobile Developer',
                employmentType: 'Part-time',
                companyName: 'Meta Platforms, Inc.',
                locationType: null,
                startDate: '2022-04-01',
                endDate: '2022-06-31',
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Developed an application using Flutter'
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  )
]
