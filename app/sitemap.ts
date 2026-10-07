import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data'
import { siteUrl } from './layout'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}`, lastModified: new Date() })),
  ]
}
