interface Experience {
  id: number
  attributes: {
    title: string
    employmentType: string
    company: string
    location: string
    locationType: string
    startDate: string
    endDate: string
    currentlyEmployed: boolean
    description: string
    createdAt: string
    updatedAt: string
  }
}

interface ExperiencesResponse {
  data: Experience[]
  meta: Meta
}
