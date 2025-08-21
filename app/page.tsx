import Hero from "@/components/Hero"
import { SERVICES, TESTIMONIALS } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight, CheckCircle, Award, Shield, Clock } from "lucide-react"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4)
  const featuredTestimonials = TESTIMONIALS.slice(0, 3)

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">
              Our Professional Services
            </h2>
            <p className="body-text text-xl text-gray-600 max-w-3xl mx-auto">
              From sparkling windows to pristine driveways, we bring old-school craftsmanship to every job across Orange County, Los Angeles, and San Diego.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="retro-card hover:shadow-retro-yellow transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="heading-primary text-xl">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="body-text">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="retro-badge">
                      Get Custom Quote
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full group-hover:bg-yellow group-hover:text-navy transition-colors">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="retro" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">
              See The Difference
            </h2>
            <p className="body-text text-xl text-gray-600">
              Real results from our professional cleaning services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="polaroid-frame">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/window-cleaning-before-after.png"
                  alt="Before and After Window Cleaning Results - Professional Service by Shimmer Shine"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                  <p className="font-bold text-center">Professional Window Cleaning</p>
                  <p className="text-sm text-center">Amazing before & after results</p>
                </div>
              </div>
            </div>
            <div className="polaroid-frame">
              <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏠➡️💧</div>
                  <p className="font-bold text-navy">Before & After</p>
                  <p className="text-sm text-gray-600">Pressure Washing Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
              Why Choose Shimmer Shine?
            </h2>
            <p className="body-text text-xl text-gray-100">
              Three decades of experience, thousands of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-xl text-white">Professional Excellence</h3>
              <p className="body-text text-gray-200">
                Three decades of window cleaning expertise with old-school values and modern techniques.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-xl text-white">Licensed & Insured</h3>
              <p className="body-text text-gray-200">
                Fully licensed, bonded, and insured for your complete peace of mind and protection.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-xl text-white">Reliable Service</h3>
              <p className="body-text text-gray-200">
                On-time arrivals, consistent quality, and same-day service available when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-700">4.9/5 (500+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="retro-card">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow fill-current" />
                    ))}
                  </div>
                  <CardTitle className="heading-primary text-lg">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {testimonial.location} • {testimonial.service}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700 italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button variant="outline" size="lg">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-decorative text-4xl md:text-5xl text-navy mb-4">
            Ready for That Classic Shine?
          </h2>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Orange County, Los Angeles, and San Diego. Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button variant="retro-navy" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href="tel:(714) 555-0123">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                Call (714) 555-0123
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-navy-600">
              🚨 <strong>Limited Time:</strong> 10% off your first service when you book this month!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
