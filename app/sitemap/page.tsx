import { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES, BUSINESS_INFO } from '@/lib/constants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sitemap | Shimmer Shine Property Detailing',
  description: 'Complete sitemap of Shimmer Shine Property Detailing website. Find all our services, service areas, blog posts, and important pages.',
  robots: 'index, follow',
  openGraph: {
    title: 'Sitemap | Shimmer Shine Property Detailing',
    description: 'Complete sitemap of Shimmer Shine Property Detailing website. Find all our services, service areas, blog posts, and important pages.',
    url: 'https://shimmershinepd.com/sitemap',
    siteName: 'Shimmer Shine Property Detailing',
    locale: 'en_US',
    type: 'website',
  },
}

// Cities data organized by county
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
  "Carlsbad", "Chula Vista", "Coronado", "Escondido", "Imperial Beach", "La Mesa", 
  "Lemon Grove", "National City", "Oceanside", "Poway", "San Diego", "San Marcos", 
  "Santee", "Solana Beach", "Vista", "La Jolla", "Pacific Beach", "Mission Beach", 
  "Ocean Beach", "Point Loma", "Hillcrest", "Balboa Park", "University City", 
  "Carmel Valley", "Rancho Bernardo", "Scripps Ranch", "Mira Mesa", "Clairemont", "Bay Park"
]

const allCities = [...orangeCountyCities, ...losAngelesCities, ...sanDiegoCities]

const createCitySlug = (city: string) => {
  return city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

// Blog posts data (you can expand this with actual blog post data)
const blogPosts = [
  { slug: 'amazing-transformations-orange-county', title: 'Amazing Transformations in Orange County' },
  { slug: 'cleaning-results-showcase-los-angeles', title: 'Cleaning Results Showcase Los Angeles' },
  { slug: 'commercial-property-maintenance-los-angeles', title: 'Commercial Property Maintenance Los Angeles' },
  { slug: 'commercial-window-cleaning-los-angeles', title: 'Commercial Window Cleaning Los Angeles' },
  { slug: 'concrete-pressure-washing-san-diego', title: 'Concrete Pressure Washing San Diego' },
  { slug: 'driveway-pressure-washing-orange-county', title: 'Driveway Pressure Washing Orange County' },
  { slug: 'eco-friendly-cleaning-southern-california', title: 'Eco-Friendly Cleaning Southern California' },
  { slug: 'exterior-house-washing-orange-county', title: 'Exterior House Washing Orange County' },
  { slug: 'fall-property-preparation-los-angeles', title: 'Fall Property Preparation Los Angeles' },
  { slug: 'gutter-cleaning-san-diego-county', title: 'Gutter Cleaning San Diego County' },
  { slug: 'gutter-installation-los-angeles', title: 'Gutter Installation Los Angeles' },
  { slug: 'gutter-repair-orange-county', title: 'Gutter Repair Orange County' },
  { slug: 'office-building-cleaning-san-diego', title: 'Office Building Cleaning San Diego' },
  { slug: 'post-construction-cleanup-orange-county', title: 'Post-Construction Cleanup Orange County' },
  { slug: 'pressure-washing-los-angeles-county', title: 'Pressure Washing Los Angeles County' },
  { slug: 'residential-window-cleaning-san-diego', title: 'Residential Window Cleaning San Diego' },
  { slug: 'restaurant-cleaning-orange-county', title: 'Restaurant Cleaning Orange County' },
  { slug: 'roof-cleaning-los-angeles', title: 'Roof Cleaning Los Angeles' },
  { slug: 'seasonal-property-maintenance-san-diego', title: 'Seasonal Property Maintenance San Diego' },
  { slug: 'solar-panel-cleaning-southern-california', title: 'Solar Panel Cleaning Southern California' },
  { slug: 'solar-panel-efficiency-orange-county', title: 'Solar Panel Efficiency Orange County' },
  { slug: 'solar-panel-maintenance-los-angeles', title: 'Solar Panel Maintenance Los Angeles' },
  { slug: 'spring-cleaning-orange-county', title: 'Spring Cleaning Orange County' },
  { slug: 'window-cleaning-orange-county-guide', title: 'Window Cleaning Orange County Guide' },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Navigate through all pages and sections of our website
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Main Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Main Pages</CardTitle>
              <CardDescription>Core website pages and information</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/get-a-quote" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Our Services</CardTitle>
              <CardDescription>Professional cleaning and detailing services</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={`/services/${service.id}`} 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Service Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Service Areas</CardTitle>
              <CardDescription>Cities and regions we serve</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  All Service Areas
                </Link>
              </div>
              <div className="mb-4">
                <Link href="/cities" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Cities Overview
                </Link>
              </div>
              <ul className="space-y-1 text-sm">
                {allCities.slice(0, 8).map((city) => (
                  <li key={createCitySlug(city)}>
                    <Link 
                      href={`/cities/${createCitySlug(city)}`} 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
                {allCities.length > 8 && (
                  <li className="text-gray-500 text-xs">
                    ... and {allCities.length - 8} more cities
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Blog Posts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Blog Posts</CardTitle>
              <CardDescription>Latest articles and cleaning tips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  All Blog Posts
                </Link>
              </div>
              <ul className="space-y-1 text-sm max-h-64 overflow-y-auto">
                {blogPosts.slice(0, 12).map((post) => (
                  <li key={post.slug}>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
                {blogPosts.length > 12 && (
                  <li className="text-gray-500 text-xs">
                    ... and {blogPosts.length - 12} more articles
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Legal Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Legal & Information</CardTitle>
              <CardDescription>Terms, policies, and legal information</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Sitemap (This Page)
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Contact Information</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-blue-600">{BUSINESS_INFO.phone}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-blue-600">{BUSINESS_INFO.email}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Service Area</h4>
                  <p className="text-gray-600">
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zipCode}
                  </p>
                  <p className="text-gray-600">{BUSINESS_INFO.address.county}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
