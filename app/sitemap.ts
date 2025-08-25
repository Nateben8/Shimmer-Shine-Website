import { MetadataRoute } from 'next'
import { SERVICES, BUSINESS_INFO, SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // City pages
  const cityPages = BUSINESS_INFO.cities.map((city) => ({
    url: `${baseUrl}/cities/${city.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Service + City combinations (high-value local SEO pages)
  const serviceCityPages = []
  for (const service of SERVICES.slice(0, 4)) { // Top 4 services
    for (const city of BUSINESS_INFO.cities.slice(0, 10)) { // Top 10 cities
      serviceCityPages.push({
        url: `${baseUrl}/services/${service.id}/${city.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  // Blog category pages
  const blogCategories = [
    'window-cleaning-tips',
    'pressure-washing-guide',
    'solar-panel-maintenance',
    'gutter-care',
    'property-maintenance',
    'seasonal-cleaning',
    'commercial-services',
    'before-after'
  ]

  const blogCategoryPages = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Real blog posts
  const blogPosts = [
    'window-cleaning-orange-county-guide',
    'pressure-washing-los-angeles-county',
    'gutter-cleaning-san-diego-county',
    'solar-panel-cleaning-southern-california',
    'post-construction-cleanup-orange-county',
    'commercial-property-maintenance-los-angeles',
    'seasonal-property-maintenance-san-diego',
    'eco-friendly-cleaning-southern-california',
    'residential-window-cleaning-san-diego',
    'commercial-window-cleaning-los-angeles',
    'driveway-pressure-washing-orange-county',
    'concrete-pressure-washing-san-diego',
    'gutter-repair-orange-county',
    'gutter-installation-los-angeles',
    'solar-panel-efficiency-orange-county',
    'solar-panel-maintenance-los-angeles',
    'exterior-house-washing-orange-county',
    'roof-cleaning-los-angeles',
    'spring-cleaning-orange-county',
    'fall-property-preparation-los-angeles',
    'restaurant-cleaning-orange-county',
    'office-building-cleaning-san-diego',
    'amazing-transformations-orange-county',
    'cleaning-results-showcase-los-angeles'
  ]

  const blogPostPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  }))

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    },
  ]

  // Combine all pages
  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...serviceCityPages,
    ...blogCategoryPages,
    ...blogPostPages,
    ...legalPages,
  ]
}
