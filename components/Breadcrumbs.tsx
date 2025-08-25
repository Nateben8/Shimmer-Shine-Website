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

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include Home as the first item
  const allItems = [
    { name: 'Home', url: 'https://shimmershinepd.com' },
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
                href={item.url.replace('https://shimmershinepd.com', '')}
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

// Helper function to generate breadcrumbs for different page types
export function generateBreadcrumbs(pageType: string, params?: any): BreadcrumbItem[] {
  switch (pageType) {
    case 'services':
      return [
        { name: 'Services', url: 'https://shimmershinepd.com/services' }
      ]
    
    case 'service':
      const serviceName = params?.serviceName || 'Service'
      return [
        { name: 'Services', url: 'https://shimmershinepd.com/services' },
        { name: serviceName, url: `https://shimmershinepd.com/services/${params?.slug}` }
      ]
    
    case 'cities':
      return [
        { name: 'Service Areas', url: 'https://shimmershinepd.com/cities' }
      ]
    
    case 'city':
      const cityName = params?.cityName || 'City'
      return [
        { name: 'Service Areas', url: 'https://shimmershinepd.com/cities' },
        { name: cityName, url: `https://shimmershinepd.com/cities/${params?.slug}` }
      ]
    
    case 'blog':
      return [
        { name: 'Blog', url: 'https://shimmershinepd.com/blog' }
      ]
    
    case 'blog-post':
      const postTitle = params?.title || 'Blog Post'
      return [
        { name: 'Blog', url: 'https://shimmershinepd.com/blog' },
        { name: postTitle, url: `https://shimmershinepd.com/blog/${params?.slug}` }
      ]
    
    case 'blog-category':
      const categoryName = params?.categoryName || 'Category'
      return [
        { name: 'Blog', url: 'https://shimmershinepd.com/blog' },
        { name: categoryName, url: `https://shimmershinepd.com/blog/category/${params?.slug}` }
      ]
    
    case 'about':
      return [
        { name: 'About Us', url: 'https://shimmershinepd.com/about' }
      ]
    
    case 'gallery':
      return [
        { name: 'Gallery', url: 'https://shimmershinepd.com/gallery' }
      ]
    
    case 'get-a-quote':
      return [
        { name: 'Get a Quote', url: 'https://shimmershinepd.com/get-a-quote' }
      ]
    
    case 'privacy-policy':
      return [
        { name: 'Privacy Policy', url: 'https://shimmershinepd.com/privacy-policy' }
      ]
    
    case 'terms-of-service':
      return [
        { name: 'Terms of Service', url: 'https://shimmershinepd.com/terms-of-service' }
      ]
    
    case 'sitemap':
      return [
        { name: 'Sitemap', url: 'https://shimmershinepd.com/sitemap' }
      ]
    
    default:
      return []
  }
}
