import { type Meta, type ApiImage, type Seo } from '.'
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
    shortDescription: string
    skills: {
      data: Skill[]
    }
    cover: {
      data: ApiImage
    }
    seo: Seo
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
