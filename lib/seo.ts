import { Metadata } from "next"
import { SITE_CONFIG, BUSINESS_INFO, SERVICES } from "./constants"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  canonical?: string
  other?: Record<string, string>
}

export function generateSEO({
  title,
  description = SITE_CONFIG.description,
  keywords = [], // Will be removed from output
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  noindex = false,
  canonical,
  other = {}
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title}` : SITE_CONFIG.name
  const fullUrl = url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    // Meta keywords removed - ignored by major search engines
    authors: [{ name: BUSINESS_INFO.name }],
    creator: BUSINESS_INFO.name,
    publisher: BUSINESS_INFO.name,
    robots: noindex ? "noindex,nofollow" : "index,follow",
    alternates: {
      canonical: canonical || fullUrl
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name
        }
      ],
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@shimmershinepd"
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID,
      yandex: process.env.YANDEX_VERIFICATION_ID,
      yahoo: process.env.YAHOO_VERIFICATION_ID
    },
    other: {
      // Enhanced geo-targeting meta tags
      'geo.region': 'US-CA',
      'geo.placename': 'Orange County, California',
      'geo.position': '33.7175;-117.8311',
      'ICBM': '33.7175, -117.8311',
      // Business-specific meta tags
      'business.hours': 'Mo-Fr 07:00-18:00, Sa 08:00-16:00',
      'business.phone': '(714) 497-0035',
      'business.email': 'support@shimmershinepropertydetailing.com',
      // Enhanced SEO meta tags
      'revisit-after': '7 days',
      'rating': 'general',
      'distribution': 'global',
      'language': 'en-US',
      'copyright': `© ${new Date().getFullYear()} ${SITE_CONFIG.name}`,
      // Local business verification
      'verify-v1': 'shimmer-shine-property-detailing-orange-county',
      // Mobile optimization
      'format-detection': 'telephone=yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': SITE_CONFIG.name,
    }
  }

  // Add article-specific metadata
  if (type === "article") {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: author ? [author] : [BUSINESS_INFO.name],
      section,
      tags
    }
  }

  // Add other metadata
  if (Object.keys(other).length > 0) {
    metadata.other = {
      ...metadata.other,
      ...other
    }
  }

  return metadata
}

export function getPageSEO(page: string, city?: string) {
  const cityName = city ? city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : ''
  
  switch (page) {
                case 'home':
      return generateSEO({
        title: `Window Cleaning Orange County – Shimmer Shine`,
        description: `Professional window cleaning & pressure washing in Orange County. Same-day service, licensed & insured. Get your free quote today!`,
        canonical: SITE_CONFIG.url
      })

    case 'get-a-quote':
      return generateSEO({
        title: `Free Quote Orange County – Window Cleaning`,
        description: `Get your free quote in 60 seconds! Same-day window cleaning & pressure washing in Orange County. Licensed & insured. Call now!`,
        canonical: `${SITE_CONFIG.url}/get-a-quote`
      })

    case 'services':
      return generateSEO({
        title: `Cleaning Services Southern California – Shimmer Shine`,
        description: `Complete property cleaning: windows, pressure washing, solar panels & gutters. Licensed & insured. Same-day service available. Get free quote!`,
        canonical: `${SITE_CONFIG.url}/services`
      })

    case 'about':
      return generateSEO({
        title: `About Shimmer Shine Orange County – Since 2021`,
        description: `Family-owned cleaning company serving Orange County since 2021. Licensed & insured window cleaning, pressure washing. 500+ satisfied customers. Learn more!`,
        canonical: `${SITE_CONFIG.url}/about`
      })

    case 'blog':
      return generateSEO({
        title: `Cleaning Tips Orange County – Shimmer Shine Blog`,
        description: `Expert cleaning tips for Orange County properties. Window cleaning, pressure washing & maintenance guides from licensed professionals. Read now!`,
        canonical: `${SITE_CONFIG.url}/blog`
      })

    case 'cities':
      return generateSEO({
        title: `Service Areas Orange County – Shimmer Shine`,
        description: `Professional window cleaning & pressure washing in 139+ cities across Orange County, LA & San Diego. Find your city & get free quote today!`,
        canonical: `${SITE_CONFIG.url}/cities`
      })

    case 'gallery':
      return generateSEO({
        title: `Before & After Gallery Orange County – Shimmer Shine`,
        description: `Amazing before & after cleaning results in Orange County. Window cleaning, pressure washing transformations. See why we're 5-star rated!`,
        canonical: `${SITE_CONFIG.url}/gallery`
      })

    case 'privacy-policy':
      return generateSEO({
        title: `Privacy Policy – Shimmer Shine Orange County`,
        description: `Privacy policy for Shimmer Shine Property Detailing. Learn how we protect your personal information when using our cleaning services.`,
        canonical: `${SITE_CONFIG.url}/privacy-policy`,
        noindex: true
      })

    case 'terms-of-service':
      return generateSEO({
        title: `Terms of Service – Shimmer Shine Orange County`,
        description: `Terms of service for Shimmer Shine cleaning services in Orange County, Los Angeles, and San Diego. Service agreements and policies.`,
        canonical: `${SITE_CONFIG.url}/terms-of-service`,
        noindex: true
      })

    default:
      return generateSEO()
  }
}

