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

export const metadata = getPageSEO('get-a-quote')

export default function GetQuotePage() {
  const localBusinessSchema = getLocalBusinessSchema()
  const featuredTestimonials = TESTIMONIALS.slice(0, 3)
  
  // Enhanced Service Schema for better SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Window Cleaning Quote Orange County",
    "description": "Get a free quote for professional window cleaning, pressure washing, and property detailing services in Orange County. Same day service available with 10% discount for new customers.",
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
      "description": "Free quote with 10% discount on first service",
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
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="retro-badge mb-6 inline-block animate-pulse">
                LIMITED TIME: Only 12 Spots Left This Month!
              </div>
              
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-2 leading-tight" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                Get Your FREE Quote + 10% OFF
              </h1>
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                in 60 Seconds
              </h2>
              
              <div className="bg-yellow text-navy px-4 py-2 rounded-full font-bold text-lg mb-4 inline-block">
                Save $50-200 on Your First Service!
              </div>
              
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional window cleaning, pressure washing, and property detailing. Family-owned since {BUSINESS_INFO.foundedYear} with 500+ five-star reviews.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium">500+ Five-Star Reviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium">Since {BUSINESS_INFO.foundedYear}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium">Same Day Service</span>
                </div>
              </div>

              {/* Call Button */}
              <div className="mb-6">
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="retro" size="lg" className="text-lg px-8 py-4">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </div>

                               {/* Right Side - Hero Image */}
                   <div className="w-full">
                     <div className="relative">
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
                   </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-yellow text-navy px-4 py-2 rounded-full font-bold text-sm mb-4 border-2 border-navy shadow-retro-yellow animate-pulse">
                INSTANT QUOTE - RESPONDS IN 2 HOURS GUARANTEED
              </div>
              <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                Complete Your Free Quote Below
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
                  <CardHeader>
                    <CardTitle className="heading-primary text-xl flex items-center">
                      <Award className="h-6 w-6 mr-2 text-yellow" />
                      Why 500+ Customers Choose Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-navy">Lightning Fast Response</p>
                        <p className="text-sm text-gray-600">Quote delivered within 2 hours, guaranteed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-navy">Fully Licensed & Insured</p>
                        <p className="text-sm text-gray-600">$2M liability coverage for your peace of mind</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Zap className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-bold text-navy">Same-Day Service Available</p>
                        <p className="text-sm text-gray-600">Emergency cleaning when you need it most</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <ThumbsUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-navy">100% Satisfaction Guarantee</p>
                        <p className="text-sm text-gray-600">Not happy? We'll make it right or refund you</p>
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
                    <p className="text-yellow text-sm font-bold mb-3">500+ Five-Star Reviews</p>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Urgency Banner */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-yellow rounded-xl p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-red-600 uppercase tracking-wide">Limited Time Offer</span>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="heading-primary text-2xl md:text-3xl text-navy mb-3" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
                URGENT: Only 12 Spots Left This Month!
              </h3>
              <p className="body-text text-gray-700 mb-4">
                <strong>Don't miss out!</strong> This exclusive 10% discount + FREE quote expires in 6 days. Join 47 customers who've already saved $50-200 this week!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2 bg-red-50 p-3 rounded-lg">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span className="font-medium text-red-700">6 days left</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-green-50 p-3 rounded-lg">
                  <Users className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-green-700">47 saved this week</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-yellow-50 p-3 rounded-lg">
                  <span className="text-yellow-600 font-bold">$</span>
                  <span className="font-medium text-yellow-700">$50-200 savings</span>
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
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
              Don't Miss Out - Only 12 Spots Left!
            </h3>
            <p className="body-text text-xl text-navy-700 mb-6">
              Join 500+ satisfied customers who've already saved with our exclusive discount. Get your FREE quote + 10% OFF before this offer expires!
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
                🚀 Claim My FREE Quote + 10% OFF ↑
              </ScrollToFormButton>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS_INFO.phone} Now
                </Button>
              </Link>
            </div>

            <div className="mt-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-lg mx-auto">
                <p className="text-sm text-red-700 font-medium">
                  <strong>WARNING:</strong> Only 12 discounted spots remaining this month. Don't miss out on this limited-time offer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
