'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { getBreadcrumbSchema } from '@/lib/schema'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

// Generate breadcrumbs for different page types
export function generateBreadcrumbs(type: string, params: any): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = []
  
  switch (type) {
    case 'city':
      breadcrumbs.push({ name: 'Cities', url: '/cities' })
      if (params.cityName) {
        breadcrumbs.push({ 
          name: params.cityName, 
          url: `/cities/${params.slug}` 
        })
      }
      break
    
    case 'service':
      breadcrumbs.push({ name: 'Services', url: '/services' })
      if (params.serviceName) {
        breadcrumbs.push({ 
          name: params.serviceName, 
          url: `/services/${params.slug}` 
        })
      }
      break
    
    case 'service-city':
      breadcrumbs.push({ name: 'Services', url: '/services' })
      if (params.serviceName) {
        breadcrumbs.push({ 
          name: params.serviceName, 
          url: `/services/${params.serviceSlug}` 
        })
      }
      if (params.cityName) {
        breadcrumbs.push({ 
          name: `${params.serviceName} in ${params.cityName}`, 
          url: `/services/${params.serviceSlug}/${params.citySlug}` 
        })
      }
      break
    
    case 'county':
      breadcrumbs.push({ name: 'Counties', url: '/counties' })
      if (params.countyName) {
        breadcrumbs.push({ 
          name: params.countyName, 
          url: `/counties/${params.slug}` 
        })
      }
      break
    
    default:
      break
  }
  
  return breadcrumbs
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include Home as the first item
  const allItems = [
    { name: 'Home', url: 'https://www.shimmershinepropertydetailing.com' },
    ...items
  ]

  const breadcrumbSchema = getBreadcrumbSchema(allItems)

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
        aria-label="Breadcrumb"
      >
        <Link 
          href="/" 
          className="flex items-center hover:text-blue-600 transition-colors"
          aria-label="Go to homepage"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {index === items.length - 1 ? (
              // Current page - not a link
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              // Intermediate pages - links
              <Link 
                href={item.url.replace('https://www.shimmershinepropertydetailing.com', '')}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}


