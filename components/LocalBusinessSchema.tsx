"use client"

import { BUSINESS_INFO, SITE_CONFIG, SERVICES } from '@/lib/constants'

interface LocalBusinessSchemaProps {
  data?: any
}

export default function LocalBusinessSchema({ data }: LocalBusinessSchemaProps = {}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": SITE_CONFIG.url,
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "foundingDate": BUSINESS_INFO.foundedYear.toString(),
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
        "@type": "State",
        "name": "California"
      },
      ...BUSINESS_INFO.serviceAreas.map(area => ({
        "@type": "City",
        "name": area
      }))
    ],
    "serviceType": SERVICES.map(service => service.name),
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "sameAs": [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.instagram,
      SITE_CONFIG.links.yelp,
      SITE_CONFIG.links.google
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": SERVICES.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.shortDescription,
          "provider": {
            "@type": "LocalBusiness",
            "name": BUSINESS_INFO.name
          }
        },
        "position": index + 1
      }))
    },
    "makesOffer": SERVICES.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.shortDescription,
        "category": service.category,
        "provider": {
          "@type": "LocalBusiness",
          "name": BUSINESS_INFO.name,
          "telephone": BUSINESS_INFO.phone,
          "url": SITE_CONFIG.url
        },
        "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
          "@type": "City",
          "name": area
        }))
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": service.priceRange
      }
    })),
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US"
    },
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}/logo.png`
    },
    "image": {
      "@type": "ImageObject", 
      "url": `${SITE_CONFIG.url}/logo.png`
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": SITE_CONFIG.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}/logo.png`
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zipCode,
      "addressCountry": "US"
    },
    "sameAs": [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.instagram,
      SITE_CONFIG.links.yelp,
      SITE_CONFIG.links.google
    ]
  }

  // Use provided data or default schema
  const schemaToUse = data || localBusinessSchema

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaToUse)
        }}
      />
      {!data && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      )}
    </>
  )
}
