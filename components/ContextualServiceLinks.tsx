import Link from 'next/link'
import { SERVICES, BUSINESS_INFO } from '@/lib/constants'

interface ContextualServiceLinksProps {
  currentService?: string
  currentCity?: string
  maxLinks?: number
  className?: string
  showTitle?: boolean
}

export default function ContextualServiceLinks({ 
  currentService, 
  currentCity, 
  maxLinks = 3,
  className = "",
  showTitle = true
}: ContextualServiceLinksProps) {
  
  // Get relevant services (exclude current service)
  const relevantServices = SERVICES.filter(service => service.id !== currentService)
    .slice(0, maxLinks)

  // Generate contextual anchor text based on city and service
  const generateAnchorText = (serviceId: string, serviceName: string) => {
    if (currentCity) {
      // City-specific anchor text
      const cityFormatted = currentCity.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      
      switch (serviceId) {
        case 'window-cleaning':
          return `${cityFormatted} window cleaning services`
        case 'pressure-washing':
          return `pressure washing in ${cityFormatted}`
        case 'solar-panel-cleaning':
          return `${cityFormatted} solar panel cleaning`
        case 'gutter-cleaning':
          return `gutter cleaning in ${cityFormatted}`
        case 'post-construction-cleanup':
          return `${cityFormatted} construction cleanup`
        case 'commercial-cleaning':
          return `${cityFormatted} commercial cleaning services`
        default:
          return `${serviceName} in ${cityFormatted}`
      }
    } else {
      // Generic service anchor text
      switch (serviceId) {
        case 'window-cleaning':
          return 'professional window cleaning services'
        case 'pressure-washing':
          return 'expert pressure washing services'
        case 'solar-panel-cleaning':
          return 'solar panel cleaning and maintenance'
        case 'gutter-cleaning':
          return 'professional gutter cleaning'
        case 'post-construction-cleanup':
          return 'post-construction cleanup services'
        case 'commercial-cleaning':
          return 'commercial cleaning solutions'
        default:
          return `professional ${serviceName.toLowerCase()}`
      }
    }
  }

  if (relevantServices.length === 0) return null

  return (
    <div className={`space-y-3 ${className}`}>
      {showTitle && (
        <h3 className="text-lg font-semibold text-navy mb-3">
          {currentCity ? `Other Services in ${currentCity.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}` : 'Related Services'}
        </h3>
      )}
      
      <div className="space-y-2">
        {relevantServices.map((service) => (
          <div key={service.id} className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-yellow rounded-full mt-2 flex-shrink-0" />
            <Link 
              href={`/services/${service.id}`}
              className="text-navy hover:text-yellow transition-colors font-medium"
            >
              {generateAnchorText(service.id, service.name)}
            </Link>
          </div>
        ))}
      </div>
      
      {currentCity && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <Link 
            href={`/cities/${currentCity}`}
            className="text-sm text-gray-600 hover:text-navy transition-colors"
          >
            View all services in {currentCity.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} →
          </Link>
        </div>
      )}
    </div>
  )
}
