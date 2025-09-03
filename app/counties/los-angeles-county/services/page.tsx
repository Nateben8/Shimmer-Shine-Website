import { generateSEO, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Phone, Award, Shield, Clock, Users, CheckCircle, Building, Home, Zap, Target, Film } from 'lucide-react'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import GetQuoteButton from "@/components/GetQuoteButton"

export const metadata = generateSEO({
  title: 'Los Angeles County Cleaning Services – Professional Property Care – Shimmer Shine',
  description: 'Complete cleaning services across Los Angeles County. Window cleaning, pressure washing, commercial & residential. Serving 75+ cities from Downtown LA to beaches. Licensed & insured.',
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shimmershinepropertydetailing.com'}/counties/los-angeles-county/services`,
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Los Angeles County, California',
    'geo.position': '34.0522;-118.2437',
    'ICBM': '34.0522, -118.2437',
    'business.service_area': 'Los Angeles County',
    'locality': 'Los Angeles County',
    'region': 'CA',
    'country': 'US'
  }
})

export default function LosAngelesCountyServicesPage() {
  const countyData = GEO_DATA.counties['los-angeles-county']
  const laCities = BUSINESS_INFO.cities.slice(33, 91)
  
  // LA County specific service benefits
  const laServiceBenefits = {
    'window-cleaning': {
      benefits: [
        'Smog and pollution residue removal',
        'High-rise and commercial building expertise',
        'Urban dust and grime specialists',
        'Frequent maintenance for city conditions'
      ],
      specialties: 'High-rises, commercial buildings, urban properties'
    },
    'pressure-washing': {
      benefits: [
        'Urban grime and pollution removal',
        'Graffiti and vandalism cleanup',
        'Parking garage and structure cleaning',
        'Heavy-duty commercial equipment'
      ],
      specialties: 'Commercial properties, parking structures, urban surfaces'
    },
    'solar-panel-cleaning': {
      benefits: [
        'Smog and dust removal for efficiency',
        'Commercial solar array maintenance',
        'Urban pollution impact mitigation',
        'Large-scale installation expertise'
      ],
      specialties: 'Commercial solar farms, residential installations'
    },
    'gutter-cleaning': {
      benefits: [
        'Debris and pollution buildup removal',
        'Multi-story building expertise',
        'Storm drain preparation',
        'Urban runoff management'
      ],
      specialties: 'High-rise buildings, commercial complexes'
    },
    'post-construction-cleanup': {
      benefits: [
        'New development cleanup',
        'Urban construction debris removal',
        'Commercial build-out cleaning',
        'Move-in ready preparation'
      ],
      specialties: 'Urban developments, commercial construction'
    },
    'commercial-cleaning': {
      benefits: [
        'Entertainment industry facilities',
        'Corporate headquarters cleaning',
        'Retail and hospitality maintenance',
        'Medical and professional buildings'
      ],
      specialties: 'Entertainment venues, corporate offices, medical facilities'
    }
  }
  
  // Featured LA County areas
  const featuredAreas = [
    { name: 'Los Angeles', type: 'Urban Center', description: 'Downtown and metropolitan areas' },
    { name: 'Beverly Hills', type: 'Luxury District', description: 'Premium residential and commercial' },
    { name: 'Santa Monica', type: 'Beach City', description: 'Coastal properties and businesses' },
    { name: 'Pasadena', type: 'Suburban Hub', description: 'Residential and cultural district' },
    { name: 'Burbank', type: 'Entertainment Center', description: 'Studios and media facilities' },
    { name: 'Manhattan Beach', type: 'Coastal Community', description: 'Luxury beachfront properties' }
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
                Los Angeles County Cleaning Services
              </h1>
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional cleaning services across the nation's largest county. From Downtown LA skyscrapers 
                to Malibu beach homes, we provide comprehensive property maintenance for residential and commercial 
                properties throughout Los Angeles County's 75+ cities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">75+</div>
                  <div className="text-sm">Cities Served</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">10.1M</div>
                  <div className="text-sm">Residents</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">Get Free LA Quote
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
                <div className="relative h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Film className="h-24 w-24 text-navy mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-navy mb-2">Los Angeles County</h3>
                      <p className="text-gray-600">Professional Cleaning Services</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float">
                    <Building className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <Film className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <Star className="w-6 h-6 text-navy" />
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">LA County Services</p>
                  <p className="text-sm text-gray-600">Urban • Coastal • Entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA County Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why Choose Us for Los Angeles County?
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              Los Angeles County presents unique cleaning challenges - from urban pollution to coastal conditions, 
              entertainment venues to corporate headquarters. Our expertise covers it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Urban Expertise</h3>
                <p className="body-text text-gray-600">Specialized techniques for city pollution and smog</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Film className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Entertainment Industry</h3>
                <p className="body-text text-gray-600">Professional service for studios and venues</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">High-Rise Specialists</h3>
                <p className="body-text text-gray-600">Commercial building and skyscraper expertise</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h3 className="heading-primary text-lg mb-2 text-navy">Diverse Properties</h3>
                <p className="body-text text-gray-600">From beach homes to downtown offices</p>
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
              Complete Los Angeles County Cleaning Services
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From Hollywood studios to Beverly Hills mansions, downtown offices to beach communities, 
              we provide specialized cleaning services for LA County's diverse property landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const serviceInfo = laServiceBenefits[service.id as keyof typeof laServiceBenefits]
              
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
                          {service.name} Los Angeles County
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
                      <h4 className="body-text font-semibold mb-2">LA County Benefits:</h4>
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
              Featured Los Angeles County Areas
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From the entertainment capital to luxury enclaves, beach communities to business districts, 
              we serve LA County's most prominent areas with specialized cleaning expertise.
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
                View All LA County Cities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LA County Facts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-primary text-3xl mb-6" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                Los Angeles County Cleaning Expertise
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 leading-relaxed">
                As the most populous county in the US, Los Angeles County presents unique cleaning challenges. 
                Urban pollution, diverse architecture, and varying climates from coast to inland require specialized expertise.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Urban pollution and smog removal specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">High-rise and commercial building expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Entertainment industry facility cleaning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Coastal and inland property care</span>
                </div>
              </div>
            </div>

            <Card className="retro-card">
              <CardHeader className="text-center">
                <CardTitle className="heading-primary text-2xl text-navy">
                  LA County by the Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">75+</div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">10.1M</div>
                    <div className="text-sm text-gray-600">Population</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">75 Miles</div>
                    <div className="text-sm text-gray-600">Coastline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow">4,751 sq mi</div>
                    <div className="text-sm text-gray-600">Total Area</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-navy">Climate: Mediterranean Urban</div>
                    <div className="text-sm text-gray-600">Warm, dry summers • Mild winters</div>
                  </div>
                  
                  <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold">Get LA County Quote
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
            Experience LA County's Premier Cleaning Service
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            From Hollywood to the beaches, downtown to the valleys - we bring professional cleaning services 
            to every corner of Los Angeles County. Join our satisfied customers today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">Get Free LA County Quote
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
              <strong>Serving All of Los Angeles County</strong> • Licensed & Insured • Same-Day Service Available
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
