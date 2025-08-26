import Hero from "@/components/Hero"
import FallSpecial from "@/components/FallSpecial"
import { SERVICES, BUSINESS_INFO, FAQ_DATA } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight, CheckCircle, Award, Shield, Clock, MapPin } from "lucide-react"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import GoogleReviews from "@/components/GoogleReviews"
// import RelatedContent from "@/components/RelatedContent"
import { getFAQSchema, getFallSpecialEventSchema, getServiceBundleSchema } from "@/lib/schema"

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4)
  const faqSchema = getFAQSchema(FAQ_DATA)
  const fallSpecialSchema = getFallSpecialEventSchema()
  const serviceBundleSchema = getServiceBundleSchema()

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      {/* Fall Special Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fallSpecialSchema),
        }}
      />
      
      {/* Service Bundle Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceBundleSchema),
        }}
      />
      <FallSpecial />
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 px-2" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Best Window Cleaners in Orange County
            </h2>
            <p className="body-text text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Top rated window cleaning Orange County with same day service. Licensed and insured residential and commercial window cleaning, pressure washing, and solar panel cleaning across Orange County, Los Angeles, and San Diego.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="retro-card hover:shadow-retro-yellow transition-all duration-300 group h-full flex flex-col">
                <CardHeader className="text-center p-4 sm:p-6 flex-grow">
                  <div className="mb-3 sm:mb-4 flex items-center justify-center">
                    {service.iconType === "image" ? (
                      <Image
                        src={service.icon}
                        alt={`Professional ${service.name} service icon - ${service.description.slice(0, 50)}...`}
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-16 sm:h-16"
                        loading="lazy"
                        sizes="(max-width: 640px) 48px, 64px"
                      />
                    ) : (
                      <div className="text-4xl sm:text-5xl">{service.icon}</div>
                    )}
                  </div>
                  <CardTitle className="heading-primary text-base sm:text-lg md:text-xl mb-2 px-2">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="body-text text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center p-4 sm:p-6 pt-0 mt-auto">
                  <div className="space-y-3">
                    <div className="retro-badge text-xs sm:text-sm">
                      Get Custom Quote
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full group-hover:bg-yellow group-hover:text-navy transition-colors text-xs py-2 px-2 min-h-[44px] leading-tight">
                        <span className="text-center break-words hyphens-auto overflow-hidden">
                          {service.id === 'window-cleaning' && (
                            <>
                              <span className="hidden lg:inline">Professional Window Cleaning</span>
                              <span className="lg:hidden">Window Cleaning</span>
                            </>
                          )}
                          {service.id === 'pressure-washing' && (
                            <>
                              <span className="hidden lg:inline">Best Pressure Washing</span>
                              <span className="lg:hidden">Pressure Washing</span>
                            </>
                          )}
                          {service.id === 'solar-panel-cleaning' && (
                            <>
                              <span className="hidden lg:inline">Solar Panel Cleaning</span>
                              <span className="lg:hidden">Solar Cleaning</span>
                            </>
                          )}
                          {service.id === 'gutter-cleaning' && (
                            <>
                              <span className="hidden lg:inline">Gutter Cleaning Services</span>
                              <span className="lg:hidden">Gutter Cleaning</span>
                            </>
                          )}
                          {service.id === 'post-construction-cleanup' && (
                            <>
                              <span className="hidden lg:inline">Post Construction Cleanup</span>
                              <span className="lg:hidden">Post Construction</span>
                            </>
                          )}
                          {service.id === 'commercial-cleaning' && (
                            <>
                              <span className="hidden lg:inline">Commercial Cleaning</span>
                              <span className="lg:hidden">Commercial Clean</span>
                            </>
                          )}
                        </span>
                        <ArrowRight className="h-3 w-3 ml-1 flex-shrink-0" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="retro" size="lg">
                View All Orange County Cleaning Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-primary text-3xl sm:text-4xl md:text-5xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              See The Difference
            </h2>
            <p className="body-text text-lg sm:text-xl text-gray-600">
              Real results from our professional cleaning services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="polaroid-frame">
              <div className="relative h-64 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/window-cleaning-before-after.png"
                  alt="Window Cleaning Before and After in Newport Beach, CA - Professional residential window cleaning service showing dramatic improvement from dirty to crystal clear windows by Shimmer Shine Property Detailing"
                  title="Newport Beach Window Cleaning Results | Shimmer Shine Property Detailing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={true}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                  <p className="font-bold text-center text-sm sm:text-base">Window Cleaning - Newport Beach, CA</p>
                  <p className="text-xs text-center opacity-90">Professional before & after results</p>
                </div>
              </div>
            </div>
            <div className="polaroid-frame">
              <div className="relative h-64 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/pressure-washing-before-after.png"
                  alt="Concrete Pressure Washing Before and After in Anaheim Hills, CA - Professional driveway and concrete cleaning service showing transformation from stained to spotless concrete by Shimmer Shine Property Detailing"
                  title="Anaheim Hills Pressure Washing Results | Shimmer Shine Property Detailing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                  <p className="font-bold text-center text-sm sm:text-base">Pressure Washing - Anaheim Hills, CA</p>
                  <p className="text-xs text-center opacity-90">Concrete restoration results</p>
                </div>
              </div>
            </div>
            <div className="polaroid-frame">
              <div className="relative h-64 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/Post construction cleanup.jpg"
                  alt="Post-Construction Cleanup Before and After in Orange County, CA - Professional construction site cleaning service showing transformation from construction debris to spotless property by Shimmer Shine Property Detailing"
                  title="Orange County Post-Construction Cleanup Results | Shimmer Shine Property Detailing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                  <p className="font-bold text-center text-sm sm:text-base">Post-Construction Cleanup - Orange County, CA</p>
                  <p className="text-xs text-center opacity-90">Professional construction site cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Intent Keywords Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Commercial Cleaning Near Me Orange County
            </h2>
            <p className="body-text text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
              Looking for commercial cleaning near me Orange County or business services? We provide office cleaning services Orange County with B2B contract solutions. Our services include recurring commercial cleaning Orange County, medical office cleaning Orange County, restaurant cleaning services Orange County, and commercial janitorial services Orange County with professional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">B2B Contracts</h3>
              <p className="body-text text-sm">Commercial cleaning contracts Orange County with recurring service</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">After Hours Service</h3>
              <p className="body-text text-sm">After hours commercial cleaning Orange County available</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">Free Estimates</h3>
              <p className="body-text text-sm">Commercial cleaning estimate Orange County in 24 hours</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">Licensed & Insured</h3>
              <p className="body-text text-sm">Licensed commercial cleaning Orange County with full B2B coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-decorative text-3xl sm:text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '6px 6px 12px rgba(0,0,0,1), 3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>
              Why Choose Shimmer Shine?
            </h2>
            <p className="body-text text-lg sm:text-xl text-gray-100">
              Best window cleaners in Orange County with three decades of experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-lg sm:text-xl text-white">Professional Excellence</h3>
              <p className="body-text text-sm sm:text-base text-gray-200">
                Three decades of window cleaning expertise with old-school values and modern techniques.
              </p>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-lg sm:text-xl text-white">Licensed & Insured</h3>
              <p className="body-text text-sm sm:text-base text-gray-200">
                Fully licensed, bonded, and insured for your complete peace of mind and protection.
              </p>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-lg sm:text-xl text-white">Reliable Service</h3>
              <p className="body-text text-sm sm:text-base text-gray-200">
                On-time arrivals, consistent quality, and same-day service available when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews maxReviews={3} />



      {/* Local SEO Keywords Section */}
      <section className="hidden lg:block py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="heading-decorative text-3xl md:text-4xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
              Professional Services Throughout Southern California
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              From window cleaning in Costa Mesa to pressure washing in Beverly Hills, we serve over 139 cities with same-day availability and guaranteed results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-yellow mb-3">Window Cleaning</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Window cleaning Costa Mesa</li>
                <li>• Window cleaning Newport Beach</li>
                <li>• Window cleaning Beverly Hills</li>
                <li>• Window cleaning La Jolla</li>
                <li>• Residential window cleaning</li>
                <li>• Commercial window cleaning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow mb-3">Pressure Washing</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Pressure washing Los Angeles</li>
                <li>• Driveway cleaning Orange County</li>
                <li>• Patio cleaning San Diego</li>
                <li>• House washing services</li>
                <li>• Concrete cleaning</li>
                <li>• Deck cleaning services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow mb-3">Gutter Cleaning</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Gutter cleaning San Diego</li>
                <li>• Gutter cleaning Irvine</li>
                <li>• Gutter cleaning Pasadena</li>
                <li>• Gutter repair services</li>
                <li>• Downspout cleaning</li>
                <li>• Gutter maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow mb-3">Solar Panel Cleaning</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Solar cleaning Orange County</li>
                <li>• Solar cleaning Los Angeles</li>
                <li>• Solar panel maintenance</li>
                <li>• Solar efficiency optimization</li>
                <li>• Residential solar cleaning</li>
                <li>• Commercial solar cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

                {/* Related Content */}
          {/* <RelatedContent currentPage="home" /> */}

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
            Ready for That Classic Shine?
          </h2>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Orange County, Los Angeles, and San Diego. Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-a-quote">
              <Button variant="retro-navy" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-navy-600">
              <strong>Limited Time:</strong> 10% off your first service when you book this month!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
