import { MetadataRoute } from 'next'

const SITE_URL = 'https://cartolink-internship.vercel.app/' // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add more pages as needed, for example:
    // {
    //   url: `${SITE_URL}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
