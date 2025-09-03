import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen } from 'lucide-react'

interface RelatedContentLinksProps {
  currentPage: 'service' | 'city' | 'blog'
  context: {
    service?: string
    city?: string
    category?: string
  }
  maxLinks?: number
  className?: string
  showTitle?: boolean
}

// Blog posts data (matching the existing blog structure)
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Professional Window Cleaning in Orange County",
    slug: "window-cleaning-orange-county-guide",
    excerpt: "Everything you need to know about window cleaning services in Costa Mesa, Newport Beach, Irvine, and throughout Orange County.",
    category: "Window Cleaning Tips",
    tags: ["Orange County", "Window Cleaning", "Costa Mesa", "Newport Beach", "Irvine"],
    services: ["window-cleaning"],
    cities: ["costa-mesa", "newport-beach", "irvine"]
  },
  {
    id: 2,
    title: "Ultimate Guide to Pressure Washing in Los Angeles County",
    slug: "pressure-washing-los-angeles-county",
    excerpt: "Professional pressure washing services for driveways, patios, and exteriors in Beverly Hills, Santa Monica, Manhattan Beach, and throughout LA County.",
    category: "Pressure Washing Guide",
    tags: ["Los Angeles County", "Pressure Washing", "Beverly Hills", "Santa Monica", "Manhattan Beach"],
    services: ["pressure-washing"],
    cities: ["beverly-hills", "santa-monica", "manhattan-beach"]
  },
  {
    id: 3,
    title: "Complete Gutter Cleaning Guide for San Diego County Properties",
    slug: "gutter-cleaning-san-diego-county",
    excerpt: "Professional gutter cleaning and maintenance services in San Diego, La Jolla, Encinitas, Carlsbad, and throughout San Diego County.",
    category: "Gutter Care",
    tags: ["San Diego County", "Gutter Cleaning", "La Jolla", "Encinitas", "Carlsbad"],
    services: ["gutter-cleaning"],
    cities: ["san-diego", "la-jolla", "encinitas", "carlsbad"]
  },
  {
    id: 4,
    title: "Solar Panel Cleaning: Maximize Your Energy Efficiency",
    slug: "solar-panel-cleaning-efficiency-guide",
    excerpt: "Learn how professional solar panel cleaning can increase your energy output by up to 30% and protect your solar investment.",
    category: "Solar Panel Maintenance",
    tags: ["Solar Panel Cleaning", "Energy Efficiency", "Solar Maintenance"],
    services: ["solar-panel-cleaning"],
    cities: ["irvine", "costa-mesa", "newport-beach"]
  },
  {
    id: 5,
    title: "Post-Construction Cleanup: Making Your Space Move-In Ready",
    slug: "post-construction-cleanup-guide",
    excerpt: "Complete guide to post-construction cleanup services for new builds and renovations in Orange County.",
    category: "Commercial Services",
    tags: ["Post-Construction", "Commercial Cleaning", "New Construction"],
    services: ["post-construction-cleanup", "commercial-cleaning"],
    cities: ["orange-county"]
  },
  {
    id: 6,
    title: "Commercial Window Cleaning: Maintaining Professional Appearance",
    slug: "commercial-window-cleaning-guide",
    excerpt: "Professional commercial window cleaning services for offices, retail, and industrial properties throughout Southern California.",
    category: "Commercial Services",
    tags: ["Commercial Cleaning", "Window Cleaning", "Business Services"],
    services: ["commercial-cleaning", "window-cleaning"],
    cities: ["orange-county", "los-angeles"]
  }
]

