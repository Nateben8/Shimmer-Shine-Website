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

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="retro-badge mb-6 inline-block">
                🚨 Limited Time: 10% Off First Service!
              </div>
              
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4 leading-tight">
                Get Your Free Quote in 60 Seconds
              </h1>
              
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

            {/* Right Side - Professional Window Cleaning */}
            <div className="w-full">
              <div className="polaroid-frame w-full">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center h-full border-4 border-navy shadow-lg">
                    <div className="relative w-full h-full">
                      <Image
                        src="/window-cleaning-quote.png"
                        alt="Professional window cleaning service in action"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Professional Results!</p>
                  <p className="text-sm text-gray-600">Crystal Clear Windows</p>
                </div>
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
              <div className="inline-block bg-yellow text-navy px-4 py-2 rounded-full font-bold text-sm mb-4 border-2 border-navy shadow-retro-yellow">
                ⚡ INSTANT QUOTE - RESPONDS IN 2 HOURS
              </div>
              <h2 className="heading-primary text-3xl md:text-4xl mb-4">
                Get Your Free Quote - No Obligation
              </h2>
              <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
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
                        🚚 Free on-site estimates within 30 miles
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
              <h3 className="heading-primary text-2xl md:text-3xl text-navy mb-3">
                Book This Month & Save 10% on Your First Service!
              </h3>
              <p className="body-text text-gray-700 mb-4">
                Don't wait - this exclusive discount expires at the end of the month. Join hundreds of satisfied customers who've already saved!
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span className="font-medium">Offer expires soon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-green-500" />
                  <span className="font-medium">47 customers saved this week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4">Join 500+ Happy Customers</h3>
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
            <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4">
              Ready for That Classic Shine?
            </h3>
            <p className="body-text text-xl text-navy-700 mb-8">
              Join hundreds of satisfied customers. Get your free quote today and see why we've been Orange County's trusted choice since {BUSINESS_INFO.foundedYear}!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ScrollToFormButton 
                variant="retro-navy" 
                size="lg" 
                className="text-lg px-8 py-4"
              >
                Get Free Quote Above ↑
              </ScrollToFormButton>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </Button>
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm text-navy-600">
                🚨 <strong>Limited Time:</strong> 10% off your first service when you book this month!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
