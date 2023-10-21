import { type EducationsResponse } from '@/@types/educations'

const educationsResponse: EducationsResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'Katapang Public Vocational High School 1',
        degree: null,
        major: 'Software Engineering',
        gpa: null,
        location: 'Bandung, Indonesia',
        startDate: '2018-07-16',
        endDate: '2021-06-02',
        description: 'i learn software engineering',
        createdAt: '2023-07-06T12:02:53.368Z',
        updatedAt: '2023-07-06T12:02:53.368Z'
      }
    },
    {
      id: 2,
      attributes: {
        name: 'Pasundan University',
        degree: 'Majoring in',
        major: 'Informatics Engineering',
        gpa: 3.66,
        location: 'Bandung, Indonesia',
        startDate: '2022-09-26',
        endDate: '2026-09-30',
        description: 'i learn code',
        createdAt: '2023-07-06T12:10:42.206Z',
        updatedAt: '2023-07-06T12:10:42.206Z'
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
}

export default educationsResponse
