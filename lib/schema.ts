import { BUSINESS_INFO, SERVICES } from './constants'

// Enhanced LocalBusiness Schema with comprehensive data
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shimmershinepd.com/#business",
  "name": "Shimmer Shine Property Detailing",
  "alternateName": "Shimmer Shine Window Cleaning",
  "description": "Professional window cleaning, pressure washing, and property detailing services in Orange County, Los Angeles County, and San Diego County. Licensed, insured, and eco-friendly cleaning solutions since 2021.",
  "url": "https://shimmershinepd.com",
  "logo": "https://shimmershinepd.com/logo.png",
  "image": [
    "https://shimmershinepd.com/window-cleaning-before-after.png",
    "https://shimmershinepd.com/pressure-washing-before-after.png",
    "https://shimmershinepd.com/logo.png"
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
      "url": `https://shimmershinepd.com/services/${service.id}`
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
  "@id": `https://shimmershinepd.com/services/${service.id}#service`,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Shimmer Shine Property Detailing",
    "url": "https://shimmershinepd.com"
  },
  "areaServed": [
    "Orange County, CA",
    "Los Angeles County, CA", 
    "San Diego County, CA"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `https://shimmershinepd.com/services/${service.id}`,
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
  "@id": "https://shimmershinepd.com/#organization",
  "name": "Shimmer Shine Property Detailing",
  "alternateName": "Shimmer Shine Window Cleaning",
  "url": "https://shimmershinepd.com",
  "logo": "https://shimmershinepd.com/logo.png",
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
  "@id": "https://shimmershinepd.com/#website",
  "url": "https://shimmershinepd.com",
  "name": "Shimmer Shine Property Detailing",
  "description": "Professional window cleaning, pressure washing, and property detailing services in Southern California",
  "publisher": {
    "@id": "https://shimmershinepd.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://shimmershinepd.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})