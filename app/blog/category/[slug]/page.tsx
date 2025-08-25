import { getPageSEO } from "@/lib/seo"
import { BLOG_CATEGORIES, BUSINESS_INFO } from "@/lib/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, ArrowLeft, Tag } from "lucide-react"
import { notFound } from "next/navigation"

// Real blog posts data - same as blog page
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
    image: "/blog/window-cleaning-orange-county.jpg",
    tags: ["Orange County", "Window Cleaning", "Costa Mesa", "Newport Beach", "Irvine"]
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
    image: "/blog/pressure-washing-los-angeles.jpg",
    tags: ["Los Angeles County", "Pressure Washing", "Beverly Hills", "Santa Monica", "Manhattan Beach"]
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
    image: "/blog/gutter-cleaning-san-diego.jpg",
    tags: ["San Diego County", "Gutter Cleaning", "La Jolla", "Encinitas", "Carlsbad"]
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
    image: "/blog/solar-panel-cleaning-california.jpg",
    tags: ["Solar Panel Cleaning", "Southern California", "Energy Efficiency"]
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
    tags: ["Post-Construction Cleanup", "Orange County", "Costa Mesa", "Irvine", "Newport Beach"]
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
    tags: ["Commercial Services", "Los Angeles County", "Beverly Hills", "Santa Monica", "Office Cleaning"]
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
    tags: ["Seasonal Maintenance", "San Diego County", "La Jolla", "Encinitas", "Property Care"]
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
    tags: ["Eco-Friendly", "Green Cleaning", "Southern California", "Sustainability", "Water Conservation"]
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
    tags: ["San Diego County", "Residential Cleaning", "La Jolla", "Encinitas", "Del Mar", "Homeowners"]
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
    tags: ["Commercial Cleaning", "Los Angeles County", "Beverly Hills", "Santa Monica", "Downtown LA", "Office Buildings"]
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
    tags: ["Driveway Cleaning", "Orange County", "Costa Mesa", "Irvine", "Newport Beach", "Huntington Beach"]
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
    tags: ["Concrete Cleaning", "San Diego County", "Chula Vista", "Oceanside", "Carlsbad", "Patio Cleaning"]
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
    tags: ["Gutter Repair", "Orange County", "Costa Mesa", "Anaheim", "Fullerton", "Garden Grove", "Water Damage Prevention"]
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
    tags: ["Gutter Installation", "Los Angeles County", "Beverly Hills", "Pasadena", "Torrance", "Long Beach", "Home Improvement"]
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
    tags: ["Solar Efficiency", "Orange County", "Irvine", "Mission Viejo", "Newport Beach", "Yorba Linda", "Energy Savings"]
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
    tags: ["Solar Maintenance", "Los Angeles County", "Beverly Hills", "Glendale", "Burbank", "Pomona", "System Care"]
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
    tags: ["House Washing", "Orange County", "Anaheim", "Fullerton", "Brea", "Yorba Linda", "Soft Washing"]
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
    tags: ["Roof Cleaning", "Los Angeles County", "Hollywood", "Pasadena", "Torrance", "Lakewood", "Roof Maintenance"]
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
    tags: ["Spring Cleaning", "Orange County", "Newport Beach", "Irvine", "Costa Mesa", "Tustin", "Seasonal Maintenance"]
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
    tags: ["Fall Preparation", "Los Angeles County", "Woodland Hills", "Calabasas", "West Hollywood", "Culver City", "Winter Prep"]
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
    tags: ["Restaurant Cleaning", "Orange County", "Costa Mesa", "Anaheim", "Huntington Beach", "Newport Beach", "Food Service"]
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
    tags: ["Office Building", "San Diego County", "San Diego", "Escondido", "Chula Vista", "El Cajon", "Commercial Cleaning"]
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
    tags: ["Before After", "Orange County", "Costa Mesa", "Newport Beach", "Irvine", "Anaheim", "Transformations"]
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
    tags: ["Before After", "Los Angeles County", "Beverly Hills", "Santa Monica", "Pasadena", "Glendale", "Results"]
  }
]

