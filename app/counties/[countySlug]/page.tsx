import { getCountySEO, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Phone, Award, Shield, Clock, Users, CheckCircle, Building, Home, Waves } from 'lucide-react'
import GetQuoteButton from "@/components/GetQuoteButton"

interface CountyPageProps {
  params: {
    countySlug: string
  }
}

export async function generateMetadata({ params }: CountyPageProps) {
  return getCountySEO(params.countySlug)
}

export async function generateStaticParams() {
  return [
    { countySlug: 'orange-county' },
    { countySlug: 'los-angeles-county' },
    { countySlug: 'san-diego-county' }
  ]
}

export default function CountyPage({ params }: CountyPageProps) {
  const { countySlug } = params
  const countyData = GEO_DATA.counties[countySlug as keyof typeof GEO_DATA.counties]
  
  if (!countyData) {
    return <div>County not found</div>
  }
  
  // Get cities for this county
  const getCitiesForCounty = () => {
    if (countySlug === 'orange-county') {
      return BUSINESS_INFO.cities.slice(0, 33)
    } else if (countySlug === 'los-angeles-county') {
      return BUSINESS_INFO.cities.slice(33, 91)
    } else if (countySlug === 'san-diego-county') {
      return BUSINESS_INFO.cities.slice(91)
    }
    return []
  }
  
  const cities = getCitiesForCounty()
  
  // Get seasonal information
  const currentSeason = getCurrentSeason()
  const seasonalInfo = countyData.seasonalFactors[currentSeason]
  
  function getCurrentSeason(): 'spring' | 'summer' | 'fall' | 'winter' {
    const month = new Date().getMonth()
    if (month >= 2 && month <= 4) return 'spring'
    if (month >= 5 && month <= 7) return 'summer'
    if (month >= 8 && month <= 10) return 'fall'
    return 'winter'
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                {countyData.name} Cleaning Services
              </h1>
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional window cleaning, pressure washing, and property detailing services across {countyData.name}. 
                Serving {countyData.population} residents with licensed, insured, and eco-friendly cleaning solutions since 2021.
              </p>
              
              {/* County Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">{cities.length}+</div>
                  <div className="text-sm">Cities Served</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">{countyData.population}</div>
                  <div className="text-sm">Population</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">Get Free Quote
                  </GetQuoteButton>
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </div>

            {/* County Visual */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  {/* County Map Representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-24 w-24 text-navy mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-navy mb-2">{countyData.name}</h3>
                      <p className="text-gray-600">{cities.length} Cities Served</p>
                    </div>
                  </div>
                  
                  {/* Floating Service Icons */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float">
                    <Home className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <Building className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <Waves className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
                    <Shield className="w-6 h-6 text-navy" />
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">{countyData.name} Coverage</p>
                  <p className="text-sm text-gray-600">Professional Cleaning Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* County Characteristics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why We Love Serving {countyData.name}
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              {countyData.name} is unique, and so are its cleaning needs. We understand the local climate, architecture, and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countyData.characteristics.map((characteristic, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-yellow mx-auto mb-4" />
                  <p className="body-text font-semibold text-navy">{characteristic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Complete Cleaning Services for {countyData.name}
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From residential homes to commercial properties, we provide comprehensive cleaning solutions across {countyData.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader className="text-center">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="mx-auto mb-4"
                  />
                  <CardTitle className="heading-primary text-xl text-navy">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-600 text-center mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="text-center">
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="hover:bg-yellow hover:text-navy transition-colors">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-primary text-3xl mb-6" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)} Cleaning in {countyData.name}
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 leading-relaxed">
                {seasonalInfo}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Climate-specific cleaning techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Seasonal maintenance programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Weather-appropriate scheduling</span>
                </div>
              </div>
            </div>

            <Card className="retro-card">
              <CardHeader className="text-center">
                <CardTitle className="heading-primary text-2xl text-navy">
                  {countyData.name} Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Population:</span>
                  <span className="body-text text-gray-600">{countyData.population}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Climate:</span>
                  <span className="body-text text-gray-600">{countyData.climate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Cities Served:</span>
                  <span className="body-text text-gray-600">{cities.length}+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Service Since:</span>
                  <span className="body-text text-gray-600">2021</span>
                </div>
                
                <div className="pt-4 border-t">
                  <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold">Get Quote for {countyData.name}
                    </GetQuoteButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Cities We Serve in {countyData.name}
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              Professional cleaning services available throughout {countyData.name}. Click on your city for local information.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <Link 
                key={index}
                href={`/cities/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300 h-full">
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-6 w-6 text-yellow mx-auto mb-2" />
                    <p className="body-text font-semibold text-navy text-sm">{city}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Industries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Serving {countyData.name}'s Key Industries
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              We understand the unique cleaning needs of {countyData.name}'s diverse economy and provide specialized services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countyData.keyIndustries.map((industry, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Building className="h-12 w-12 text-yellow mx-auto mb-4" />
                  <p className="body-text font-semibold text-navy">{industry}</p>
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
            Ready to Experience the Difference?
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across {countyData.name}. Professional cleaning services with old-school quality and modern reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">Get Free Quote
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
              <strong>Serving all of {countyData.name}</strong> • Licensed & Insured • Same-Day Service Available
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
