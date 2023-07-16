import { type ContactsResponse } from '@/@types/contacts'

const contactsResponse: ContactsResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'GitHub',
        link: 'https://github.com/rezaageng',
        createdAt: '2023-07-12T08:48:56.052Z',
        updatedAt: '2023-07-12T08:48:56.052Z'
      }
    },
    {
      id: 2,
      attributes: {
        name: 'Twitter',
        link: 'https://twitter.com/rezaageng_',
        createdAt: '2023-07-12T08:49:58.704Z',
        updatedAt: '2023-07-12T08:49:58.704Z'
      }
    },
    {
      id: 3,
      attributes: {
        name: 'Instagram',
        link: 'https://www.instagram.com/rezaageng_/',
        createdAt: '2023-07-12T08:51:06.458Z',
        updatedAt: '2023-07-12T08:51:06.458Z'
      }
    },
    {
      id: 4,
      attributes: {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/rezaageng/',
        createdAt: '2023-07-12T08:51:56.319Z',
        updatedAt: '2023-07-12T08:51:56.319Z'
      }
    },
    {
      id: 5,
      attributes: {
        name: 'Email',
        link: 'mailto:rezaageng47@gmail.com',
        createdAt: '2023-07-12T08:54:11.453Z',
        updatedAt: '2023-07-12T08:54:11.453Z'
      }
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 5
    }
  }
}

export default contactsResponse
