import { getCompetitiveGeoSEO, getCityCharacteristics, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Phone, Award, Shield, CheckCircle, Trophy, Target, Zap } from 'lucide-react'
import GetQuoteButton from "@/components/GetQuoteButton"

interface BestServiceCityPageProps {
  params: {
    serviceSlug: string
    citySlug: string
  }
}

export async function generateMetadata({ params }: BestServiceCityPageProps) {
  const cityName = params.citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const serviceName = params.serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  return getCompetitiveGeoSEO(cityName, serviceName)
}

export async function generateStaticParams() {
  const paths = []
  const topServices = ['window-cleaning', 'pressure-washing', 'solar-panel-cleaning']
  const majorCities = [
    'Newport Beach', 'Irvine', 'Costa Mesa', 'Huntington Beach', 'Santa Ana',
    'Los Angeles', 'Beverly Hills', 'Santa Monica', 'Manhattan Beach', 'Pasadena',
    'San Diego', 'La Jolla', 'Del Mar', 'Carlsbad', 'Encinitas'
  ]
  
  for (const serviceSlug of topServices) {
    for (const city of majorCities) {
      paths.push({
        serviceSlug,
        citySlug: city.toLowerCase().replace(/\s+/g, '-')
      })
    }
  }
  
  return paths
}

export default function BestServiceCityPage({ params }: BestServiceCityPageProps) {
  const { serviceSlug, citySlug } = params
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  const service = SERVICES.find(s => s.id === serviceSlug)
  const characteristics = getCityCharacteristics(cityName)
  
  if (!service) {
    return <div>Service not found</div>
  }
  
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
  
  const competitiveAdvantages = [
    {
      icon: <Trophy className="h-12 w-12 text-yellow" />,
      title: '#1 Rated Service',
      description: `Top-rated ${service.name.toLowerCase()} service in ${cityName} with 5-star reviews`
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for complete peace of mind'
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow" />,
      title: 'Same-Day Service',
      description: 'Fast response times with same-day service availability'
    },
    {
      icon: <Award className="h-12 w-12 text-yellow" />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all work performed'
    }
  ]
  
  const whyBest = [
    'Over 500 satisfied customers in Southern California',
    'Licensed and insured since 2021',
    'Eco-friendly cleaning solutions',
    'Professional-grade equipment',
    'Competitive pricing with no hidden fees',
    'Same-day service availability',
    'Local family-owned business',
    '5-star rating across all platforms'
  ]
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                <Trophy className="h-16 w-16 text-yellow mr-4" />
                <div>
                  <h1 className="heading-decorative text-4xl md:text-5xl text-yellow" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333'}}>
                    Best {service.name}
                  </h1>
                  <p className="text-2xl text-gray-200">{cityName}, {county}</p>
                </div>
              </div>
              
              <h2 className="heading-primary text-2xl text-white mb-4">
                #1 Rated {service.name} Service in {cityName}
              </h2>
              
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Looking for the best {service.name.toLowerCase()} in {cityName}? You've found it! 
                Shimmer Shine is the top-rated cleaning service with over 500 satisfied customers and 5-star reviews.
                {characteristics.isLuxury && ' Specializing in luxury properties.'}
                {characteristics.isBeach && ' Coastal property experts.'}
                {characteristics.isCommercial && ' Commercial and residential specialists.'}
              </p>
              
              {/* Rating Display */}
              <div className="flex items-center mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-yellow fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-xl font-bold text-yellow">5.0</span>
                <span className="ml-2 text-gray-300">(47+ Reviews)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">Get Best Price Quote
                  </GetQuoteButton>
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Image */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={service.icon}
                    alt={`Best ${service.name} in ${cityName}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent">
                    <div className="absolute top-4 left-4 bg-yellow text-navy px-3 py-1 rounded-full text-sm font-bold">
                      #1 RATED
                    </div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-navy/90 text-white px-4 py-2 rounded-full text-sm font-bold">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-yellow" />
                        <span>Best in {cityName}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">Top Rated {service.name}</p>
                  <p className="text-sm text-gray-600">{cityName} • 5-Star Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why We're the Best {service.name} in {cityName}
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              Don't settle for average. Here's why Shimmer Shine is consistently rated #1 for {service.name.toLowerCase()} in {cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mb-4">{advantage.icon}</div>
                  <h3 className="heading-primary text-lg mb-2 text-navy">{advantage.title}</h3>
                  <p className="body-text text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Best */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-primary text-3xl mb-6" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                What Makes Us the Best Choice?
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 leading-relaxed">
                We didn't become the top-rated {service.name.toLowerCase()} service in {cityName} by accident. 
                Our commitment to excellence, customer satisfaction, and professional results sets us apart from the competition.
              </p>
              
              <div className="space-y-3">
                {whyBest.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                    <span className="body-text text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="retro-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow rounded-full p-3">
                    <Target className="h-12 w-12 text-navy" />
                  </div>
                </div>
                <CardTitle className="heading-primary text-2xl text-navy">
                  Our Promise to {cityName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow mb-2">100%</div>
                  <p className="body-text text-gray-600">Satisfaction Guarantee</p>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="body-text font-semibold">Response Time:</span>
                    <span className="body-text text-gray-600">Same Day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="body-text font-semibold">Service Quality:</span>
                    <span className="body-text text-gray-600">5-Star Rated</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="body-text font-semibold">Price Match:</span>
                    <span className="body-text text-gray-600">We Beat Quotes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="body-text font-semibold">Insurance:</span>
                    <span className="body-text text-gray-600">Fully Covered</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold">Get Best Price Quote
                    </GetQuoteButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              What {cityName} Customers Say
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers in {cityName} have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="retro-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow fill-current" />
                  ))}
                </div>
                <p className="body-text text-gray-700 mb-4 italic">
                  "Best {service.name.toLowerCase()} service in {cityName}! Professional, reliable, and reasonably priced. 
                  They exceeded our expectations."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Sarah M.</strong> - {cityName} Resident
                </div>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow fill-current" />
                  ))}
                </div>
                <p className="body-text text-gray-700 mb-4 italic">
                  "I've tried other companies, but Shimmer Shine is by far the best. 
                  Quality work, fair pricing, and excellent customer service."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Mike R.</strong> - {cityName} Business Owner
                </div>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow fill-current" />
                  ))}
                </div>
                <p className="body-text text-gray-700 mb-4 italic">
                  "Outstanding {service.name.toLowerCase()}! They're punctual, professional, and do amazing work. 
                  Highly recommend to anyone in {cityName}."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Jennifer L.</strong> - {cityName} Homeowner
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333'}}>
            Experience the Best {service.name} in {cityName}
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who chose the #1 rated {service.name.toLowerCase()} service in {cityName}. 
            Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <GetQuoteButton variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">Get Best Price Quote
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
              <strong>#1 Rated in {cityName}</strong> • 100% Satisfaction Guarantee • We Beat Any Quote
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
