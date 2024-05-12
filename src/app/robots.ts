import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: 'https://blueboost.co/sitemap.xml',
    host: 'https://blueboost.co'
  }
}
