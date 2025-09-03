import { getPageSEO } from "@/lib/seo"
import { getServiceSchema } from "@/lib/schema"
import { SERVICES, BUSINESS_INFO } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone, Star, Clock, CheckCircle } from "lucide-react"
import ServiceRow from "@/components/ServiceRow"
import GetQuoteButton from "@/components/GetQuoteButton"
// import Breadcrumbs, { generateBreadcrumbs } from "@/components/Breadcrumbs"

export const metadata = getPageSEO('services')

export default function ServicesPage() {
  const servicesByCategory = SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {} as Record<string, typeof SERVICES>)

  // const breadcrumbs = generateBreadcrumbs('services')

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          {/* <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} className="text-gray-300" />
          </div> */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="retro-badge mb-6">
              Professional Services Since {BUSINESS_INFO.foundedYear}
            </div>
            
            <h1 className="heading-decorative text-4xl sm:text-5xl md:text-7xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
              Southern California Cleaning Services
            </h1>
            
            <h2 className="heading-primary text-xl sm:text-2xl md:text-3xl text-white mb-4 sm:mb-6" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
              Professional Pressure Washing & Window Cleaning Services
            </h2>
            
            <p className="body-text text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
              We believe your property should shine from top to bottom. At Shimmer Shine, we deliver professional pressure washing and window cleaning that brings back that fresh, clean look you love. Licensed and trusted by homeowners and businesses throughout Southern California, we treat every project with care and attention to detail. Get your free quote today – because quality service doesn't have to break the bank.
            </p>

            {/* Service Areas */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm sm:text-lg">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow" />
              <span className="text-center">Serving {BUSINESS_INFO.serviceAreas.join(" • ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Rows - Full Width Layout */}
      <section className="py-12 sm:py-16">
        <div className="text-center mb-12">
          <div className="container mx-auto px-4">
            <h2 className="heading-primary text-3xl sm:text-4xl md:text-5xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Complete Property Cleaning Services
            </h2>
            <p className="body-text text-lg text-gray-600 max-w-3xl mx-auto">
              Professional cleaning services for your home and business. Click on any service to see details and get a quote.
            </p>
          </div>
        </div>
        
        {/* Service Rows */}
        <div className="w-full">
          {SERVICES.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Service Areas Across Southern California
            </h2>
            <p className="body-text text-xl text-gray-600">
              Professional property detailing across Southern California
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUSINESS_INFO.serviceAreas.map((area) => (
              <Card key={area} className="retro-card text-center">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    {area}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {area === 'Orange County' && (
                      <>
                        <p>Costa Mesa • Newport Beach • Irvine</p>
                        <p>Huntington Beach • Anaheim • Santa Ana</p>
                        <p>Fullerton • Garden Grove • Tustin</p>
                      </>
                    )}
                    {area === 'Los Angeles County' && (
                      <>
                        <p>Los Angeles • Beverly Hills • Santa Monica</p>
                        <p>Manhattan Beach • Torrance • Culver City</p>
                        <p>Venice • El Segundo • Redondo Beach</p>
                      </>
                    )}
                    {area === 'San Diego County' && (
                      <>
                        <p>San Diego • La Jolla • Del Mar</p>
                        <p>Encinitas • Carlsbad • Solana Beach</p>
                        <p>Pacific Beach • Mission Beach</p>
                      </>
                    )}
                  </div>
                  <div className="mt-4">
                    <Link href="/cities">
                      <Button variant="outline" size="sm">
                        View All Cities
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
              Why Choose Shimmer Shine?
            </h3>
            <p className="body-text text-xl text-gray-100">
              Three decades of experience serving Southern California
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg text-white mb-2">5-Star Rated Service</h4>
              <p className="body-text text-gray-200 text-sm">Consistently rated #1 on Google, Yelp, and Facebook</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg text-white mb-2">Licensed & Insured</h4>
              <p className="body-text text-gray-200 text-sm">Fully bonded with comprehensive liability coverage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg text-white mb-2">Same Day Service</h4>
              <p className="body-text text-gray-200 text-sm">Emergency and same-day appointments available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg text-white mb-2">Professional Team</h4>
              <p className="body-text text-gray-200 text-sm">Three decades of window cleaning expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
            Ready to Get Started?
          </h3>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive range of services and experience the Shimmer Shine difference. Free quotes, competitive pricing, satisfaction guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GetQuoteButton variant="retro-navy" size="lg" className="text-lg px-8 py-4">
              Get Free Quote Now
            </GetQuoteButton>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-navy-600">
              <strong>Limited Time:</strong> 15% off when you book 2 or more services together!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
