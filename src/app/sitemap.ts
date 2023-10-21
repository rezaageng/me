import { type MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://rezaa.me/',
    lastModified: new Date()
  },
  {
    url: 'https://rezaa.me/projects',
    lastModified: new Date()
  },
  {
    url: 'https://rezaa.me/about',
    lastModified: new Date()
  }
]

export default sitemap
