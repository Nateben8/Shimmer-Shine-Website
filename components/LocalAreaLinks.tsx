import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

interface LocalAreaLinksProps {
  currentCity?: string
  serviceType?: string
  showNearby?: boolean
  maxLinks?: number
  className?: string
  showTitle?: boolean
}

export default function LocalAreaLinks({ 
  currentCity, 
  serviceType, 
  showNearby = true, 
  maxLinks = 5,
  className = "",
  showTitle = true
}: LocalAreaLinksProps) {
  
  // Create city slug from name
  const createCitySlug = (cityName: string) => {
    return cityName.toLowerCase().replace(/\s+/g, '-')
  }

  // Get nearby cities based on current city
  const getNearbyCities = (currentCityName?: string) => {
    if (!currentCityName) return []
    
    const currentCityFormatted = currentCityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    
    // Define city clusters for nearby recommendations
    const cityClusters = {
      'Orange County Central': ['Costa Mesa', 'Newport Beach', 'Irvine', 'Tustin', 'Santa Ana'],
      'Orange County Beach': ['Huntington Beach', 'Newport Beach', 'Laguna Beach', 'Dana Point', 'San Clemente'],
      'Orange County North': ['Anaheim', 'Fullerton', 'Brea', 'Yorba Linda', 'Placentia'],
      'Orange County South': ['Mission Viejo', 'Laguna Hills', 'Aliso Viejo', 'Lake Forest', 'Rancho Santa Margarita'],
      'LA County Beach': ['Manhattan Beach', 'Redondo Beach', 'Hermosa Beach', 'El Segundo', 'Torrance'],
      'LA County West': ['Santa Monica', 'Venice', 'Culver City', 'Beverly Hills', 'West Hollywood'],
      'San Diego County North': ['Encinitas', 'Carlsbad', 'Solana Beach', 'Del Mar', 'Rancho Bernardo'],
      'San Diego County Central': ['San Diego', 'La Jolla', 'Pacific Beach', 'Mission Beach', 'Hillcrest']
    }

    // Find which cluster the current city belongs to
    let nearbyFromCluster: string[] = []
    for (const [cluster, cities] of Object.entries(cityClusters)) {
      if (cities.includes(currentCityFormatted)) {
        nearbyFromCluster = cities.filter(city => city !== currentCityFormatted)
        break
      }
    }

    // If not in a cluster, get popular nearby cities
    if (nearbyFromCluster.length === 0) {
      const popularCities = ['Costa Mesa', 'Newport Beach', 'Irvine', 'Santa Ana', 'Anaheim', 'Huntington Beach']
      nearbyFromCluster = popularCities.filter(city => city !== currentCityFormatted)
    }

    return nearbyFromCluster.slice(0, maxLinks)
  }

  // Get featured cities if no current city
  const getFeaturedCities = () => {
    const featuredCities = [
      'Costa Mesa', 'Newport Beach', 'Irvine', 'Santa Ana', 'Anaheim', 
      'Huntington Beach', 'Beverly Hills', 'Santa Monica', 'San Diego', 'La Jolla'
    ]
    return featuredCities.slice(0, maxLinks)
  }

  // Generate contextual anchor text
  const generateAnchorText = (cityName: string) => {
    const serviceName = serviceType || 'cleaning services'
    
    switch (serviceType) {
      case 'window-cleaning':
        return `window cleaning in ${cityName}`
      case 'pressure-washing':
        return `${cityName} pressure washing`
      case 'solar-panel-cleaning':
        return `solar panel cleaning ${cityName}`
      case 'gutter-cleaning':
        return `gutter cleaning in ${cityName}`
      case 'post-construction-cleanup':
        return `${cityName} construction cleanup`
      case 'commercial-cleaning':
        return `${cityName} commercial cleaning`
      default:
        return `${serviceName} in ${cityName}`
    }
  }

  const citiesToShow = showNearby && currentCity 
    ? getNearbyCities(currentCity)
    : getFeaturedCities()

  if (citiesToShow.length === 0) return null

  return (
    <div className={`space-y-3 ${className}`}>
      {showTitle && (
        <h3 className="text-lg font-semibold text-navy mb-3">
          {currentCity ? 'Nearby Service Areas' : 'Popular Service Areas'}
        </h3>
      )}
      
      <div className="space-y-2">
        {citiesToShow.map((cityName) => (
          <div key={cityName} className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-yellow rounded-full mt-2 flex-shrink-0" />
            <Link 
              href={`/cities/${createCitySlug(cityName)}`}
              className="text-navy hover:text-yellow transition-colors font-medium"
            >
              {generateAnchorText(cityName)}
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <Link 
          href="/cities"
          className="text-sm text-gray-600 hover:text-navy transition-colors"
        >
          View all service areas →
        </Link>
      </div>
    </div>
  )
}
