import { generateSEO, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Phone, Award, Shield, Clock, Users, CheckCircle, Building, Home, Waves, Zap, Target } from 'lucide-react'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import GetQuoteButton from "@/components/GetQuoteButton"

export const metadata = generateSEO({
  title: 'Orange County Cleaning Services – Complete Property Care – Shimmer Shine',
  description: 'Comprehensive cleaning services across Orange County. Window cleaning, pressure washing, solar panels, gutters & more. Serving 33+ cities since 2021. Licensed & insured.',
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shimmershinepropertydetailing.com'}/counties/orange-county/services`,
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Orange County, California',
    'geo.position': '33.7175;-117.8311',
    'ICBM': '33.7175, -117.8311',
    'business.service_area': 'Orange County',
    'locality': 'Orange County',
    'region': 'CA',
    'country': 'US'
  }
})

export default function OrangeCountyServicesPage() {
  const countyData = GEO_DATA.counties['orange-county']
  const ocCities = BUSINESS_INFO.cities.slice(0, 33)
  
  // Orange County specific service benefits
  const ocServiceBenefits = {
    'window-cleaning': {
      benefits: [
        'Salt air and coastal condition expertise',
        'Hard water stain removal specialists',
        'UV protection for luxury properties',
        'Frequent maintenance for beach homes'
      ],
      specialties: 'Coastal properties, luxury homes, high-rise condos'
    },
    'pressure-washing': {
      benefits: [
        'Concrete and driveway restoration',
        'Pool deck and patio cleaning',
        'Oil stain removal from driveways',
        'Mold and mildew treatment'
      ],
      specialties: 'Driveways, patios, pool areas, commercial properties'
    },
    'solar-panel-cleaning': {
      benefits: [
        'Maximize energy efficiency in sunny climate',
        'Dust and debris removal',
        'Warranty-safe cleaning methods',
        'Regular maintenance programs'
      ],
      specialties: 'Residential and commercial solar installations'
    },
    'gutter-cleaning': {
      benefits: [
        'Debris removal and downspout clearing',
        'Rain preparation services',
        'Gutter repair and maintenance',
        'Seasonal cleaning programs'
      ],
      specialties: 'Single-story and multi-story properties'
    },
    'post-construction-cleanup': {
      benefits: [
        'New construction cleanup',
        'Renovation debris removal',
        'Move-in ready preparation',
        'Dust and residue elimination'
      ],
      specialties: 'New developments, home renovations, commercial builds'
    },
    'commercial-cleaning': {
      benefits: [
        'Office building maintenance',
        'Retail space cleaning',
        'Medical facility sanitization',
        'Restaurant and hospitality cleaning'
      ],
      specialties: 'Business parks, shopping centers, medical complexes'
    }
  }
  
  // Featured Orange County cities
  const featuredCities = [
    { name: 'Newport Beach', type: 'Luxury Coastal', description: 'Premium waterfront properties' },
    { name: 'Irvine', type: 'Business Hub', description: 'Corporate and residential communities' },
    { name: 'Costa Mesa', type: 'Commercial Center', description: 'Shopping and business district' },
    { name: 'Huntington Beach', type: 'Beach Community', description: 'Coastal homes and condos' },
    { name: 'Santa Ana', type: 'Urban Center', description: 'Downtown and residential areas' },
    { name: 'Anaheim', type: 'Tourist Destination', description: 'Hotels and entertainment venues' }
  ]
  
  return (
    <>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                Orange County Cleaning Services
              </h1>
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Comprehensive property cleaning services across all 33+ cities in Orange County. 
                From luxury coastal homes in Newport Beach to business centers in Irvine, we provide 
                professional window cleaning, pressure washing, and complete property maintenance.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">33+</div>
                  <div className="text-sm">Cities Served</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">3.2M</div>
                  <div className="text-sm">Residents</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">Get Free OC Quote
                  </GetQuoteButton>
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Building className="h-24 w-24 text-navy mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-navy mb-2">Orange County</h3>
                      <p className="text-gray-600">Complete Cleaning Services</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float">
                    <Home className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <Building className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <Waves className="w-6 h-6 text-navy" />
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">Orange County Services</p>
                  <p className="text-sm text-gray-600">Professional • Licensed • Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange County Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why Choose Us for Orange County Cleaning?
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              We understand Orange County's unique environment - from coastal salt air to inland heat, 
              luxury properties to business centers. Our local expertise ensures the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Waves className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Coastal Expertise</h3>
                <p className="body-text text-gray-600">Specialized techniques for salt air and marine conditions</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Luxury Property Care</h3>
                <p className="body-text text-gray-600">Premium service standards for high-end properties</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Commercial Excellence</h3>
                <p className="body-text text-gray-600">Professional service for business parks and offices</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Local Response</h3>
                <p className="body-text text-gray-600">Same-day service across all Orange County cities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Complete Orange County Cleaning Services
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From residential homes to commercial properties, we provide comprehensive cleaning solutions 
              tailored to Orange County's unique environment and property types.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const serviceInfo = ocServiceBenefits[service.id as keyof typeof ocServiceBenefits]
              
              return (
                <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={48}
                        height={48}
                        className="mr-4"
                      />
                      <div>
                        <CardTitle className="heading-primary text-xl text-navy">
                          {service.name} Orange County
                        </CardTitle>
                        <p className="text-sm text-gray-600">{serviceInfo?.specialties}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="body-text text-gray-600 mb-4">
                      {service.shortDescription}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="body-text font-semibold mb-2">Orange County Benefits:</h4>
                      <div className="space-y-1">
                        {serviceInfo?.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-yellow mr-2 flex-shrink-0" />
                            <span className="body-text text-gray-600 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href={`/services/${service.id}`} className="flex-1">
                        <Button variant="outline" className="w-full hover:bg-yellow hover:text-navy transition-colors">
                          Learn More
                        </Button>
                      </Link>
                      <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy">Get Quote
                        </GetQuoteButton>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Featured Orange County Cities We Serve
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From coastal communities to inland business centers, we provide specialized cleaning services 
              throughout Orange County's diverse cities and neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCities.map((city, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-6 w-6 text-yellow mr-2" />
                    <CardTitle className="heading-primary text-lg text-navy">
                      {city.name}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-gray-500">{city.type}</p>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-600 mb-4">{city.description}</p>
                  <Link href={`/cities/${city.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="w-full hover:bg-yellow hover:text-navy transition-colors">
                      View {city.name} Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/cities">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white">
                View All Orange County Cities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Orange County Facts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-primary text-3xl mb-6" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                Orange County Cleaning Expertise
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 leading-relaxed">
                Orange County's Mediterranean coastal climate and diverse property types require specialized cleaning approaches. 
                From beachfront condos dealing with salt air to inland business parks, we understand the unique challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Salt air and coastal condition specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Hard water stain removal experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Luxury property care standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Commercial and residential expertise</span>
                </div>
              </div>
            </div>

            <Card className="retro-card">
              <CardHeader className="text-center">
                <CardTitle className="heading-primary text-2xl text-navy">
                  Orange County by the Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">33+</div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">3.2M</div>
                    <div className="text-sm text-gray-600">Population</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">42 Miles</div>
                    <div className="text-sm text-gray-600">Coastline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">948 sq mi</div>
                    <div className="text-sm text-gray-600">Total Area</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-navy">Climate: Mediterranean Coastal</div>
                    <div className="text-sm text-gray-600">Mild, dry summers • Cool, wet winters</div>
                  </div>
                  
                  <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold">Get Orange County Quote
                    </GetQuoteButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
            Ready for Orange County's Best Cleaning Service?
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Orange County. From Newport Beach to Anaheim, 
            experience the Shimmer Shine difference with professional, reliable cleaning services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">Get Free Orange County Quote
              </GetQuoteButton>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-300">
              <strong>Serving All of Orange County</strong> • Licensed & Insured • Same-Day Service Available
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
