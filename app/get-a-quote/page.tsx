import { getPageSEO } from "@/lib/seo"
import { getLocalBusinessSchema } from "@/lib/schema"
import JobberForm from "@/components/JobberForm"
import ScrollToFormButton from "@/components/ScrollToFormButton"
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

export const metadata = getPageSEO('get-a-quote')

export default function GetQuotePage() {
  const localBusinessSchema = getLocalBusinessSchema()
  const featuredTestimonials = TESTIMONIALS.slice(0, 3)
  
  // Enhanced Service Schema for better SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Window Cleaning Quote Orange County",
    "description": "Get a free quote for professional window cleaning, pressure washing, and property detailing services in Orange County. Same day service available with 15% discount for new customers.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shimmer Shine Property Detailing",
      "telephone": "(714) 497-0035",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Yorba Linda",
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
        "name": "Orange County"
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
      "Window Cleaning",
      "Pressure Washing", 
      "Solar Panel Cleaning",
      "Gutter Cleaning",
      "Post Construction Cleanup"
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
          <div className="absolute top-8 right-1/4 w-3 h-3 text-white animate-bounce delay-700 drop-shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-8 right-16 w-5 h-5 text-yellow animate-pulse delay-200 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-32 left-1/3 w-4 h-4 text-white animate-bounce delay-1000 drop-shadow-md">
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
                <span className="block sm:inline">Get Your FREE Quote</span>{' '}
                <span className="block sm:inline text-red-800" style={{color: '#FF4500', textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #FFE4E1, 4px 4px 0px #FFA07A'}}>+ 15% OFF</span>
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
                Professional window cleaning, pressure washing, and property detailing. Family-owned since {BUSINESS_INFO.foundedYear} with 5-star rated service.
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
                  alt="Professional window cleaning service in Orange County - Shimmer Shine Property Detailing team providing residential and commercial window cleaning with guaranteed results"
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
        {/* Form Section Sparkles & Brand Elements */}
        <div className="absolute inset-0 opacity-35 pointer-events-none">
          {/* Window Cleaning Tool */}
          <div className="absolute bottom-20 right-20 w-28 h-28 text-navy/10 rotate-45">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="20" y="10" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
              <rect x="42" y="50" width="16" height="30" rx="8" />
              <line x1="25" y1="15" x2="75" y2="15" stroke="currentColor" strokeWidth="1" />
              <line x1="25" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="1" />
              <line x1="25" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute top-12 left-12 w-5 h-5 text-yellow animate-pulse drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-20 right-8 w-3 h-3 text-navy animate-bounce delay-300 drop-shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-16 left-1/4 w-6 h-6 text-yellow animate-pulse delay-500 drop-shadow-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 text-navy animate-bounce delay-700 drop-shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-yellow text-navy px-4 py-2 rounded-full font-bold text-sm mb-4 border-2 border-navy shadow-retro-yellow animate-pulse">
                INSTANT QUOTE - RESPONDS IN 2 HOURS GUARANTEED
              </div>
              <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                <span className="block sm:inline">Complete Your</span>{' '}
                <span className="block sm:inline">Free Quote Below</span>
              </h2>
              <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto mb-6">
                Join 500+ satisfied customers who trust us with their property cleaning needs. Professional results guaranteed!
              </p>
              
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form - Takes up more space */}
              <div className="lg:col-span-4">
                <JobberForm />
              </div>

              {/* Enhanced Benefits Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Main Benefits Card */}
                <Card className="retro-card bg-gradient-to-br from-white to-yellow-50">
                  <CardHeader className="pb-3 lg:pb-6">
                    <CardTitle className="heading-primary text-lg lg:text-xl flex items-center">
                      <Award className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-yellow flex-shrink-0" />
                      <span className="leading-tight">Why Our Customers Love Us</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:space-y-4">
                    <div className="flex items-start space-x-2 lg:space-x-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <ThumbsUp className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-navy text-sm lg:text-base leading-tight">100% Satisfaction Guarantee</p>
                        <p className="text-xs lg:text-sm text-gray-600 leading-tight mt-0.5">Not happy? We'll make it right or refund you</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 lg:space-x-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-navy text-sm lg:text-base leading-tight">Lightning Fast Response</p>
                        <p className="text-xs lg:text-sm text-gray-600 leading-tight mt-0.5">Quote delivered within 2 hours, guaranteed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 lg:space-x-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-navy text-sm lg:text-base leading-tight">Fully Licensed & Insured</p>
                        <p className="text-xs lg:text-sm text-gray-600 leading-tight mt-0.5">$2M liability coverage for your peace of mind</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 lg:space-x-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-navy text-sm lg:text-base leading-tight">Same-Day Service Available</p>
                        <p className="text-xs lg:text-sm text-gray-600 leading-tight mt-0.5">Emergency cleaning when you need it most</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Proof Card */}
                <Card className="retro-card bg-gradient-to-br from-navy to-navy-700 text-white">
                  <CardContent className="pt-6 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow fill-current" />
                      ))}
                    </div>
                    <p className="text-lg font-bold mb-2">4.9/5 Rating</p>
                    <p className="text-yellow text-sm font-bold mb-3">5-Star Rated Service</p>
                    <div className="bg-white/10 rounded-lg p-3 mb-4">
                      <p className="text-sm italic">"Best cleaning service in Orange County! Professional, reliable, and affordable."</p>
                      <p className="text-xs mt-2 text-yellow">- Sarah M., Newport Beach</p>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>500+ Customers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Since {BUSINESS_INFO.foundedYear}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Areas Card */}
                <Card className="retro-card">
                  <CardHeader>
                    <CardTitle className="heading-primary text-lg flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-navy" />
                      We Service Your Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Orange County</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Los Angeles County</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>San Diego County</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-xs text-center text-navy font-medium">
                        Free on-site estimates within 30 miles
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Urgency & Social Proof Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Social Proof Sparkles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-8 left-8 w-4 h-4 text-yellow animate-pulse drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-16 right-12 w-6 h-6 text-navy animate-bounce delay-300 drop-shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-12 left-1/3 w-5 h-5 text-yellow animate-pulse delay-500 drop-shadow-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 right-8 w-3 h-3 text-navy animate-bounce delay-700 drop-shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-1/4 w-4 h-4 text-yellow animate-pulse delay-200 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Urgency Banner */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-white to-yellow-50 border-2 border-yellow rounded-xl p-8 text-center shadow-retro-yellow">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-4 h-4 bg-yellow rounded-full animate-pulse shadow-lg"></div>
                <span className="font-bold text-navy uppercase tracking-wide text-lg">Special Offer</span>
                <div className="w-4 h-4 bg-yellow rounded-full animate-pulse shadow-lg"></div>
              </div>
              <h3 className="heading-decorative text-3xl md:text-4xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFC107, 3px 3px 0px #FFD54F'}}>
                Get Your FREE Quote + Save Big!
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                <strong>Professional window cleaning made affordable!</strong> Get your complimentary quote and enjoy an exclusive <span className="font-bold text-xl" style={{color: '#8B0000'}}>15% discount</span> on your first service. Join hundreds of satisfied Orange County customers!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3 bg-navy/5 p-4 rounded-xl border border-navy/10">
                  <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-navy" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-navy">Quick Response</p>
                    <p className="text-gray-600">Same day quotes</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-navy/5 p-4 rounded-xl border border-navy/10">
                  <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-navy" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-navy">Trusted Service</p>
                    <p className="text-gray-600">500+ happy customers</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-navy/5 p-4 rounded-xl border border-navy/10">
                  <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-navy" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-navy">Big Savings</p>
                    <p className="text-gray-600" style={{color: '#8B0000'}}>Save $50-200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>Join 500+ Happy Customers</h3>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-700">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="retro-card text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow fill-current" />
                    ))}
                  </div>
                  <p className="body-text text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-16 bg-yellow relative overflow-hidden">
        {/* Final CTA Sparkles */}
        <div className="absolute inset-0 opacity-45 pointer-events-none">
          <div className="absolute top-8 left-8 w-6 h-6 text-navy animate-pulse drop-shadow-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-12 right-12 w-4 h-4 text-navy animate-bounce delay-300 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-16 left-16 w-7 h-7 text-navy animate-pulse delay-500 drop-shadow-2xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-8 right-8 w-5 h-5 text-navy animate-bounce delay-700 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 text-navy animate-pulse delay-200 drop-shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 text-navy animate-bounce delay-800 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
              <span className="block sm:inline">Ready to Get</span>{' '}
              <span className="block sm:inline">Started Today?</span>
            </h3>
            <p className="body-text text-xl text-navy-700 mb-6">
              Join 500+ satisfied customers who've already saved with our exclusive discount. Get your FREE quote + <span className="font-bold" style={{color: '#FF4500'}}>15% OFF</span> before this offer expires!
            </p>
            
            {/* Final Urgency Counter */}
            <div className="bg-navy text-white rounded-xl p-6 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-yellow font-bold mb-2">⏰ OFFER EXPIRES IN:</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-xs">DAYS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">23</div>
                    <div className="text-xs">HOURS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-xs">MINUTES</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ScrollToFormButton 
                variant="retro-navy" 
                size="lg" 
                className="text-lg px-8 py-4 animate-pulse"
              >
                🚀 Claim My FREE Quote + <span style={{color: '#FF4500'}}>15% OFF</span> ↑
              </ScrollToFormButton>
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
