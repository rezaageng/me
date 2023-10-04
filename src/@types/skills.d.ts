import { type Meta } from '.'

interface Skill {
  id: number
  attributes: {
    name: string
    createdAt: string
    updatedAt: string
  }
}

interface SkillCategory {
  id: number
  attributes: {
    category: string
    createdAt: string
    updatedAt: string
    skills: {
      data: Skill[]
    }
  }
}

interface SkillCategoriesResponse {
  data: SkillCategory[]
  meta: Meta
}
