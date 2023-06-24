// * API
interface HomeResponse {
  data: {
    id: number
    attributes: {
      title: string
      subtitle: string
      description: string
      anotherSide: string
      createdAt: string
      publishedAt: string
      updatedAt: string
    }
  } | null
}
