import { getPageSEO } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, Phone, Award, Shield, Clock, Users } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"

export const metadata = {
  title: "Service Areas | Orange County, LA & San Diego | Shimmer Shine",
  description: "Professional window cleaning and pressure washing services across Orange County, Los Angeles County, and San Diego County. See all areas we serve since 2021.",
}

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      name: "Orange County",
      emoji: "",
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
      emoji: "", 
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
              <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                Our Service Areas
              </h1>
              <p className="body-text text-xl text-gray-100 mb-6 leading-relaxed">
                Professional window cleaning, pressure washing, and property detailing services across Southern California since 2021.
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

            {/* Service Areas Visual */}
            <div className="relative">
              <div className="polaroid-frame">
                {/* Southern California Service Map Graphic */}
                <div className="relative h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300357a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  {/* Southern California Outline */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 300" className="w-full h-full max-w-sm">
                      {/* California Coast Outline */}
                      <path
                        d="M80 50 L120 45 L160 55 L200 60 L240 70 L280 85 L320 100 L340 130 L350 160 L345 190 L340 220 L330 240 L310 250 L280 245 L250 240 L220 235 L190 225 L160 210 L130 190 L110 160 L100 130 L90 100 L85 75 Z"
                        fill="none"
                        stroke="#00357a"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                      
                      {/* Service Area Markers */}
                      {/* Orange County */}
                      <circle cx="200" cy="180" r="8" fill="#fdc737" className="animate-bounce" style={{animationDelay: '0s'}} />
                      <text x="210" y="185" fill="#00357a" fontSize="12" fontWeight="bold">OC</text>
                      
                      {/* Los Angeles */}
                      <circle cx="160" cy="150" r="8" fill="#fdc737" className="animate-bounce" style={{animationDelay: '0.3s'}} />
                      <text x="170" y="155" fill="#00357a" fontSize="12" fontWeight="bold">LA</text>
                      
                      {/* San Diego */}
                      <circle cx="220" cy="220" r="8" fill="#fdc737" className="animate-bounce" style={{animationDelay: '0.6s'}} />
                      <text x="230" y="225" fill="#00357a" fontSize="12" fontWeight="bold">SD</text>
                      
                      {/* Connection Lines */}
                      <line x1="160" y1="150" x2="200" y2="180" stroke="#00357a" strokeWidth="2" opacity="0.5" strokeDasharray="3,3" />
                      <line x1="200" y1="180" x2="220" y2="220" stroke="#00357a" strokeWidth="2" opacity="0.5" strokeDasharray="3,3" />
                    </svg>
                  </div>

                  {/* Floating Service Icons */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-navy">
                      <rect x="3" y="3" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 21h8M12 17v4"/>
                    </svg>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-navy">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-navy">
                      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-navy">
                      <path d="M3 6h18l-2 13H5L3 6zM3 6l-1-4M7 10l4 4 4-4"/>
                    </svg>
                  </div>

                  {/* Sparkle Effects */}
                  <div className="absolute top-8 left-1/3 w-4 h-4 text-yellow animate-pulse">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                      <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-8 right-1/3 w-3 h-3 text-yellow animate-bounce delay-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                      <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                    </svg>
                  </div>

                  {/* Coverage Area Indicator */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-navy/90 text-white px-4 py-2 rounded-full text-sm font-bold">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow rounded-full animate-pulse"></div>
                      <span>150+ Cities Covered</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold text-lg">Southern California Coverage</p>
                  <p className="text-sm text-gray-600">Orange County • Los Angeles • San Diego</p>
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
            <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
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
            <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>Why Choose Shimmer Shine?</h3>
            <p className="body-text text-gray-600">
              Professional experience serving Southern California communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-navy" />
              </div>
              <h4 className="heading-primary text-lg mb-2">Since 2021</h4>
              <p className="body-text text-gray-600 text-sm">
                Professional trusted service across Southern California
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
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
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
              <strong>Limited Time:</strong> 10% off your first service when you book this month!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}