import { getPageSEO } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Star, Phone } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"

export const metadata = {
  title: "Cities We Serve | Window Cleaning & Pressure Washing | Shimmer Shine",
  description: "Professional window cleaning and pressure washing services across Orange County, Los Angeles County, and San Diego County. See all cities we serve.",
}

export default function CitiesPage() {
  // Organize cities by county
  const orangeCountyCities = [
    "Aliso Viejo", "Anaheim", "Brea", "Buena Park", "Costa Mesa", "Cypress", 
    "Dana Point", "Fountain Valley", "Fullerton", "Garden Grove", "Huntington Beach", 
    "Irvine", "La Habra", "La Palma", "Laguna Beach", "Laguna Hills", "Laguna Niguel", 
    "Laguna Woods", "Lake Forest", "Los Alamitos", "Mission Viejo", "Newport Beach", 
    "Orange", "Placentia", "Rancho Santa Margarita", "San Clemente", "San Juan Capistrano", 
    "Santa Ana", "Seal Beach", "Stanton", "Tustin", "Villa Park", "Westminster", "Yorba Linda"
  ]

  const losAngelesCities = [
    "Alhambra", "Arcadia", "Artesia", "Avalon", "Azusa", "Baldwin Park", "Bell", 
    "Bell Gardens", "Bellflower", "Beverly Hills", "Bradbury", "Burbank", "Calabasas", 
    "Carson", "Cerritos", "Claremont", "Commerce", "Compton", "Covina", "Cudahy", 
    "Culver City", "Diamond Bar", "Downey", "Duarte", "El Monte", "El Segundo", 
    "Gardena", "Glendale", "Glendora", "Hawaiian Gardens", "Hawthorne", "Hermosa Beach", 
    "Hidden Hills", "Huntington Park", "Industry", "Inglewood", "Irwindale", "La Cañada Flintridge", 
    "La Habra Heights", "La Mirada", "La Puente", "La Verne", "Lakewood", "Lancaster", 
    "Lawndale", "Lomita", "Long Beach", "Los Angeles", "Lynwood", "Malibu", "Manhattan Beach", 
    "Maywood", "Monrovia", "Montebello", "Monterey Park", "Norwalk", "Palmdale", "Palos Verdes Estates", 
    "Paramount", "Pasadena", "Pico Rivera", "Pomona", "Rancho Palos Verdes", "Redondo Beach", 
    "Rolling Hills", "Rolling Hills Estates", "Rosemead", "San Dimas", "San Fernando", 
    "San Gabriel", "San Marino", "Santa Clarita", "Santa Fe Springs", "Santa Monica", 
    "Sierra Madre", "Signal Hill", "South El Monte", "South Gate", "South Pasadena", 
    "Temple City", "Torrance", "Vernon", "Walnut", "West Covina", "West Hollywood", 
    "Westlake Village", "Whittier", "Venice"
  ]

  const sanDiegoCities = [
    "Carlsbad", "Chula Vista", "Coronado", "Del Mar", "El Cajon", "Encinitas", 
    "Escondido", "Imperial Beach", "La Mesa", "Lemon Grove", "National City", 
    "Oceanside", "Poway", "San Diego", "San Marcos", "Santee", "Solana Beach", 
    "Vista", "La Jolla", "Pacific Beach", "Mission Beach", "Ocean Beach", 
    "Point Loma", "Hillcrest", "Balboa Park", "University City", "Carmel Valley", 
    "Rancho Bernardo", "Scripps Ranch", "Mira Mesa", "Clairemont", "Bay Park"
  ]

  const createCitySlug = (city: string) => {
    return city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-decorative text-4xl md:text-6xl text-yellow mb-4">
              Cities We Serve
            </h1>
            <p className="body-text text-xl text-gray-100 mb-8">
              Professional window cleaning, pressure washing, and property detailing services across Southern California
            </p>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-navy" />
                </div>
                <p className="text-sm font-bold">500+ Reviews</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="h-6 w-6 text-navy" />
                </div>
                <p className="text-sm font-bold">150+ Cities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-6 w-6 text-navy" />
                </div>
                <p className="text-sm font-bold">Same Day Service</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-navy" />
                </div>
                <p className="text-sm font-bold">Since 1995</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities by County */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            
            {/* Orange County */}
            <div>
              <Card className="retro-card">
                <CardHeader className="text-center">
                  <CardTitle className="heading-primary text-3xl text-navy mb-2">
                    🍊 Orange County
                  </CardTitle>
                  <p className="text-gray-600">
                    {orangeCountyCities.length} cities and communities served
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {orangeCountyCities.map((city) => (
                      <Link 
                        key={city} 
                        href={`/cities/${createCitySlug(city)}`}
                        className="block"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full text-sm hover:bg-yellow hover:text-navy transition-colors"
                        >
                          {city}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Los Angeles County */}
            <div>
              <Card className="retro-card">
                <CardHeader className="text-center">
                  <CardTitle className="heading-primary text-3xl text-navy mb-2">
                    🌴 Los Angeles County
                  </CardTitle>
                  <p className="text-gray-600">
                    {losAngelesCities.length} cities and communities served
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {losAngelesCities.map((city) => (
                      <Link 
                        key={city} 
                        href={`/cities/${createCitySlug(city)}`}
                        className="block"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full text-sm hover:bg-yellow hover:text-navy transition-colors"
                        >
                          {city}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* San Diego County */}
            <div>
              <Card className="retro-card">
                <CardHeader className="text-center">
                  <CardTitle className="heading-primary text-3xl text-navy mb-2">
                    🏖️ San Diego County
                  </CardTitle>
                  <p className="text-gray-600">
                    {sanDiegoCities.length} cities and communities served
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {sanDiegoCities.map((city) => (
                      <Link 
                        key={city} 
                        href={`/cities/${createCitySlug(city)}`}
                        className="block"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full text-sm hover:bg-yellow hover:text-navy transition-colors"
                        >
                          {city}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-decorative text-4xl md:text-5xl text-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-2xl mx-auto">
            Don't see your city listed? We're always expanding our service area. Give us a call to see if we can help!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button variant="retro-navy" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}