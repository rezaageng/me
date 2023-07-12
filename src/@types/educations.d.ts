import type { Meta } from '.'

interface Education {
  id: number
  attributes: {
    name: string
    degree: string | null
    study: string
    gpa: number | null
    location: string
    startDate: string
    endDate: string
    description: string
    createdAt: string
    updatedAt: string
  }
}

interface EducationsResponse {
  data: Education[]
  meta: Meta
}
