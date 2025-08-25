import { notFound } from "next/navigation"
import { getServiceSEO } from "@/lib/seo"
import { getServiceSchema } from "@/lib/schema"
import { SERVICES, BUSINESS_INFO } from "@/lib/constants"
import GoogleReviews from "@/components/GoogleReviews"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

import { 
  CheckCircle, 
  Star, 
  Phone, 
  Clock, 
  Shield, 
  Award,
  ArrowRight,
  MapPin
} from "lucide-react"
// import Breadcrumbs, { generateBreadcrumbs } from "@/components/Breadcrumbs"
// import RelatedContent from "@/components/RelatedContent"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = SERVICES.find(s => s.id === params.slug)
  if (!service) return {}
  
  return getServiceSEO(params.slug)
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find(s => s.id === params.slug)
  
  if (!service) {
    notFound()
  }

  const serviceSchema = getServiceSchema(service.id)
  // const breadcrumbs = generateBreadcrumbs('service', { 
  //   serviceName: service.name, 
  //   slug: service.id 
  // })

  // Get related services - prioritize same category, then others, show up to 6 services
  const sameCategory = SERVICES.filter(s => s.id !== service.id && s.category === service.category)
  const otherServices = SERVICES.filter(s => s.id !== service.id && s.category !== service.category)
  const relatedServices = [...sameCategory, ...otherServices].slice(0, 6)

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          {/* <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} className="text-gray-300" />
          </div> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>

              <div className="retro-badge mb-6">
                {service.category === 'cleaning' ? 'Core Service' : 
                 service.category === 'specialty' ? 'Specialty Service' : 
                 service.category === 'maintenance' ? 'Maintenance Service' : 
                 service.category === 'commercial' ? 'Commercial Service' : 'Professional Service'}
              </div>
              
              <h1 className="heading-decorative text-5xl md:text-6xl text-yellow mb-4">
                {service.name}
              </h1>
              
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6">
                {service.shortDescription}
              </h2>
              
              <p className="body-text text-xl text-gray-100 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>100% Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Free Estimates</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-quote">
                  <Button variant="retro" size="lg" className="text-lg px-8 py-4">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Image */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {service.id === 'window-cleaning' ? (
                    <video
                      src="/window-cleaning-hero.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : service.id === 'solar-panel-cleaning' ? (
                    <video
                      src="/solar-panel-cleaning-hero.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : service.id === 'pressure-washing' ? (
                    <video
                      src="/pressure-washing-hero.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : service.id === 'gutter-cleaning' ? (
                    <Image
                      src="/gutter-cleaning-hero.jpg"
                      alt="Professional gutter cleaning service showing debris removal and maintenance"
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : service.id === 'commercial-cleaning' ? (
                    <Image
                      src="/commercial-cleaning-hero.jpg"
                      alt="Professional commercial cleaning service for offices and business facilities"
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : service.id === 'post-construction-cleanup' ? (
                    <Image
                      src="/Post-Construction%20Cleanup-hero.jpeg"
                      alt="Professional post-construction cleanup service showing debris removal and site cleaning"
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <p className="font-bold">Professional {service.name}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Professional {service.name}</p>
                  <p className="text-sm text-gray-600">Serving {BUSINESS_INFO.serviceAreas.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* What's Included */}
              <Card className="retro-card mb-8">
                <CardHeader>
                  <CardTitle className="heading-primary text-2xl text-navy">
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="body-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="retro-card mb-8">
                <CardHeader>
                  <CardTitle className="heading-primary text-2xl text-navy">
                    Our Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">Free Consultation & Quote</h4>
                        <p className="body-text text-gray-700 text-sm">We assess your property and provide a detailed, no-obligation estimate.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">Professional Service</h4>
                        <p className="body-text text-gray-700 text-sm">Our experienced team arrives on time with professional equipment and eco-friendly products.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">Quality Inspection</h4>
                        <p className="body-text text-gray-700 text-sm">We perform a thorough quality check to ensure you're completely satisfied with the results.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">Follow-Up & Maintenance</h4>
                        <p className="body-text text-gray-700 text-sm">We provide maintenance tips and schedule follow-up services to keep your property looking its best.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Service Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="bg-yellow text-navy px-4 py-2 rounded-lg font-bold text-center">
                      Get Custom Quote
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Duration</span>
                    <span className="font-bold text-navy">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Service Areas</span>
                    <span className="font-bold text-navy text-right text-sm">OC, LA, SD</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link href="/get-a-quote">
                      <Button variant="retro" className="w-full mb-3">
                        Get Free Quote
                      </Button>
                    </Link>
                    <Link href={`tel:${BUSINESS_INFO.phone}`}>
                      <Button variant="retro-navy" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call {BUSINESS_INFO.phone}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Why Choose Shimmer Shine?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-yellow" />
                    <span className="text-sm">Professional since 1995</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow" />
                    <span className="text-sm">500+ 5-star reviews</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-yellow" />
                    <span className="text-sm">Licensed & insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-yellow" />
                    <span className="text-sm">Same-day service available</span>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {BUSINESS_INFO.serviceAreas.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-yellow" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews 
        maxReviews={2} 
        compact={true} 
        sectionClassName="bg-gray-50"
        headerTitle="What Our Customers Say"
      />

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="heading-primary text-3xl mb-4">
                Related Services
              </h3>
              <p className="body-text text-gray-600">
                Complete your property maintenance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <Card key={relatedService.id} className="retro-card hover:shadow-retro-yellow transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {relatedService.iconType === "image" ? (
                        <Image
                          src={relatedService.icon}
                          alt={`${relatedService.name} icon`}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      ) : (
                        <div className="text-4xl">{relatedService.icon}</div>
                      )}
                    </div>
                    <CardTitle className="heading-primary text-xl">
                      {relatedService.name}
                    </CardTitle>
                    <p className="body-text text-gray-600 text-sm">
                      {relatedService.shortDescription}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="retro-badge mb-4">
                      {relatedService.priceRange}
                    </div>
                    <Link href={`/services/${relatedService.id}`}>
                      <Button variant="outline" className="w-full group-hover:bg-yellow group-hover:text-navy transition-colors">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
            Ready to Get Started?
          </h3>
          <p className="body-text text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience the Shimmer Shine difference with professional {service.name.toLowerCase()} services. Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-a-quote">
              <Button variant="retro" size="lg" className="text-lg px-8 py-4">
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
        </div>
      </section>

                {/* Related Content */}
          {/* <RelatedContent 
            currentPage="service" 
            currentSlug={service.id}
            serviceName={service.name}
          /> */}
    </>
  )
}
