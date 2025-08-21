import { getPageSEO } from "@/lib/seo"
import { getLocalBusinessSchema } from "@/lib/schema"
import { BUSINESS_INFO } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Award, 
  Users, 
  Heart, 
  Shield, 
  Star,
  Phone,
  Calendar,
  MapPin,
  CheckCircle
} from "lucide-react"

export const metadata = getPageSEO('about')

export default function AboutPage() {
  const localBusinessSchema = getLocalBusinessSchema()

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                          <div className="retro-badge mb-6">
              Professional Since {BUSINESS_INFO.foundedYear}
            </div>
              
              <h1 className="heading-decorative text-5xl md:text-7xl text-yellow mb-4">
                Our Story
              </h1>
              
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6">
                Three Decades of Sparkling Results
              </h2>
              
              <p className="body-text text-xl text-gray-100 leading-relaxed">
                What started as a small window cleaning business in Costa Mesa has grown into Southern California's most trusted property detailing company. We've been serving Orange County, Los Angeles, and San Diego with old-school quality and modern reliability for nearly three decades.
              </p>
            </div>

            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/family-business-photo.jpg"
                    alt="Shimmer Shine Property Detailing family business owners"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Professional Team - Three Decades Strong</p>
                  <p className="text-sm text-gray-600">Serving Southern California Since 1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="heading-primary text-3xl md:text-4xl mb-6">
                Serving SoCal with Pride Since Day One
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="retro-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="heading-primary text-xl text-navy">1995</CardTitle>
                  <CardDescription>The Beginning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-sm">
                    Started as a one-man operation with a squeegee, bucket, and a dream to provide honest, quality window cleaning services.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="heading-primary text-xl text-navy">2010</CardTitle>
                  <CardDescription>Family Expansion</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-sm">
                    Second generation joined the business, expanding services to include pressure washing and property detailing.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="heading-primary text-xl text-navy">2024</CardTitle>
                  <CardDescription>Today</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-sm">
                    Three decades strong with 500+ 5-star reviews, serving thousands of happy customers across Southern California.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Story Content */}
            <div className="vintage-border">
              <div className="prose prose-lg max-w-none">
                <p className="body-text text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>It all started with a simple belief:</strong> every customer deserves sparkling clean windows and honest, reliable service. In 1995, founder Miguel Martinez began Shimmer Shine with nothing more than a squeegee, a bucket, and an unwavering commitment to quality.
                </p>

                <p className="body-text text-lg text-gray-700 leading-relaxed mb-6">
                  What set us apart from day one wasn't just our attention to detail—it was our old-school approach to customer service. We show up on time, we do what we say we'll do, and we don't consider a job finished until our customers are completely satisfied.
                </p>

                <p className="body-text text-lg text-gray-700 leading-relaxed mb-6">
                  As Orange County grew, so did we. Miguel's son Carlos joined the business in 2010, bringing fresh ideas while maintaining the family values that made us who we are. Together, they expanded our services to include pressure washing, solar panel cleaning, and comprehensive property detailing.
                </p>

                <p className="body-text text-lg text-gray-700 leading-relaxed">
                  Today, with Carlos's daughter Sofia learning the trade, we're proud to be a three-generation family business serving Southern California. We've cleaned thousands of windows, washed countless driveways, and built lasting relationships with families and businesses throughout Orange County, Los Angeles, and San Diego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Our Values
            </h3>
            <p className="body-text text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Customer First</h4>
              <p className="body-text text-gray-600">
                We treat every customer with respect and every job with professional excellence.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Quality Craftsmanship</h4>
              <p className="body-text text-gray-600">
                Old-school techniques combined with modern tools for superior results every time.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Trust & Integrity</h4>
              <p className="body-text text-gray-600">
                Honest pricing, reliable service, and doing the right thing even when no one's watching.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Community Pride</h4>
              <p className="body-text text-gray-600">
                Proudly serving our Southern California neighbors and supporting local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Meet the Team
            </h3>
            <p className="body-text text-xl text-gray-600">
              Three decades of window cleaning expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="retro-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/team-miguel.jpg"
                    alt="Miguel Martinez, Founder"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Miguel Martinez
                </CardTitle>
                <CardDescription>Founder & Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="body-text text-sm text-gray-700">
                  Started Shimmer Shine in 1995 with a commitment to old-school quality and customer service. Still actively involved in training and quality control.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/team-carlos.jpg"
                    alt="Carlos Martinez, Operations Manager"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Carlos Martinez
                </CardTitle>
                <CardDescription>Operations Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="body-text text-sm text-gray-700">
                  Second-generation owner who expanded services and modernized operations while maintaining family values and quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/team-sofia.jpg"
                    alt="Sofia Martinez, Customer Relations"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Sofia Martinez
                </CardTitle>
                <CardDescription>Customer Relations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="body-text text-sm text-gray-700">
                  Third-generation family member bringing fresh ideas to customer service and digital innovation while learning the trade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
              Our Achievements
            </h3>
            <p className="body-text text-xl text-gray-100">
              Nearly three decades of excellence in Southern California
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow mb-2">500+</div>
              <p className="text-sm text-gray-200">5-Star Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow mb-2">29</div>
              <p className="text-sm text-gray-200">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow mb-2">10K+</div>
              <p className="text-sm text-gray-200">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow mb-2">3</div>
              <p className="text-sm text-gray-200">Counties Served</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="retro-badge">BBB A+ Rating</div>
              <div className="retro-badge">IWCA Certified</div>
              <div className="retro-badge">Licensed & Insured</div>
              <div className="retro-badge">PWNA Member</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4">
            Become Part of Our Story
          </h3>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-3xl mx-auto">
            Experience the difference that three decades of expertise and old-school values can make. Join thousands of satisfied customers across Orange County, Los Angeles, and San Diego.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button variant="retro-navy" size="lg" className="text-lg px-8 py-4">
                Get Your Free Quote
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-navy-600">
              ✨ <strong>Family Promise:</strong> We're not satisfied until you're completely happy with our work!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
