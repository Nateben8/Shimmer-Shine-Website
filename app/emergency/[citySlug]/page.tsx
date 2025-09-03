import { getEmergencyGeoSEO, getCityCharacteristics, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Phone, Clock, Shield, Zap, CheckCircle, AlertTriangle } from 'lucide-react'

interface EmergencyCityPageProps {
  params: {
    citySlug: string
  }
}

export async function generateMetadata({ params }: EmergencyCityPageProps) {
  const cityName = params.citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  return getEmergencyGeoSEO(cityName)
}

export async function generateStaticParams() {
  // Generate for major cities only
  const majorCities = [
    'Newport Beach', 'Irvine', 'Costa Mesa', 'Huntington Beach', 'Santa Ana', 'Anaheim',
    'Los Angeles', 'Beverly Hills', 'Santa Monica', 'Manhattan Beach', 'Pasadena', 'Burbank',
    'San Diego', 'La Jolla', 'Del Mar', 'Carlsbad', 'Encinitas', 'Oceanside'
  ]
  
  return majorCities.map(city => ({
    citySlug: city.toLowerCase().replace(/\s+/g, '-')
  }))
}

export default function EmergencyCityPage({ params }: EmergencyCityPageProps) {
  const { citySlug } = params
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const characteristics = getCityCharacteristics(cityName)
  
  // Determine county
  let county = 'Orange County'
  const ocCities = BUSINESS_INFO.cities.slice(0, 33)
  const laCities = BUSINESS_INFO.cities.slice(33, 91)
  const sdCities = BUSINESS_INFO.cities.slice(91)
  
  if (laCities.includes(cityName)) {
    county = 'Los Angeles County'
  } else if (sdCities.includes(cityName)) {
    county = 'San Diego County'
  }
  
  const emergencyScenarios = [
    {
      title: 'Real Estate Showings',
      description: 'Property needs to look perfect for potential buyers or renters',
      timeframe: '2-4 hours notice',
      services: ['Window Cleaning', 'Pressure Washing']
    },
    {
      title: 'Special Events',
      description: 'Last-minute cleaning for parties, gatherings, or celebrations',
      timeframe: 'Same day service',
      services: ['Window Cleaning', 'Pressure Washing', 'Gutter Cleaning']
    },
    {
      title: 'Storm Cleanup',
      description: 'Post-storm debris removal and property restoration',
      timeframe: '24-48 hours',
      services: ['Pressure Washing', 'Gutter Cleaning', 'Post-Construction Cleanup']
    },
    {
      title: 'Business Emergencies',
      description: 'Commercial properties needing immediate attention',
      timeframe: 'Within hours',
      services: ['Commercial Cleaning', 'Window Cleaning', 'Pressure Washing']
    }
  ]
  
  return (
    <>
      {/* Emergency Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow rounded-full p-4 animate-pulse">
                <Zap className="h-16 w-16 text-red-600" />
              </div>
            </div>
            
            <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333'}}>
              Emergency Cleaning {cityName}
            </h1>
            
            <p className="body-text text-2xl text-gray-100 mb-6">
              Same-Day Service Available
            </p>
            
            <p className="body-text text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Need urgent cleaning services in {cityName}? We provide same-day emergency cleaning for real estate showings, 
              special events, storm cleanup, and business emergencies throughout {county}.
            </p>
            
            {/* Emergency Contact */}
            <div className="bg-white/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-yellow mb-4">Emergency Hotline</h2>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button size="lg" className="bg-yellow hover:bg-yellow/90 text-red-600 font-bold text-2xl px-8 py-4">
                  <Phone className="h-6 w-6 mr-3" />
                  {BUSINESS_INFO.phone}
                </Button>
              </Link>
              <p className="text-sm text-gray-300 mt-2">Available 7 days a week for emergencies</p>
            </div>
            
            {/* Response Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <Clock className="h-8 w-8 text-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow">2-4 Hours</div>
                <div className="text-sm">Typical Response</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Shield className="h-8 w-8 text-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow">Licensed</div>
                <div className="text-sm">& Insured</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <CheckCircle className="h-8 w-8 text-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow">Guaranteed</div>
                <div className="text-sm">Quality Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Scenarios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Emergency Cleaning Scenarios in {cityName}
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              We understand that cleaning emergencies happen. Here are common situations where we provide same-day service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyScenarios.map((scenario, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                    <CardTitle className="heading-primary text-xl text-navy">
                      {scenario.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-600 mb-4">
                    {scenario.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-yellow mr-2" />
                      <span className="body-text font-semibold">Response Time: {scenario.timeframe}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="body-text font-semibold mb-2">Available Services:</h4>
                    <div className="space-y-1">
                      {scenario.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-yellow mr-2" />
                          <span className="body-text text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`tel:${BUSINESS_INFO.phone}`}>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Call for Emergency Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              How Emergency Service Works
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined emergency process gets your {cityName} property cleaned quickly and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="retro-card text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="heading-primary text-lg mb-2">Call Emergency Line</h4>
                <p className="body-text text-gray-600">Call {BUSINESS_INFO.phone} and explain your urgent cleaning needs</p>
              </CardContent>
            </Card>

            <Card className="retro-card text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="heading-primary text-lg mb-2">Immediate Assessment</h4>
                <p className="body-text text-gray-600">We assess your needs and provide immediate pricing and timeline</p>
              </CardContent>
            </Card>

            <Card className="retro-card text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="heading-primary text-lg mb-2">Rapid Deployment</h4>
                <p className="body-text text-gray-600">Our team arrives within 2-4 hours with all necessary equipment</p>
              </CardContent>
            </Card>

            <Card className="retro-card text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="heading-primary text-lg mb-2">Complete Service</h4>
                <p className="body-text text-gray-600">Professional cleaning completed to your satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Emergency Services Available in {cityName}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.filter(service => 
              ['window-cleaning', 'pressure-washing', 'gutter-cleaning', 'post-construction-cleanup', 'commercial-cleaning'].includes(service.id)
            ).map((service, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="heading-primary text-xl text-navy">
                    Emergency {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-600 text-center mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="text-center">
                    <Link href={`tel:${BUSINESS_INFO.phone}`}>
                      <Button variant="outline" className="hover:bg-red-600 hover:text-white transition-colors">
                        Emergency {service.name}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333'}}>
            Don't Wait - Call Now!
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Emergency cleaning situations require immediate action. Our {cityName} team is standing by to help.
          </p>
          
          <div className="mb-8">
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button size="lg" className="bg-yellow hover:bg-yellow/90 text-red-600 font-bold text-2xl px-12 py-6">
                <Phone className="h-8 w-8 mr-4" />
                Emergency: {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-300">
              <strong>24/7 Emergency Response</strong> • Licensed & Insured • Serving {cityName} and {county}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
