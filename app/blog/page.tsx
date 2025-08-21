import { getPageSEO } from "@/lib/seo"
import { BLOG_CATEGORIES, BUSINESS_INFO } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react"

export const metadata = getPageSEO('blog')

// Mock blog posts data - in a real app this would come from CMS or MDX files
const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Windows Need Professional Cleaning in Orange County",
    slug: "signs-windows-need-professional-cleaning-orange-county",
    excerpt: "Learn the telltale signs that it's time to call in the professionals for your window cleaning needs in Orange County's unique climate.",
    content: "Living in Orange County means dealing with unique environmental challenges...",
    category: "Window Cleaning Tips",
    author: "Carlos Martinez",
    publishedAt: "2024-01-15",
    readingTime: 5,
    image: "/blog/window-cleaning-signs.jpg",
    tags: ["window cleaning", "Orange County", "maintenance tips"],
    featured: true
  },
  {
    id: 2,
    title: "Pressure Washing vs. Soft Washing: Which is Right for Your Los Angeles Home?",
    slug: "pressure-washing-vs-soft-washing-los-angeles",
    excerpt: "Discover the differences between pressure washing and soft washing, and learn which method is best for your LA property's specific needs.",
    content: "When it comes to cleaning your Los Angeles home's exterior...",
    category: "Pressure Washing Guide",
    author: "Miguel Martinez",
    publishedAt: "2024-01-10",
    readingTime: 7,
    image: "/blog/pressure-washing-comparison.jpg",
    tags: ["pressure washing", "Los Angeles", "home maintenance"],
    featured: true
  },
  {
    id: 3,
    title: "Solar Panel Cleaning: Maximizing Efficiency in San Diego's Sunny Climate",
    slug: "solar-panel-cleaning-san-diego-efficiency",
    excerpt: "San Diego's abundant sunshine makes solar panels a great investment. Learn how proper cleaning can maximize your energy production and savings.",
    content: "San Diego homeowners are increasingly turning to solar power...",
    category: "Solar Panel Maintenance",
    author: "Sofia Martinez",
    publishedAt: "2024-01-05",
    readingTime: 6,
    image: "/blog/solar-panel-cleaning.jpg",
    tags: ["solar panels", "San Diego", "energy efficiency"],
    featured: false
  },
  {
    id: 4,
    title: "Gutter Cleaning Before Winter: Essential Tips for Southern California",
    slug: "gutter-cleaning-winter-prep-southern-california",
    excerpt: "Even in Southern California's mild climate, proper gutter maintenance before winter is crucial. Here's what you need to know.",
    content: "While Southern California doesn't experience harsh winters...",
    category: "Gutter Care",
    author: "Carlos Martinez",
    publishedAt: "2023-12-28",
    readingTime: 4,
    image: "/blog/gutter-cleaning-winter.jpg",
    tags: ["gutter cleaning", "winter prep", "home maintenance"],
    featured: false
  },
  {
    id: 5,
    title: "Commercial Property Maintenance: First Impressions Matter in Orange County",
    slug: "commercial-property-maintenance-orange-county",
    excerpt: "Your building's exterior is the first thing customers see. Learn how professional cleaning services can enhance your business image in Orange County.",
    content: "In Orange County's competitive business environment...",
    category: "Commercial Services",
    author: "Miguel Martinez",
    publishedAt: "2023-12-20",
    readingTime: 8,
    image: "/blog/commercial-cleaning.jpg",
    tags: ["commercial cleaning", "business", "Orange County"],
    featured: false
  },
  {
    id: 6,
    title: "Before & After: Dramatic Window Cleaning Transformation in Newport Beach",
    slug: "before-after-window-cleaning-newport-beach",
    excerpt: "See the incredible transformation of a Newport Beach oceanfront property after our professional window cleaning service.",
    content: "This stunning Newport Beach property hadn't had professional window cleaning...",
    category: "Before & After",
    author: "Carlos Martinez",
    publishedAt: "2023-12-15",
    readingTime: 3,
    image: "/blog/newport-beach-transformation.jpg",
    tags: ["before and after", "Newport Beach", "window cleaning"],
    featured: false
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
            <Link href="/contact">
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