export function getServiceSEO(serviceId: string, city?: string) {
  const cityName = city ? city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Orange County'
  
  const serviceData = {
    'window-cleaning': {
      title: `Window Cleaning ${cityName} – Shimmer Shine`,
      description: `Professional window cleaning in ${cityName}. Interior & exterior, screens included. Same-day service, streak-free guarantee. Get free quote!`
    },
    'pressure-washing': {
      title: `Pressure Washing ${cityName} – Shimmer Shine`,
      description: `Professional pressure washing in ${cityName}. Driveways, patios, decks & exteriors. Remove oil stains, grime & mold. Same-day service available!`
    },
    'solar-panel-cleaning': {
      title: `Solar Panel Cleaning ${cityName} – Shimmer Shine`,
      description: `Professional solar panel cleaning in ${cityName}. Increase efficiency up to 30%. Warranty-safe cleaning removes dust & debris. Book today!`
    },
    'gutter-cleaning': {
      title: `Gutter Cleaning ${cityName} – Shimmer Shine`,
      description: `Complete gutter cleaning & maintenance in ${cityName}. Remove debris, clear downspouts, prevent water damage. Licensed & insured service!`
    },
    'post-construction-cleanup': {
      title: `Post-Construction Cleanup ${cityName} – Shimmer Shine`,
      description: `Professional post-construction cleanup in ${cityName}. Complete dust removal, window cleaning, move-in ready preparation. Same-day service!`
    },
    'commercial-cleaning': {
      title: `Commercial Cleaning ${cityName} – Shimmer Shine`,
      description: `Professional commercial cleaning in ${cityName}. Offices, retail, industrial properties. Flexible scheduling, competitive pricing. Get free quote!`
    }
  }

  const service = serviceData[serviceId as keyof typeof serviceData]
  if (!service) return generateSEO()

  return generateSEO({
    title: service.title,
    description: service.description,
    type: "website",
    canonical: `${SITE_CONFIG.url}/services/${serviceId}`
  })
}

export function getCitySEO(citySlug: string) {
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  // Create unique descriptions based on city characteristics
  const getUniqueDescription = (city: string) => {
    // Commercial-focused cities
    const commercialCities = ['Irvine', 'Costa Mesa', 'Santa Ana', 'Anaheim', 'Beverly Hills', 'Santa Monica']
    // Residential luxury cities  
    const luxuryCities = ['Newport Beach', 'Laguna Beach', 'Manhattan Beach', 'La Jolla', 'Del Mar']
    // Beach cities
    const beachCities = ['Huntington Beach', 'Newport Beach', 'Laguna Beach', 'Manhattan Beach', 'Redondo Beach', 'Hermosa Beach']
    
    if (commercialCities.includes(city)) {
      return `Professional window cleaning & pressure washing in ${city}. Commercial & residential services. Same-day availability. Licensed & insured. Get free quote!`
    } else if (luxuryCities.includes(city)) {
      return `Premium window cleaning & pressure washing in ${city}. Luxury home specialists. Same-day service, licensed & insured. Free estimates available!`
    } else if (beachCities.includes(city)) {
      return `Professional window cleaning & pressure washing in ${city}. Coastal property specialists. Same-day service, licensed & insured. Call today!`
    } else {
      return `Professional window cleaning & pressure washing in ${city}. Residential & commercial services. Same-day availability. Licensed & insured. Book now!`
    }
  }
  
  return generateSEO({
    title: `${cityName} Window Cleaning – Shimmer Shine`,
    description: getUniqueDescription(cityName),
    canonical: `${SITE_CONFIG.url}/cities/${citySlug}`
  })
}

