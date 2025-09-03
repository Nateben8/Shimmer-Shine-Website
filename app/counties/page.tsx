import { generateSEO, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Star, Phone, Award, Shield, Clock, Users, CheckCircle, Building, Home, Waves, Sun, Film, Anchor } from 'lucide-react'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import GetQuoteButton from '@/components/GetQuoteButton'

export const metadata = generateSEO({
  title: 'Southern California Counties We Serve – Orange, LA & San Diego – Shimmer Shine',
  description: 'Professional cleaning services across Southern California. Serving Orange County, Los Angeles County, and San Diego County with window cleaning, pressure washing & more. 150+ cities covered.',
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shimmershinepropertydetailing.com'}/counties`,
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Southern California',
    'locality': 'Southern California',
    'region': 'CA',
    'country': 'US'
  }
})

export default function CountiesPage() {
  const counties = [
    {
      slug: 'orange-county',
      data: GEO_DATA.counties['orange-county'],
      cities: BUSINESS_INFO.cities.slice(0, 33),
      icon: <Building className="h-16 w-16 text-yellow" />,
      highlights: [
        'Luxury coastal properties',
        'Business and tech centers',
        'Beach communities',
        'Family neighborhoods'
      ],
      specialties: [
        'Salt air expertise',
        'Luxury property care',
        'Commercial cleaning',
        'Coastal maintenance'
      ]
    },
    {
      slug: 'los-angeles-county',
      data: GEO_DATA.counties['los-angeles-county'],
      cities: BUSINESS_INFO.cities.slice(33, 91),
      icon: <Film className="h-16 w-16 text-yellow" />,
      highlights: [
        'Entertainment industry',
        'Urban centers',
        'Beach cities',
        'Corporate headquarters'
      ],
      specialties: [
        'High-rise buildings',
        'Urban pollution removal',
        'Entertainment venues',
        'Commercial complexes'
      ]
    },
    {
      slug: 'san-diego-county',
      data: GEO_DATA.counties['san-diego-county'],
      cities: BUSINESS_INFO.cities.slice(91),
      icon: <Anchor className="h-16 w-16 text-yellow" />,
      highlights: [
        'Coastal lifestyle',
        'Military presence',
        'Biotech hub',
        'Year-round outdoor living'
      ],
      specialties: [
        'Coastal properties',
        'Military facilities',
        'Biotech buildings',
        'Resort properties'
      ]
    }
  ]
  
  const totalCities = BUSINESS_INFO.cities.length
  const totalPopulation = '16.6M'
  
  return (
    <>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
              Southern California Counties We Serve
            </h1>
            <p className="body-text text-xl text-gray-100 mb-6 max-w-4xl mx-auto leading-relaxed">
              Professional cleaning services across three major Southern California counties. From Orange County's 
              luxury coastal communities to Los Angeles County's entertainment industry and San Diego County's 
              military installations - we provide specialized cleaning expertise for every environment.
            </p>
            
            {/* Regional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow mb-2">3</div>
                <div className="text-lg">Counties Served</div>
                <div className="text-sm text-gray-300">Orange • LA • San Diego</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow mb-2">{totalCities}+</div>
                <div className="text-lg">Cities Covered</div>
                <div className="text-sm text-gray-300">Comprehensive Coverage</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow mb-2">{totalPopulation}</div>
                <div className="text-lg">Population Served</div>
                <div className="text-sm text-gray-300">Southern California</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">
                Get Regional Quote
              </GetQuoteButton>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="outline" size="lg" className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* County Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Our County Coverage
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              Each county in Southern California has unique characteristics and cleaning needs. 
              Our specialized approach ensures optimal results for every environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {counties.map((county, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mb-4">{county.icon}</div>
                  <CardTitle className="heading-primary text-2xl text-navy">
                    {county.data.name}
                  </CardTitle>
                  <p className="body-text text-gray-600 mt-2">
                    {county.cities.length} Cities • {county.data.population} Residents
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* County Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-navy">{county.cities.length}</div>
                      <div className="text-sm text-gray-600">Cities</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-navy">{county.data.population}</div>
                      <div className="text-sm text-gray-600">Population</div>
                    </div>
                  </div>

                  {/* County Highlights */}
                  <div>
                    <h4 className="font-semibold text-navy mb-3">County Highlights:</h4>
                    <div className="space-y-2">
                      {county.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-yellow mr-2 flex-shrink-0" />
                          <span className="body-text text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Our Specialties:</h4>
                    <div className="space-y-2">
                      {county.specialties.map((specialty, specialtyIndex) => (
                        <div key={specialtyIndex} className="flex items-center">
                          <Star className="h-4 w-4 text-yellow mr-2 flex-shrink-0" />
                          <span className="body-text text-gray-600 text-sm">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Climate Info */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-navy mb-2">Climate:</h4>
                    <p className="body-text text-gray-600 text-sm">{county.data.climate}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Link href={`/counties/${county.slug}`}>
                      <Button variant="outline" className="w-full hover:bg-yellow hover:text-navy transition-colors">
                        View {county.data.name} Details
                      </Button>
                    </Link>
                    <Link href={`/counties/${county.slug}/services`}>
                      <Button className="w-full bg-yellow hover:bg-yellow/90 text-navy">
                        View Services
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why Choose Regional Coverage?
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              Our multi-county presence provides unique advantages for customers across Southern California.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h4 className="heading-primary text-lg mb-2 text-navy">Local Expertise</h4>
                <p className="body-text text-gray-600">Deep understanding of each county's unique conditions</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h4 className="heading-primary text-lg mb-2 text-navy">Consistent Service</h4>
                <p className="body-text text-gray-600">Same quality standards across all three counties</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h4 className="heading-primary text-lg mb-2 text-navy">Regional Licensing</h4>
                <p className="body-text text-gray-600">Licensed and insured across all service areas</p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-yellow mx-auto mb-4" />
                <h4 className="heading-primary text-lg mb-2 text-navy">Multi-Location</h4>
                <p className="body-text text-gray-600">Perfect for businesses with multiple properties</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Across Counties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Complete Services Across All Counties
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              Every service we offer is available across Orange County, Los Angeles County, and San Diego County 
              with specialized approaches for each region's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow/10 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-yellow" />
                  </div>
                  <CardTitle className="heading-primary text-lg text-navy">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-600 text-center mb-4 text-sm">
                    {service.shortDescription}
                  </p>
                  
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500 mb-2">Available in:</div>
                    <div className="flex flex-wrap justify-center gap-1">
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">OC</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">LA</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">SD</span>
                    </div>
                  </div>
                  
                  <Link href={`/services/${service.id}`}>
                    <Button variant="outline" className="w-full hover:bg-yellow hover:text-navy transition-colors">
                      View Service Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
            Ready to Experience Regional Excellence?
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Orange County, Los Angeles County, and San Diego County. 
            Experience the difference of true regional expertise and consistent quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">
              Get Regional Quote
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
              <strong>Serving {totalCities}+ Cities Across 3 Counties</strong> • Licensed & Insured • Same-Day Service Available
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
