import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/'
  },
  sitemap: 'https://rezaa.me/sitemap.xml'
})

export default robots