export default function RelatedContentLinks({ 
  currentPage, 
  context, 
  maxLinks = 4,
  className = "",
  showTitle = true
}: RelatedContentLinksProps) {
  
  // Filter relevant blog posts based on context
  const getRelevantPosts = () => {
    let relevantPosts = [...blogPosts]
    
    // Filter by service if provided
    if (context.service) {
      relevantPosts = relevantPosts.filter(post => 
        post.services.includes(context.service!)
      )
    }
    
    // Filter by city if provided
    if (context.city) {
      const citySlug = context.city.toLowerCase().replace(/\s+/g, '-')
      relevantPosts = relevantPosts.filter(post => 
        post.cities.includes(citySlug) || 
        post.cities.includes('orange-county') ||
        post.cities.includes('los-angeles') ||
        post.cities.includes('san-diego')
      )
    }
    
    // Filter by category if provided
    if (context.category) {
      relevantPosts = relevantPosts.filter(post => 
        post.category === context.category
      )
    }
    
    // If no specific matches, return general posts
    if (relevantPosts.length === 0) {
      relevantPosts = blogPosts.slice(0, 3)
    }
    
    return relevantPosts.slice(0, maxLinks)
  }

  // Generate contextual anchor text for blog links
  const generateBlogAnchorText = (post: typeof blogPosts[0]) => {
    if (currentPage === 'service' && context.service) {
      switch (context.service) {
        case 'window-cleaning':
          return 'complete window cleaning guide'
        case 'pressure-washing':
          return 'pressure washing best practices'
        case 'solar-panel-cleaning':
          return 'solar panel maintenance tips'
        case 'gutter-cleaning':
          return 'gutter cleaning guide'
        default:
          return 'professional cleaning tips'
      }
    }
    
    if (currentPage === 'city' && context.city) {
      const cityName = context.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      return `cleaning tips for ${cityName} properties`
    }
    
    return post.title
  }

  // Generate service/city recommendations based on blog content
  const getServiceCityRecommendations = () => {
    const recommendations = []
    
    if (currentPage === 'blog') {
      // From blog posts, recommend relevant services and cities
      if (context.service) {
        recommendations.push({
          type: 'service',
          href: `/services/${context.service}`,
          text: `professional ${context.service.replace(/-/g, ' ')} services`,
          cta: 'Get Free Quote'
        })
      }
      
      if (context.city) {
        recommendations.push({
          type: 'city',
          href: `/cities/${context.city}`,
          text: `${context.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} cleaning services`,
          cta: 'View Services'
        })
      }
    }
    
    return recommendations.slice(0, 2)
  }

  const relevantPosts = getRelevantPosts()
  const serviceRecommendations = getServiceCityRecommendations()

  if (relevantPosts.length === 0 && serviceRecommendations.length === 0) return null

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Blog Posts Section */}
      {relevantPosts.length > 0 && (
        <div>
          {showTitle && (
            <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-yellow" />
              {currentPage === 'blog' ? 'Related Articles' : 'Helpful Resources'}
            </h3>
          )}
          
          <div className="space-y-3">
            {relevantPosts.map((post) => (
              <Card key={post.id} className="border-l-4 border-l-yellow hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-navy hover:text-yellow transition-colors font-medium block mb-1"
                      >
                        {generateBlogAnchorText(post)}
                      </Link>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                      <div className="text-xs text-gray-500">
                        {post.category}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Service/City Recommendations */}
      {serviceRecommendations.length > 0 && (
        <div>
          {showTitle && relevantPosts.length > 0 && (
            <h4 className="text-md font-semibold text-navy mb-3 mt-6">
              Ready to Get Started?
            </h4>
          )}
          
          <div className="space-y-2">
            {serviceRecommendations.map((rec, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Link 
                  href={rec.href}
                  className="text-navy hover:text-yellow transition-colors font-medium flex-1"
                >
                  {rec.text}
                </Link>
                <Link 
                  href={rec.href}
                  className="text-xs bg-yellow text-navy px-3 py-1 rounded-full hover:bg-yellow/80 transition-colors ml-3"
                >
                  {rec.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View All Links */}
      <div className="pt-3 border-t border-gray-200">
        <Link 
          href="/blog"
          className="text-sm text-gray-600 hover:text-navy transition-colors"
        >
          View all cleaning tips and guides →
        </Link>
      </div>
    </div>
  )
}
