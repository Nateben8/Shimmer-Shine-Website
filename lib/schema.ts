import { BUSINESS_INFO, SITE_CONFIG, SERVICES } from "./constants"

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}#business`,
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "description": SITE_CONFIG.description,
    "url": SITE_CONFIG.url,
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "foundingDate": BUSINESS_INFO.foundedYear.toString(),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zipCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6411",
      "longitude": "-117.9187"
    },
    "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
      "@type": "State",
      "name": area
    })),
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.6411",
        "longitude": "-117.9187"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Detailing Services",
      "itemListElement": SERVICES.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "provider": {
            "@id": `${SITE_CONFIG.url}#business`
          }
        }
      }))
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "paymentAccepted": "Cash, Check, Credit Card, Venmo, PayPal",
    "currenciesAccepted": "USD",
    "priceRange": "Contact for Quote",
    "image": `${SITE_CONFIG.url}/logo.png`,
    "logo": `${SITE_CONFIG.url}/logo.png`,
    "sameAs": [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.instagram,
      SITE_CONFIG.links.yelp,
      SITE_CONFIG.links.google
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Shimmer Shine has been cleaning our windows for over 10 years. They're always professional, punctual, and do amazing work.",
        "datePublished": "2024-01-15"
      }
    ]
  }
}

export function getServiceSchema(serviceId: string) {
  const service = SERVICES.find(s => s.id === serviceId)
  if (!service) return null

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}/services/${serviceId}#service`,
    "name": service.name,
    "description": service.description,
    "provider": {
      "@id": `${SITE_CONFIG.url}#business`
    },
    "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
      "@type": "State", 
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": [
        {
          "@type": "Offer",
          "description": service.description,
          "priceRange": "Contact for Quote",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      ]
    },
    "serviceType": service.name,
    "category": service.category,
    "offers": {
      "@type": "Offer",
      "description": service.description,
      "priceRange": "Contact for Quote",
      "availability": "https://schema.org/InStock"
    }
  }
}

export function getBlogPostSchema(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_CONFIG.url}/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `${SITE_CONFIG.url}${post.image}` : `${SITE_CONFIG.url}/blog-default.jpg`,
    "author": {
      "@type": "Person",
      "name": post.author || BUSINESS_INFO.name
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/logo.png`
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags?.join(", "),
    "wordCount": post.readingTime ? post.readingTime * 200 : 800
  }
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}#website`,
    "url": SITE_CONFIG.url,
    "name": SITE_CONFIG.name,
    "description": SITE_CONFIG.description,
    "publisher": {
      "@id": `${SITE_CONFIG.url}#business`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_CONFIG.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`
    }))
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
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
  }
}