export function getBlogPostSEO(slug: string, title: string, excerpt: string, category: string, tags: string[] = []) {
  // Create optimized title (max 60 chars) with primary keyword first
  const optimizedTitle = title.length > 50 
    ? `${title.substring(0, 47)}... – Shimmer Shine`
    : `${title} – Shimmer Shine`
  
  // Create optimized description (120-155 chars) with CTA
  let optimizedDescription = excerpt.length > 140
    ? `${excerpt.substring(0, 137)}...`
    : excerpt
  
  // Add CTA if there's room
  if (optimizedDescription.length < 130) {
    optimizedDescription += " Read our expert guide now!"
  }
  
  return generateSEO({
    title: optimizedTitle,
    description: optimizedDescription,
    type: "article",
    canonical: `${SITE_CONFIG.url}/blog/${slug}`
  })
}

export function getBlogCategorySEO(categorySlug: string, categoryName: string) {
  return generateSEO({
    title: `${categoryName} Orange County – Shimmer Shine`,
    description: `Expert ${categoryName.toLowerCase()} tips & guides for Orange County properties. Professional advice from licensed specialists. Read our guides now!`,
    canonical: `${SITE_CONFIG.url}/blog/category/${categorySlug}`
  })
}

// ============================================================================
// ADVANCED GEO-TARGETED SEO SYSTEM
// ============================================================================

// Geographic data for enhanced targeting
export const GEO_DATA = {
  counties: {
    'orange-county': {
      name: 'Orange County',
      state: 'California',
      coordinates: { lat: 33.7175, lng: -117.8311 },
      population: '3.2 million',
      characteristics: ['Beach communities', 'Luxury neighborhoods', 'Tech corridor', 'Family-friendly'],
      climate: 'Mediterranean coastal',
      averageIncome: '$85,000',
      housingType: 'Mix of luxury homes and condos',
      keyIndustries: ['Technology', 'Tourism', 'Healthcare', 'Real Estate'],
      nearbyLandmarks: ['Disneyland', 'Newport Beach', 'Laguna Beach', 'UC Irvine'],
      seasonalFactors: {
        spring: 'Pollen season requires frequent window cleaning',
        summer: 'High UV exposure and heat',
        fall: 'Santa Ana winds bring dust and debris',
        winter: 'Rain spots and mineral deposits'
      }
    },
    'los-angeles-county': {
      name: 'Los Angeles County',
      state: 'California', 
      coordinates: { lat: 34.0522, lng: -118.2437 },
      population: '10.1 million',
      characteristics: ['Urban centers', 'Beach cities', 'Entertainment industry', 'Diverse communities'],
      climate: 'Mediterranean with urban heat island',
      averageIncome: '$68,000',
      housingType: 'High-rise condos, single-family homes, apartments',
      keyIndustries: ['Entertainment', 'Technology', 'Aerospace', 'Fashion'],
      nearbyLandmarks: ['Hollywood', 'Santa Monica Pier', 'Beverly Hills', 'Downtown LA'],
      seasonalFactors: {
        spring: 'Smog and pollen buildup on windows',
        summer: 'Extreme heat requires early morning service',
        fall: 'Fire season ash and debris',
        winter: 'Marine layer and pollution residue'
      }
    },
    'san-diego-county': {
      name: 'San Diego County',
      state: 'California',
      coordinates: { lat: 32.7157, lng: -117.1611 },
      population: '3.3 million',
      characteristics: ['Coastal lifestyle', 'Military presence', 'Biotech hub', 'Year-round outdoor living'],
      climate: 'Semi-arid Mediterranean',
      averageIncome: '$75,000',
      housingType: 'Beach condos, suburban homes, luxury estates',
      keyIndustries: ['Military', 'Biotechnology', 'Tourism', 'Manufacturing'],
      nearbyLandmarks: ['Balboa Park', 'La Jolla Cove', 'Sunset Cliffs', 'Gaslamp Quarter'],
      seasonalFactors: {
        spring: 'Perfect weather for outdoor cleaning',
        summer: 'Salt air requires frequent coastal cleaning',
        fall: 'Santa Ana winds and dry conditions',
        winter: 'Mild weather allows year-round service'
      }
    }
  },
  
  cityTypes: {
    luxury: ['Newport Beach', 'Beverly Hills', 'Manhattan Beach', 'Laguna Beach', 'La Jolla', 'Del Mar', 'Palos Verdes Estates', 'Rolling Hills', 'Hidden Hills', 'Malibu'],
    beach: ['Huntington Beach', 'Newport Beach', 'Laguna Beach', 'Manhattan Beach', 'Hermosa Beach', 'Redondo Beach', 'Santa Monica', 'Venice', 'Seal Beach', 'San Clemente', 'Dana Point', 'Carlsbad', 'Encinitas', 'Solana Beach', 'Del Mar', 'La Jolla', 'Pacific Beach', 'Mission Beach', 'Ocean Beach', 'Imperial Beach'],
    commercial: ['Irvine', 'Costa Mesa', 'Santa Ana', 'Anaheim', 'Los Angeles', 'Burbank', 'Glendale', 'Pasadena', 'Torrance', 'San Diego', 'Escondido'],
    suburban: ['Yorba Linda', 'Fullerton', 'Orange', 'Tustin', 'Mission Viejo', 'Lake Forest', 'Rancho Santa Margarita', 'Aliso Viejo', 'Covina', 'Glendora', 'Monrovia', 'Poway', 'Santee', 'Vista'],
    urban: ['Los Angeles', 'Long Beach', 'Santa Ana', 'Anaheim', 'San Diego', 'Chula Vista', 'Oceanside']
  }
}

