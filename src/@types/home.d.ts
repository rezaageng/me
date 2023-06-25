// * API
interface HomeResponse {
  data: {
    id: number
    attributes: {
      title: string
      subtitle: string
      summary: string
      anotherSide: string
      createdAt: string
      publishedAt: string
      updatedAt: string
    }
  } | null
}
