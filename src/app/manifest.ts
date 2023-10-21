import { type MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: 'rezaa',
  short_name: 'rezaa',
  description: 'A Personal portfolio website',
  background_color: '#0D0409',
  theme_color: '#0D0409',
  categories: ['portfolio', 'personal', 'projects', 'resume', 'contact'],
  display: 'standalone',
  start_url: '/',
  lang: 'en',
  icons: [
    {
      src: '/favicon.ico',
      sizes: 'any',
      type: 'image/x-icon',
      purpose: 'any'
    }
  ]
})

export default manifest
