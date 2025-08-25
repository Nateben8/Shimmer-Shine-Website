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
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="retro-badge mb-6">
                Professional Since {BUSINESS_INFO.foundedYear}
              </div>
              
              <h1 className="heading-decorative text-5xl md:text-7xl text-yellow mb-4">
                About Us
              </h1>
              
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6">
                From Pressure Washing to Full Property Detailing
              </h2>
              
              <p className="body-text text-xl text-gray-100 leading-relaxed mb-6">
                At Shimmer Shine Property Detailing, we are dedicated to delivering crystal-clear views and exceptional property maintenance services with a commitment to 100% customer satisfaction. With over four years of professional experience serving the vibrant communities of Los Angeles County, Orange County, and San Diego County, we have honed our expertise to ensure every project sparkles with quality.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow">4+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow">500+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow">3</div>
                  <div className="text-sm text-gray-300">Counties Served</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="retro-badge text-xs">Licensed & Insured</div>
                <div className="retro-badge text-xs">Eco-Friendly</div>
                <div className="retro-badge text-xs">500+ 5-Star Reviews</div>
              </div>
            </div>

            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/About us image.png"
                    alt="Shimmer Shine Property Detailing - Professional Window Cleaning and Pressure Washing Team in Orange County, Los Angeles, and San Diego"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                    <p className="font-bold text-center">Professional Property Detailing Services</p>
                    <p className="text-sm text-center opacity-90">Window Cleaning • Pressure Washing • Property Maintenance</p>
                  </div>
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Shimmer Shine Property Detailing - Serving Southern California Since {BUSINESS_INFO.foundedYear}</p>
                  <p className="text-sm text-gray-600">Professional Window Cleaning & Property Detailing Services</p>
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
                Our Growth Story
              </h3>
              <p className="body-text text-xl text-gray-600 max-w-3xl mx-auto">
                From pressure washing specialists to Southern California's comprehensive property detailing service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="retro-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="heading-primary text-xl text-navy">2021</CardTitle>
                  <CardDescription>The Beginning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-sm">
                    Shimmer Shine Property Detailing was founded in 2021 with a focus on professional pressure washing services. We started with a commitment to quality and reliability in Orange County.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="heading-primary text-xl text-navy">2022-2023</CardTitle>
                  <CardDescription>Rapid Expansion</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-sm">
                    Quickly expanded our services to include window cleaning, solar panel cleaning, gutter maintenance, and comprehensive property detailing across Los Angeles and San Diego counties.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="heading-primary text-xl text-navy">2025</CardTitle>
                  <CardDescription>Established Leader</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-sm">
                    Now established as a trusted name with 500+ five-star reviews, serving hundreds of satisfied residential and commercial clients across Southern California.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Story Content */}
            <div className="vintage-border">
              <div className="prose prose-lg max-w-none">
                <h4 className="heading-primary text-2xl text-navy mb-6">Our Expertise in Professional Window Cleaning & Property Detailing</h4>
                
                <p className="body-text text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Founded by Local Entrepreneurs:</strong> Shimmer Shine Property Detailing was founded by passionate local entrepreneurs committed to providing superior window cleaning, pressure washing, and comprehensive property maintenance services throughout Southern California. Our team specializes in handling all types of cleaning projects, from residential homes in Costa Mesa and Newport Beach to high-rise commercial buildings in downtown Los Angeles and San Diego.
                </p>

                <p className="body-text text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Advanced Equipment & Eco-Friendly Solutions:</strong> We use only the best professional-grade equipment and environmentally safe cleaning solutions to achieve outstanding results without compromising the health of our clients or the environment. Our state-of-the-art pressure washing systems, professional window cleaning tools, and eco-friendly detergents ensure superior cleaning performance while protecting your property and surroundings.
                </p>

                <h4 className="heading-primary text-xl text-navy mb-4 mt-8">Personalized Service Tailored to Your Needs</h4>
                
                <p className="body-text text-lg text-gray-700 leading-relaxed mb-6">
                  Understanding that each client has unique requirements, we offer customized cleaning plans tailored to the specific needs of your residential or commercial property. Whether you're preparing for a special event, conducting seasonal property maintenance, managing a commercial building, or need regular window cleaning services, our professional team approaches each task with meticulous care and attention to detail.
                </p>

                <h4 className="heading-primary text-xl text-navy mb-4 mt-8">Why Choose Shimmer Shine Property Detailing?</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="body-text text-lg text-gray-700 leading-relaxed mb-4">
                      <strong>Unmatched Cleanliness:</strong> We don't just clean; we transform your spaces through meticulous attention to detail, leaving your windows streak-free and spotless, your driveways and patios restored, and your entire property sparkling with renewed clarity and curb appeal.
                    </p>
                    
                    <p className="body-text text-lg text-gray-700 leading-relaxed mb-4">
                      <strong>Reliability & Punctuality:</strong> Our clients throughout Orange County, Los Angeles County, and San Diego County trust us for our punctuality, dependability, and the consistent quality of our professional cleaning services.
                    </p>
                  </div>
                  
                  <div>
                    <p className="body-text text-lg text-gray-700 leading-relaxed mb-4">
                      <strong>Customer-Centric Approach:</strong> We listen to your specific needs and are always ready to go the extra mile to exceed your expectations. Your complete satisfaction isn't just a goal; it's our guarantee backed by our 100% satisfaction promise.
                    </p>
                    
                    <p className="body-text text-lg text-gray-700 leading-relaxed mb-4">
                      <strong>Licensed & Insured Professionals:</strong> All our technicians are fully licensed, insured, and trained in the latest window cleaning, pressure washing, and property maintenance techniques to ensure safe, professional service every time.
                    </p>
                  </div>
                </div>

                <p className="body-text text-lg text-gray-700 leading-relaxed text-center bg-gray-50 p-6 rounded-lg">
                  <strong>At Shimmer Shine Property Detailing, we're not just cleaning windows and properties; we're enhancing your view of the world and protecting your valuable investments.</strong> Trust us to bring a new level of clarity, brightness, and professional care to your home or business throughout Southern California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              What Sets Us Apart
            </h3>
            <p className="body-text text-xl text-gray-600 max-w-3xl mx-auto">
              Our focused experience has taught us what truly matters in property detailing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Heart className="h-10 w-10 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Customer Excellence</h4>
              <p className="body-text text-gray-600">
                Every client receives personalized attention and service that exceeds expectations. Your satisfaction drives everything we do.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-10 w-10 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Professional Mastery</h4>
              <p className="body-text text-gray-600">
                Specialized expertise in pressure washing, window cleaning, and comprehensive property detailing with consistently superior results.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-10 w-10 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Trust & Reliability</h4>
              <p className="body-text text-gray-600">
                Licensed, insured, and bonded with transparent pricing. Punctual service and dependable results you can count on.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="h-10 w-10 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Quality Guarantee</h4>
              <p className="body-text text-gray-600">
                We stand behind our work with comprehensive guarantees. If you're not 100% satisfied, we'll make it right.
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="heading-primary text-2xl text-center text-navy mb-8">Why Choose Shimmer Shine?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-yellow mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-navy mb-1">Eco-Friendly Solutions</h5>
                  <p className="text-sm text-gray-600">Environmentally safe products that protect your family and property</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-yellow mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-navy mb-1">Advanced Equipment</h5>
                  <p className="text-sm text-gray-600">State-of-the-art tools and techniques for superior results</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-yellow mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-navy mb-1">Flexible Scheduling</h5>
                  <p className="text-sm text-gray-600">Convenient appointment times that work with your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Meet Our Founders
            </h3>
            <p className="body-text text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated entrepreneurs behind Shimmer Shine Property Detailing's success in Southern California
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <Card className="retro-card h-full">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-navy rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className="text-4xl font-bold text-yellow">NB</div>
                </div>
                <CardTitle className="heading-primary text-2xl text-navy mb-2">
                  Nathan Benavidez
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-600">
                  Co-Founder & Operations Director
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="body-text text-gray-700 leading-relaxed mb-4">
                  Nathan co-founded Shimmer Shine Property Detailing with a mission to bring professionalism, reliability, and top-tier window cleaning and pressure washing services to every home and business throughout Orange County, Los Angeles County, and San Diego County.
                </p>
                <p className="body-text text-gray-700 leading-relaxed mb-4">
                  Whether he's out securing new commercial contracts, personally handling residential window cleaning projects, or ensuring every job runs smoothly from start to finish, Nathan is fully hands-on and dedicated to delivering results that consistently exceed customer expectations.
                </p>
                <p className="body-text text-gray-700 leading-relaxed">
                  His commitment to quality and customer satisfaction has been instrumental in building Shimmer Shine's reputation as Southern California's trusted property detailing service with over 500 five-star reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card h-full">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-navy rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className="text-4xl font-bold text-yellow">RA</div>
                </div>
                <CardTitle className="heading-primary text-2xl text-navy mb-2">
                  Robert Alvarado
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-600">
                  Co-Founder & Customer Relations Director
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="body-text text-gray-700 leading-relaxed mb-4">
                  Robert is equally involved in every aspect of Shimmer Shine Property Detailing's operations, from direct customer outreach and sales to hands-on execution of high-quality window cleaning, pressure washing, and comprehensive property maintenance services.
                </p>
                <p className="body-text text-gray-700 leading-relaxed mb-4">
                  He takes immense pride in building strong, lasting relationships with residential and commercial customers throughout Southern California, ensuring that every interaction reflects the company's commitment to exceptional service and attention to detail.
                </p>
                <p className="body-text text-gray-700 leading-relaxed">
                  With his sharp eye for detail, unwavering commitment to hard work, and dedication to customer satisfaction, Robert helps keep Shimmer Shine Property Detailing operating at peak performance while maintaining the highest standards of professional service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Founders' Vision */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h4 className="heading-primary text-2xl text-center text-navy mb-6">Our Shared Vision</h4>
            <p className="body-text text-lg text-gray-700 leading-relaxed text-center mb-6">
              Together, Nathan and Robert have built Shimmer Shine Property Detailing on the foundation of exceptional customer service, professional expertise, and unwavering commitment to quality. Their hands-on approach ensures that every window cleaning, pressure washing, and property maintenance project meets the highest standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <CheckCircle className="h-8 w-8 text-yellow mx-auto mb-3" />
                <h5 className="font-semibold text-navy mb-2">Personal Involvement</h5>
                <p className="text-sm text-gray-600">Both founders remain actively involved in daily operations and customer service</p>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-yellow mx-auto mb-3" />
                <h5 className="font-semibold text-navy mb-2">Quality Commitment</h5>
                <p className="text-sm text-gray-600">Every job is completed with the same attention to detail and professional standards</p>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-yellow mx-auto mb-3" />
                <h5 className="font-semibold text-navy mb-2">Customer Focus</h5>
                <p className="text-sm text-gray-600">Building lasting relationships through exceptional service and reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Our Professional Team
            </h3>
            <p className="body-text text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional property detailing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="retro-card text-center h-full">
              <CardHeader>
                <div className="w-24 h-24 bg-yellow rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="h-12 w-12 text-navy" />
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Certified Technicians
                </CardTitle>
                <CardDescription>Licensed & Insured Professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="body-text text-sm text-gray-700">
                  Our team consists of fully licensed, insured, and trained professionals with years of experience in property detailing. Each technician undergoes continuous training to maintain our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card text-center h-full">
              <CardHeader>
                <div className="w-24 h-24 bg-yellow rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Award className="h-12 w-12 text-navy" />
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Quality Specialists
                </CardTitle>
                <CardDescription>Attention to Every Detail</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="body-text text-sm text-gray-700">
                  Our quality specialists ensure every job meets our exacting standards. From initial assessment to final inspection, we maintain consistency across all services and locations.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card text-center h-full">
              <CardHeader>
                <div className="w-24 h-24 bg-yellow rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Heart className="h-12 w-12 text-navy" />
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Customer Care Team
                </CardTitle>
                <CardDescription>Dedicated to Your Satisfaction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="body-text text-sm text-gray-700">
                  Our customer care team handles scheduling, follow-ups, and ensures your complete satisfaction. We're here to make your experience seamless from first contact to project completion.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Stats */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h4 className="heading-primary text-2xl text-center text-navy mb-8">Our Team by the Numbers</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow mb-2">15+</div>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow mb-2">10+</div>
                <p className="text-sm text-gray-600">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow mb-2">100%</div>
                <p className="text-sm text-gray-600">Licensed & Insured</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow mb-2">24/7</div>
                <p className="text-sm text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
              Proven Excellence
            </h3>
            <p className="body-text text-xl text-gray-100 max-w-3xl mx-auto">
              Rapid growth and superior service across Southern California since 2021
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow mb-3">4+</div>
              <p className="text-lg text-gray-200 font-semibold">Years of Excellence</p>
              <p className="text-sm text-gray-300">Since 2021</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow mb-3">500+</div>
              <p className="text-lg text-gray-200 font-semibold">Satisfied Customers</p>
              <p className="text-sm text-gray-300">And Growing</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow mb-3">500+</div>
              <p className="text-lg text-gray-200 font-semibold">5-Star Reviews</p>
              <p className="text-sm text-gray-300">Verified Ratings</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow mb-3">3</div>
              <p className="text-lg text-gray-200 font-semibold">Counties Served</p>
              <p className="text-sm text-gray-300">Southern California</p>
            </div>
          </div>

          {/* Certifications and Badges */}
          <div className="bg-navy-800 rounded-lg p-8">
            <h4 className="heading-primary text-2xl text-center text-white mb-8">Professional Certifications</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Shield className="h-12 w-12 text-yellow mx-auto" />
                <div className="retro-badge text-xs">Licensed & Insured</div>
              </div>
              <div className="space-y-2">
                <CheckCircle className="h-12 w-12 text-yellow mx-auto" />
                <div className="retro-badge text-xs">Eco-Friendly Certified</div>
              </div>
              <div className="space-y-2">
                <Award className="h-12 w-12 text-yellow mx-auto" />
                <div className="retro-badge text-xs">Quality Guaranteed</div>
              </div>
              <div className="space-y-2">
                <Heart className="h-12 w-12 text-yellow mx-auto" />
                <div className="retro-badge text-xs">Customer Focused</div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 text-center">
            <h4 className="heading-primary text-xl text-white mb-6">Proudly Serving</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="retro-badge">Orange County</div>
              <div className="retro-badge">Los Angeles County</div>
              <div className="retro-badge">San Diego County</div>
              <div className="retro-badge">Residential Properties</div>
              <div className="retro-badge">Commercial Buildings</div>
              <div className="retro-badge">Same-Day Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-4xl mx-auto">
            Contact us today to experience the difference with Shimmer Shine Property Detailing, where every window cleaning, pressure washing, and property maintenance job is completed with care, precision, and a smile. Join hundreds of satisfied residential and commercial customers throughout Orange County, Los Angeles County, and San Diego County who trust us for exceptional results and 100% customer satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href="/get-a-quote">
              <Button variant="retro-navy" size="lg" className="text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all">
                Get Your Free Quote Today
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-navy" />
              <span className="text-navy font-semibold">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-navy" />
              <span className="text-navy font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-navy" />
              <span className="text-navy font-semibold">Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
