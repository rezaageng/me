import { type ExperiencesResponse } from '@/@types/experiences'

const experiencesResponse: ExperiencesResponse = {
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
        description: 'Developed a web application using Next.js and TypeScript',
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
        companyName: null,
        locationType: null,
        startDate: '2022-04-01',
        endDate: '2022-06-31',
        description: 'Developed a web application using Next.js and TypeScript',
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
}

export default experiencesResponse
