import { getSeasonalGeoSEO, getCityCharacteristics, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Phone, Award, Shield, Clock, Users, CheckCircle, Sun, Snowflake, Leaf, Flower } from 'lucide-react'
import GetQuoteButton from "@/components/GetQuoteButton"

interface SeasonalCityPageProps {
  params: Promise<{
    season: 'spring' | 'summer' | 'fall' | 'winter'
    citySlug: string
  }>
}

export async function generateMetadata({ params }: SeasonalCityPageProps) {
  const resolvedParams = await params
  const cityName = resolvedParams.citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  return getSeasonalGeoSEO(cityName, resolvedParams.season)
}

export async function generateStaticParams() {
  const paths = []
  const seasons: Array<'spring' | 'summer' | 'fall' | 'winter'> = ['spring', 'summer', 'fall', 'winter']
  
  // Generate paths for major cities only to avoid too many pages
  const majorCities = [
    'Newport Beach', 'Irvine', 'Costa Mesa', 'Huntington Beach', 'Santa Ana', 'Anaheim',
    'Los Angeles', 'Beverly Hills', 'Santa Monica', 'Manhattan Beach', 'Pasadena', 'Burbank',
    'San Diego', 'La Jolla', 'Del Mar', 'Carlsbad', 'Encinitas', 'Oceanside'
  ]
  
  for (const season of seasons) {
    for (const city of majorCities) {
      paths.push({
        season,
        citySlug: city.toLowerCase().replace(/\s+/g, '-')
      })
    }
  }
  
  return paths
}

