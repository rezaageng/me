import { type MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://rezaa.me',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  },
  {
    url: 'https://rezaa.me/projects',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://rezaa.me/about',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  }
]

export default sitemap