// Enhanced city-specific SEO data
export function getCityCharacteristics(cityName: string) {
  const { luxury, beach, commercial, suburban, urban } = GEO_DATA.cityTypes
  
  return {
    isLuxury: luxury.includes(cityName),
    isBeach: beach.includes(cityName),
    isCommercial: commercial.includes(cityName),
    isSuburban: suburban.includes(cityName),
    isUrban: urban.includes(cityName)
  }
}

// Generate location-specific keywords
export function generateLocationKeywords(city: string, service: string, county?: string) {
  const baseKeywords = [
    `${service} ${city}`,
    `${service} near ${city}`,
    `${service} in ${city}`,
    `professional ${service} ${city}`,
    `best ${service} ${city}`,
    `${service} services ${city}`,
    `${service} company ${city}`,
    `local ${service} ${city}`,
    `affordable ${service} ${city}`,
    `top rated ${service} ${city}`
  ]
  
  if (county) {
    baseKeywords.push(
      `${service} ${county}`,
      `${service} near ${county}`,
      `${service} in ${county}`
    )
  }
  
  return baseKeywords
}

// Enhanced geo-targeted meta descriptions
export function generateGeoDescription(city: string, service: string, characteristics: any) {
  const baseService = service.toLowerCase()
  let description = `Professional ${baseService} in ${city}.`
  
  if (characteristics.isLuxury) {
    description += ` Premium service for luxury properties.`
  } else if (characteristics.isBeach) {
    description += ` Coastal property specialists.`
  } else if (characteristics.isCommercial) {
    description += ` Commercial & residential services.`
  } else {
    description += ` Residential & commercial properties.`
  }
  
  description += ` Same-day service, licensed & insured. Free estimates!`
  
  return description
}

// Dynamic title generation with local modifiers
export function generateGeoTitle(city: string, service: string, characteristics: any) {
  let title = `${service} ${city}`
  
  if (characteristics.isLuxury) {
    title += ` – Premium Service`
  } else if (characteristics.isBeach) {
    title += ` – Coastal Specialists`
  } else if (characteristics.isCommercial) {
    title += ` – Commercial & Residential`
  }
  
  title += ` – Shimmer Shine`
  
  return title
}

