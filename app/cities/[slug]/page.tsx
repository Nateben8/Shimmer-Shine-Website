import { notFound } from "next/navigation"
import { getCitySEO } from "@/lib/seo"
import { getLocalBusinessSchema } from "@/lib/schema"
import { BUSINESS_INFO, SERVICES } from "@/lib/constants"
import GoogleReviews from "@/components/GoogleReviews"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Award,
  Shield,
  Clock
} from "lucide-react"
// import Breadcrumbs, { generateBreadcrumbs } from "@/components/Breadcrumbs"
// import RelatedContent from "@/components/RelatedContent"

interface CityPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CityPageProps) {
  return getCitySEO(params.slug)
}

export async function generateStaticParams() {
  return BUSINESS_INFO.cities.map((city) => {
    // Generate both normalized and original slugs for special characters
    const originalSlug = city.toLowerCase().replace(/\s+/g, '-')
    const normalizedSlug = city.toLowerCase()
      .replace(/\s+/g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    
    return { slug: originalSlug }
  }).concat(
    // Add normalized versions for cities with special characters
    BUSINESS_INFO.cities
      .filter(city => city.normalize('NFD') !== city) // Only cities with special chars
      .map(city => ({
        slug: city.toLowerCase()
          .replace(/\s+/g, '-')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      }))
  )
}

export default function CityPage({ params }: CityPageProps) {
  // Decode URL and handle special characters
  const decodedSlug = decodeURIComponent(params.slug)
  
  // Special handling for La Cañada Flintridge URL encoding issues
  const specialCases: Record<string, string> = {
    'la-caada-flintridge': 'La Cañada Flintridge',
    'la-canada-flintridge': 'La Cañada Flintridge',
    'la-cañada-flintridge': 'La Cañada Flintridge'
  }
  
  const cityName = specialCases[params.slug] || decodedSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  // Function to normalize city names for comparison (handle special characters)
  const normalizeForSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
  }
  
  const normalizeSlugForComparison = (slug: string) => {
    return decodeURIComponent(slug)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
  }
  
  const isValidCity = BUSINESS_INFO.cities.some(city => {
    const normalizedCity = normalizeForSlug(city)
    const normalizedSlug = normalizeSlugForComparison(params.slug)
    const originalSlug = city.toLowerCase().replace(/\s+/g, '-')
    
    // Special handling for La Cañada Flintridge URL encoding issues
    const specialCases = {
      'la-caada-flintridge': 'la-cañada-flintridge',
      'la-canada-flintridge': 'la-cañada-flintridge'
    }
    
    const resolvedSlug = (specialCases as Record<string, string>)[params.slug] || params.slug
    
    // Check multiple variations to handle URL encoding issues
    return normalizedCity === normalizedSlug || 
           originalSlug === decodedSlug ||
           normalizedCity === params.slug ||
           originalSlug === params.slug ||
           originalSlug === resolvedSlug ||
           normalizedCity === resolvedSlug.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  })
  
  if (!isValidCity) {
    notFound()
  }

  // Determine county based on city
  const getCounty = (city: string) => {
    const ocCities = ["Costa Mesa", "Newport Beach", "Irvine", "Santa Ana", "Anaheim", "Huntington Beach", "Fullerton", "Garden Grove", "Orange", "Tustin", "Fountain Valley", "Westminster", "Buena Park", "Cypress", "La Habra"]
    const laCities = ["Los Angeles", "Beverly Hills", "Santa Monica", "Manhattan Beach", "Redondo Beach", "Torrance", "El Segundo", "Culver City", "Venice"]
    const sdCities = ["San Diego", "La Jolla", "Del Mar", "Encinitas", "Carlsbad", "Solana Beach", "Pacific Beach", "Mission Beach", "Ocean Beach"]
    
    if (ocCities.includes(city)) return "Orange County"
    if (laCities.includes(city)) return "Los Angeles County"
    if (sdCities.includes(city)) return "San Diego County"
    return "Southern California"
  }

  const county = getCounty(cityName)
  const localBusinessSchema = getLocalBusinessSchema()

  const featuredServices = SERVICES.slice(0, 4)
  // const breadcrumbs = generateBreadcrumbs('city', { 
  //   cityName: cityName, 
  //   slug: params.slug 
  // })

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
          {/* Breadcrumbs */}
          {/* <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} className="text-gray-300" />
          </div> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>

              <div className="retro-badge mb-6">
                <MapPin className="h-4 w-4 mr-1" />
                Serving {county}
              </div>
              
              <h1 className="heading-decorative text-5xl md:text-6xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                {cityName} Commercial Cleaning & Business Services
              </h1>
              
              <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                Commercial Cleaning {cityName} | B2B Contracts Available
              </h2>
              
              <p className="body-text text-xl text-gray-100 mb-8 leading-relaxed">
                Professional commercial cleaning {cityName} with B2B contract solutions. Our commercial cleaning near me {cityName} provides office cleaning services {cityName} for businesses and facilities. Licensed commercial cleaning {cityName} serving {county} since 2021.
              </p>

              {/* Local Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Local {cityName} Pressure Washing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Same Day Pressure Washing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Licensed Pressure Washing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow" />
                  <span>Best Pressure Washing</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-quote">
                  <Button variant="retro" size="lg" className="text-lg px-8 py-4">
                    Free Quote {cityName} Pressure Washing
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

            {/* City Video */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <video
                    src="/Solar Panel Video 1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="font-arvo font-bold">Serving {cityName} Since 2021</p>
                  <p className="text-sm text-gray-600">{county}, California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Our Services in {cityName}
            </h3>
            <p className="body-text text-xl text-gray-600">
              Professional property detailing services tailored for {cityName} homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="retro-card hover:shadow-retro-yellow transition-all duration-300 group">
                <CardHeader className="text-center">
                  {/* Service Hero Image/Video */}
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
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
                        alt={`Professional gutter cleaning ${cityName} - Licensed gutter cleaning service ${county} with debris removal and maintenance`}
                        title={`Best Gutter Cleaning ${cityName} - Same Day Service Available`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    ) : service.id === 'commercial-cleaning' ? (
                      <Image
                        src="/commercial-cleaning-hero.jpg"
                        alt={`Commercial cleaning ${cityName} - Professional office cleaning and facility maintenance services ${county}`}
                        title={`Commercial Cleaning Services ${cityName} - Licensed & Insured`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    ) : service.id === 'post-construction-cleanup' ? (
                      <Image
                        src="/Post-Construction%20Cleanup-hero.jpeg"
                        alt={`Post construction cleanup ${cityName} - Professional construction site cleaning and debris removal ${county}`}
                        title={`Post Construction Cleanup ${cityName} - 24-48 Hour Response Time`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    ) : service.iconType === "image" ? (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <Image
                          src={service.icon}
                          alt={`Professional ${service.name} ${cityName} - ${service.shortDescription} service icon`}
                          title={`${service.name} Services ${cityName} - Licensed & Insured`}
                          width={80}
                          height={80}
                          className="object-contain"
                          sizes="80px"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <div className="text-6xl text-gray-600">{service.icon}</div>
                      </div>
                    )}
                  </div>
                  <CardTitle className="heading-primary text-xl">
                    {service.name} in {cityName}
                  </CardTitle>
                  <CardDescription className="body-text">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="retro-badge">
                      Get Custom Quote
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full group-hover:bg-yellow group-hover:text-navy transition-colors">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for City */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why {cityName} Chooses Shimmer Shine
            </h3>
            <p className="body-text text-xl text-gray-600">
              Local expertise with three decades of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Local Expertise</h4>
              <p className="body-text text-gray-600 text-sm">
                We understand {cityName}'s unique climate and property maintenance needs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Proven Results</h4>
              <p className="body-text text-gray-600 text-sm">
                Hundreds of satisfied {cityName} customers and 500+ 5-star reviews.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Fast Response</h4>
              <p className="body-text text-gray-600 text-sm">
                Same-day service available for {cityName} emergency cleaning needs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-yellow" />
              </div>
              <h4 className="heading-primary text-xl text-navy">Trust & Safety</h4>
              <p className="body-text text-gray-600 text-sm">
                Fully licensed, bonded, and insured for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting Keywords Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
                      <div className="text-center mb-12">
              <h2 className="heading-primary text-3xl md:text-4xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                {cityName} Commercial Cleaning & Business Services
              </h2>
              <p className="body-text text-xl text-gray-600 max-w-4xl mx-auto">
                Looking for commercial cleaning near me {cityName} or business services? We provide office cleaning services {cityName} with B2B contract solutions. Our services include recurring commercial cleaning {cityName}, medical office cleaning {cityName}, restaurant cleaning services {cityName}, and commercial janitorial services {cityName} for all business types.
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">B2B Contracts</h3>
              <p className="body-text text-sm">Commercial cleaning contracts {cityName} with recurring service</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">After Hours Service</h3>
              <p className="body-text text-sm">After hours commercial cleaning {cityName} for minimal disruption</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">Free Estimates</h3>
              <p className="body-text text-sm">Commercial cleaning estimate {cityName} in 24 hours</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="heading-primary text-lg mb-2">Licensed & Insured</h3>
              <p className="body-text text-sm">Licensed commercial cleaning {cityName} with full B2B coverage</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="heading-primary text-2xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Best Commercial Cleaners in {cityName}
            </h3>
            <p className="body-text text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Professional commercial cleaning {cityName} with B2B contract solutions. Our office cleaning services {cityName} and business cleaning services {cityName} includes medical office cleaning {cityName}, restaurant cleaning services {cityName}, industrial cleaning {cityName}, and day porter services {cityName} for all business types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-a-quote">
                <Button variant="retro" size="lg" className="text-lg px-8 py-4">
                  Get Free {cityName} Commercial Quote
                </Button>
              </Link>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="heading-primary text-2xl text-navy text-center">
                  Professional Property Detailing in {cityName}
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <div className="body-text text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <strong>{cityName} residents and business owners</strong> have trusted Shimmer Shine Property Detailing for nearly three decades. Our professional company understands the unique challenges that {county}'s climate presents for property maintenance.
                  </p>
                  
                  <p>
                    Whether you need window cleaning for your {cityName} home's ocean views, pressure washing to remove California's persistent dust and grime, or solar panel cleaning to maintain peak efficiency, our experienced team delivers old-school quality with modern reliability.
                  </p>
                  
                  <p>
                    <strong>Our {cityName} services include:</strong>
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Residential and commercial window cleaning in {cityName}</li>
                    <li>Pressure washing for {cityName} driveways, patios, and building exteriors</li>
                    <li>Solar panel cleaning to maximize energy efficiency</li>
                    <li>Gutter cleaning and maintenance services</li>
                    <li>Post-construction cleanup for {cityName} new builds and renovations</li>
                    <li>Regular maintenance programs for {cityName} businesses</li>
                  </ul>
                  
                  <p>
                    We're proud to serve the {cityName} community with the same values that started our business in 1995: honest pricing, reliable service, and a commitment to customer satisfaction that goes beyond the job itself.
                  </p>
                  
                  <p>
                    <strong>Ready to experience the Shimmer Shine difference in {cityName}?</strong> Contact us today for your free estimate and join hundreds of satisfied customers throughout {county}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews 
        maxReviews={2} 
        compact={true} 
        sectionClassName="bg-gray-50"
        headerTitle={`What ${cityName} Customers Say`}
      />

      {/* Local FAQ Section */}
      <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
                {cityName} Property Cleaning FAQs
              </h3>
              <p className="body-text text-xl text-gray-600">
                Common questions from {cityName} residents and business owners
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    How much does pressure washing cost in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    <strong>Pressure washing {cityName}</strong> costs typically range from $200-$600 for residential properties and $300-$1200 for commercial buildings. <strong>Driveway pressure washing {cityName}</strong> starts at $150, while <strong>oil stain removal {cityName}</strong> may require specialized pricing. Our <strong>pressure washing quotes {cityName}</strong> service provides detailed estimates with no hidden fees.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Do you offer same day pressure washing in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Yes! Our <strong>same day pressure washing {cityName}</strong> is available for urgent cleaning needs. As <strong>local pressure washing near me {cityName}</strong> experts, we can handle <strong>emergency pressure washing {cityName}</strong>, <strong>graffiti removal {cityName}</strong>, and urgent <strong>commercial pressure washing {cityName}</strong> requests. Call {BUSINESS_INFO.phone} for immediate service.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Can you remove oil stains from driveways in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Absolutely! Our <strong>oil stain removal {cityName}</strong> service uses advanced degreasing techniques and specialized equipment. We're experts in <strong>driveway pressure washing {cityName}</strong> and can remove stubborn oil stains, grease spots, and automotive fluid stains from concrete surfaces throughout {cityName} and {county}.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Do you provide commercial pressure washing in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Yes! Our <strong>commercial pressure washing {cityName}</strong> services include storefront cleaning, parking lot maintenance, building exterior washing, and <strong>graffiti removal {cityName}</strong>. We provide <strong>professional pressure washing {cityName}</strong> for restaurants, retail stores, office buildings, and industrial facilities with flexible scheduling and competitive pricing.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Are you licensed for pressure washing in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Absolutely! We are fully <strong>licensed pressure washing {cityName}</strong> professionals with comprehensive insurance coverage. Our <strong>professional pressure washing {cityName}</strong> team is bonded and insured for your complete peace of mind. We're the <strong>best pressure washing {cityName}</strong> company with proven results and satisfied customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Do you provide solar panel cleaning in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Yes! Our <strong>solar panel cleaning near me {cityName}</strong> service can <strong>improve solar panel efficiency {cityName}</strong> by up to 30%. We provide <strong>residential solar panel cleaning {cityName}</strong> and <strong>commercial solar panel cleaning {cityName}</strong> with <strong>recurring solar panel cleaning {cityName}</strong> programs. Our <strong>same day solar panel cleaning {cityName}</strong> is available for urgent needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    How much does post construction cleanup cost in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    <strong>Post construction cleanup {cityName}</strong> costs typically range from $500-$5000 depending on project size and scope. <strong>Residential post construction cleaning {cityName}</strong> averages $800-$2500, while <strong>commercial post construction cleanup {cityName}</strong> ranges $1500-$5000+. Our <strong>free quote post construction cleaning {cityName}</strong> provides detailed estimates based on your specific project needs and timeline requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Do you provide same day post construction cleanup in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Yes! Our <strong>same day post construction cleanup {cityName}</strong> is available for urgent project deadlines. As <strong>local post construction cleaning near me {cityName}</strong> specialists, we understand construction timelines and can provide <strong>emergency post construction cleaning {cityName}</strong> within 24-48 hours to ensure your project stays on schedule and meets occupancy requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    What's included in professional gutter cleaning in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Our <strong>professional gutter cleaning {cityName}</strong> includes <strong>leaf removal gutter cleaning {cityName}</strong>, <strong>downspout cleaning {cityName}</strong>, <strong>clogged gutter cleaning {cityName}</strong>, and gutter inspection. We provide <strong>seasonal gutter cleaning {cityName}</strong> with fall and spring maintenance programs for optimal water flow protection.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Do you offer seasonal gutter cleaning programs in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Yes! Our <strong>seasonal gutter cleaning {cityName}</strong> programs include fall leaf removal and spring inspection services. We offer <strong>annual gutter cleaning {cityName}</strong> contracts and <strong>routine gutter cleaning {cityName}</strong> maintenance. Our <strong>gutter maintenance {cityName}</strong> programs are perfect for <strong>rain gutter cleaning {cityName}</strong> preparation.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    How much does commercial cleaning cost in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    <strong>Commercial cleaning {cityName}</strong> costs typically range from $0.05-$0.15 per square foot for <strong>office cleaning services {cityName}</strong>. Our <strong>commercial cleaning contracts {cityName}</strong> provide volume discounts for <strong>recurring commercial cleaning {cityName}</strong>. We offer <strong>commercial cleaning estimate {cityName}</strong> with transparent B2B pricing.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Do you provide medical office cleaning in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Yes! Our <strong>medical office cleaning {cityName}</strong> services meet healthcare compliance standards with OSHA protocols. We provide <strong>dental office cleaning {cityName}</strong> and specialized sanitization for healthcare facilities. Our team is trained in medical facility cleaning requirements and <strong>disinfecting services {cityName}</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    What industries do you serve for commercial cleaning in {cityName}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    Our <strong>business cleaning services {cityName}</strong> cover all industries: <strong>restaurant cleaning services {cityName}</strong>, <strong>hotel cleaning services {cityName}</strong>, <strong>retail store cleaning {cityName}</strong>, <strong>warehouse cleaning services {cityName}</strong>, <strong>school cleaning services {cityName}</strong>, and <strong>gym cleaning services {cityName}</strong> with industry-specific compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                  <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    What areas of {cityName} do you serve?
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text text-gray-700">
                    We serve all areas of {cityName} and surrounding {county} communities. Our local team knows {cityName}'s neighborhoods well and can efficiently service residential homes, commercial buildings, and multi-unit properties throughout the area.
                  </p>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="heading-primary text-xl text-navy">
                    Why choose Shimmer Shine for {cityName} property cleaning?
                  </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <p className="body-text text-gray-700">
                    {cityName} residents choose Shimmer Shine because we're locally owned, fully licensed and insured, use eco-friendly cleaning solutions, and have served {county} since 2021. Our 5-star rated service, free estimates, and satisfaction guarantee make us {cityName}'s trusted choice for property detailing.
                    </p>
                  </CardContent>
                </Card>
            </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
            Ready for {cityName}'s Best?
          </h3>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied {cityName} customers who trust Shimmer Shine for all their property detailing needs. Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-a-quote">
              <Button variant="retro-navy" size="lg" className="text-lg px-8 py-4">
                Get Free {cityName} Quote
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
              <strong>Local Promise:</strong> Same-day service available for {cityName} residents!
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      {/* <RelatedContent 
        currentPage="city" 
        currentSlug={params.slug}
        cityName={cityName}
      /> */}
    </>
  )
}
