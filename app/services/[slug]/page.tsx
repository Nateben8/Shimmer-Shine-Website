import { notFound } from "next/navigation"
import { getServiceSEO } from "@/lib/seo"
import { getServiceSchema, getFAQSchema } from "@/lib/schema"
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
  
  // FAQ data for each service
  const serviceFAQs = {
    'window-cleaning': [
      {
        question: `How much does professional window cleaning cost in Orange County?`,
        answer: `Professional window cleaning costs vary based on several factors including window size, accessibility, frequency of service, and additional services like screen cleaning. We provide free estimates with transparent pricing tailored to your specific needs.`
      },
      {
        question: `How often should I have my windows professionally cleaned?`,
        answer: `For residential properties, we recommend professional window cleaning every 2-3 months, or quarterly for optimal results. Commercial buildings benefit from monthly cleaning to maintain professional appearance. Properties near the coast may need more frequent cleaning due to salt air deposits.`
      },
      {
        question: `Do you clean both interior and exterior windows?`,
        answer: `Yes! Our comprehensive window cleaning service includes both interior and exterior window cleaning, screen cleaning, sill wiping, and frame cleaning. We use professional-grade equipment and eco-friendly solutions for streak-free, crystal-clear results.`
      },
      {
        question: `Are you licensed and insured for window cleaning?`,
        answer: `Absolutely! We are fully licensed and insured with comprehensive liability coverage. Our team is trained in safety protocols and uses professional equipment. We're bonded for your peace of mind and protection.`
      }
    ],
    'pressure-washing': [
      {
        question: `How much does pressure washing cost in Orange County?`,
        answer: `Pressure washing costs in Orange County range from $150-400 for residential driveways and $200-800 for commercial properties. Pricing depends on surface area, cleaning difficulty, and additional services. We provide free estimates with competitive, transparent pricing.`
      },
      {
        question: `What surfaces can you pressure wash?`,
        answer: `We safely pressure wash driveways, sidewalks, patios, decks, building exteriors, parking lots, and more. Our team uses appropriate pressure settings for each surface type - from delicate wood decks to tough concrete surfaces.`
      },
      {
        question: `How often should I pressure wash my property?`,
        answer: `Most residential properties benefit from annual pressure washing, while commercial properties may need quarterly service. High-traffic areas and properties with heavy dirt, mold, or staining may require more frequent cleaning.`
      },
      {
        question: `Do you use eco-friendly cleaning solutions?`,
        answer: `Yes! We use biodegradable, eco-friendly cleaning solutions that are safe for plants, pets, and the environment. Our cleaning methods are effective yet gentle on your property and surrounding landscape.`
      }
    ],
    'solar-panel-cleaning': [
      {
        question: `How much does solar panel cleaning cost?`,
        answer: `Solar panel cleaning typically costs $150-300 for residential systems and $200-600 for commercial installations. Pricing depends on system size, accessibility, and cleaning frequency. Regular cleaning can improve energy efficiency by 15-25%.`
      },
      {
        question: `How often should solar panels be cleaned?`,
        answer: `In Orange County, we recommend cleaning solar panels every 3-6 months due to dust, pollen, and coastal salt air. Properties near construction sites or heavy traffic may need more frequent cleaning to maintain optimal efficiency.`
      },
      {
        question: `Will cleaning damage my solar panels or void the warranty?`,
        answer: `No! We use gentle, warranty-safe cleaning methods specifically designed for solar panels. Our deionized water system and soft-bristle brushes safely remove dirt and debris without scratching or damaging panels.`
      },
      {
        question: `How much can clean solar panels improve energy production?`,
        answer: `Clean solar panels can improve energy production by 15-25% compared to dirty panels. In Orange County's dusty environment, regular cleaning is essential for maintaining optimal solar system performance and maximizing your investment.`
      }
    ],
    'gutter-cleaning': [
      {
        question: `How much does gutter cleaning cost in Orange County?`,
        answer: `Gutter cleaning in Orange County typically costs $150-400 for residential properties and $200-800 for commercial buildings. Our affordable gutter cleaning includes downspout cleaning and debris removal. We provide free quotes with transparent pricing and seasonal discounts.`
      },
      {
        question: `Do you provide same day gutter cleaning service?`,
        answer: `Yes! Our same day gutter cleaning Orange County is available for urgent needs and emergency gutter cleaning situations. As gutter cleaning near me Orange County specialists, we understand the importance of immediate service for clogged gutters and storm damage.`
      },
      {
        question: `What's included in professional gutter cleaning?`,
        answer: `Our professional gutter cleaning includes leaf removal, downspout cleaning, clogged gutter cleaning, and gutter inspection. We provide seasonal gutter cleaning with fall and spring maintenance programs for optimal water flow protection.`
      },
      {
        question: `Do you offer seasonal gutter cleaning programs?`,
        answer: `Yes! Our seasonal gutter cleaning programs include fall leaf removal and spring inspection services. We offer annual gutter cleaning contracts and routine gutter maintenance. Our programs are perfect for rain gutter cleaning preparation.`
      }
    ],
    'commercial-cleaning': [
      {
        question: `How much does commercial cleaning cost in Orange County?`,
        answer: `Commercial cleaning costs typically range from $0.05-$0.15 per square foot for office cleaning services. Our commercial cleaning contracts provide volume discounts for recurring commercial cleaning. We offer commercial cleaning estimates with transparent B2B pricing.`
      },
      {
        question: `Do you provide medical office cleaning?`,
        answer: `Yes! Our medical office cleaning services meet healthcare compliance standards with OSHA protocols. We provide dental office cleaning and specialized sanitization for healthcare facilities. Our team is trained in medical facility cleaning requirements and disinfecting services.`
      },
      {
        question: `What industries do you serve for commercial cleaning?`,
        answer: `Our business cleaning services cover all industries: restaurant cleaning services, hotel cleaning services, retail store cleaning, warehouse cleaning services, school cleaning services, and gym cleaning services with industry-specific compliance.`
      },
      {
        question: `Do you offer after-hours commercial cleaning?`,
        answer: `Absolutely! Our after hours commercial cleaning services ensure minimal business disruption. We provide day porter services for ongoing maintenance and emergency commercial cleaning for urgent situations. Our flexible scheduling accommodates your business operations.`
      }
    ],
    'post-construction-cleanup': [
      {
        question: `How much does post-construction cleanup cost?`,
        answer: `Post-construction cleanup costs vary by project size and debris amount, typically ranging from $300-1,500 for residential projects and $500-3,000 for commercial construction. We provide detailed estimates based on square footage and cleanup requirements.`
      },
      {
        question: `What's included in post-construction cleanup?`,
        answer: `Our comprehensive post-construction cleanup includes debris removal, dust cleaning, window cleaning, floor cleaning, fixture cleaning, and final detailing. We handle everything from rough cleanup to final move-in ready preparation.`
      },
      {
        question: `How soon can you start post-construction cleanup?`,
        answer: `We typically provide post-construction cleanup within 24-48 hours of your call. Our team coordinates with contractors and project managers to ensure timely completion and move-in readiness.`
      },
      {
        question: `Do you handle hazardous material cleanup?`,
        answer: `We handle standard construction debris and dust cleanup. For hazardous materials like asbestos or lead paint, we work with certified specialists to ensure safe, compliant removal and disposal.`
      }
    ]
  }
  
  const faqSchema = getFAQSchema(serviceFAQs[service.id as keyof typeof serviceFAQs] || [])
  
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
              
              <h1 className="heading-decorative text-5xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                {service.name}
              </h1>
              
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
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
                      alt="Professional gutter cleaning Orange County - Licensed gutter cleaning service with debris removal, downspout cleaning, and gutter maintenance"
                      title="Best Gutter Cleaning Orange County - Same Day Service Available"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : service.id === 'commercial-cleaning' ? (
                    <Image
                      src="/commercial-cleaning-hero.jpg"
                      alt="Commercial cleaning Orange County - Professional office cleaning, facility maintenance, and business cleaning services"
                      title="Commercial Cleaning Services Orange County - Licensed & Insured"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : service.id === 'post-construction-cleanup' ? (
                    <Image
                      src="/Post-Construction%20Cleanup-hero.jpeg"
                      alt="Post construction cleanup Orange County - Professional construction site cleaning, debris removal, and move-in ready preparation"
                      title="Post Construction Cleanup Orange County - 24-48 Hour Response Time"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
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

              {/* SEO-Optimized Content Sections */}
              {service.id === 'window-cleaning' && (
                <>
                  {/* Window Cleaning Expertise Section */}
                <Card className="retro-card mb-8">
                  <CardHeader>
                    <CardTitle className="heading-primary text-2xl text-navy">
                        Professional Window Cleaning Orange County Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          As the <strong>best window cleaners in Orange County</strong>, we provide comprehensive <strong>residential window cleaning Orange County</strong> and <strong>commercial window cleaning Orange County</strong> services. Our <strong>same day window cleaning Orange County</strong> is available for urgent needs, and we offer <strong>free quote window cleaning Orange County</strong> with transparent pricing.
                        </p>
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>licensed window cleaning Orange County</strong> team specializes in <strong>Newport Beach window cleaning</strong>, <strong>Irvine window cleaning services</strong>, and <strong>Huntington Beach window cleaning</strong>. We provide <strong>affordable window cleaning Orange County</strong> with <strong>recurring window cleaning Orange County</strong> maintenance programs.
                        </p>
                        <h3 className="heading-primary text-xl text-navy mb-3">Specialized Window Cleaning Services</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Move in move out window cleaning Orange County</strong> - Perfect for real estate transitions</li>
                          <li><strong>Post remodel window cleaning Orange County</strong> - Construction cleanup specialists</li>
                          <li><strong>Real estate window cleaning Orange County</strong> - Enhance property presentation</li>
                          <li><strong>Emergency window cleaning Orange County</strong> - 24/7 urgent service available</li>
                          <li><strong>Luxury estate window cleaning Orange County</strong> - Premium residential service</li>
                        </ul>
                    </div>
                  </CardContent>
                </Card>

                  {/* Local Service Areas */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Local Window Cleaners Near Me Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>local window cleaners near me Orange County</strong> serve all major cities with <strong>professional window cleaning Orange County</strong> excellence. We're the <strong>top rated window cleaners Orange County</strong> with <strong>5 star window cleaning Orange County</strong> reviews.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-navy text-sm">Newport Beach</h4>
                            <p className="text-xs text-gray-600">Premium window cleaning</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-navy text-sm">Irvine</h4>
                            <p className="text-xs text-gray-600">Residential & commercial</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-navy text-sm">Huntington Beach</h4>
                            <p className="text-xs text-gray-600">Coastal window care</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-navy text-sm">Costa Mesa</h4>
                            <p className="text-xs text-gray-600">Same day service</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-navy text-sm">Anaheim</h4>
                            <p className="text-xs text-gray-600">Licensed & insured</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-navy text-sm">Santa Ana</h4>
                            <p className="text-xs text-gray-600">Affordable pricing</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'pressure-washing' && (
                <>
                  {/* Pressure Washing Expertise Section */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Professional Pressure Washing Orange County Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          As the <strong>best pressure washing Orange County</strong> company, we provide comprehensive <strong>residential pressure washing Orange County</strong> and <strong>commercial pressure washing Orange County</strong> services. Our <strong>same day pressure washing Orange County</strong> is available for urgent needs, and we offer <strong>pressure washing quotes Orange County</strong> with transparent pricing.
                        </p>
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>local pressure washing near me Orange County</strong> team specializes in <strong>driveway pressure washing Orange County</strong>, <strong>oil stain removal Orange County</strong>, and <strong>graffiti removal Orange County</strong>. We provide <strong>affordable pressure washing Orange County</strong> with professional results.
                        </p>
                        <h3 className="heading-primary text-xl text-navy mb-3">Specialized Pressure Washing Services</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Oil stain removal Orange County</strong> - Advanced degreasing techniques</li>
                          <li><strong>Graffiti removal Orange County</strong> - Vandalism cleanup specialists</li>
                          <li><strong>Mold removal pressure washing Orange County</strong> - Health-focused cleaning</li>
                          <li><strong>Emergency pressure washing Orange County</strong> - 24/7 urgent service</li>
                          <li><strong>Commercial storefront pressure washing</strong> - Business exterior cleaning</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Surface-Specific Services */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Surface-Specific Pressure Washing Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>professional pressure washing Orange County</strong> services cover all surfaces with specialized techniques for optimal results.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Concrete & Driveways</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Driveway pressure washing Orange County</li>
                              <li>• Oil stain removal Orange County</li>
                              <li>• Concrete restoration</li>
                              <li>• Sidewalk cleaning</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Building Exteriors</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Stucco pressure washing Orange County</li>
                              <li>• Siding pressure washing Orange County</li>
                              <li>• Commercial building cleaning</li>
                              <li>• Graffiti removal Orange County</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Outdoor Surfaces</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Pool deck pressure washing Orange County</li>
                              <li>• Patio cleaning</li>
                              <li>• Deck restoration</li>
                              <li>• Fence cleaning</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Specialized Cleaning</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Roof pressure washing Orange County</li>
                              <li>• Mold removal pressure washing</li>
                              <li>• Hard water stain removal</li>
                              <li>• Degreasing pressure washing</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'solar-panel-cleaning' && (
                <>
                  {/* Solar Panel Cleaning Expertise Section */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Professional Solar Panel Cleaning Orange County Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          As the <strong>best solar panel cleaners in Orange County</strong>, we provide comprehensive <strong>residential solar panel cleaning Orange County</strong> and <strong>commercial solar panel cleaning Orange County</strong> services. Our <strong>solar panel cleaning near me Orange County</strong> team specializes in <strong>safe solar panel cleaning Orange County</strong> using <strong>purified water Orange County</strong> techniques.
                        </p>
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>professional solar panel cleaning Orange County</strong> services can <strong>improve solar panel efficiency Orange County</strong> by up to 30% and <strong>increase solar panel output Orange County</strong>. We offer <strong>solar panel cleaning quotes Orange County</strong> with transparent pricing and <strong>same day solar panel cleaning Orange County</strong> for urgent needs.
                        </p>
                        <h3 className="heading-primary text-xl text-navy mb-3">Specialized Solar Panel Services</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Recurring solar panel cleaning Orange County</strong> - Monthly maintenance programs</li>
                          <li><strong>Monthly solar panel cleaning Orange County</strong> - Optimal efficiency schedules</li>
                          <li><strong>Solar farm cleaning Orange County</strong> - Large-scale commercial projects</li>
                          <li><strong>Industrial solar panel cleaning Orange County</strong> - B2B specialized service</li>
                          <li><strong>Rooftop solar cleaning Orange County</strong> - Residential and commercial rooftops</li>
                          <li><strong>Ground mount solar cleaning Orange County</strong> - Specialized equipment access</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Solar Panel Cleaning Methods */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Advanced Solar Panel Cleaning Methods Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>eco-friendly solar panel cleaning Orange County</strong> methods ensure maximum efficiency while protecting your investment. We use <strong>waterless solar panel cleaning Orange County</strong> techniques when appropriate and <strong>solar panel cleaning with purified water Orange County</strong> for optimal results.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Efficiency Restoration</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Solar panel dirt removal Orange County</li>
                              <li>• Solar panel dust removal Orange County</li>
                              <li>• Improve solar panel efficiency Orange County</li>
                              <li>• Increase solar panel output Orange County</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Maintenance Programs</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Solar panel maintenance Orange County</li>
                              <li>• Solar panel inspection Orange County</li>
                              <li>• Solar energy panel maintenance Orange County</li>
                              <li>• Recurring solar panel cleaning Orange County</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Commercial Services</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Solar panel cleaning contracts Orange County</li>
                              <li>• HOA solar panel cleaning Orange County</li>
                              <li>• Apartment solar panel cleaning Orange County</li>
                              <li>• Industrial solar panel cleaning Orange County</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Premium Markets</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Irvine solar panel cleaning</li>
                              <li>• Newport Beach solar panel cleaning</li>
                              <li>• Laguna Beach solar panel cleaning</li>
                              <li>• Emergency solar panel cleaning Orange County</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Solar Panel Performance Benefits */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Solar Panel Performance Benefits Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Regular <strong>solar panel cleaning Orange County</strong> can restore up to 30% of your system's efficiency. Our <strong>affordable solar panel cleaning Orange County</strong> services provide exceptional ROI through improved energy production.
                        </p>
                        <div className="bg-yellow/10 border border-yellow/20 rounded-lg p-6 mb-4">
                          <h4 className="font-bold text-navy mb-3">Performance Statistics</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-navy">30%</div>
                              <div className="text-sm text-gray-600">Efficiency Increase</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">$500+</div>
                              <div className="text-sm text-gray-600">Annual Savings</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">6-12</div>
                              <div className="text-sm text-gray-600">Months ROI</div>
                            </div>
                          </div>
                        </div>
                        <p className="body-text text-gray-700 leading-relaxed">
                          Our <strong>licensed solar panel cleaning Orange County</strong> team uses specialized equipment and techniques to ensure your solar investment operates at peak performance. Contact us for your <strong>solar panel cleaning estimate Orange County</strong> today!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'post-construction-cleanup' && (
                <>
                  {/* Post Construction Cleanup Expertise Section */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Professional Post Construction Cleanup Orange County Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          As the <strong>best post construction cleaners Orange County</strong>, we provide comprehensive <strong>residential post construction cleaning Orange County</strong> and <strong>commercial post construction cleanup Orange County</strong> services. Our <strong>local post construction cleaning near me Orange County</strong> team specializes in <strong>move in ready post construction cleaning Orange County</strong> with rapid response capabilities.
                        </p>
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>professional post construction cleaning Orange County</strong> services include <strong>dust removal after construction Orange County</strong>, <strong>debris removal post construction Orange County</strong>, and <strong>deep cleaning after renovation Orange County</strong>. We offer <strong>free quote post construction cleaning Orange County</strong> with transparent pricing and <strong>same day post construction cleanup Orange County</strong> for urgent deadlines.
                        </p>
                        <h3 className="heading-primary text-xl text-navy mb-3">Specialized Post Construction Services</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>New construction cleanup Orange County</strong> - Fresh build final cleaning</li>
                          <li><strong>Post renovation cleaning Orange County</strong> - Renovation aftermath restoration</li>
                          <li><strong>Final construction cleaning Orange County</strong> - Move-in ready preparation</li>
                          <li><strong>Emergency post construction cleaning Orange County</strong> - Urgent deadline service</li>
                          <li><strong>Detailed post construction cleaning Orange County</strong> - Comprehensive deep cleaning</li>
                          <li><strong>Construction site cleanup Orange County</strong> - Complete site restoration</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Commercial Post Construction Services */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Commercial Post Construction Cleanup Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>commercial post construction cleanup Orange County</strong> services are designed for businesses needing immediate occupancy readiness. We understand the critical timing requirements for commercial projects.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Office & Corporate</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Office construction cleanup Orange County</li>
                              <li>• Office building construction cleanup Orange County</li>
                              <li>• Corporate facility post construction cleaning</li>
                              <li>• Cubicle and workspace preparation</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Retail & Hospitality</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Retail store construction cleanup Orange County</li>
                              <li>• Restaurant post construction cleaning Orange County</li>
                              <li>• Hotel post construction cleaning Orange County</li>
                              <li>• Shopping center post construction cleanup</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Industrial & Warehouse</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Warehouse construction cleanup Orange County</li>
                              <li>• Manufacturing facility cleanup</li>
                              <li>• Distribution center post construction cleaning</li>
                              <li>• Industrial complex restoration</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Multi-Unit Residential</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Apartment post construction cleaning Orange County</li>
                              <li>• Condominium complex cleanup</li>
                              <li>• Multi-family housing preparation</li>
                              <li>• Property management post construction services</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Specialized Cleaning Services */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Specialized Post Construction Cleaning Services Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>detailed post construction cleaning Orange County</strong> includes specialized services for complete project completion and occupancy readiness.
                        </p>
                        <div className="bg-yellow/10 border border-yellow/20 rounded-lg p-6 mb-4">
                          <h4 className="font-bold text-navy mb-3">Service Timeline & Pricing</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-navy">24-48hrs</div>
                              <div className="text-sm text-gray-600">Rapid Response</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">$500-$5000</div>
                              <div className="text-sm text-gray-600">Project Range</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">100%</div>
                              <div className="text-sm text-gray-600">Move-In Ready</div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-bold text-navy">Surface Restoration</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Window cleaning post construction Orange County</li>
                              <li>• Floor cleaning after construction Orange County</li>
                              <li>• Carpet cleaning post construction Orange County</li>
                              <li>• Wall and ceiling dust removal</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-navy">Deep Cleaning Services</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Rough cleaning construction Orange County</li>
                              <li>• Fine dust removal and filtration</li>
                              <li>• HVAC system cleaning post construction</li>
                              <li>• Fixture and appliance cleaning</li>
                            </ul>
                          </div>
                        </div>
                        <p className="body-text text-gray-700 leading-relaxed mt-4">
                          Our <strong>licensed post construction cleaning Orange County</strong> and <strong>insured post construction cleaners Orange County</strong> team uses specialized equipment and follows strict safety protocols for construction environments.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'gutter-cleaning' && (
                <>
                  {/* Gutter Cleaning Expertise Section */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Professional Gutter Cleaning Orange County Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          As the <strong>best gutter cleaners in Orange County</strong>, we provide comprehensive <strong>residential gutter cleaning Orange County</strong> and <strong>commercial gutter cleaning Orange County</strong> services. Our <strong>gutter cleaning near me Orange County</strong> team specializes in <strong>clogged gutter cleaning Orange County</strong>, <strong>downspout cleaning Orange County</strong>, and <strong>leaf removal gutter cleaning Orange County</strong>.
                        </p>
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>professional gutter cleaning Orange County</strong> services include <strong>seasonal gutter cleaning Orange County</strong>, <strong>gutter inspection and cleaning Orange County</strong>, and <strong>roof and gutter cleaning Orange County</strong>. We offer <strong>free quote gutter cleaning Orange County</strong> with transparent pricing and <strong>same day gutter cleaning Orange County</strong> for urgent needs.
                        </p>
                        <h3 className="heading-primary text-xl text-navy mb-3">Specialized Gutter Services</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Rain gutter cleaning Orange County</strong> - Complete water flow restoration</li>
                          <li><strong>Gutter maintenance Orange County</strong> - Preventive care programs</li>
                          <li><strong>Emergency gutter cleaning Orange County</strong> - 24/7 urgent service</li>
                          <li><strong>Annual gutter cleaning Orange County</strong> - Yearly maintenance contracts</li>
                          <li><strong>Routine gutter cleaning Orange County</strong> - Regular service schedules</li>
                          <li><strong>Gutter flushing service Orange County</strong> - Advanced cleaning techniques</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Seasonal Gutter Cleaning Services */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Seasonal Gutter Cleaning Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>seasonal gutter cleaning Orange County</strong> services are designed to protect your property year-round with specialized approaches for fall and spring maintenance.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Fall Season (Sept-Nov)</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Leaf removal gutter cleaning Orange County</li>
                              <li>• Pre-winter preparation and inspection</li>
                              <li>• Downspout clearing and testing</li>
                              <li>• Debris removal and flow optimization</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Spring Season (Feb-Apr)</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Post-winter damage inspection</li>
                              <li>• Gutter inspection and cleaning Orange County</li>
                              <li>• Repair assessment and maintenance</li>
                              <li>• Summer preparation services</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Commercial Properties</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Business gutter cleaning Orange County</li>
                              <li>• Office building gutter cleaning Orange County</li>
                              <li>• Property management gutter cleaning Orange County</li>
                              <li>• HOA gutter cleaning Orange County</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Property Types</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Apartment gutter cleaning Orange County</li>
                              <li>• Condo gutter cleaning Orange County</li>
                              <li>• Multi-story residential properties</li>
                              <li>• Single-family home maintenance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Gutter Cleaning Benefits & Pricing */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Affordable Gutter Cleaning Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>affordable gutter cleaning Orange County</strong> services provide exceptional value with transparent pricing and no hidden fees. We offer <strong>gutter cleaning deals Orange County</strong> and seasonal discounts.
                        </p>
                        <div className="bg-yellow/10 border border-yellow/20 rounded-lg p-6 mb-4">
                          <h4 className="font-bold text-navy mb-3">Service Benefits & Pricing</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-navy">$150-$400</div>
                              <div className="text-sm text-gray-600">Residential Range</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">Same Day</div>
                              <div className="text-sm text-gray-600">Emergency Service</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">Licensed</div>
                              <div className="text-sm text-gray-600">& Insured</div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-bold text-navy">Safety & Insurance</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Licensed gutter cleaning Orange County</li>
                              <li>• Insured gutter cleaning Orange County</li>
                              <li>• Professional safety equipment</li>
                              <li>• Comprehensive liability coverage</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-navy">Service Guarantees</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Free gutter cleaning estimate Orange County</li>
                              <li>• 100% satisfaction guarantee</li>
                              <li>• Reliable gutter cleaning Orange County</li>
                              <li>• Top rated gutter cleaning Orange County</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'commercial-cleaning' && (
                <>
                  {/* Commercial Cleaning Expertise Section */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Professional Commercial Cleaning Orange County Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          As the <strong>best commercial cleaning Orange County</strong> provider, we deliver comprehensive <strong>office cleaning services Orange County</strong> and <strong>business cleaning services Orange County</strong>. Our <strong>commercial cleaning near me Orange County</strong> team specializes in <strong>recurring commercial cleaning Orange County</strong>, <strong>commercial janitorial services Orange County</strong>, and <strong>after hours commercial cleaning Orange County</strong>.
                        </p>
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>professional commercial cleaning Orange County</strong> services include <strong>commercial cleaning contracts Orange County</strong>, <strong>day porter services Orange County</strong>, and <strong>disinfecting services Orange County</strong>. We provide <strong>commercial cleaning estimate Orange County</strong> with transparent pricing and <strong>same day commercial cleaning Orange County</strong> for urgent needs.
                        </p>
                        <h3 className="heading-primary text-xl text-navy mb-3">Specialized Commercial Services</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Medical office cleaning Orange County</strong> - Healthcare compliance and sanitization</li>
                          <li><strong>Dental office cleaning Orange County</strong> - Specialized medical facility care</li>
                          <li><strong>Restaurant cleaning services Orange County</strong> - Food safety compliance</li>
                          <li><strong>School cleaning services Orange County</strong> - Educational facility maintenance</li>
                          <li><strong>Industrial cleaning Orange County</strong> - Heavy-duty facility services</li>
                          <li><strong>Warehouse cleaning services Orange County</strong> - Large-scale facility management</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Industry-Specific Commercial Cleaning */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Industry-Specific Commercial Cleaning Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>Orange County commercial cleaning services</strong> are tailored to meet industry-specific compliance requirements and operational needs across various business sectors.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Healthcare & Medical</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Medical office cleaning Orange County</li>
                              <li>• Dental office cleaning Orange County</li>
                              <li>• Healthcare facility sanitization</li>
                              <li>• OSHA compliance protocols</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Food Service & Hospitality</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Restaurant cleaning services Orange County</li>
                              <li>• Hotel cleaning services Orange County</li>
                              <li>• Kitchen deep cleaning and sanitization</li>
                              <li>• Health department compliance</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Retail & Commercial</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Retail store cleaning Orange County</li>
                              <li>• Shopping center maintenance</li>
                              <li>• Customer-facing area sanitization</li>
                              <li>• After-hours cleaning services</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold text-navy">Industrial & Specialized</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Warehouse cleaning services Orange County</li>
                              <li>• Industrial cleaning Orange County</li>
                              <li>• Gym cleaning services Orange County</li>
                              <li>• Manufacturing facility maintenance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Commercial Cleaning Services & Contracts */}
                  <Card className="retro-card mb-8">
                    <CardHeader>
                      <CardTitle className="heading-primary text-2xl text-navy">
                        Commercial Cleaning Contracts Orange County
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none">
                        <p className="body-text text-gray-700 leading-relaxed mb-4">
                          Our <strong>commercial cleaning contracts Orange County</strong> provide reliable, cost-effective solutions with <strong>recurring commercial cleaning Orange County</strong> services tailored to your business needs.
                        </p>
                        <div className="bg-yellow/10 border border-yellow/20 rounded-lg p-6 mb-4">
                          <h4 className="font-bold text-navy mb-3">Contract Benefits & Services</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-navy">37%</div>
                              <div className="text-sm text-gray-600">Revenue from Repeat Business</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">24/7</div>
                              <div className="text-sm text-gray-600">Emergency Response</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-navy">Licensed</div>
                              <div className="text-sm text-gray-600">& Insured</div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-bold text-navy">Specialized Services</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Commercial carpet cleaning Orange County</li>
                              <li>• Commercial floor cleaning Orange County</li>
                              <li>• Restroom sanitization Orange County</li>
                              <li>• Deep cleaning commercial Orange County</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-navy">Service Guarantees</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Licensed commercial cleaning Orange County</li>
                              <li>• Reliable commercial cleaners Orange County</li>
                              <li>• Eco-friendly commercial cleaning Orange County</li>
                              <li>• Top rated commercial cleaners Orange County</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

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
                    <span className="text-sm">5-star rated service</span>
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
              <h3 className="heading-primary text-3xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
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
                          alt={`Professional ${relatedService.name} Orange County - ${relatedService.shortDescription} service icon`}
                          title={`${relatedService.name} Services Orange County - Licensed & Insured`}
                          width={64}
                          height={64}
                          className="object-contain"
                          sizes="64px"
                          loading="lazy"
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
                      Get Custom Quote
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

      {/* Service-Specific FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                Frequently Asked Questions - {service.name} Orange County
              </h2>
              <p className="body-text text-xl text-gray-600">
                Get answers to common questions about our {service.name.toLowerCase()} services in Orange County
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.id === 'window-cleaning' && (
                <>
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How much does window cleaning cost in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        <strong>Window cleaning Orange County</strong> costs typically range from $150-$400 for residential homes and $200-$800 for commercial properties. Our <strong>free quote window cleaning Orange County</strong> service provides transparent pricing with no hidden fees. <strong>Same day window cleaning Orange County</strong> may include a small premium for urgent service.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you provide same day window cleaning Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! Our <strong>same day window cleaning Orange County</strong> is available for urgent needs. As <strong>local window cleaners near me Orange County</strong>, we can often accommodate last-minute requests for <strong>emergency window cleaning Orange County</strong>, <strong>real estate window cleaning Orange County</strong>, and <strong>move in move out window cleaning Orange County</strong>.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Are you licensed window cleaning Orange County professionals?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Absolutely! We are fully <strong>licensed window cleaning Orange County</strong> professionals with comprehensive insurance coverage. Our <strong>professional window cleaning Orange County</strong> team is bonded and insured for your complete peace of mind. We're the <strong>top rated window cleaners Orange County</strong> with <strong>5 star window cleaning Orange County</strong> reviews.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you serve Newport Beach and Irvine window cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We provide <strong>Newport Beach window cleaning</strong> and <strong>Irvine window cleaning services</strong> throughout Orange County. Our <strong>luxury estate window cleaning Orange County</strong> is perfect for premium properties in Newport Beach, while our <strong>affordable window cleaning Orange County</strong> serves all budgets in Irvine and surrounding areas.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'pressure-washing' && (
                <>
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How much does pressure washing cost in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        <strong>Pressure washing Orange County</strong> costs typically range from $200-$600 for residential properties and $300-$1200 for commercial buildings. Our <strong>pressure washing quotes Orange County</strong> service provides detailed estimates. <strong>Driveway pressure washing Orange County</strong> starts at $150, while <strong>oil stain removal Orange County</strong> may require specialized pricing.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you provide same day pressure washing Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! Our <strong>same day pressure washing Orange County</strong> is available for urgent cleaning needs. As <strong>local pressure washing near me Orange County</strong> experts, we can handle <strong>emergency pressure washing Orange County</strong>, <strong>graffiti removal Orange County</strong>, and urgent <strong>commercial pressure washing Orange County</strong> requests.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Can you remove oil stains from my driveway?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Absolutely! Our <strong>oil stain removal Orange County</strong> service uses advanced degreasing techniques and specialized equipment. We're experts in <strong>driveway pressure washing Orange County</strong> and can remove even stubborn oil stains, grease spots, and automotive fluid stains from concrete surfaces.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you offer commercial pressure washing Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! Our <strong>commercial pressure washing Orange County</strong> services include storefront cleaning, parking lot maintenance, building exterior washing, and <strong>graffiti removal Orange County</strong>. We provide <strong>professional pressure washing Orange County</strong> for restaurants, retail stores, office buildings, and industrial facilities.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'solar-panel-cleaning' && (
                <>
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How much does solar panel cleaning cost in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        <strong>Solar panel cleaning Orange County</strong> costs typically range from $150-$400 for residential systems and $300-$1200 for commercial installations. Our <strong>solar panel cleaning quotes Orange County</strong> service provides detailed estimates. <strong>Recurring solar panel cleaning Orange County</strong> programs offer significant savings with <strong>monthly solar panel cleaning Orange County</strong> plans.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How often should I clean my solar panels in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        We recommend <strong>monthly solar panel cleaning Orange County</strong> for optimal efficiency, especially during dusty seasons. Our <strong>recurring solar panel cleaning Orange County</strong> programs ensure consistent performance. <strong>Solar panel maintenance Orange County</strong> includes regular <strong>solar panel inspection Orange County</strong> to identify potential issues early.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Can solar panel cleaning improve my system's efficiency?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Absolutely! Our <strong>professional solar panel cleaning Orange County</strong> can <strong>improve solar panel efficiency Orange County</strong> by up to 30% and <strong>increase solar panel output Orange County</strong>. Regular <strong>solar panel dirt removal Orange County</strong> and <strong>solar panel dust removal Orange County</strong> restore peak performance and maximize your energy savings.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you provide commercial solar panel cleaning services?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! Our <strong>commercial solar panel cleaning Orange County</strong> services include <strong>solar farm cleaning Orange County</strong>, <strong>industrial solar panel cleaning Orange County</strong>, and <strong>solar panel cleaning contracts Orange County</strong>. We also provide <strong>HOA solar panel cleaning Orange County</strong> and <strong>apartment solar panel cleaning Orange County</strong> for multi-unit properties.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        What cleaning methods do you use for solar panels?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        We use <strong>safe solar panel cleaning Orange County</strong> methods including <strong>waterless solar panel cleaning Orange County</strong> and <strong>solar panel cleaning with purified water Orange County</strong>. Our <strong>eco-friendly solar panel cleaning Orange County</strong> techniques protect your investment while maximizing efficiency. All methods are designed for <strong>rooftop solar cleaning Orange County</strong> and <strong>ground mount solar cleaning Orange County</strong>.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you serve Irvine and Newport Beach for solar panel cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We provide <strong>Irvine solar panel cleaning</strong>, <strong>Newport Beach solar panel cleaning</strong>, and <strong>Laguna Beach solar panel cleaning</strong> throughout Orange County. Our <strong>solar panel cleaning near me Orange County</strong> service covers all major cities with <strong>same day solar panel cleaning Orange County</strong> available for urgent needs.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'post-construction-cleanup' && (
                <>
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How much does post construction cleanup cost in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        <strong>Post construction cleanup Orange County</strong> costs typically range from $500-$5000 depending on project size and scope. <strong>Residential post construction cleaning Orange County</strong> averages $800-$2500, while <strong>commercial post construction cleanup Orange County</strong> ranges $1500-$5000+. Our <strong>free quote post construction cleaning Orange County</strong> provides detailed estimates based on your specific project needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you provide same day post construction cleanup service?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! Our <strong>same day post construction cleanup Orange County</strong> is available for urgent project deadlines. As <strong>local post construction cleaning near me Orange County</strong> specialists, we understand construction timelines and can provide <strong>emergency post construction cleaning Orange County</strong> within 24-48 hours to ensure your project stays on schedule.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        What's included in detailed post construction cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Our <strong>detailed post construction cleaning Orange County</strong> includes <strong>dust removal after construction Orange County</strong>, <strong>debris removal post construction Orange County</strong>, <strong>window cleaning post construction Orange County</strong>, <strong>floor cleaning after construction Orange County</strong>, and <strong>deep cleaning after renovation Orange County</strong>. We provide <strong>move in ready post construction cleaning Orange County</strong> that meets occupancy standards.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you handle commercial post construction projects?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Absolutely! Our <strong>commercial post construction cleanup Orange County</strong> includes <strong>office construction cleanup Orange County</strong>, <strong>retail store construction cleanup Orange County</strong>, <strong>restaurant post construction cleaning Orange County</strong>, <strong>hotel post construction cleaning Orange County</strong>, and <strong>warehouse construction cleanup Orange County</strong>. We specialize in deadline-driven commercial projects.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Are you licensed and insured for construction cleanup?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We are fully <strong>licensed post construction cleaning Orange County</strong> professionals with comprehensive insurance coverage. Our <strong>insured post construction cleaners Orange County</strong> team follows strict safety protocols and carries specialized equipment insurance for construction environments. We're the <strong>professional post construction cleaning Orange County</strong> choice for contractors and property owners.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you serve Irvine and Newport Beach for post construction cleanup?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We provide <strong>Irvine post construction cleanup</strong>, <strong>Newport Beach post construction cleaning</strong>, and <strong>Huntington Beach post construction cleanup</strong> throughout Orange County. Our <strong>local post construction cleaning near me Orange County</strong> service covers all major cities with rapid response for <strong>new construction cleanup Orange County</strong> and renovation projects.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'gutter-cleaning' && (
                <>
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How much does gutter cleaning cost in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        <strong>Gutter cleaning Orange County</strong> costs typically range from $150-$400 for residential properties and $200-$800 for commercial buildings. Our <strong>affordable gutter cleaning Orange County</strong> includes <strong>downspout cleaning Orange County</strong> and debris removal. We provide <strong>free quote gutter cleaning Orange County</strong> with transparent pricing and <strong>gutter cleaning deals Orange County</strong> for seasonal services.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you provide same day gutter cleaning service?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! Our <strong>same day gutter cleaning Orange County</strong> is available for urgent needs and <strong>emergency gutter cleaning Orange County</strong> situations. As <strong>gutter cleaning near me Orange County</strong> specialists, we understand the importance of immediate service for <strong>clogged gutter cleaning Orange County</strong> and storm damage situations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        What's included in professional gutter cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Our <strong>professional gutter cleaning Orange County</strong> includes <strong>leaf removal gutter cleaning Orange County</strong>, <strong>downspout cleaning Orange County</strong>, <strong>gutter inspection and cleaning Orange County</strong>, and <strong>gutter flushing service Orange County</strong>. We also provide <strong>roof and gutter cleaning Orange County</strong> for comprehensive property maintenance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you offer seasonal gutter cleaning programs?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Absolutely! Our <strong>seasonal gutter cleaning Orange County</strong> programs include <strong>annual gutter cleaning Orange County</strong> and <strong>routine gutter cleaning Orange County</strong> services. We offer <strong>gutter maintenance Orange County</strong> contracts for fall leaf removal and spring inspection services, perfect for <strong>rain gutter cleaning Orange County</strong> preparation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Are you licensed and insured for gutter cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We are fully <strong>licensed gutter cleaning Orange County</strong> professionals with comprehensive <strong>insured gutter cleaning Orange County</strong> coverage. Our team uses professional safety equipment and follows strict safety protocols. We're the <strong>top rated gutter cleaning Orange County</strong> choice with <strong>reliable gutter cleaning Orange County</strong> service and proven results.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you serve Irvine and Newport Beach for gutter cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We provide <strong>Irvine gutter cleaning</strong>, <strong>Newport Beach gutter cleaning</strong>, and <strong>Huntington Beach gutter cleaning</strong> throughout Orange County. Our services include <strong>apartment gutter cleaning Orange County</strong>, <strong>condo gutter cleaning Orange County</strong>, <strong>HOA gutter cleaning Orange County</strong>, and <strong>business gutter cleaning Orange County</strong> for all property types.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {service.id === 'commercial-cleaning' && (
                <>
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How much does commercial cleaning cost in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        <strong>Commercial cleaning Orange County</strong> costs vary by facility size and service frequency. <strong>Office cleaning services Orange County</strong> typically range from $0.05-$0.15 per square foot. Our <strong>commercial cleaning estimate Orange County</strong> includes detailed pricing for <strong>recurring commercial cleaning Orange County</strong> and <strong>commercial cleaning contracts Orange County</strong> with volume discounts.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you provide medical office cleaning services?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! Our <strong>medical office cleaning Orange County</strong> and <strong>dental office cleaning Orange County</strong> services meet healthcare compliance standards. We provide <strong>disinfecting services Orange County</strong> with OSHA-compliant protocols and specialized sanitization for healthcare facilities. Our team is trained in medical facility cleaning requirements.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        What industries do you serve for commercial cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Our <strong>Orange County commercial cleaning services</strong> cover all industries: <strong>restaurant cleaning services Orange County</strong>, <strong>hotel cleaning services Orange County</strong>, <strong>retail store cleaning Orange County</strong>, <strong>warehouse cleaning services Orange County</strong>, <strong>school cleaning services Orange County</strong>, and <strong>gym cleaning services Orange County</strong> with industry-specific compliance protocols.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you offer after-hours commercial cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Absolutely! Our <strong>after hours commercial cleaning Orange County</strong> services ensure minimal business disruption. We provide <strong>day porter services Orange County</strong> for ongoing maintenance and <strong>emergency commercial cleaning Orange County</strong> for urgent situations. Our flexible scheduling accommodates your business operations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Are you licensed and insured for commercial cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We are fully <strong>licensed commercial cleaning Orange County</strong> professionals with comprehensive commercial insurance. Our <strong>reliable commercial cleaners Orange County</strong> are bonded and insured. We're the <strong>top rated commercial cleaners Orange County</strong> choice with proven B2B results and <strong>professional commercial cleaning Orange County</strong> expertise.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you serve Irvine and Newport Beach for commercial cleaning?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We provide <strong>Irvine commercial cleaning services</strong> and <strong>Newport Beach commercial cleaning</strong> throughout Orange County. Our <strong>business cleaning services Orange County</strong> include <strong>industrial cleaning Orange County</strong> and <strong>commercial janitorial services Orange County</strong> for all business types and facility sizes.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {/* Generic FAQ for other services */}
              {service.id !== 'window-cleaning' && service.id !== 'pressure-washing' && (
                <>
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        How much does {service.name.toLowerCase()} cost in Orange County?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Our {service.name.toLowerCase()} services in Orange County are competitively priced based on the size and complexity of your property. We provide free, detailed estimates with transparent pricing and no hidden fees.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Do you provide same day {service.name.toLowerCase()} service?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Yes! We offer same day {service.name.toLowerCase()} service in Orange County for urgent needs. Our local team can often accommodate emergency requests and last-minute scheduling for both residential and commercial properties.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        Are you licensed and insured for {service.name.toLowerCase()}?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        Absolutely! We are fully licensed and insured for all {service.name.toLowerCase()} services in Orange County. Our professional team is bonded and carries comprehensive liability insurance for your complete peace of mind.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="heading-primary text-lg text-navy">
                        What areas do you serve for {service.name.toLowerCase()}?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-text text-gray-700 text-sm">
                        We provide {service.name.toLowerCase()} services throughout Orange County, Los Angeles County, and San Diego County. This includes Newport Beach, Irvine, Huntington Beach, Costa Mesa, Anaheim, Santa Ana, and all surrounding communities.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
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
