// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337'
      },
      {
        protocol: 'https',
        hostname: 'me-space.sgp1.digitaloceanspaces.com'
      }
    ]
  }
}

export default withPlaiceholder(nextConfig)
