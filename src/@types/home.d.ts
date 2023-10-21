import { type Seo, type Meta } from '.'

// * API
interface HomeResponse {
  data: {
    id: number
    attributes: {
      title: string
      subtitle: string
      shortSummary: string
      summary: string
      anotherSide: string
      createdAt: string
      publishedAt: string
      updatedAt: string
      seo: Seo
    }
  }
  meta?: Meta
}
