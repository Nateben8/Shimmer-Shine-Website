import { getServiceCitySEO, generateLocalBusinessStructuredData, getCityCharacteristics, GEO_DATA } from '@/lib/seo'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Phone, Award, Shield, Clock, Users, CheckCircle } from 'lucide-react'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import GetQuoteButton from "@/components/GetQuoteButton"

interface ServiceCityPageProps {
  params: {
    serviceId: string
    citySlug: string
  }
}

export async function generateMetadata({ params }: ServiceCityPageProps) {
  return getServiceCitySEO(params.serviceId, params.citySlug)
}

export async function generateStaticParams() {
  const paths = []
  
  // Generate paths for all service+city combinations
  for (const service of SERVICES) {
    for (const city of BUSINESS_INFO.cities) {
      paths.push({
        serviceId: service.id,
        citySlug: city.toLowerCase().replace(/\s+/g, '-')
      })
    }
  }
  
  return paths
}

export default function ServiceCityPage({ params }: ServiceCityPageProps) {
  const { serviceId, citySlug } = params
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const service = SERVICES.find(s => s.id === serviceId)
  
  if (!service) {
    return <div>Service not found</div>
  }
  
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
  
  // Get location-specific content
  const getLocationSpecificContent = () => {
    if (characteristics.isLuxury) {
      return {
        approach: 'Premium Service for Luxury Properties',
        description: `Our premium ${service.name.toLowerCase()} service in ${cityName} is specifically designed for luxury properties. We understand the unique needs of high-end homes and provide white-glove service with attention to every detail.`,
        benefits: ['Premium equipment and materials', 'Discreet and professional service', 'Flexible scheduling around your lifestyle', 'Specialized luxury property experience']
      }
    } else if (characteristics.isBeach) {
      return {
        approach: 'Coastal Property Specialists',
        description: `Living near the coast in ${cityName} means dealing with salt air, sand, and marine conditions. Our specialized ${service.name.toLowerCase()} service addresses these unique coastal challenges with proven techniques and equipment.`,
        benefits: ['Salt air and marine condition expertise', 'Frequent maintenance programs', 'Corrosion-resistant equipment', 'Understanding of coastal property needs']
      }
    } else if (characteristics.isCommercial) {
      return {
        approach: 'Commercial & Residential Excellence',
        description: `${cityName} is a thriving commercial hub, and we provide ${service.name.toLowerCase()} services for both businesses and residents. Our flexible scheduling and professional approach work for any property type.`,
        benefits: ['Commercial-grade equipment', 'Flexible business hours', 'Volume pricing available', 'Professional appearance and conduct']
      }
    } else {
      return {
        approach: 'Neighborhood-Focused Service',
        description: `We're proud to serve the ${cityName} community with reliable ${service.name.toLowerCase()} services. Our local approach means we understand your neighborhood's specific needs and challenges.`,
        benefits: ['Local community focus', 'Neighborhood-specific expertise', 'Reliable recurring service', 'Friendly, familiar service team']
      }
    }
  }
  
  const locationContent = getLocationSpecificContent()
  
  return (
    <>
      <LocalBusinessSchema data={generateLocalBusinessStructuredData(cityName, service.name)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                {service.name} {cityName}
              </h1>
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional {service.name.toLowerCase()} services in {cityName}, {county}. 
                {characteristics.isLuxury && ' Premium service for luxury properties.'}
                {characteristics.isBeach && ' Coastal property specialists.'}
                {characteristics.isCommercial && ' Commercial & residential expertise.'}
                {!characteristics.isLuxury && !characteristics.isBeach && !characteristics.isCommercial && ' Trusted neighborhood service.'}
              </p>
              
              {/* Local Stats */}
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

            {/* Service Image */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={service.icon}
                    alt={`${service.name} in ${cityName}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-navy/90 text-white px-4 py-2 rounded-full text-sm font-bold">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-yellow" />
                        <span>Serving {cityName}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">{service.name} {cityName}</p>
                  <p className="text-sm text-gray-600">{county} • Licensed & Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              {locationContent.approach}
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-3xl mx-auto">
              {locationContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationContent.benefits.map((benefit, index) => (
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

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-primary text-3xl mb-6" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                {service.name} Services in {cityName}
              </h3>
              <p className="body-text text-gray-700 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow flex-shrink-0" />
                    <span className="body-text text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="retro-card">
              <CardHeader className="text-center">
                <CardTitle className="heading-primary text-2xl text-navy">
                  Service Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Duration:</span>
                  <span className="body-text text-gray-600">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Price Range:</span>
                  <span className="body-text text-gray-600">{service.priceRange}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Service Area:</span>
                  <span className="body-text text-gray-600">{county}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-text font-semibold">Availability:</span>
                  <span className="body-text text-gray-600">Same Day</span>
                </div>
                
                <div className="pt-4 border-t">
                  <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold">Get Free Quote for {cityName}
                    </GetQuoteButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why Choose Us in {cityName}?
            </h3>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              We understand the unique needs of {cityName} properties and provide tailored solutions for {county}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-yellow mx-auto mb-4" />
                <CardTitle className="heading-primary text-xl text-navy">
                  Local Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-text text-gray-600 text-center">
                  We know {cityName}'s climate, architecture, and specific cleaning challenges. Our local expertise ensures the best results.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-yellow mx-auto mb-4" />
                <CardTitle className="heading-primary text-xl text-navy">
                  Flexible Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-text text-gray-600 text-center">
                  Same-day service available in {cityName}. We work around your schedule with early morning and weekend options.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-yellow mx-auto mb-4" />
                <CardTitle className="heading-primary text-xl text-navy">
                  Licensed & Insured
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-text text-gray-600 text-center">
                  Fully licensed, bonded, and insured for {county}. Your property and peace of mind are protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
            Ready for {service.name} in {cityName}?
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers in {cityName}. Get your free quote today and experience the Shimmer Shine difference!
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
              <strong>Serving {cityName} and all of {county}</strong> • Licensed & Insured • Same-Day Service Available
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