// Enhanced service + city SEO
export function getServiceCitySEO(serviceId: string, citySlug: string) {
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const service = SERVICES.find(s => s.id === serviceId)
  
  if (!service) return generateSEO()
  
  const characteristics = getCityCharacteristics(cityName)
  const title = generateGeoTitle(cityName, service.name, characteristics)
  const description = generateGeoDescription(cityName, service.name, characteristics)
  
  // Determine county for additional geo-targeting
  let county = 'Orange County' // default
  let countyData = GEO_DATA.counties['orange-county']
  
  const ocCities = BUSINESS_INFO.cities.slice(0, 33) // Orange County cities
  const laCities = BUSINESS_INFO.cities.slice(33, 91) // LA County cities  
  const sdCities = BUSINESS_INFO.cities.slice(91) // San Diego County cities
  
  if (laCities.includes(cityName)) {
    county = 'Los Angeles County'
    countyData = GEO_DATA.counties['los-angeles-county']
  } else if (sdCities.includes(cityName)) {
    county = 'San Diego County'
    countyData = GEO_DATA.counties['san-diego-county']
  }
  
  return generateSEO({
    title,
    description,
    canonical: `${SITE_CONFIG.url}/services/${serviceId}/${citySlug}`,
    url: `/services/${serviceId}/${citySlug}`,
    other: {
      // Enhanced geo-targeting
      'geo.region': `US-CA`,
      'geo.placename': `${cityName}, ${county}, California`,
      'geo.position': `${countyData.coordinates.lat};${countyData.coordinates.lng}`,
      'ICBM': `${countyData.coordinates.lat}, ${countyData.coordinates.lng}`,
      // Local business data
      'business.hours': 'Mo-Fr 07:00-18:00, Sa 08:00-16:00',
      'business.phone': BUSINESS_INFO.phone,
      'business.service_area': county,
      // Enhanced local SEO
      'locality': cityName,
      'region': 'CA',
      'country': 'US',
      'service-type': service.name,
      'service-category': service.category,
      // Competitive keywords
      'keywords': generateLocationKeywords(cityName, service.name, county).join(', ')
    }
  })
}

// County-specific landing page SEO
export function getCountySEO(countySlug: string) {
  const countyData = GEO_DATA.counties[countySlug as keyof typeof GEO_DATA.counties]
  
  if (!countyData) return generateSEO()
  
  const title = `Window Cleaning & Pressure Washing ${countyData.name} – Shimmer Shine`
  const description = `Professional cleaning services across ${countyData.name}. Serving ${countyData.population} residents with window cleaning, pressure washing & more. Licensed & insured since 2021.`
  
  return generateSEO({
    title,
    description,
    canonical: `${SITE_CONFIG.url}/counties/${countySlug}`,
    url: `/counties/${countySlug}`,
    other: {
      'geo.region': 'US-CA',
      'geo.placename': `${countyData.name}, California`,
      'geo.position': `${countyData.coordinates.lat};${countyData.coordinates.lng}`,
      'ICBM': `${countyData.coordinates.lat}, ${countyData.coordinates.lng}`,
      'business.service_area': countyData.name,
      'locality': countyData.name,
      'region': 'CA',
      'country': 'US',
      'population': countyData.population,
      'climate': countyData.climate,
      'economy': countyData.keyIndustries.join(', ')
    }
  })
}

// Seasonal/weather-based geo SEO
export function getSeasonalGeoSEO(city: string, season: 'spring' | 'summer' | 'fall' | 'winter') {
  const characteristics = getCityCharacteristics(city)
  
  const seasonalContent = {
    spring: {
      title: `Spring Cleaning ${city} – Window & Pressure Washing`,
      description: `Spring cleaning season in ${city}! Professional window cleaning & pressure washing. Remove winter buildup, prepare for summer. Book now!`,
      keywords: ['spring cleaning', 'seasonal cleaning', 'post-winter cleanup']
    },
    summer: {
      title: `Summer Window Cleaning ${city} – Beat the Heat`,
      description: `Summer window cleaning in ${city}. Early morning service to beat the heat. Crystal clear windows for summer entertaining. Same-day service!`,
      keywords: ['summer cleaning', 'heat-friendly service', 'early morning cleaning']
    },
    fall: {
      title: `Fall Property Maintenance ${city} – Pre-Winter Prep`,
      description: `Fall cleaning special in ${city}! Prepare for winter with window cleaning, pressure washing & gutter cleaning. 20% off bundles!`,
      keywords: ['fall cleaning', 'winter preparation', 'seasonal maintenance']
    },
    winter: {
      title: `Winter Window Cleaning ${city} – Year-Round Service`,
      description: `Year-round window cleaning in ${city}. Professional service even in winter months. Flexible scheduling, weather-dependent service.`,
      keywords: ['winter cleaning', 'year-round service', 'weather-flexible']
    }
  }
  
  const content = seasonalContent[season]
  
  return generateSEO({
    title: content.title,
    description: content.description,
    canonical: `${SITE_CONFIG.url}/seasonal/${season}/${city.toLowerCase().replace(/\s+/g, '-')}`,
    url: `/seasonal/${season}/${city.toLowerCase().replace(/\s+/g, '-')}`
  })
}

