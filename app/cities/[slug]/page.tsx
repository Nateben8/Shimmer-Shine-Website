import { notFound } from "next/navigation"
import { getCitySEO } from "@/lib/seo"
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema"
import { BUSINESS_INFO, SERVICES, TESTIMONIALS } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Award,
  Shield,
  Clock
} from "lucide-react"

interface CityPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CityPageProps) {
  return getCitySEO(params.slug)
}

export async function generateStaticParams() {
  return BUSINESS_INFO.cities.map((city) => ({
    slug: city.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default function CityPage({ params }: CityPageProps) {
  const cityName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const isValidCity = BUSINESS_INFO.cities.some(city => 
    city.toLowerCase().replace(/\s+/g, '-') === params.slug
  )
  
  if (!isValidCity) {
    notFound()
  }

  // Determine county based on city
  const getCounty = (city: string) => {
    const ocCities = ["Costa Mesa", "Newport Beach", "Irvine", "Santa Ana", "Anaheim", "Huntington Beach", "Fullerton", "Garden Grove", "Orange", "Tustin", "Fountain Valley", "Westminster", "Buena Park", "Cypress", "La Habra"]
    const laCities = ["Los Angeles", "Beverly Hills", "Santa Monica", "Manhattan Beach", "Redondo Beach", "Torrance", "El Segundo", "Culver City", "Venice"]
    const sdCities = ["San Diego", "La Jolla", "Del Mar", "Encinitas", "Carlsbad", "Solana Beach", "Pacific Beach", "Mission Beach", "Ocean Beach"]
    
    if (ocCities.includes(city)) return "Orange County"
    if (laCities.includes(city)) return "Los Angeles County"
    if (sdCities.includes(city)) return "San Diego County"
    return "Southern California"
  }

  const county = getCounty(cityName)
  const localBusinessSchema = getLocalBusinessSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: cityName, url: `/cities/${params.slug}` }
  ])

  const featuredServices = SERVICES.slice(0, 4)
  const cityTestimonials = TESTIMONIALS.filter(t => t.location.includes(cityName)).slice(0, 2)

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="text-sm mb-6">
                <Link href="/" className="text-gray-300 hover:text-yellow">Home</Link>
                <span className="text-gray-400 mx-2">/</span>
                <Link href="/service-areas" className="text-gray-300 hover:text-yellow">Service Areas</Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-yellow">{cityName}</span>
              </nav>

              <div className="retro-badge mb-6">
                <MapPin className="h-4 w-4 mr-1" />
                Serving {county}
              </div>
              
              <h1 className="heading-decorative text-5xl md:text-6xl text-yellow mb-4">
                {cityName}
              </h1>
              
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6">
                Professional Property Detailing Services
              </h2>
              
              <p className="body-text text-xl text-gray-100 mb-8 leading-relaxed">
                Shimmer Shine Property Detailing proudly serves {cityName} residents and businesses with professional window cleaning, pressure washing, and property maintenance services. Professional since 1995 with old-school quality you can trust.
              </p>

              {/* Local Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Local {cityName} Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Same Day Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>500+ 5-Star Reviews</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="retro" size="lg" className="text-lg px-8 py-4">
                    Get Free {cityName} Quote
                  </Button>
                </Link>
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-navy">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </div>

            {/* City Image */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={`/cities/${params.slug}-hero.jpg`}
                    alt={`Professional property detailing services in ${cityName}, California`}
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Serving {cityName} Since 1995</p>
                  <p className="text-sm text-gray-600">{county}, California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Our Services in {cityName}
            </h3>
            <p className="body-text text-xl text-gray-600">
              Professional property detailing services tailored for {cityName} homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="retro-card hover:shadow-retro-yellow transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="heading-primary text-xl">
                    {service.name} in {cityName}
                  </CardTitle>
                  <CardDescription className="body-text">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="retro-badge">
                      Get Quote
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
        </div>
      </section>

      {/* Why Choose Us for City */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Why {cityName} Chooses Shimmer Shine
            </h3>
            <p className="body-text text-xl text-gray-600">
              Local expertise with three decades of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Local Expertise</h4>
              <p className="body-text text-gray-600 text-sm">
                We understand {cityName}'s unique climate and property maintenance needs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Proven Results</h4>
              <p className="body-text text-gray-600 text-sm">
                Hundreds of satisfied {cityName} customers and 500+ 5-star reviews.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Fast Response</h4>
              <p className="body-text text-gray-600 text-sm">
                Same-day service available for {cityName} emergency cleaning needs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Trust & Safety</h4>
              <p className="body-text text-gray-600 text-sm">
                Fully licensed, bonded, and insured for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="heading-primary text-2xl text-navy text-center">
                  Professional Property Detailing in {cityName}
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <div className="body-text text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <strong>{cityName} residents and business owners</strong> have trusted Shimmer Shine Property Detailing for nearly three decades. Our professional company understands the unique challenges that {county}'s climate presents for property maintenance.
                  </p>
                  
                  <p>
                    Whether you need window cleaning for your {cityName} home's ocean views, pressure washing to remove California's persistent dust and grime, or solar panel cleaning to maintain peak efficiency, our experienced team delivers old-school quality with modern reliability.
                  </p>
                  
                  <p>
                    <strong>Our {cityName} services include:</strong>
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Residential and commercial window cleaning in {cityName}</li>
                    <li>Pressure washing for {cityName} driveways, patios, and building exteriors</li>
                    <li>Solar panel cleaning to maximize energy efficiency</li>
                    <li>Gutter cleaning and maintenance services</li>
                    <li>Post-construction cleanup for {cityName} new builds and renovations</li>
                    <li>Regular maintenance programs for {cityName} businesses</li>
                  </ul>
                  
                  <p>
                    We're proud to serve the {cityName} community with the same values that started our business in 1995: honest pricing, reliable service, and a commitment to customer satisfaction that goes beyond the job itself.
                  </p>
                  
                  <p>
                    <strong>Ready to experience the Shimmer Shine difference in {cityName}?</strong> Contact us today for your free estimate and join hundreds of satisfied customers throughout {county}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {cityTestimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="heading-primary text-3xl mb-4">
                What {cityName} Customers Say
              </h3>
              <p className="body-text text-gray-600">
                Real reviews from your neighbors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {cityTestimonials.map((testimonial) => (
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
                    <p className="text-sm text-gray-600">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-gray-700 italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4">
            Ready for {cityName}'s Best?
          </h3>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied {cityName} customers who trust Shimmer Shine for all their property detailing needs. Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button variant="retro-navy" size="lg" className="text-lg px-8 py-4">
                Get Free {cityName} Quote
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-navy-600">
              🏠 <strong>Local Promise:</strong> Same-day service available for {cityName} residents!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
