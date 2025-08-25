import { getPageSEO } from "@/lib/seo"
import { BLOG_CATEGORIES, BUSINESS_INFO } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react"

export const metadata = getPageSEO('blog')

// Real blog posts data - these correspond to the MDX files we created
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Professional Window Cleaning in Orange County",
    slug: "window-cleaning-orange-county-guide",
    excerpt: "Everything you need to know about window cleaning services in Costa Mesa, Newport Beach, Irvine, and throughout Orange County. Professional tips, pricing, and local expertise.",
    category: "Window Cleaning Tips",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-15",
    readingTime: 8,
    image: "/blog/window-cleaning-orange-county-guide.jpg",
    tags: ["Orange County", "Window Cleaning", "Costa Mesa", "Newport Beach", "Irvine"],
    featured: true
  },
  {
    id: 2,
    title: "Ultimate Guide to Pressure Washing in Los Angeles County",
    slug: "pressure-washing-los-angeles-county",
    excerpt: "Professional pressure washing services for driveways, patios, and exteriors in Beverly Hills, Santa Monica, Manhattan Beach, and throughout LA County. Expert tips and local insights.",
    category: "Pressure Washing Guide",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-16",
    readingTime: 10,
    image: "/blog/pressure-washing-los-angeles-county.jpg",
    tags: ["Los Angeles County", "Pressure Washing", "Beverly Hills", "Santa Monica", "Manhattan Beach"],
    featured: true
  },
  {
    id: 3,
    title: "Complete Gutter Cleaning Guide for San Diego County Properties",
    slug: "gutter-cleaning-san-diego-county",
    excerpt: "Professional gutter cleaning and maintenance services in San Diego, La Jolla, Encinitas, Carlsbad, and throughout San Diego County. Protect your property from water damage.",
    category: "Gutter Care",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-17",
    readingTime: 9,
    image: "/blog/gutter-cleaning-san-diego-county.jpg",
    tags: ["San Diego County", "Gutter Cleaning", "La Jolla", "Encinitas", "Carlsbad"],
    featured: false
  },
  {
    id: 4,
    title: "Solar Panel Cleaning Guide for Southern California Properties",
    slug: "solar-panel-cleaning-southern-california",
    excerpt: "Maximize solar efficiency with professional cleaning in Orange County, Los Angeles, and San Diego. Expert tips for maintaining solar panels in Southern California's unique climate.",
    category: "Solar Panel Maintenance",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-18",
    readingTime: 12,
    image: "/blog/solar-panel-cleaning-southern-california.jpg",
    tags: ["Solar Panel Cleaning", "Southern California", "Energy Efficiency"],
    featured: false
  },
  {
    id: 5,
    title: "Post-Construction Cleanup Services in Orange County",
    slug: "post-construction-cleanup-orange-county",
    excerpt: "Professional post-construction cleanup in Costa Mesa, Irvine, Newport Beach, and throughout Orange County. Remove dust, debris, and construction residue safely and efficiently.",
    category: "Property Maintenance",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-19",
    readingTime: 11,
    image: "/blog/post-construction-cleanup-orange-county.jpg",
    tags: ["Post-Construction Cleanup", "Orange County", "Costa Mesa", "Irvine", "Newport Beach"],
    featured: false
  },
  {
    id: 6,
    title: "Commercial Property Maintenance in Los Angeles County",
    slug: "commercial-property-maintenance-los-angeles",
    excerpt: "Professional commercial cleaning services for office buildings, retail spaces, and business properties in Beverly Hills, Santa Monica, Los Angeles, and throughout LA County.",
    category: "Commercial Services",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-20",
    readingTime: 13,
    image: "/blog/commercial-property-maintenance-los-angeles.jpg",
    tags: ["Commercial Services", "Los Angeles County", "Beverly Hills", "Santa Monica", "Office Cleaning"],
    featured: true
  },
  {
    id: 7,
    title: "Seasonal Property Maintenance Guide for San Diego County",
    slug: "seasonal-property-maintenance-san-diego",
    excerpt: "Year-round property maintenance tips for San Diego, La Jolla, Encinitas, and throughout San Diego County. Seasonal cleaning schedules and weather-specific maintenance.",
    category: "Seasonal Cleaning",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-21",
    readingTime: 14,
    image: "/blog/seasonal-property-maintenance-san-diego.jpg",
    tags: ["Seasonal Maintenance", "San Diego County", "La Jolla", "Encinitas", "Property Care"],
    featured: false
  },
  {
    id: 8,
    title: "Eco-Friendly Property Cleaning in Southern California",
    slug: "eco-friendly-cleaning-southern-california",
    excerpt: "Sustainable and environmentally responsible cleaning services throughout Orange County, Los Angeles, and San Diego. Green cleaning solutions and water conservation practices.",
    category: "Property Maintenance",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-22",
    readingTime: 10,
    image: "/blog/eco-friendly-cleaning-southern-california.jpg",
    tags: ["Eco-Friendly", "Green Cleaning", "Southern California", "Sustainability", "Water Conservation"],
    featured: true
  },
  {
    id: 9,
    title: "Residential Window Cleaning Services in San Diego County",
    slug: "residential-window-cleaning-san-diego",
    excerpt: "Professional residential window cleaning in San Diego, La Jolla, Encinitas, Del Mar, and throughout San Diego County. Expert tips for homeowners and local service insights.",
    category: "Window Cleaning Tips",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-23",
    readingTime: 9,
    image: "/blog/residential-window-cleaning-san-diego.jpg",
    tags: ["San Diego County", "Residential Cleaning", "La Jolla", "Encinitas", "Del Mar", "Homeowners"],
    featured: false
  },
  {
    id: 10,
    title: "Commercial Window Cleaning Services in Los Angeles County",
    slug: "commercial-window-cleaning-los-angeles",
    excerpt: "Professional commercial window cleaning for office buildings, retail stores, and business properties in Beverly Hills, Santa Monica, Downtown LA, and throughout Los Angeles County.",
    category: "Window Cleaning Tips",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-24",
    readingTime: 11,
    image: "/blog/commercial-window-cleaning-los-angeles.jpg",
    tags: ["Commercial Cleaning", "Los Angeles County", "Beverly Hills", "Santa Monica", "Downtown LA", "Office Buildings"],
    featured: false
  },
  {
    id: 11,
    title: "Driveway Pressure Washing Services in Orange County",
    slug: "driveway-pressure-washing-orange-county",
    excerpt: "Professional driveway pressure washing in Costa Mesa, Irvine, Newport Beach, Huntington Beach, and throughout Orange County. Remove oil stains, grime, and restore curb appeal.",
    category: "Pressure Washing Guide",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-25",
    readingTime: 10,
    image: "/blog/driveway-pressure-washing-orange-county.jpg",
    tags: ["Driveway Cleaning", "Orange County", "Costa Mesa", "Irvine", "Newport Beach", "Huntington Beach"],
    featured: false
  },
  {
    id: 12,
    title: "Concrete Pressure Washing Services in San Diego County",
    slug: "concrete-pressure-washing-san-diego",
    excerpt: "Professional concrete cleaning for patios, sidewalks, and driveways in San Diego, Chula Vista, Oceanside, Carlsbad, and throughout San Diego County. Remove stains and restore surfaces.",
    category: "Pressure Washing Guide",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-26",
    readingTime: 12,
    image: "/blog/concrete-pressure-washing-san-diego.jpg",
    tags: ["Concrete Cleaning", "San Diego County", "Chula Vista", "Oceanside", "Carlsbad", "Patio Cleaning"],
    featured: false
  },
  {
    id: 13,
    title: "Gutter Repair and Maintenance Services in Orange County",
    slug: "gutter-repair-orange-county",
    excerpt: "Professional gutter repair, cleaning, and maintenance in Costa Mesa, Anaheim, Fullerton, Garden Grove, and throughout Orange County. Prevent water damage and protect your home.",
    category: "Gutter Care",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-27",
    readingTime: 11,
    image: "/blog/gutter-repair-orange-county.jpg",
    tags: ["Gutter Repair", "Orange County", "Costa Mesa", "Anaheim", "Fullerton", "Garden Grove", "Water Damage Prevention"],
    featured: false
  },
  {
    id: 14,
    title: "Gutter Installation and Replacement Services in Los Angeles County",
    slug: "gutter-installation-los-angeles",
    excerpt: "Professional gutter installation and replacement in Beverly Hills, Pasadena, Torrance, Long Beach, and throughout Los Angeles County. Custom solutions for every home type.",
    category: "Gutter Care",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-28",
    readingTime: 13,
    image: "/blog/gutter-installation-los-angeles.jpg",
    tags: ["Gutter Installation", "Los Angeles County", "Beverly Hills", "Pasadena", "Torrance", "Long Beach", "Home Improvement"],
    featured: false
  },
  {
    id: 15,
    title: "Maximizing Solar Panel Efficiency in Orange County",
    slug: "solar-panel-efficiency-orange-county",
    excerpt: "Increase solar panel efficiency through professional cleaning in Irvine, Mission Viejo, Newport Beach, Yorba Linda, and throughout Orange County. Maximize energy production and savings.",
    category: "Solar Panel Maintenance",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-29",
    readingTime: 10,
    image: "/blog/solar-panel-efficiency-orange-county.jpg",
    tags: ["Solar Efficiency", "Orange County", "Irvine", "Mission Viejo", "Newport Beach", "Yorba Linda", "Energy Savings"],
    featured: false
  },
  {
    id: 16,
    title: "Solar Panel Maintenance and Care in Los Angeles County",
    slug: "solar-panel-maintenance-los-angeles",
    excerpt: "Professional solar panel maintenance, inspection, and care services in Beverly Hills, Glendale, Burbank, Pomona, and throughout Los Angeles County. Protect your solar investment.",
    category: "Solar Panel Maintenance",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-30",
    readingTime: 12,
    image: "/blog/solar-panel-maintenance-los-angeles.jpg",
    tags: ["Solar Maintenance", "Los Angeles County", "Beverly Hills", "Glendale", "Burbank", "Pomona", "System Care"],
    featured: false
  },
  {
    id: 17,
    title: "Exterior House Washing Services in Orange County",
    slug: "exterior-house-washing-orange-county",
    excerpt: "Professional exterior house washing and soft washing in Anaheim, Fullerton, Brea, Yorba Linda, and throughout Orange County. Remove dirt, mildew, and restore your home's beauty.",
    category: "Property Maintenance",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-01-31",
    readingTime: 11,
    image: "/blog/exterior-house-washing-orange-county.jpg",
    tags: ["House Washing", "Orange County", "Anaheim", "Fullerton", "Brea", "Yorba Linda", "Soft Washing"],
    featured: false
  },
  {
    id: 18,
    title: "Roof Cleaning and Maintenance Services in Los Angeles County",
    slug: "roof-cleaning-los-angeles",
    excerpt: "Professional roof cleaning for tile, shingle, and flat roofs in Hollywood, Pasadena, Torrance, Lakewood, and throughout Los Angeles County. Remove moss, algae, and extend roof life.",
    category: "Property Maintenance",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-02-01",
    readingTime: 13,
    image: "/blog/roof-cleaning-los-angeles.jpg",
    tags: ["Roof Cleaning", "Los Angeles County", "Hollywood", "Pasadena", "Torrance", "Lakewood", "Roof Maintenance"],
    featured: false
  },
  {
    id: 19,
    title: "Spring Property Cleaning Services in Orange County",
    slug: "spring-cleaning-orange-county",
    excerpt: "Professional spring cleaning for exteriors, windows, and pressure washing in Newport Beach, Irvine, Costa Mesa, Tustin, and throughout Orange County. Refresh your property for the season.",
    category: "Seasonal Cleaning",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-02-02",
    readingTime: 12,
    image: "/blog/spring-cleaning-orange-county.jpg",
    tags: ["Spring Cleaning", "Orange County", "Newport Beach", "Irvine", "Costa Mesa", "Tustin", "Seasonal Maintenance"],
    featured: false
  },
  {
    id: 20,
    title: "Fall Property Preparation and Maintenance in Los Angeles County",
    slug: "fall-property-preparation-los-angeles",
    excerpt: "Professional fall property preparation services in Woodland Hills, Calabasas, West Hollywood, Culver City, and throughout Los Angeles County. Prepare your property for winter weather.",
    category: "Seasonal Cleaning",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-02-03",
    readingTime: 11,
    image: "/blog/fall-property-preparation-los-angeles.jpg",
    tags: ["Fall Preparation", "Los Angeles County", "Woodland Hills", "Calabasas", "West Hollywood", "Culver City", "Winter Prep"],
    featured: false
  },
  {
    id: 21,
    title: "Restaurant and Food Service Cleaning in Orange County",
    slug: "restaurant-cleaning-orange-county",
    excerpt: "Professional restaurant exterior cleaning and pressure washing in Costa Mesa, Anaheim, Huntington Beach, Newport Beach, and throughout Orange County. Health code compliance and customer appeal.",
    category: "Commercial Services",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-02-04",
    readingTime: 10,
    image: "/blog/restaurant-cleaning-orange-county.jpg",
    tags: ["Restaurant Cleaning", "Orange County", "Costa Mesa", "Anaheim", "Huntington Beach", "Newport Beach", "Food Service"],
    featured: false
  },
  {
    id: 22,
    title: "Office Building Cleaning Services in San Diego County",
    slug: "office-building-cleaning-san-diego",
    excerpt: "Professional office building exterior cleaning and maintenance in San Diego, Escondido, Chula Vista, El Cajon, and throughout San Diego County. Maintain professional image and tenant satisfaction.",
    category: "Commercial Services",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-02-05",
    readingTime: 12,
    image: "/blog/office-building-cleaning-san-diego.jpg",
    tags: ["Office Building", "San Diego County", "San Diego", "Escondido", "Chula Vista", "El Cajon", "Commercial Cleaning"],
    featured: false
  },
  {
    id: 23,
    title: "Amazing Property Transformations in Orange County",
    slug: "amazing-transformations-orange-county",
    excerpt: "Incredible before and after results from professional cleaning services in Costa Mesa, Newport Beach, Irvine, Anaheim, and throughout Orange County. See the dramatic difference professional cleaning makes.",
    category: "Before & After",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-02-06",
    readingTime: 8,
    image: "/blog/amazing-transformations-orange-county.jpg",
    tags: ["Before After", "Orange County", "Costa Mesa", "Newport Beach", "Irvine", "Anaheim", "Transformations"],
    featured: true
  },
  {
    id: 24,
    title: "Professional Cleaning Results Showcase in Los Angeles County",
    slug: "cleaning-results-showcase-los-angeles",
    excerpt: "Stunning before and after cleaning results from Beverly Hills, Santa Monica, Pasadena, Glendale, and throughout Los Angeles County. See why professional cleaning makes all the difference.",
    category: "Before & After",
    author: "Shimmer Shine Property Detailing",
    publishedAt: "2025-02-07",
    readingTime: 9,
    image: "/blog/cleaning-results-showcase-los-angeles.jpg",
    tags: ["Before After", "Los Angeles County", "Beverly Hills", "Santa Monica", "Pasadena", "Glendale", "Results"],
    featured: true
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="retro-badge mb-6">
              Expert Tips & Insights
            </div>
            
            <h1 className="heading-decorative text-5xl md:text-7xl text-yellow mb-4">
              Our Blog
            </h1>
            
            <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6">
              Property Maintenance Tips for Southern California
            </h2>
            
            <p className="body-text text-xl text-gray-100 leading-relaxed">
              Get expert advice on window cleaning, pressure washing, and property maintenance from experienced cleaning professionals serving Orange County, Los Angeles, and San Diego.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Featured Articles
            </h3>
            <p className="body-text text-xl text-gray-600">
              Our most popular and helpful guides
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="retro-card overflow-hidden hover:shadow-retro-yellow transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="retro-badge text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="heading-primary text-xl leading-tight hover:text-navy transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="body-text text-gray-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="group-hover:bg-yellow group-hover:text-navy group-hover:border-yellow transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Recent Articles
            </h3>
            <p className="body-text text-xl text-gray-600">
              Latest tips and insights from our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="retro-card hover:shadow-retro transition-all duration-300 group h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="retro-badge text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="heading-primary text-lg leading-tight line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-navy transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{post.author}</span>
                    <span>{post.readingTime} min</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <p className="body-text text-sm text-gray-700 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-navy group-hover:text-white transition-colors">
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Browse by Category
            </h3>
            <p className="body-text text-xl text-gray-600">
              Find articles on specific topics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BLOG_CATEGORIES.map((category) => (
              <Link key={category} href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h4 className="heading-primary text-lg text-navy group-hover:text-yellow transition-colors">
                      {category}
                    </h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
            Stay in the Loop
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Get our latest tips, seasonal maintenance reminders, and exclusive offers delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-navy"
              />
              <Button variant="retro" className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4">
            Ready for Professional Service?
          </h3>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-3xl mx-auto">
            Put our expertise to work for your property. From window cleaning to pressure washing, we've got you covered across Orange County, Los Angeles, and San Diego.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-a-quote">
              <Button variant="retro-navy" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
