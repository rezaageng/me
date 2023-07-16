import { type SkillCategoriesResponse } from '@/@types/skills'

const skillsResponse: SkillCategoriesResponse = {
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
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 4
    }
  }
}

export default skillsResponse
