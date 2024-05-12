import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/app/lib/blog'

let staticRoutes = [
  '',
  '/blog',
  '/about',
  '/contact',
  '/services/seo',
  '/services/seo-content',
  '/method',
  '/legal/privacy-policy',
  '/legal/terms-and-conditions'
]

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs = getBlogPosts().map(post => ({
    url: `https://blueboost.co/blog/${post.slug}`,
    lastModified: post.metadata.updatedAt
  }))

  let routes = staticRoutes.map(route => ({
    url: `https://blueboost.co${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogs]
}
