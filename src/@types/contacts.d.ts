import { type Meta } from '.'

interface Contact {
  id: number
  attributes: {
    name: string
    link: string
    createdAt: string
    updatedAt: string
  }
}

interface ContactsResponse {
  data: Contact[]
  meta: Meta
}
