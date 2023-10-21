import { type Seo } from '.'

interface SeoPage {
  data: {
    id: number
    attributes: {
      publishedAt: string
      updatedAt: string
      seo: Seo
    }
  }
}
