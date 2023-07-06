import { type Meta, type ApiImage } from '.'

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
    cover: {
      data: ApiImage
    }
  }
}

interface ProjectsResponse {
  data: Project[]
  meta: Meta
}
