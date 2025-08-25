import { BUSINESS_INFO, SERVICES } from './constants'

// Enhanced LocalBusiness Schema with comprehensive data
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.shimmershinepropertydetailing.com/#business",
  "name": "Shimmer Shine Property Detailing",
  "alternateName": "Shimmer Shine Window Cleaning",
  "description": "Professional window cleaning, pressure washing, and property detailing services in Orange County, Los Angeles County, and San Diego County. Licensed, insured, and eco-friendly cleaning solutions since 2021.",
  "url": "https://www.shimmershinepropertydetailing.com",
  "logo": "https://www.shimmershinepropertydetailing.com/logo.png",
  "image": [
    "https://www.shimmershinepropertydetailing.com/window-cleaning-before-after.png",
    "https://www.shimmershinepropertydetailing.com/pressure-washing-before-after.png",
    "https://www.shimmershinepropertydetailing.com/logo.png"
  ],
  "telephone": BUSINESS_INFO.phone,
  "email": BUSINESS_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": BUSINESS_INFO.address.city,
    "addressRegion": BUSINESS_INFO.address.state,
    "postalCode": BUSINESS_INFO.address.zipCode,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.8886",
    "longitude": "-117.8131"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Orange County",
      "sameAs": "https://en.wikipedia.org/wiki/Orange_County,_California"
    },
    {
      "@type": "City", 
      "name": "Los Angeles County",
      "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles_County,_California"
    },
    {
      "@type": "City",
      "name": "San Diego County", 
      "sameAs": "https://en.wikipedia.org/wiki/San_Diego_County,_California"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "33.8886",
      "longitude": "-117.8131"
    },
    "geoRadius": "50000"
  },
  "openingHours": [
    "Mo-Fr 07:00-18:00",
    "Sa 08:00-16:00"
  ],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Credit Card, Venmo, Zelle",
  "foundingDate": "2021",
  "numberOfEmployees": "2-10",
  "slogan": "Crystal Clear Results, Every Time",
  "knowsAbout": [
    "Window Cleaning",
    "Pressure Washing", 
    "Solar Panel Cleaning",
    "Gutter Cleaning",
    "House Washing",
    "Commercial Cleaning",
    "Post-Construction Cleanup",
    "Eco-Friendly Cleaning"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Property Detailing Services",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "category": service.category,
        "areaServed": "Southern California"
      },
      "priceRange": service.priceRange,
      "availability": "https://schema.org/InStock",
      "validFrom": "2021-01-01",
      "url": `https://www.shimmershinepropertydetailing.com/services/${service.id}`
    }))
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Exceptional window cleaning service! They transformed our office building's windows and the results were amazing. Professional, punctual, and reasonably priced.",
      "datePublished": "2024-11-15"
    },
    {
      "@type": "Review", 
      "author": {
        "@type": "Person",
        "name": "Mike Rodriguez"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Outstanding pressure washing service! My driveway and house exterior look brand new. Highly recommend Shimmer Shine for any property cleaning needs.",
      "datePublished": "2024-10-28"
    }
  ],
  "sameAs": [
    "https://maps.app.goo.gl/tZ2ZZzsRiexSvotn9",
    "https://www.facebook.com/shimmershinepd",
    "https://www.instagram.com/shimmershinepd"
  ]
})

// Service-specific schema for individual service pages
export const getServiceSchema = (service: any) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://www.shimmershinepropertydetailing.com/services/${service.id}#service`,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Shimmer Shine Property Detailing",
    "url": "https://www.shimmershinepropertydetailing.com"
  },
  "areaServed": [
    "Orange County, CA",
    "Los Angeles County, CA", 
    "San Diego County, CA"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `https://www.shimmershinepropertydetailing.com/services/${service.id}`,
    "servicePhone": BUSINESS_INFO.phone,
    "serviceSmsNumber": BUSINESS_INFO.phone
  },
  "category": service.category,
  "serviceType": service.name,
  "priceRange": service.priceRange,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": service.priceRange,
    "priceCurrency": "USD",
    "validFrom": "2021-01-01",
    "areaServed": "Southern California"
  }
})

// FAQ Schema for enhanced SERP features
export const getFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// Organization Schema for enhanced brand recognition
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.shimmershinepropertydetailing.com/#organization",
  "name": "Shimmer Shine Property Detailing",
  "alternateName": "Shimmer Shine Window Cleaning",
  "url": "https://www.shimmershinepropertydetailing.com",
  "logo": "https://www.shimmershinepropertydetailing.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": BUSINESS_INFO.phone,
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://maps.app.goo.gl/tZ2ZZzsRiexSvotn9"
  ]
})

// Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.shimmershinepropertydetailing.com/#website",
  "url": "https://www.shimmershinepropertydetailing.com",
  "name": "Shimmer Shine Property Detailing",
  "description": "Professional window cleaning, pressure washing, and property detailing services in Southern California",
  "publisher": {
    "@id": "https://www.shimmershinepropertydetailing.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.shimmershinepropertydetailing.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})

// Event Schema for Fall Special Promotion
export const getFallSpecialEventSchema = () => {
  const currentYear = new Date().getFullYear()
  const fallEnd = new Date(currentYear, 11, 21) // December 21st
  
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Fall Special - 20% Off Bundle Services",
    "description": "Save 20% when you bundle 2 or more services including window cleaning, pressure washing, gutter cleaning, and solar panel cleaning in Orange County.",
    "startDate": `${currentYear}-09-22T00:00:00-07:00`,
    "endDate": `${currentYear}-12-21T23:59:59-07:00`,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Orange County, California",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Shimmer Shine Property Detailing",
      "url": "https://www.shimmershinepropertydetailing.com"
    },
    "offers": {
      "@type": "Offer",
      "name": "Fall Bundle Discount",
      "description": "20% off when bundling 2 or more services",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": `${currentYear}-09-22T00:00:00-07:00`,
      "validThrough": `${currentYear}-12-21T23:59:59-07:00`,
      "url": "https://www.shimmershinepropertydetailing.com/get-a-quote"
    },
    "image": "https://www.shimmershinepropertydetailing.com/logo.png",
    "url": "https://www.shimmershinepropertydetailing.com"
  }
}

// Product Schema for Service Bundles
export const getServiceBundleSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Fall Property Maintenance Bundle",
  "description": "Complete fall property maintenance package including window cleaning, pressure washing, and gutter cleaning services in Orange County.",
  "brand": {
    "@type": "Brand",
    "name": "Shimmer Shine Property Detailing"
  },
  "category": "Property Maintenance Services",
  "offers": {
    "@type": "Offer",
    "price": "400",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": `${new Date().getFullYear()}-12-21`,
    "seller": {
      "@type": "Organization",
      "name": "Shimmer Shine Property Detailing"
    },
    "areaServed": {
      "@type": "State",
      "name": "California"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "image": "https://www.shimmershinepropertydetailing.com/logo.png",
  "url": "https://www.shimmershinepropertydetailing.com/get-a-quote"
})

// Video Schema for Service Demonstrations
export const getVideoSchema = (videoTitle: string, videoDescription: string, videoUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": videoTitle,
  "description": videoDescription,
  "thumbnailUrl": "https://www.shimmershinepropertydetailing.com/logo.png",
  "uploadDate": new Date().toISOString(),
  "duration": "PT2M30S",
  "contentUrl": videoUrl,
  "embedUrl": videoUrl,
  "publisher": {
    "@type": "Organization",
    "name": "Shimmer Shine Property Detailing",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.shimmershinepropertydetailing.com/logo.png"
    }
  }
})