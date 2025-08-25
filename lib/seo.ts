import { Metadata } from "next"
import { SITE_CONFIG, BUSINESS_INFO } from "./constants"

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
}

export function generateSEO({
  title,
  description = SITE_CONFIG.description,
  keywords = [],
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  noindex = false,
  canonical
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name
  const fullUrl = url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`

  // Default keywords for local SEO
  const defaultKeywords = [
    "window cleaning",
    "pressure washing", 
    "solar panel cleaning",
    "gutter cleaning",
    "property detailing",
    "Orange County",
    "Los Angeles",
    "San Diego",
    "Costa Mesa",
    "Newport Beach",
    "residential cleaning",
    "commercial cleaning"
  ]

  const allKeywords = [...defaultKeywords, ...keywords].join(", ")

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: allKeywords,
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

  return metadata
}

export function getPageSEO(page: string, city?: string) {
  const cityName = city ? city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : ''
  
  switch (page) {
    case 'home':
      return generateSEO({
        title: `Professional Property Detailing Services in ${BUSINESS_INFO.serviceAreas.join(', ')}`,
        description: `${SITE_CONFIG.description} Serving ${BUSINESS_INFO.serviceAreas.join(', ')} since ${BUSINESS_INFO.foundedYear}.`,
        keywords: [
          "professional window cleaning",
          "residential pressure washing", 
          "commercial property detailing",
          "solar panel cleaning service",
          "gutter cleaning maintenance",
          "Orange County window cleaning",
          "Los Angeles pressure washing",
          "San Diego property detailing"
        ]
      })

    case 'get-a-quote':
      return generateSEO({
        title: `Get a Free Quote - ${cityName ? `${cityName} ` : ''}Property Detailing Services`,
        description: `Get your free quote for professional window cleaning, pressure washing, and property detailing services${cityName ? ` in ${cityName}` : ''}. Fast response, competitive pricing, satisfaction guaranteed.`,
        keywords: [
          "free quote window cleaning",
          "property detailing estimate",
          "pressure washing quote",
          `${cityName} cleaning services`,
          "residential commercial cleaning",
          "same day service available"
        ]
      })

    case 'services':
      return generateSEO({
        title: `Professional Cleaning Services${cityName ? ` in ${cityName}` : ''} - Windows, Pressure Washing & More`,
        description: `Complete property detailing services${cityName ? ` in ${cityName}` : ''}: window cleaning, pressure washing, solar panel cleaning, gutter maintenance, and post-construction cleanup.`,
        keywords: [
          "window cleaning services",
          "pressure washing services",
          "solar panel cleaning",
          "gutter cleaning service",
          "post construction cleanup",
          `${cityName} property maintenance`,
          "commercial residential cleaning"
        ]
      })

    case 'about':
      return generateSEO({
        title: `About ${BUSINESS_INFO.name} - Professional Since ${BUSINESS_INFO.foundedYear}`,
        description: `Learn about ${BUSINESS_INFO.name}, a professional property detailing company serving ${BUSINESS_INFO.serviceAreas.join(', ')} since ${BUSINESS_INFO.foundedYear}. Old-school quality, modern reliability.`,
        keywords: [
          "family owned cleaning company",
          "established window cleaning business",
          "Orange County property detailing",
          "experienced cleaning professionals",
          "licensed insured cleaning service"
        ]
      })

    case 'blog':
      return generateSEO({
        title: `Property Maintenance Blog - Tips & Guides for ${BUSINESS_INFO.serviceAreas.join(', ')}`,
        description: `Expert tips and guides for window cleaning, pressure washing, solar panel maintenance, and property care from ${BUSINESS_INFO.name}'s experienced professionals.`,
        keywords: [
          "window cleaning tips",
          "pressure washing guide",
          "solar panel maintenance",
          "property maintenance blog",
          "cleaning tips Orange County",
          "home maintenance advice"
        ]
      })

    case 'cities':
      return generateSEO({
        title: `Service Areas - Professional Property Detailing Across Southern California`,
        description: `Professional window cleaning, pressure washing, and property detailing services in over 139 cities across Orange County, Los Angeles County, and San Diego County. Find your city and get a free quote today.`,
        keywords: [
          "service areas",
          "Orange County cities",
          "Los Angeles County cities", 
          "San Diego County cities",
          "window cleaning locations",
          "pressure washing areas",
          "property detailing coverage",
          "Southern California cleaning",
          "Costa Mesa", "Newport Beach", "Irvine", "Beverly Hills", "Santa Monica", "La Jolla"
        ]
      })

    default:
      return generateSEO()
  }
}

