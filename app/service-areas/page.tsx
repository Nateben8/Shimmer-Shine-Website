import { getPageSEO } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, Phone, Award, Shield, Clock, Users } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"

export const metadata = {
  title: "Service Areas | Orange County, LA & San Diego | Shimmer Shine",
  description: "Professional window cleaning and pressure washing services across Orange County, Los Angeles County, and San Diego County. See all areas we serve since 1995.",
}

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      name: "Orange County",
      emoji: "🍊",
      description: "Serving all of Orange County with premium window cleaning and pressure washing services",
      cities: ["Costa Mesa", "Newport Beach", "Irvine", "Santa Ana", "Anaheim", "Huntington Beach", "Fullerton", "Garden Grove", "Orange", "Tustin"],
      totalCities: 34,
      highlights: ["Beach communities", "Luxury neighborhoods", "Commercial districts", "Family communities"]
    },
    {
      name: "Los Angeles County", 
      emoji: "🌴",
      description: "Comprehensive coverage across LA County from downtown to the beaches",
      cities: ["Los Angeles", "Beverly Hills", "Santa Monica", "Manhattan Beach", "Redondo Beach", "Torrance", "Pasadena", "Burbank", "Culver City", "Venice"],
      totalCities: 75,
      highlights: ["Downtown LA", "Beach cities", "Hollywood area", "Suburban communities"]
    },
    {
      name: "San Diego County",
      emoji: "🏖️", 
      description: "From downtown San Diego to North County, we've got you covered",
      cities: ["San Diego", "La Jolla", "Del Mar", "Encinitas", "Carlsbad", "Oceanside", "Pacific Beach", "Mission Beach", "Chula Vista", "Escondido"],
      totalCities: 32,
      highlights: ["Beach communities", "North County", "East County", "South Bay"]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4">
                Our Service Areas
              </h1>
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional window cleaning, pressure washing, and property detailing services across Southern California since 1995.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">150+</div>
                  <div className="text-sm">Cities Served</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">3</div>
                  <div className="text-sm">Counties</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">500+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow">29</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-quote">
                  <Button variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                    <Phone className="h-5 w-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Map/Visual */}
            <div className="flex justify-center">
              <div className="polaroid-frame max-w-md">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center h-full border-4 border-navy shadow-lg">
                    <div className="text-center text-navy bg-white/90 p-6 rounded-lg shadow-retro">
                      <div className="text-4xl mb-4">🗺️</div>
                      <p className="text-xl font-bold text-navy mb-2">Southern California</p>
                      <p className="text-sm text-gray-700 mb-3">Orange • LA • San Diego</p>
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Trusted Since 1995</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Serving 150+ Cities</p>
                  <p className="text-sm text-gray-600">Southern California - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4">
              Areas We Proudly Serve
            </h2>
            <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
              From bustling cities to quiet neighborhoods, we bring professional window cleaning and pressure washing services to communities across Southern California.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="retro-card hover:shadow-retro-yellow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{area.emoji}</div>
                  <CardTitle className="heading-primary text-2xl text-navy">
                    {area.name}
                  </CardTitle>
                  <p className="body-text text-gray-600 mt-2">
                    {area.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* City Count */}
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-navy">{area.totalCities}</div>
                    <div className="text-sm text-gray-600">Cities & Communities</div>
                  </div>

                  {/* Sample Cities */}
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Featured Cities:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      {area.cities.slice(0, 8).map((city, cityIndex) => (
                        <div key={cityIndex} className="text-gray-700">
                          • {city}
                        </div>
                      ))}
                    </div>
                    {area.cities.length > 8 && (
                      <div className="text-sm text-gray-500 mt-1">
                        and {area.cities.length - 8} more...
                      </div>
                    )}
                  </div>

                  {/* Area Highlights */}
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Area Highlights:</h4>
                    <div className="space-y-1">
                      {area.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-gray-700">
                          <MapPin className="h-3 w-3 text-yellow mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link href="/cities">
                      <Button variant="outline" className="w-full hover:bg-yellow hover:text-navy transition-colors">
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl mb-4">Why Choose Shimmer Shine?</h3>
            <p className="body-text text-gray-600">
              Nearly three decades of experience serving Southern California communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg mb-2">Since 1995</h4>
              <p className="body-text text-gray-600 text-sm">
                Nearly three decades of trusted service across Southern California
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg mb-2">Licensed & Insured</h4>
              <p className="body-text text-gray-600 text-sm">
                Fully licensed, bonded, and insured for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg mb-2">Same Day Service</h4>
              <p className="body-text text-gray-600 text-sm">
                Quick response times with same-day service when available
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg mb-2">500+ Reviews</h4>
              <p className="body-text text-gray-600 text-sm">
                Hundreds of satisfied customers across all service areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Orange County, Los Angeles, and San Diego. Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/get-a-quote">
              <Button variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-300">
              🚨 <strong>Limited Time:</strong> 10% off your first service when you book this month!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}