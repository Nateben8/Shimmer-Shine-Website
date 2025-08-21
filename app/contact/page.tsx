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

export const metadata = getPageSEO('contact')

export default function ContactPage() {
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
                Professional window cleaning, pressure washing, and property detailing. Family-owned since 1995 with 500+ five-star reviews.
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
                  <span className="text-sm font-medium">Since 1995</span>
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

            {/* Right Side - Mascot */}
            <div className="flex justify-center lg:justify-end">
              <div className="polaroid-frame max-w-sm">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center h-full border-4 border-navy shadow-lg">
                    <div className="relative w-full h-full">
                      <Image
                        src="/mascot.png"
                        alt="Timmy - Shimmer Shine Mascot"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Meet Timmy!</p>
                  <p className="text-sm text-gray-600">Your Cleaning Hero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-primary text-3xl md:text-4xl mb-4">
                Get Your Free Quote - No Obligation
              </h2>
              <p className="body-text text-gray-600 text-lg">
                Fill out the form below and we'll respond within 2 hours with your custom quote.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <JobberForm />
              </div>

              {/* Benefits Sidebar */}
              <div className="space-y-6">
                <Card className="retro-card">
                  <CardHeader>
                    <CardTitle className="heading-primary text-xl flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Why Choose Us?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Free Quote</p>
                        <p className="text-xs text-gray-600">No obligation, no hidden fees</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">2-Hour Response</p>
                        <p className="text-xs text-gray-600">Quick turnaround guaranteed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Same-Day Service</p>
                        <p className="text-xs text-gray-600">Available when you need it</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">100% Satisfaction</p>
                        <p className="text-xs text-gray-600">Guaranteed or money back</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-700">4.9/5 from 500+ Reviews</p>
                  <p className="text-xs text-gray-600 mt-1">"Outstanding service!" - Sarah M.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Social Proof Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
              Join hundreds of satisfied customers. Get your free quote today and see why we've been Orange County's trusted choice since 1995!
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
