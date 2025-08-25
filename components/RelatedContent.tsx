'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, MapPin, Wrench, FileText } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

interface RelatedContentProps {
  currentPage: string
  currentSlug?: string
  cityName?: string
  serviceName?: string
  className?: string
}

interface ContentSuggestion {
  title: string
  description: string
  url: string
  type: 'service' | 'city' | 'blog' | 'page'
  icon: React.ReactNode
}

export default function RelatedContent({ 
  currentPage, 
  currentSlug, 
  cityName, 
  serviceName,
  className = ''
}: RelatedContentProps) {
  
  const generateSuggestions = (): ContentSuggestion[] => {
    const suggestions: ContentSuggestion[] = []

    switch (currentPage) {
      case 'service':
        // For service pages, suggest related services and city pages
        const currentService = SERVICES.find(s => s.id === currentSlug)
        if (currentService) {
          // Related services in same category
          const relatedServices = SERVICES
            .filter(s => s.id !== currentSlug && s.category === currentService.category)
            .slice(0, 2)
          
          relatedServices.forEach(service => {
            suggestions.push({
              title: service.name,
              description: `Professional ${service.name.toLowerCase()} services in Orange County, LA & San Diego`,
              url: `/services/${service.id}`,
              type: 'service',
              icon: <Wrench className="w-5 h-5" />
            })
          })

          // Popular city pages for this service
          const popularCities = ['costa-mesa', 'newport-beach', 'irvine', 'santa-ana']
          popularCities.slice(0, 2).forEach(city => {
            const cityDisplay = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
            suggestions.push({
              title: `${serviceName} in ${cityDisplay}`,
              description: `Professional ${serviceName?.toLowerCase()} services in ${cityDisplay}, California`,
              url: `/cities/${city}`,
              type: 'city',
              icon: <MapPin className="w-5 h-5" />
            })
          })
        }
        break

      case 'city':
        // For city pages, suggest popular services and nearby cities
        const popularServices = ['window-cleaning', 'pressure-washing', 'solar-panel-cleaning']
        popularServices.slice(0, 2).forEach(serviceId => {
          const service = SERVICES.find(s => s.id === serviceId)
          if (service) {
            suggestions.push({
              title: `${service.name} in ${cityName}`,
              description: `Professional ${service.name.toLowerCase()} services in ${cityName}`,
              url: `/services/${serviceId}`,
              type: 'service',
              icon: <Wrench className="w-5 h-5" />
            })
          }
        })

        // Nearby cities (simplified logic)
        const nearbyCities = ['costa-mesa', 'newport-beach', 'irvine', 'huntington-beach']
          .filter(city => city !== currentSlug)
          .slice(0, 2)
        
        nearbyCities.forEach(city => {
          const cityDisplay = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          suggestions.push({
            title: `Property Cleaning in ${cityDisplay}`,
            description: `Professional window cleaning and pressure washing in ${cityDisplay}`,
            url: `/cities/${city}`,
            type: 'city',
            icon: <MapPin className="w-5 h-5" />
          })
        })
        break

      case 'blog':
        // For blog pages, suggest related services and popular cities
        suggestions.push(
          {
            title: 'Window Cleaning Services',
            description: 'Professional window cleaning for residential and commercial properties',
            url: '/services/window-cleaning',
            type: 'service',
            icon: <Wrench className="w-5 h-5" />
          },
          {
            title: 'Pressure Washing Services',
            description: 'Deep cleaning for driveways, patios, and building exteriors',
            url: '/services/pressure-washing',
            type: 'service',
            icon: <Wrench className="w-5 h-5" />
          },
          {
            title: 'Orange County Services',
            description: 'Professional property detailing throughout Orange County',
            url: '/cities/costa-mesa',
            type: 'city',
            icon: <MapPin className="w-5 h-5" />
          }
        )
        break

      case 'home':
        // For homepage, suggest popular services and areas
        suggestions.push(
          {
            title: 'Our Services',
            description: 'Complete range of professional property detailing services',
            url: '/services',
            type: 'page',
            icon: <Wrench className="w-5 h-5" />
          },
          {
            title: 'Service Areas',
            description: 'We serve over 139 cities across Southern California',
            url: '/cities',
            type: 'page',
            icon: <MapPin className="w-5 h-5" />
          },
          {
            title: 'Property Maintenance Blog',
            description: 'Expert tips and guides for property care and maintenance',
            url: '/blog',
            type: 'page',
            icon: <FileText className="w-5 h-5" />
          }
        )
        break

      default:
        // Default suggestions for other pages
        suggestions.push(
          {
            title: 'Window Cleaning Services',
            description: 'Crystal-clear windows for residential and commercial properties',
            url: '/services/window-cleaning',
            type: 'service',
            icon: <Wrench className="w-5 h-5" />
          },
          {
            title: 'Costa Mesa Services',
            description: 'Professional property detailing in Costa Mesa, CA',
            url: '/cities/costa-mesa',
            type: 'city',
            icon: <MapPin className="w-5 h-5" />
          }
        )
    }

    return suggestions.slice(0, 4) // Limit to 4 suggestions
  }

  const suggestions = generateSuggestions()

  if (suggestions.length === 0) return null

  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="heading-primary text-2xl md:text-3xl text-navy mb-2">
              You Might Also Be Interested In
            </h3>
            <p className="body-text text-gray-600">
              Explore our related services and service areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestions.map((suggestion, index) => (
              <Link key={index} href={suggestion.url} className="group">
                <Card className="h-full retro-card hover:shadow-retro-yellow transition-all duration-300 group-hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-navy group-hover:text-yellow transition-colors">
                        {suggestion.icon}
                      </div>
                      <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                        {suggestion.type}
                      </span>
                    </div>
                    <CardTitle className="heading-primary text-lg text-navy group-hover:text-yellow transition-colors">
                      {suggestion.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="body-text text-gray-600 mb-3">
                      {suggestion.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-navy group-hover:text-yellow transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
