import { type ApiImage } from '.'

interface Project {
  id: number
  attributes: {
    name: string
    type: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    skills: {
      data: Skill[]
    }
    cover: ApiImage
  }
}

interface ProjectsResponse {
  data: Project[]
  meta: Meta
}