export default async function SeasonalCityPage({ params }: SeasonalCityPageProps) {
  const resolvedParams = await params
  const { season, citySlug } = resolvedParams
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const characteristics = getCityCharacteristics(cityName)
  
  // Determine county
  let county = 'Orange County'
  let countyData = GEO_DATA.counties['orange-county']
  
  const ocCities = BUSINESS_INFO.cities.slice(0, 33)
  const laCities = BUSINESS_INFO.cities.slice(33, 91)
  const sdCities = BUSINESS_INFO.cities.slice(91)
  
  if (laCities.includes(cityName)) {
    county = 'Los Angeles County'
    countyData = GEO_DATA.counties['los-angeles-county']
  } else if (sdCities.includes(cityName)) {
    county = 'San Diego County'
    countyData = GEO_DATA.counties['san-diego-county']
  }
  
  // Season-specific content
  const getSeasonContent = () => {
    const seasonalFactors = countyData.seasonalFactors[season]
    
    const seasonContent = {
      spring: {
        icon: <Flower className="h-16 w-16 text-yellow" />,
        title: 'Spring Cleaning Season',
        subtitle: 'Fresh Start for Your Property',
        description: `Spring in ${cityName} brings renewal and the perfect opportunity for deep cleaning. ${seasonalFactors}`,
        benefits: [
          'Remove winter buildup and grime',
          'Prepare for spring entertaining',
          'Address pollen and allergen concerns',
          'Perfect weather for outdoor cleaning'
        ],
        services: ['Window Cleaning', 'Pressure Washing', 'Gutter Cleaning'],
        cta: 'Spring into Action',
        special: '15% off spring cleaning packages'
      },
      summer: {
        icon: <Sun className="h-16 w-16 text-yellow" />,
        title: 'Summer Cleaning Services',
        subtitle: 'Beat the Heat with Professional Service',
        description: `Summer in ${cityName} requires special consideration for cleaning schedules. ${seasonalFactors}`,
        benefits: [
          'Early morning service to avoid heat',
          'UV protection for outdoor surfaces',
          'Frequent maintenance for salt air areas',
          'Pool area and patio cleaning'
        ],
        services: ['Window Cleaning', 'Pressure Washing', 'Solar Panel Cleaning'],
        cta: 'Stay Cool with Clean',
        special: 'Free solar panel cleaning with window service'
      },
      fall: {
        icon: <Leaf className="h-16 w-16 text-yellow" />,
        title: 'Fall Property Maintenance',
        subtitle: 'Prepare for Winter Weather',
        description: `Fall in ${cityName} is the ideal time for comprehensive property maintenance. ${seasonalFactors}`,
        benefits: [
          'Prepare for winter weather',
          'Remove debris from gutters',
          'Clean windows before rain season',
          'Bundle services for savings'
        ],
        services: ['Window Cleaning', 'Gutter Cleaning', 'Pressure Washing'],
        cta: 'Fall into Savings',
        special: '20% off when bundling 2+ services'
      },
      winter: {
        icon: <Snowflake className="h-16 w-16 text-yellow" />,
        title: 'Winter Cleaning Services',
        subtitle: 'Year-Round Professional Care',
        description: `Winter in ${cityName} still allows for professional cleaning services. ${seasonalFactors}`,
        benefits: [
          'Weather-flexible scheduling',
          'Indoor window cleaning available',
          'Post-storm cleanup services',
          'Maintain property value year-round'
        ],
        services: ['Window Cleaning', 'Post-Construction Cleanup', 'Commercial Cleaning'],
        cta: 'Winter Maintenance',
        special: 'Flexible scheduling for weather conditions'
      }
    }
    
    return seasonContent[season]
  }
  
  const seasonContent = getSeasonContent()
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                {seasonContent.icon}
                <div className="ml-4">
                  <h1 className="heading-decorative text-4xl md:text-5xl text-yellow" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333'}}>
                    {seasonContent.title}
                  </h1>
                  <p className="text-xl text-gray-200">{cityName}, {county}</p>
                </div>
              </div>
              
              <h2 className="heading-primary text-2xl text-white mb-4">
                {seasonContent.subtitle}
              </h2>
              
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                {seasonContent.description}
              </p>
              
              {/* Seasonal Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">Same Day</div>
                  <div className="text-sm">Service Available</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">Licensed</div>
                  <div className="text-sm">& Insured</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">{seasonContent.cta}
                  </GetQuoteButton>
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Seasonal Visual */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  {/* Seasonal illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {seasonContent.icon}
                      <h3 className="text-2xl font-bold text-navy mb-2 mt-4">{season.charAt(0).toUpperCase() + season.slice(1)} in {cityName}</h3>
                      <p className="text-gray-600">Professional Cleaning Services</p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float">
                    <CheckCircle className="w-6 h-6 text-navy" />
                  </div>
                  
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-navy/90 text-white px-4 py-2 rounded-full text-sm font-bold">
                    <span>{seasonContent.special}</span>
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">{season.charAt(0).toUpperCase() + season.slice(1)} Cleaning {cityName}</p>
                  <p className="text-sm text-gray-600">Seasonal Maintenance Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              {season.charAt(0).toUpperCase() + season.slice(1)} Cleaning Benefits in {cityName}
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              Take advantage of {season} weather and conditions for optimal cleaning results in {cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonContent.benefits.map((benefit, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-yellow mx-auto mb-4" />
                  <p className="body-text font-semibold text-navy">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Recommended {season.charAt(0).toUpperCase() + season.slice(1)} Services
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              These services are particularly beneficial during {season} in {cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonContent.services.map((serviceName, index) => {
              const service = SERVICES.find(s => s.name === serviceName)
              if (!service) return null
              
              return (
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
                      <Link href={`/services/${service.id}/${citySlug}`}>
                        <Button variant="outline" className="hover:bg-yellow hover:text-navy transition-colors">
                          Book {service.name}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local Considerations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-primary text-3xl mb-6" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                {cityName} {season.charAt(0).toUpperCase() + season.slice(1)} Considerations
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 leading-relaxed">
                We understand the unique challenges that {season} brings to {cityName} properties. Our local expertise ensures optimal results regardless of weather conditions.
              </p>
              
              <div className="space-y-4">
                {characteristics.isBeach && (
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                    <span className="body-text text-gray-700">Coastal property expertise for salt air conditions</span>
                  </div>
                )}
                {characteristics.isLuxury && (
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                    <span className="body-text text-gray-700">Premium service standards for luxury properties</span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Weather-appropriate cleaning techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                  <span className="body-text text-gray-700">Flexible scheduling for seasonal conditions</span>
                </div>
              </div>
            </div>

            <Card className="retro-card">
              <CardHeader className="text-center">
                <CardTitle className="heading-primary text-2xl text-navy">
                  {season.charAt(0).toUpperCase() + season.slice(1)} Special Offer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow mb-2">
                    {season === 'fall' ? '20% OFF' : season === 'summer' ? 'FREE' : '15% OFF'}
                  </div>
                  <p className="body-text text-gray-600">{seasonContent.special}</p>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="body-text font-semibold">Valid:</span>
                    <span className="body-text text-gray-600">{season.charAt(0).toUpperCase() + season.slice(1)} Season</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="body-text font-semibold">Service Area:</span>
                    <span className="body-text text-gray-600">{cityName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="body-text font-semibold">Booking:</span>
                    <span className="body-text text-gray-600">Same Day Available</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold">Claim {season.charAt(0).toUpperCase() + season.slice(1)} Offer
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
            Perfect {season.charAt(0).toUpperCase() + season.slice(1)} Weather for Cleaning!
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Don't wait - {season} conditions in {cityName} are ideal for professional cleaning. Book your service today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">Book {season.charAt(0).toUpperCase() + season.slice(1)} Service
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
              <strong>Serving {cityName} and all of {county}</strong> • {seasonContent.special} • Licensed & Insured
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