export function getServiceSEO(serviceId: string, city?: string) {
  const cityName = city ? city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : ''
  const locationText = cityName ? ` in ${cityName}` : ` in ${BUSINESS_INFO.serviceAreas.join(', ')}`

  const serviceData = {
    'window-cleaning': {
      title: `Professional Window Cleaning Services${locationText}`,
      description: `Crystal-clear windows with professional cleaning services${locationText}. Interior & exterior cleaning, screen cleaning, streak-free guarantee. Residential & commercial.`,
      keywords: [
        "window cleaning service",
        "residential window cleaning", 
        "commercial window cleaning",
        "screen cleaning service",
        `${cityName} window cleaning`,
        "streak free windows",
        "interior exterior cleaning"
      ]
    },
    'pressure-washing': {
      title: `Pressure Washing Services${locationText} - Driveways, Patios & More`,
      description: `Professional pressure washing services${locationText}. Deep clean driveways, patios, decks, and building exteriors. Remove dirt, grime, mold, and stains effectively.`,
      keywords: [
        "pressure washing service",
        "driveway cleaning",
        "patio cleaning", 
        "deck pressure washing",
        `${cityName} pressure washing`,
        "concrete cleaning",
        "building exterior wash"
      ]
    },
    'solar-panel-cleaning': {
      title: `Solar Panel Cleaning Services${locationText} - Maximize Efficiency`,
      description: `Professional solar panel cleaning${locationText} to maximize energy efficiency. Gentle, warranty-safe cleaning removes dust, debris, and bird droppings.`,
      keywords: [
        "solar panel cleaning",
        "solar panel maintenance",
        "solar efficiency optimization",
        `${cityName} solar cleaning`,
        "solar panel service",
        "renewable energy maintenance"
      ]
    },
    'gutter-cleaning': {
      title: `Gutter Cleaning Services${locationText} - Professional Maintenance`,
      description: `Complete gutter cleaning and maintenance${locationText}. Remove debris, clear downspouts, inspect drainage, and provide minor repairs for proper water flow.`,
      keywords: [
        "gutter cleaning service",
        "gutter maintenance",
        "downspout cleaning",
        `${cityName} gutter cleaning`,
        "gutter repair service",
        "debris removal"
      ]
    }
  }

  const service = serviceData[serviceId as keyof typeof serviceData]
  if (!service) return generateSEO()

  return generateSEO({
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    type: "website"
  })
}

export function getCitySEO(citySlug: string) {
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return generateSEO({
    title: `Professional Property Detailing Services in ${cityName}, CA`,
    description: `Top-rated window cleaning, pressure washing, and property detailing services in ${cityName}, California. Family-owned since ${BUSINESS_INFO.foundedYear}. Free estimates, satisfaction guaranteed.`,
    keywords: [
      `${cityName} window cleaning`,
      `${cityName} pressure washing`,
      `${cityName} property detailing`,
      `${cityName} cleaning services`,
      `${cityName} gutter cleaning`,
      `${cityName} solar panel cleaning`,
      `property maintenance ${cityName}`,
      `residential cleaning ${cityName}`,
      `commercial cleaning ${cityName}`
    ]
  })
}