interface CategoryPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all categories
export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, '-')
  }))
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps) {
  const categorySlug = params.slug
  const categoryName = BLOG_CATEGORIES.find(cat => 
    cat.toLowerCase().replace(/\s+/g, '-') === categorySlug
  )
  
  if (!categoryName) {
    return {
      title: 'Category Not Found | Shimmer Shine Property Detailing',
      description: 'The requested blog category could not be found.'
    }
  }

  return {
    title: `${categoryName} Articles | Shimmer Shine Property Detailing Blog`,
    description: `Expert ${categoryName.toLowerCase()} articles and guides for Southern California property owners. Professional tips from Orange County, Los Angeles, and San Diego cleaning experts.`,
    keywords: [
      categoryName.toLowerCase(),
      "Southern California",
      "Orange County",
      "Los Angeles",
      "San Diego",
      "property maintenance",
      "cleaning tips",
      "professional advice"
    ],
    openGraph: {
      title: `${categoryName} Articles | Shimmer Shine Property Detailing Blog`,
      description: `Expert ${categoryName.toLowerCase()} articles and guides for Southern California property owners.`,
      url: `https://shimmershinepd.com/blog/category/${categorySlug}`,
      type: 'website'
    }
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.slug
  const categoryName = BLOG_CATEGORIES.find(cat => 
    cat.toLowerCase().replace(/\s+/g, '-') === categorySlug
  )
  
  if (!categoryName) {
    notFound()
  }

  // Filter posts by category
  const categoryPosts = blogPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
    post.category === categoryName
  )

  // Get related categories (exclude current category)
  const otherCategories = BLOG_CATEGORIES.filter(cat => cat !== categoryName)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/blog" className="inline-flex items-center text-yellow hover:text-white transition-colors mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="retro-badge mb-6">
              Blog Category
            </div>
            
            <h1 className="heading-primary text-4xl md:text-6xl mb-6 leading-tight text-white">
              {categoryName}
            </h1>
            
            <p className="body-text text-xl text-gray-100 leading-relaxed">
              Expert {categoryName.toLowerCase()} articles and guides for Southern California property owners. 
              Professional tips from our experienced team serving Orange County, Los Angeles, and San Diego.
            </p>
            
            <div className="mt-8">
              <span className="bg-yellow/20 text-yellow px-4 py-2 rounded-full text-lg font-semibold">
                {categoryPosts.length} {categoryPosts.length === 1 ? 'Article' : 'Articles'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {categoryPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post) => (
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
                    
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-navy transition-colors">
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
                          <span>{post.readingTime} min</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <p className="body-text text-gray-700 mb-4 leading-relaxed flex-1">
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
                        <Button variant="outline" className="w-full group-hover:bg-navy group-hover:text-white transition-colors">
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="heading-primary text-2xl text-gray-600 mb-4">
                  No articles found in this category
                </h3>
                <p className="body-text text-gray-500 mb-8">
                  We're working on adding more content. Check back soon!
                </p>
                <Link href="/blog">
                  <Button>
                    Browse All Articles
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="heading-primary text-3xl md:text-4xl mb-4">
                Explore Other Categories
              </h3>
              <p className="body-text text-xl text-gray-600">
                Discover more helpful articles and guides
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherCategories.map((category) => {
                const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
                const categoryPostCount = blogPosts.filter(post => 
                  post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
                  post.category === category
                ).length

                return (
                  <Link key={category} href={`/blog/category/${categorySlug}`}>
                    <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <h4 className="heading-primary text-lg text-navy group-hover:text-yellow transition-colors mb-2">
                          {category}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {categoryPostCount} {categoryPostCount === 1 ? 'article' : 'articles'}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
            Need Professional Service?
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Ready to put our expertise to work? Get professional {categoryName.toLowerCase()} services 
            throughout Orange County, Los Angeles, and San Diego.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-a-quote">
              <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90 text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy text-lg px-8 py-4">
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
