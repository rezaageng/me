import { type Meta, type ApiImage } from '.'
import { type Skill } from './skills'

interface Project {
  id: number
  attributes: {
    name: string
    type: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    repository: string | null
    website: string | null
    websiteLabel: string | null
    slug: string
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

interface ProjectResponse {
  data: Project
  meta: Meta
}
