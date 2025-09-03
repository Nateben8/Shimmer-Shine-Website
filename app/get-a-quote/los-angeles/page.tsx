import { getPageSEO } from "@/lib/seo"
import { getLocalBusinessSchema } from "@/lib/schema"
import JobberForm from "@/components/JobberForm"
import ScrollToFormButton from "@/components/ScrollToFormButton"
import GetQuoteButton from "@/components/GetQuoteButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Phone, 
  Star, 
  Award, 
  Shield, 
  Users,
  CheckCircle,
  Zap,
  ThumbsUp,
  Clock,
  MapPin
} from "lucide-react"
import { BUSINESS_INFO, TESTIMONIALS } from "@/lib/constants"
import { ScrollAnimation, WaterDroplets } from "@/components/ScrollAnimations"

export const metadata = {
  title: "Free Window Cleaning Quote Los Angeles County | Shimmer Shine Property Detailing",
  description: "Get a free quote for professional window cleaning, pressure washing, and property detailing services in Los Angeles County. Same day service available with 15% discount for new customers.",
  keywords: "window cleaning Los Angeles, pressure washing LA County, free quote Los Angeles, property cleaning services LA",
  openGraph: {
    title: "Free Window Cleaning Quote Los Angeles County | Shimmer Shine",
    description: "Professional window cleaning and pressure washing services throughout Los Angeles County. Get your free quote today!",
    url: "https://www.shimmershinepropertydetailing.com/get-a-quote/los-angeles",
    siteName: "Shimmer Shine Property Detailing",
    images: [
      {
        url: "https://www.shimmershinepropertydetailing.com/window-cleaning-quote.png",
        width: 1200,
        height: 630,
        alt: "Los Angeles Window Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function LosAngelesQuotePage() {
  const localBusinessSchema = getLocalBusinessSchema()
  const featuredTestimonials = TESTIMONIALS.slice(0, 3)
  
  // Enhanced Service Schema for Los Angeles County
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Window Cleaning Quote Los Angeles County",
    "description": "Get a free quote for professional window cleaning, pressure washing, and property detailing services in Los Angeles County. Same day service available with 15% discount for new customers.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shimmer Shine Property Detailing",
      "telephone": "(714) 497-0035",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles County",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "California"
      },
      {
        "@type": "City",
        "name": "Los Angeles County"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free quote with 15% discount on first service",
      "validThrough": "2024-12-31"
    },
    "serviceType": [
      "Window Cleaning Los Angeles",
      "Pressure Washing LA County", 
      "Solar Panel Cleaning Los Angeles",
      "Gutter Cleaning LA",
      "Post Construction Cleanup Los Angeles"
    ]
  }

  return (
    <>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-12 lg:py-16 relative overflow-hidden water-wave">
        {/* Water Droplets */}
        <WaterDroplets count={5} />
        
        {/* Hero Sparkles & Brand Overlays */}
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          {/* Cleaning Equipment Overlays */}
          <div className="absolute bottom-10 right-10 w-24 h-24 text-yellow/20 rotate-12">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="10" y="40" width="80" height="8" rx="4" />
              <rect x="45" y="48" width="10" height="40" rx="2" />
              <rect x="8" y="38" width="84" height="3" opacity="0.6" />
            </svg>
          </div>
          
          <div className="absolute top-20 right-1/4 w-20 h-20 text-white/15 -rotate-12">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="30" y="40" width="25" height="45" rx="5" />
              <rect x="35" y="20" width="15" height="25" rx="3" />
              <circle cx="42.5" cy="15" r="3" />
              <path d="M55 30 L70 25 L68 35 Z" />
            </svg>
          </div>
          <div className="absolute top-16 left-8 w-6 h-6 text-yellow animate-pulse drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-24 right-12 w-4 h-4 text-white animate-bounce delay-300 drop-shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-1/4 w-7 h-7 text-yellow animate-pulse delay-500 drop-shadow-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <ScrollAnimation animation="fade-in-left" className="text-center lg:text-left">
              <div className="retro-badge mb-6 inline-block float-animation">
                Professional Service Since 2021
              </div>
              
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-2 leading-tight" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                Free Los Angeles County Cleaning Quote
              </h1>
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                in 60 Seconds
              </h2>
              
              <ScrollToFormButton 
                variant="retro" 
                size="lg" 
                className="bg-yellow text-navy px-4 sm:px-6 py-3 rounded-full font-bold text-base sm:text-lg mb-4 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="hidden sm:inline">💰 Save $50-200 on Your First Service!</span>
                <span className="sm:hidden">💰 Save $50-200!</span>
              </ScrollToFormButton>
              
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional window cleaning, pressure washing, and property detailing throughout Los Angeles County. Family-owned since {BUSINESS_INFO.foundedYear} with 5-star rated service.
              </p>

              {/* Trust Badges - Mobile Optimized */}
              <div className="mb-8">
                {/* Mobile: Single column with cards */}
                <div className="grid grid-cols-1 gap-3 sm:hidden">
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-5 w-5 text-navy" />
                    </div>
                    <span className="text-base font-bold text-white">5-Star Rated Service</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-navy" />
                    </div>
                    <span className="text-base font-bold text-white">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-navy" />
                    </div>
                    <span className="text-base font-bold text-white">Since {BUSINESS_INFO.foundedYear}</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-navy" />
                    </div>
                    <span className="text-base font-bold text-white">Same Day Service</span>
                  </div>
                </div>

                {/* Desktop: Original 2-column grid */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-4 w-4 text-navy" />
                    </div>
                    <span className="text-sm font-medium">5-Star Rated Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium">Since {BUSINESS_INFO.foundedYear}</span>
                </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium">Same Day Service</span>
                  </div>
                </div>
              </div>

              {/* Call Button */}
              <div className="mb-6">
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="retro" size="lg" className="text-lg px-8 py-4 hover-lift-subtle">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>

            {/* Right Side - Hero Image */}
            <ScrollAnimation animation="fade-in-right" delay={200} className="w-full">
              <div className="relative hover-lift-subtle">
                <Image
                  src="/window-cleaning-quote.png"
                  alt="Professional window cleaning service in Los Angeles County - Shimmer Shine Property Detailing team providing residential and commercial window cleaning with guaranteed results"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-yellow text-navy px-4 py-2 rounded-full font-bold text-sm mb-4 border-2 border-navy shadow-retro-yellow animate-pulse">
                INSTANT QUOTE - RESPONDS IN 2 HOURS GUARANTEED
              </div>
              <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                <span className="block sm:inline">Complete Your</span>{' '}
                <span className="block sm:inline">Free Los Angeles Quote Below</span>
              </h2>
              <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto mb-6">
                Join 500+ satisfied Los Angeles County customers who trust us with their property cleaning needs. Professional results guaranteed!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form - Takes up more space */}
              <div className="lg:col-span-4">
                <JobberForm />
              </div>

              {/* Enhanced Benefits Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Service Areas Card */}
                <Card className="retro-card">
                  <CardHeader>
                    <CardTitle className="heading-primary text-lg flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-navy" />
                      Los Angeles County Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Beverly Hills</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Santa Monica</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Pasadena</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Long Beach</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Glendale</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-xs text-center text-navy font-medium">
                        Free on-site estimates throughout LA County
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-yellow relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
              <span className="block sm:inline">Ready to Get</span>{' '}
              <span className="block sm:inline">Started in LA County?</span>
            </h3>
            <p className="body-text text-xl text-navy-700 mb-6">
              Join 500+ satisfied Los Angeles County customers who've already saved with our exclusive discount. Get your FREE quote + <span className="font-bold" style={{color: '#FF4500'}}>15% OFF</span> before this offer expires!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GetQuoteButton 
                variant="retro-navy" 
                size="lg" 
                className="text-lg px-8 py-4 animate-pulse"
                redirectPath="/get-a-quote/los-angeles"
              >
                🚀 Claim My FREE Quote + <span style={{color: '#FF4500'}}>15% OFF</span> ↑
              </GetQuoteButton>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS_INFO.phone} Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}