// Competition-aware geo SEO
export function getCompetitiveGeoSEO(city: string, service: string) {
  const characteristics = getCityCharacteristics(city)
  
  let competitiveAngle = 'best'
  if (characteristics.isLuxury) {
    competitiveAngle = 'premium'
  } else if (characteristics.isBeach) {
    competitiveAngle = 'coastal specialist'
  } else if (characteristics.isCommercial) {
    competitiveAngle = 'commercial grade'
  }
  
  const title = `Best ${service} ${city} – Top Rated Shimmer Shine`
  const description = `#1 rated ${service.toLowerCase()} in ${city}. ${competitiveAngle} service with 5-star reviews. Licensed, insured, same-day availability. Beat any quote!`
  
  return generateSEO({
    title,
    description,
    canonical: `${SITE_CONFIG.url}/best/${service.toLowerCase().replace(/\s+/g, '-')}/${city.toLowerCase().replace(/\s+/g, '-')}`,
    url: `/best/${service.toLowerCase().replace(/\s+/g, '-')}/${city.toLowerCase().replace(/\s+/g, '-')}`
  })
}

// Emergency/urgent service geo SEO
export function getEmergencyGeoSEO(city: string) {
  const title = `Emergency Cleaning ${city} – Same Day Service`
  const description = `Emergency cleaning services in ${city}. Same-day window cleaning, pressure washing for urgent needs. Real estate showings, events. Call now!`
  
  return generateSEO({
    title,
    description,
    canonical: `${SITE_CONFIG.url}/emergency/${city.toLowerCase().replace(/\s+/g, '-')}`,
    url: `/emergency/${city.toLowerCase().replace(/\s+/g, '-')}`
  })
}

// Generate structured data for local SEO
export function generateLocalBusinessStructuredData(city: string, service?: string) {
  const characteristics = getCityCharacteristics(city)
  
  // Determine county
  let countyData = GEO_DATA.counties['orange-county'] // default
  const ocCities = BUSINESS_INFO.cities.slice(0, 33)
  const laCities = BUSINESS_INFO.cities.slice(33, 91)
  const sdCities = BUSINESS_INFO.cities.slice(91)
  
  if (laCities.includes(city)) {
    countyData = GEO_DATA.counties['los-angeles-county']
  } else if (sdCities.includes(city)) {
    countyData = GEO_DATA.counties['san-diego-county']
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Shimmer Shine Property Detailing - ${city}`,
    "description": service 
      ? `Professional ${service.toLowerCase()} services in ${city}, California.`
      : `Professional window cleaning and pressure washing services in ${city}, California.`,
    "url": `${SITE_CONFIG.url}/cities/${city.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": countyData.coordinates.lat,
      "longitude": countyData.coordinates.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "sameAs": `https://en.wikipedia.org/wiki/${city.replace(/\s+/g, '_')},_California`
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": countyData.coordinates.lat,
        "longitude": countyData.coordinates.lng
      },
      "geoRadius": "10000"
    },
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${city} Cleaning Services`,
      "itemListElement": SERVICES.map((svc, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${svc.name} ${city}`,
          "description": `Professional ${svc.name.toLowerCase()} in ${city}, California`,
          "areaServed": city
        },
        "priceRange": svc.priceRange,
        "availability": "https://schema.org/InStock"
      }))
    }
  }
}
