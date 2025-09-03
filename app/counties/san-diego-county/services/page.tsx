import { generateSEO, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Phone, Award, Shield, Clock, Users, CheckCircle, Building, Home, Waves, Sun, Anchor } from 'lucide-react'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import GetQuoteButton from "@/components/GetQuoteButton"

export const metadata = generateSEO({
  title: 'San Diego County Cleaning Services – Coastal Property Specialists – Shimmer Shine',
  description: 'Professional cleaning services across San Diego County. Window cleaning, pressure washing, coastal property care. Serving 32+ cities from downtown to North County. Licensed & insured.',
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shimmershinepropertydetailing.com'}/counties/san-diego-county/services`,
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'San Diego County, California',
    'geo.position': '32.7157;-117.1611',
    'ICBM': '32.7157, -117.1611',
    'business.service_area': 'San Diego County',
    'locality': 'San Diego County',
    'region': 'CA',
    'country': 'US'
  }
})

export default function SanDiegoCountyServicesPage() {
  const countyData = GEO_DATA.counties['san-diego-county']
  const sdCities = BUSINESS_INFO.cities.slice(91)
  
  // San Diego County specific service benefits
  const sdServiceBenefits = {
    'window-cleaning': {
      benefits: [
        'Salt air and marine condition specialists',
        'Year-round outdoor cleaning weather',
        'Coastal property maintenance expertise',
        'Military and government facility cleaning'
      ],
      specialties: 'Coastal homes, military facilities, luxury resorts'
    },
    'pressure-washing': {
      benefits: [
        'Salt buildup and marine growth removal',
        'Deck and patio restoration',
        'Coastal walkway maintenance',
        'Pool area and outdoor space cleaning'
      ],
      specialties: 'Coastal properties, outdoor living spaces, pool areas'
    },
    'solar-panel-cleaning': {
      benefits: [
        'Optimal sun exposure year-round',
        'Salt air impact mitigation',
        'Maximum efficiency in sunny climate',
        'Coastal installation expertise'
      ],
      specialties: 'Residential and commercial coastal installations'
    },
    'gutter-cleaning': {
      benefits: [
        'Coastal debris and salt removal',
        'Storm preparation services',
        'Eucalyptus and palm debris clearing',
        'Year-round maintenance programs'
      ],
      specialties: 'Coastal homes, multi-level properties'
    },
    'post-construction-cleanup': {
      benefits: [
        'New coastal development cleanup',
        'Resort and hospitality preparation',
        'Military facility construction cleanup',
        'Luxury property move-in preparation'
      ],
      specialties: 'Coastal developments, luxury properties, resorts'
    },
    'commercial-cleaning': {
      benefits: [
        'Tourism and hospitality facilities',
        'Military and government buildings',
        'Biotech and research facilities',
        'Retail and entertainment venues'
      ],
      specialties: 'Hotels, military bases, biotech facilities, retail'
    }
  }
  
  // Featured San Diego County areas
  const featuredAreas = [
    { name: 'San Diego', type: 'Urban Center', description: 'Downtown and metropolitan areas' },
    { name: 'La Jolla', type: 'Luxury Coastal', description: 'Premium oceanfront properties' },
    { name: 'Del Mar', type: 'Beach Community', description: 'Upscale coastal living' },
    { name: 'Carlsbad', type: 'North County', description: 'Family communities and businesses' },
    { name: 'Encinitas', type: 'Surf City', description: 'Beach culture and coastal homes' },
    { name: 'Oceanside', type: 'Military Hub', description: 'Military facilities and beaches' }
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
                San Diego County Cleaning Services
              </h1>
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional cleaning services across America's Finest County. From La Jolla's luxury oceanfront 
                properties to downtown San Diego's business district, we provide specialized coastal property 
                maintenance and comprehensive cleaning services throughout San Diego County's 32+ cities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">32+</div>
                  <div className="text-sm">Cities Served</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">3.3M</div>
                  <div className="text-sm">Residents</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">Get Free SD Quote
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
                <div className="relative h-96 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Anchor className="h-24 w-24 text-navy mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-navy mb-2">San Diego County</h3>
                      <p className="text-gray-600">Coastal Cleaning Specialists</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float">
                    <Waves className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <Sun className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <Anchor className="w-6 h-6 text-navy" />
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">San Diego County Services</p>
                  <p className="text-sm text-gray-600">Coastal • Military • Biotech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* San Diego County Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why Choose Us for San Diego County?
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              San Diego County's coastal environment and year-round outdoor lifestyle create unique cleaning needs. 
              Our expertise in coastal property care and understanding of local conditions sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Waves className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Coastal Specialists</h3>
                <p className="body-text text-gray-600">Expert care for salt air and marine conditions</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Sun className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Year-Round Service</h3>
                <p className="body-text text-gray-600">Perfect weather for outdoor cleaning year-round</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Military Approved</h3>
                <p className="body-text text-gray-600">Trusted service for military facilities</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Luxury Property Care</h3>
                <p className="body-text text-gray-600">Premium service for oceanfront estates</p>
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
              Complete San Diego County Cleaning Services
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From oceanfront luxury homes to military installations, biotech facilities to tourist destinations, 
              we provide specialized cleaning services for San Diego County's unique property landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const serviceInfo = sdServiceBenefits[service.id as keyof typeof sdServiceBenefits]
              
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
                          {service.name} San Diego County
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
                      <h4 className="body-text font-semibold mb-2">San Diego County Benefits:</h4>
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

      {/* Featured Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Featured San Diego County Areas
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From luxury coastal enclaves to military installations, beach communities to biotech hubs, 
              we serve San Diego County's most distinctive areas with specialized expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAreas.map((area, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-6 w-6 text-yellow mr-2" />
                    <CardTitle className="heading-primary text-lg text-navy">
                      {area.name}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-gray-500">{area.type}</p>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-600 mb-4">{area.description}</p>
                  <Link href={`/cities/${area.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="w-full hover:bg-yellow hover:text-navy transition-colors">
                      View {area.name} Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/cities">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white">
                View All San Diego County Cities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* San Diego County Facts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-primary text-3xl mb-6" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                San Diego County Cleaning Expertise
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 leading-relaxed">
                Known as "America's Finest County," San Diego offers year-round perfect weather and coastal living. 
                This unique environment requires specialized cleaning expertise for salt air, marine conditions, and outdoor lifestyles.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Coastal property and salt air specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Year-round outdoor cleaning weather</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Military and government facility approved</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Luxury oceanfront property expertise</span>
                </div>
              </div>
            </div>

            <Card className="retro-card">
              <CardHeader className="text-center">
                <CardTitle className="heading-primary text-2xl text-navy">
                  San Diego County by the Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">32+</div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">3.3M</div>
                    <div className="text-sm text-gray-600">Population</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">70 Miles</div>
                    <div className="text-sm text-gray-600">Coastline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">4,526 sq mi</div>
                    <div className="text-sm text-gray-600">Total Area</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-navy">Climate: Semi-Arid Mediterranean</div>
                    <div className="text-sm text-gray-600">Mild year-round • Perfect for outdoor living</div>
                  </div>
                  
                  <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold">Get San Diego County Quote
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
            Experience America's Finest Cleaning Service
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            From La Jolla to Oceanside, downtown to North County - we bring professional coastal cleaning expertise 
            to every corner of San Diego County. Discover why we're the preferred choice!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">Get Free San Diego Quote
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
              <strong>Serving All of San Diego County</strong> • Licensed & Insured • Year-Round Service
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
