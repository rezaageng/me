interface Experience {
  id: number
  attributes: {
    title: string
    employmentType: string
    companyName: string | null
    location: string | null
    locationType: string | null
    startDate: string
    endDate: string | null
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
