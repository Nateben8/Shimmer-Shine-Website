import { notFound } from "next/navigation"
import { generateSEO } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"

// BlogContent component to render full article content
function BlogContent({ post }: { post: any }) {
  switch (post.slug) {
    case 'window-cleaning-orange-county-guide':
      return <WindowCleaningContent />
    case 'pressure-washing-los-angeles-county':
      return <PressureWashingContent />
    case 'gutter-cleaning-san-diego-county':
      return <GutterCleaningContent />
    case 'solar-panel-cleaning-southern-california':
      return <SolarPanelContent />
    case 'post-construction-cleanup-orange-county':
      return <PostConstructionContent />
    case 'commercial-property-maintenance-los-angeles':
      return <CommercialMaintenanceContent />
    case 'seasonal-property-maintenance-san-diego':
      return <SeasonalMaintenanceContent />
    case 'eco-friendly-cleaning-southern-california':
      return <EcoFriendlyContent />
    case 'residential-window-cleaning-san-diego':
      return <ResidentialWindowContent />
    case 'commercial-window-cleaning-los-angeles':
      return <CommercialWindowContent />
    case 'driveway-pressure-washing-orange-county':
      return <DrivewayPressureContent />
    case 'concrete-pressure-washing-san-diego':
      return <ConcretePressureContent />
    case 'gutter-repair-orange-county':
      return <GutterRepairContent />
    case 'gutter-installation-los-angeles':
      return <GutterInstallationContent />
    case 'solar-panel-efficiency-orange-county':
      return <SolarEfficiencyContent />
    case 'solar-panel-maintenance-los-angeles':
      return <SolarMaintenanceContent />
    case 'exterior-house-washing-orange-county':
      return <ExteriorHouseContent />
    case 'roof-cleaning-los-angeles':
      return <RoofCleaningContent />
    case 'spring-cleaning-orange-county':
      return <SpringCleaningContent />
    case 'fall-property-preparation-los-angeles':
      return <FallPreparationContent />
    case 'restaurant-cleaning-orange-county':
      return <RestaurantCleaningContent />
    case 'office-building-cleaning-san-diego':
      return <OfficeBuildingContent />
    case 'amazing-transformations-orange-county':
      return <AmazingTransformationsContent />
    case 'cleaning-results-showcase-los-angeles':
      return <CleaningResultsContent />
    default:
      return <DefaultContent post={post} />
  }
}

function WindowCleaningContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Orange County's beautiful weather and coastal climate make it a paradise for residents, but they also present unique challenges for maintaining crystal-clear windows. Whether you're in <strong>Costa Mesa</strong>, <strong>Newport Beach</strong>, <strong>Irvine</strong>, or anywhere else in Orange County, professional window cleaning is essential for maintaining your property's appearance and value.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4 font-bold">Why Orange County Properties Need Professional Window Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Coastal Salt Air Challenges</h3>
        <p className="text-gray-700 mb-4">
          The proximity to the Pacific Ocean means properties throughout Orange County deal with salt air deposits that create stubborn spots and film on windows. Cities like <strong>Huntington Beach</strong>, <strong>Newport Beach</strong>, and <strong>Dana Point</strong> are particularly affected by this coastal phenomenon.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Year-Round Sun Exposure</h3>
        <p className="text-gray-700 mb-4">
          Orange County's abundant sunshine means windows are constantly exposed to UV rays, which can cause cleaning solutions to dry too quickly when not applied professionally. This is especially true in inland cities like <strong>Anaheim</strong>, <strong>Santa Ana</strong>, and <strong>Fullerton</strong>.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Seasonal Considerations</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Spring</strong>: Pollen from blooming plants affects all Orange County cities</li>
          <li><strong>Summer</strong>: Increased dust and smog, particularly in <strong>Irvine</strong> and <strong>Tustin</strong></li>
          <li><strong>Fall</strong>: Leaves and debris, especially in tree-lined areas of <strong>Mission Viejo</strong> and <strong>Lake Forest</strong></li>
          <li><strong>Winter</strong>: Rain spots and mineral deposits throughout the region</li>
        </ul>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Professional Window Cleaning Services by Orange County City</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Coastal Communities</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Newport Beach Window Cleaning</strong>: Specializing in salt air removal and high-end residential properties</li>
              <li><strong>Huntington Beach Window Cleaning</strong>: Expert in beachfront property maintenance and commercial storefronts</li>
              <li><strong>Laguna Beach Window Cleaning</strong>: Boutique service for unique architectural styles and art galleries</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Central Orange County</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Costa Mesa Window Cleaning</strong>: Comprehensive residential and commercial services for this business hub</li>
              <li><strong>Irvine Window Cleaning</strong>: Serving planned communities, corporate offices, and modern residential complexes</li>
              <li><strong>Santa Ana Window Cleaning</strong>: Historic building expertise and diverse property types</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">North Orange County</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Anaheim Window Cleaning</strong>: Theme park area expertise and high-volume commercial properties</li>
              <li><strong>Fullerton Window Cleaning</strong>: University area and established neighborhood specialists</li>
              <li><strong>Brea Window Cleaning</strong>: Hills area access and luxury home services</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">What to Expect from Professional Service</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Comprehensive Cleaning Process</h3>
        <ol className="list-decimal pl-6 text-gray-700 mb-6">
          <li><strong>Inspection</strong>: Assessment of window condition and specific challenges</li>
          <li><strong>Preparation</strong>: Protection of landscaping and property</li>
          <li><strong>Cleaning</strong>: Professional-grade solutions and squeegee techniques</li>
          <li><strong>Detail Work</strong>: Screen cleaning, sill wiping, and spot removal</li>
          <li><strong>Final Inspection</strong>: Quality assurance and customer walkthrough</li>
        </ol>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Pricing Factors in Orange County</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Property size and window count</li>
          <li>Accessibility and height requirements</li>
          <li>Frequency of service (one-time vs. recurring)</li>
          <li>Additional services (screens, tracks, sills)</li>
          <li>Location-specific challenges (coastal properties, high-rise buildings)</li>
        </ul>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Choosing the Right Window Cleaning Service in Orange County</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Essential Qualifications</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Licensed and insured in California</li>
          <li>Experience with Orange County's unique challenges</li>
          <li>Professional equipment and eco-friendly solutions</li>
          <li>Positive reviews from local customers</li>
          <li>Transparent pricing and service guarantees</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Questions to Ask</h3>
        <ol className="list-decimal pl-6 text-gray-700 mb-6">
          <li>Do you have experience with coastal salt air challenges?</li>
          <li>What cleaning solutions do you use?</li>
          <li>Are you licensed and insured?</li>
          <li>Do you offer recurring service schedules?</li>
          <li>What's included in your service?</li>
        </ol>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Maintaining Your Windows Between Professional Cleanings</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Orange County-Specific Tips</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Coastal areas</strong>: Rinse windows monthly with fresh water to remove salt deposits</li>
          <li><strong>Inland areas</strong>: Clean screens regularly to prevent dust buildup</li>
          <li><strong>All areas</strong>: Address bird droppings immediately to prevent etching</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">When to Schedule Professional Service</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Residential</strong>: Every 2-3 months for most Orange County homes</li>
          <li><strong>Coastal properties</strong>: Monthly service recommended</li>
          <li><strong>Commercial</strong>: Monthly to quarterly depending on business type</li>
          <li><strong>Special events</strong>: Pre-sale cleaning, holiday preparation</li>
        </ul>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Window Cleaning in Your Orange County City</h2>
        <p className="text-lg mb-4">
          Whether you're in <strong>Costa Mesa</strong>, <strong>Newport Beach</strong>, <strong>Irvine</strong>, <strong>Santa Ana</strong>, <strong>Anaheim</strong>, or any other Orange County city, professional window cleaning enhances your property's appearance, protects your investment, and saves you time.
        </p>
        <p className="text-lg mb-6">
          Ready for crystal-clear windows? Contact Shimmer Shine Property Detailing for professional window cleaning services throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function DefaultContent({ post }: { post: any }) {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        This comprehensive guide covers everything you need to know about {post.category.toLowerCase()} services in Southern California. Our expert team at Shimmer Shine Property Detailing has been serving the region since 1995, and we're sharing our knowledge to help property owners make informed decisions.
      </p>

      <div className="bg-yellow/10 border-l-4 border-yellow p-6">
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Professional service ensures optimal results and safety</li>
          <li>• Local expertise matters in Southern California's unique climate</li>
          <li>• Regular maintenance protects your property investment</li>
          <li>• Quality equipment and techniques make the difference</li>
        </ul>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h3 className="heading-decorative text-2xl text-yellow mb-4">Ready for Professional Service?</h3>
        <p className="text-lg mb-4">
          Don't wait for problems to develop. Contact Shimmer Shine Property Detailing today for expert {post.category.toLowerCase()} services throughout Orange County, Los Angeles County, and San Diego County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function PressureWashingContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los Angeles County's diverse landscape, from coastal <strong>Santa Monica</strong> to inland <strong>Pasadena</strong>, presents unique challenges for property maintenance. Professional pressure washing is essential for keeping driveways, patios, sidewalks, and building exteriors looking their best in this dynamic environment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why LA County Properties Need Professional Pressure Washing</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Urban Pollution and Smog</h3>
        <p className="text-gray-700 mb-4">
          Cities like <strong>Los Angeles</strong>, <strong>Burbank</strong>, and <strong>Glendale</strong> deal with higher levels of air pollution that creates stubborn stains on concrete and building surfaces. Professional pressure washing removes these contaminants effectively without damage.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Diverse Climate Zones</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Coastal areas</strong> (<strong>Manhattan Beach</strong>, <strong>Redondo Beach</strong>, <strong>Venice</strong>): Salt air and marine layer moisture</li>
          <li><strong>Valley areas</strong> (<strong>Van Nuys</strong>, <strong>Sherman Oaks</strong>, <strong>Studio City</strong>): Heat and dust accumulation</li>
          <li><strong>Foothill communities</strong> (<strong>Pasadena</strong>, <strong>La Cañada Flintridge</strong>, <strong>Sierra Madre</strong>): Debris from surrounding mountains</li>
        </ul>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Pressure Washing Services by LA County Region</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Westside Communities</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Beverly Hills Pressure Washing</strong>: Luxury property expertise with attention to high-end materials</li>
              <li><strong>Santa Monica Pressure Washing</strong>: Coastal property specialists dealing with salt air effects</li>
              <li><strong>Manhattan Beach Pressure Washing</strong>: Beachfront home maintenance and sand removal</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">San Gabriel Valley</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Pasadena Pressure Washing</strong>: Historic property care and craftsman home specialists</li>
              <li><strong>Arcadia Pressure Washing</strong>: Upscale residential communities and large estate properties</li>
              <li><strong>Monrovia Pressure Washing</strong>: Foothill area expertise and mountain debris cleanup</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Pressure Washing in Your LA County City</h2>
        <p className="text-lg mb-4">
          Whether you're in <strong>Beverly Hills</strong>, <strong>Santa Monica</strong>, <strong>Los Angeles</strong>, <strong>Pasadena</strong>, <strong>Torrance</strong>, or any other LA County city, professional pressure washing enhances your property's appearance, protects surfaces from damage, and maintains property values.
        </p>
        <p className="text-lg mb-6">
          Ready for a cleaner property? Contact Shimmer Shine Property Detailing for professional pressure washing services throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function GutterCleaningContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          San Diego County's unique climate and geography create specific challenges for gutter maintenance. From coastal <strong>La Jolla</strong> to inland <strong>Escondido</strong>, proper gutter cleaning is essential for protecting your property from water damage and maintaining your investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why San Diego County Gutters Need Special Attention</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Seasonal Rain Patterns</h3>
        <p className="text-gray-700 mb-4">
          San Diego's Mediterranean climate means most rainfall occurs in winter months, making gutter preparation crucial:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Coastal areas</strong> (<strong>Del Mar</strong>, <strong>Solana Beach</strong>, <strong>Encinitas</strong>): Marine layer moisture and sudden downpours</li>
          <li><strong>Inland valleys</strong> (<strong>Escondido</strong>, <strong>Vista</strong>, <strong>San Marcos</strong>): Flash flooding potential during storms</li>
          <li><strong>Mountain areas</strong> (<strong>Julian</strong>, <strong>Pine Valley</strong>): Heavy rainfall and debris accumulation</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Fire Season Considerations</h3>
        <p className="text-gray-700 mb-6">
          Wildfire risk throughout San Diego County makes gutter maintenance critical for ember protection, defensible space, and property protection.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Professional Gutter Services by San Diego County Region</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">North County Coastal</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Encinitas Gutter Cleaning</strong>: Coastal property expertise with salt air considerations</li>
              <li><strong>Carlsbad Gutter Cleaning</strong>: Lagoon area properties and unique drainage challenges</li>
              <li><strong>Del Mar Gutter Cleaning</strong>: High-end residential and equestrian property services</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Central San Diego</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>San Diego Gutter Cleaning</strong>: Urban high-rise and diverse property type expertise</li>
              <li><strong>La Jolla Gutter Cleaning</strong>: Luxury coastal properties and unique architectural styles</li>
              <li><strong>Pacific Beach Gutter Cleaning</strong>: Beach rental and multi-unit property specialists</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Gutter Cleaning in Your San Diego County City</h2>
        <p className="text-lg mb-4">
          Whether you're in <strong>San Diego</strong>, <strong>La Jolla</strong>, <strong>Encinitas</strong>, <strong>Carlsbad</strong>, <strong>Escondido</strong>, or any other San Diego County city, professional gutter cleaning protects your property investment and prevents costly water damage.
        </p>
        <p className="text-lg mb-6">
          Ready for properly functioning gutters? Contact Shimmer Shine Property Detailing for professional gutter cleaning services throughout San Diego County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SolarPanelContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Southern California's abundant sunshine makes it ideal for solar energy, but the region's unique environmental conditions also create challenges for maintaining optimal solar panel performance. From coastal <strong>Newport Beach</strong> to desert-adjacent areas, proper solar panel cleaning is essential for maximizing energy production and protecting your investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Southern California Solar Panels Need Regular Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Environmental Challenges</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Dust and Smog</strong>: Inland areas experience heavy dust accumulation</li>
          <li><strong>Marine Layer</strong>: Coastal communities from <strong>Malibu</strong> to <strong>La Jolla</strong> deal with salt air and moisture deposits</li>
          <li><strong>Wildfire Ash</strong>: Seasonal ash fallout affects panels throughout the region</li>
          <li><strong>Bird Droppings</strong>: Abundant bird populations create efficiency-reducing deposits</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Performance Impact</h3>
        <p className="text-gray-700 mb-6">
          Dirty solar panels can lose 15-25% of their efficiency, directly impacting energy production, financial returns, system lifespan, and warranty compliance.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Regional Cleaning Considerations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Orange County</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Coastal Areas</strong>: Monthly cleaning recommended due to salt air</li>
              <li><strong>Inland Areas</strong>: Bi-monthly cleaning for dust and smog removal</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Los Angeles County</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Westside</strong>: Combined marine and urban pollution challenges</li>
              <li><strong>San Fernando Valley</strong>: Heavy dust accumulation from desert winds</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">San Diego County</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>North County Coastal</strong>: Marine environment requires specialized cleaning</li>
              <li><strong>Central San Diego</strong>: Urban coastal combination challenges</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Solar Panel Cleaning</h2>
        <p className="text-lg mb-4">
          Whether your solar installation is in <strong>Orange County</strong>, <strong>Los Angeles County</strong>, or <strong>San Diego County</strong>, professional cleaning maximizes your energy production, protects your investment, and ensures optimal system performance year-round.
        </p>
        <p className="text-lg mb-6">
          Ready to optimize your solar efficiency? Contact Shimmer Shine Property Detailing for professional solar panel cleaning services throughout Southern California.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function PostConstructionContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Orange County's booming construction industry creates significant cleanup challenges. From new residential developments in <strong>Irvine</strong> to commercial renovations in <strong>Costa Mesa</strong>, professional post-construction cleanup ensures your project is truly complete and ready for occupancy.
        </p>
      </div>

      {/* Featured Image */}
      <div className="my-8">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/post-construction-cleanup-hero.jpg"
            alt="Professional post-construction cleanup service in Orange County showing debris removal and thorough site cleaning"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
            <p className="font-bold text-center">Professional Post-Construction Cleanup in Orange County</p>
            <p className="text-sm text-center opacity-90">Thorough debris removal and site preparation</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Orange County Projects Need Professional Cleanup</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Construction Debris Challenges</h3>
        <p className="text-gray-700 mb-4">
          Orange County's strict building codes and environmental regulations require proper disposal of construction materials. Professional cleanup ensures compliance and safety.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Health and Safety Requirements</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Dust removal</strong> for indoor air quality in occupied buildings</li>
          <li><strong>Hazardous material handling</strong> including paint, adhesives, and solvents</li>
          <li><strong>OSHA compliance</strong> for commercial construction sites</li>
          <li><strong>Proper waste disposal</strong> meeting Orange County environmental standards</li>
        </ul>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Comprehensive Cleanup Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Phase 1: Assessment & Safety</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Site evaluation</strong> for hazards and cleanup requirements</li>
              <li><strong>Safety protocols</strong> establishment and equipment setup</li>
              <li><strong>Waste categorization</strong> for proper disposal methods</li>
              <li><strong>Timeline coordination</strong> with contractors and inspectors</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Phase 2: Deep Cleaning</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Debris removal</strong> including wood, metal, and packaging</li>
              <li><strong>Dust elimination</strong> from all surfaces and HVAC systems</li>
              <li><strong>Window and glass</strong> cleaning inside and outside</li>
              <li><strong>Floor treatment</strong> for all surface types</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Team Image */}
      <div className="my-8">
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/construction-cleanup-workers.jpg"
            alt="Professional construction cleanup team in Orange County removing debris and materials from construction site"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
            <h4 className="font-bold text-lg mb-1">Professional Cleanup Team</h4>
            <p className="text-sm text-gray-200">Expert workers handling construction debris removal and site preparation</p>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Post-Construction Cleanup</h2>
        <p className="text-lg mb-4">
          Whether you're completing a new home in <strong>Irvine</strong>, renovating an office in <strong>Costa Mesa</strong>, or finishing a retail space in <strong>Newport Beach</strong>, professional post-construction cleanup ensures your project is truly complete.
        </p>
        <p className="text-lg mb-6">
          Ready for professional post-construction cleanup? Contact Shimmer Shine Property Detailing for comprehensive construction cleanup services throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Cleanup Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CommercialMaintenanceContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los Angeles County's diverse business landscape demands professional property maintenance services. From high-rise offices in <strong>Downtown Los Angeles</strong> to luxury retail in <strong>Beverly Hills</strong>, maintaining your commercial property's appearance is essential for business success and regulatory compliance.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why LA County Commercial Properties Need Professional Maintenance</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Business Image and First Impressions</h3>
        <p className="text-gray-700 mb-4">
          Your property's exterior is often the first thing clients see. This is especially critical for corporate headquarters in <strong>Century City</strong>, retail storefronts in <strong>Santa Monica</strong> and <strong>Beverly Hills</strong>, restaurant exteriors in <strong>West Hollywood</strong>, and medical facilities throughout Los Angeles County.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Regulatory Compliance</h3>
        <p className="text-gray-700 mb-4">
          LA County has specific requirements including health department standards for restaurants, building code compliance for offices, ADA requirements for accessibility, and environmental regulations for waste and runoff.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Commercial Services by LA County Business District</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Westside Business Centers</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Beverly Hills Commercial Cleaning</strong>: Luxury retail and professional office expertise</li>
              <li><strong>Santa Monica Business Services</strong>: Beachfront commercial and tech company specialists</li>
              <li><strong>Culver City Commercial Maintenance</strong>: Entertainment industry and mixed-use properties</li>
              <li><strong>Century City Office Cleaning</strong>: High-rise corporate headquarters and law firms</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Central & Valley Areas</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Downtown LA Commercial Services</strong>: High-rise office buildings and government facilities</li>
              <li><strong>Hollywood Commercial Cleaning</strong>: Entertainment industry and tourist-facing businesses</li>
              <li><strong>Burbank Commercial Services</strong>: Entertainment studios and aerospace companies</li>
              <li><strong>Glendale Business Cleaning</strong>: Healthcare facilities and corporate offices</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Comprehensive Commercial Cleaning Services</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Exterior Building Maintenance</h3>
        <ol className="list-decimal pl-6 text-gray-700 mb-6">
          <li><strong>Window cleaning</strong> for all building types and heights</li>
          <li><strong>Pressure washing</strong> of sidewalks, parking areas, and building exteriors</li>
          <li><strong>Storefront cleaning</strong> including glass, frames, and signage</li>
          <li><strong>Entrance and lobby</strong> maintenance for professional appearance</li>
        </ol>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Specialized Commercial Services</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>High-rise window cleaning</strong> with specialized equipment and safety protocols</li>
          <li><strong>Restaurant exterior cleaning</strong> including grease removal and health code compliance</li>
          <li><strong>Medical facility cleaning</strong> with attention to hygiene and professional standards</li>
          <li><strong>Retail space maintenance</strong> including display windows and customer areas</li>
        </ul>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Commercial Property Maintenance</h2>
        <p className="text-lg mb-4">
          Whether you operate an office building in <strong>Beverly Hills</strong>, a retail space in <strong>Santa Monica</strong>, or a restaurant in <strong>West Hollywood</strong>, professional property maintenance protects your business image and ensures regulatory compliance.
        </p>
        <p className="text-lg mb-6">
          Ready for professional commercial property maintenance? Contact Shimmer Shine Property Detailing for comprehensive commercial cleaning services throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Commercial Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SeasonalMaintenanceContent() {
  return <DefaultContent post={{ category: "Seasonal Property Maintenance" }} />
}

function EcoFriendlyContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Southern California's environmental consciousness and water conservation needs make eco-friendly property cleaning essential. From <strong>Orange County</strong> to <strong>San Diego County</strong>, sustainable cleaning practices protect both your property and the environment while meeting California's strict environmental regulations.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Eco-Friendly Cleaning Matters in Southern California</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Environmental Protection</h3>
        <p className="text-gray-700 mb-4">Southern California's unique ecosystem requires special consideration:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Ocean protection</strong> from coastal runoff in beach communities like <strong>Newport Beach</strong>, <strong>Santa Monica</strong>, and <strong>La Jolla</strong></li>
          <li><strong>Air quality</strong> improvement through reduced chemical emissions</li>
          <li><strong>Wildlife habitat</strong> preservation in urban-wildland interface areas</li>
          <li><strong>Water resource</strong> conservation in drought-prone regions</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Health and Safety Benefits</h3>
        <p className="text-gray-700 mb-4">Green cleaning practices provide:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Improved indoor air quality</strong> for families and employees</li>
          <li><strong>Reduced chemical exposure</strong> for children and pets</li>
          <li><strong>Allergen reduction</strong> through natural cleaning methods</li>
          <li><strong>Safer work environment</strong> for cleaning professionals</li>
        </ul>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Eco-Friendly Cleaning Methods by Service Type</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">🪟 Window Cleaning</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Pure water systems</strong> that eliminate chemical residue</li>
              <li>• <strong>Biodegradable soaps</strong> for stubborn stains</li>
              <li>• <strong>Microfiber cloths</strong> that reduce waste</li>
              <li>• <strong>Water reclamation</strong> systems for large projects</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">🚿 Pressure Washing</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Hot water cleaning</strong> that reduces chemical needs</li>
              <li>• <strong>Biodegradable degreasers</strong> for oil removal</li>
              <li>• <strong>Surface-specific pressure</strong> to minimize water waste</li>
              <li>• <strong>Containment systems</strong> for runoff management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Eco-Friendly Property Cleaning Services</h2>
        <p className="text-lg mb-4">
          Whether you're committed to environmental stewardship or required to meet green building standards, eco-friendly property cleaning protects both your property and Southern California's unique environment.
        </p>
        <p className="text-lg mb-6">
          Ready for sustainable property cleaning? Contact Shimmer Shine Property Detailing for eco-friendly cleaning services throughout <strong>Orange County</strong>, <strong>Los Angeles County</strong>, and <strong>San Diego County</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Eco-Friendly Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

interface BlogPostProps {
  params: {
    slug: string
  }
}

// Blog posts data (same as in blog page)
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
    image: "/blog/pressure-washing-los-angeles.jpg",
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
    image: "/blog/gutter-cleaning-san-diego.jpg",
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
    image: "/blog/solar-panel-cleaning-california.jpg",
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

export async function generateMetadata({ params }: BlogPostProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found."
    }
  }

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    type: "article",
    publishedTime: post.publishedAt,
    author: post.author,
    tags: post.tags,
    image: post.image,
    url: `/blog/${post.slug}`
  })
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="retro-badge mb-6">
              {post.category}
            </div>
            
            <h1 className="heading-primary text-4xl md:text-6xl mb-6 leading-tight text-white">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-lg text-gray-200 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            <p className="body-text text-xl text-gray-100 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={`/blog/${post.slug}.jpg`}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link href="/blog" className="inline-flex items-center text-navy hover:text-yellow transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-white rounded-lg shadow-retro p-8 mb-8">
                <BlogContent post={post} />
              </div>
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="heading-primary text-3xl md:text-4xl text-center mb-12">
              Related Articles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="retro-card hover:shadow-retro transition-all duration-300 group">
                  <CardHeader>
                    <div className="retro-badge mb-3 text-xs">
                      {relatedPost.category}
                    </div>
                    <CardTitle className="heading-primary text-lg leading-tight">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-navy transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="body-text text-sm text-gray-700 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm" className="group-hover:bg-navy group-hover:text-white transition-colors">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// New blog content components for additional posts
function ResidentialWindowContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          San Diego County's coastal climate and year-round sunshine make clean windows essential for homeowners. From luxury homes in <strong>La Jolla</strong> to family residences in <strong>Encinitas</strong>, professional window cleaning enhances your home's beauty and protects your investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why San Diego County Homes Need Professional Window Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Coastal Climate Challenges</h3>
        <p className="text-gray-700 mb-4">
          San Diego's unique coastal environment creates specific challenges:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Salt air deposits</strong> from ocean proximity in communities like <strong>Del Mar</strong> and <strong>Solana Beach</strong></li>
          <li><strong>Marine layer moisture</strong> that attracts dust and pollen</li>
          <li><strong>Year-round pollen</strong> from diverse plant life</li>
          <li><strong>Hard water mineral deposits</strong> from irrigation systems</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Property Value Protection</h3>
        <p className="text-gray-700 mb-6">
          Clean windows significantly impact your home's curb appeal, natural light penetration, energy efficiency, and resale value when selling or refinancing.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Residential Window Cleaning by San Diego Region</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">North County Coastal</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>La Jolla</strong>: Luxury home expertise with architectural details</li>
              <li><strong>Del Mar</strong>: Beachfront property specialists</li>
              <li><strong>Encinitas</strong>: Family-friendly eco-conscious service</li>
              <li><strong>Solana Beach</strong>: Coastal property maintenance</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Central San Diego Areas</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Mission Valley</strong>: Condo and townhome specialists</li>
              <li><strong>Hillcrest</strong>: Historic home care</li>
              <li><strong>Normal Heights</strong>: Craftsman home expertise</li>
              <li><strong>University City</strong>: Family neighborhoods</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Residential Window Cleaning</h2>
        <p className="text-lg mb-4">
          Whether you own a beachfront home in <strong>La Jolla</strong>, a family residence in <strong>Encinitas</strong>, or a condo in <strong>Mission Valley</strong>, professional window cleaning enhances your living experience and protects your property investment.
        </p>
        <p className="text-lg mb-6">
          Ready for sparkling clean windows? Contact Shimmer Shine Property Detailing for expert residential window cleaning services throughout San Diego County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Window Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CommercialWindowContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los Angeles County's diverse business landscape demands professional window cleaning services that understand commercial requirements. From high-rise offices in <strong>Downtown LA</strong> to luxury retail in <strong>Beverly Hills</strong>, maintaining clean windows is essential for business success and professional image.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why LA County Businesses Need Professional Window Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Business Image and First Impressions</h3>
        <p className="text-gray-700 mb-4">
          Your building's windows are often the first thing clients see. This is especially critical for corporate headquarters in <strong>Century City</strong>, retail storefronts in <strong>Santa Monica</strong>, and medical facilities throughout Los Angeles County.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Regulatory Compliance</h3>
        <p className="text-gray-700 mb-6">
          Commercial properties must meet building code requirements, health department standards, professional licensing standards, and insurance requirements.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Commercial Window Cleaning by LA County Business District</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Westside Business Centers</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Beverly Hills</strong>: Luxury retail and high-end office expertise</li>
              <li><strong>Santa Monica</strong>: Beachfront commercial specialists</li>
              <li><strong>Culver City</strong>: Entertainment industry properties</li>
              <li><strong>Century City</strong>: High-rise corporate headquarters</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Central LA Business Areas</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Downtown LA</strong>: High-rise office buildings</li>
              <li><strong>Hollywood</strong>: Entertainment industry specialists</li>
              <li><strong>Mid-Wilshire</strong>: Professional buildings</li>
              <li><strong>Koreatown</strong>: Dense commercial areas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Commercial Window Cleaning</h2>
        <p className="text-lg mb-4">
          Whether you manage an office building in <strong>Beverly Hills</strong>, operate a retail store in <strong>Santa Monica</strong>, or run a restaurant in <strong>West Hollywood</strong>, professional window cleaning maintains your business image and ensures regulatory compliance.
        </p>
        <p className="text-lg mb-6">
          Ready for professional commercial window cleaning? Contact Shimmer Shine Property Detailing for comprehensive commercial window services throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Commercial Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function DrivewayPressureContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Orange County's diverse residential communities, from coastal <strong>Huntington Beach</strong> to inland <strong>Irvine</strong>, require specialized driveway pressure washing services. Professional cleaning removes years of buildup, restores curb appeal, and protects your property investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Orange County Driveways Need Professional Pressure Washing</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Climate-Specific Challenges</h3>
        <p className="text-gray-700 mb-4">
          Orange County's unique environment creates specific driveway issues:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Salt air corrosion</strong> in coastal areas like <strong>Newport Beach</strong> and <strong>Laguna Beach</strong></li>
          <li><strong>Oil and automotive stains</strong> from daily vehicle use</li>
          <li><strong>Organic growth</strong> from moisture and mild temperatures</li>
          <li><strong>Hard water mineral deposits</strong> from irrigation and rain runoff</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Property Value Impact</h3>
        <p className="text-gray-700 mb-6">
          Clean driveways significantly affect curb appeal, property values, HOA compliance, and safety through improved traction and visibility.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Driveway Materials and Cleaning Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Concrete Driveways</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Standard concrete</strong>: High-pressure cleaning with surface cleaners</li>
              <li><strong>Stamped concrete</strong>: Gentle pressure protecting patterns</li>
              <li><strong>Colored concrete</strong>: pH-neutral cleaners preserving color</li>
              <li><strong>Sealed concrete</strong>: Maintenance cleaning extending sealer life</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="heading-primary text-lg text-gray-800 font-semibold bg-gray-50 px-2 py-1 rounded mb-3">Specialty Surfaces</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Asphalt driveways</strong>: Lower pressure preventing damage</li>
              <li><strong>Paver driveways</strong>: Individual cleaning with sand replacement</li>
              <li><strong>Stone surfaces</strong>: Expert care with sealing recommendations</li>
              <li><strong>Interlocking pavers</strong>: Weed prevention treatments</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Driveway Pressure Washing</h2>
        <p className="text-lg mb-4">
          From coastal homes in <strong>Newport Beach</strong> to family neighborhoods in <strong>Irvine</strong>, professional driveway pressure washing enhances your property's appearance, increases safety, and protects your investment.
        </p>
        <p className="text-lg mb-6">
          Ready for a cleaner driveway? Contact Shimmer Shine Property Detailing for expert driveway pressure washing services throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Driveway Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ConcretePressureContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          San Diego County's year-round outdoor living culture makes clean concrete surfaces essential for homeowners and businesses. From pool decks in <strong>Carlsbad</strong> to commercial sidewalks in <strong>Chula Vista</strong>, professional concrete pressure washing restores beauty and ensures safety.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why San Diego County Concrete Needs Professional Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Outdoor Living Culture</h3>
        <p className="text-gray-700 mb-4">
          San Diego's lifestyle demands clean outdoor spaces for pool decks and patios, outdoor dining areas, walkways and sidewalks, and commercial entrances.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Environmental Factors</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Coastal salt air</strong> causing surface deterioration in <strong>Oceanside</strong> and <strong>Carlsbad</strong></li>
          <li><strong>Hard water mineral deposits</strong> from irrigation systems</li>
          <li><strong>Organic growth</strong> from mild, humid conditions</li>
          <li><strong>UV exposure</strong> causing surface degradation</li>
        </ul>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Concrete Pressure Washing</h2>
        <p className="text-lg mb-4">
          Whether you need driveway cleaning in <strong>Carlsbad</strong>, commercial sidewalk maintenance in <strong>Chula Vista</strong>, or patio restoration in <strong>Oceanside</strong>, professional concrete pressure washing enhances safety, appearance, and property value.
        </p>
        <p className="text-lg mb-6">
          Ready for pristine concrete surfaces? Contact Shimmer Shine Property Detailing for expert concrete pressure washing services throughout San Diego County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Concrete Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function GutterRepairContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Orange County's Mediterranean climate and occasional heavy rains make proper gutter maintenance crucial for homeowners. From family neighborhoods in <strong>Anaheim</strong> to luxury communities in <strong>Costa Mesa</strong>, professional gutter care prevents costly water damage and protects your investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Orange County Homes Need Professional Gutter Maintenance</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Climate-Specific Challenges</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Seasonal heavy rains</strong> that overwhelm clogged gutters</li>
          <li><strong>Dry periods</strong> allowing debris accumulation</li>
          <li><strong>Santa Ana winds</strong> depositing leaves and debris</li>
          <li><strong>Coastal moisture</strong> promoting organic growth</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Water Damage Prevention</h3>
        <p className="text-gray-700 mb-6">
          Proper gutter function protects foundation integrity, landscape preservation, exterior paint and siding, and interior spaces from leaks.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Gutter Services</h2>
        <p className="text-lg mb-4">
          From coastal homes in <strong>Newport Beach</strong> to family neighborhoods in <strong>Anaheim</strong>, professional gutter maintenance protects your property from water damage and ensures proper drainage year-round.
        </p>
        <p className="text-lg mb-6">
          Ready for reliable gutter care? Contact Shimmer Shine Property Detailing for comprehensive gutter cleaning, repair, and maintenance services throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Gutter Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function GutterInstallationContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los Angeles County's diverse architecture and varied weather patterns require professional gutter installation and replacement services. From historic homes in <strong>Pasadena</strong> to modern residences in <strong>Beverly Hills</strong>, proper gutter systems protect your property investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why LA County Homes Need Professional Gutter Installation</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Diverse Architecture Challenges</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Historic craftsman homes</strong> in <strong>Pasadena</strong> need period-appropriate materials</li>
          <li><strong>Modern luxury homes</strong> in <strong>Beverly Hills</strong> require custom aesthetic solutions</li>
          <li><strong>Mid-century modern</strong> properties need sleek, minimal designs</li>
          <li><strong>Mediterranean revival</strong> homes require traditional styling</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Climate Considerations</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Intense rainfall</strong> during El Niño years requiring high-capacity systems</li>
          <li><strong>Long dry periods</strong> requiring UV-resistant materials</li>
          <li><strong>Santa Ana winds</strong> demanding secure installation</li>
          <li><strong>Seismic activity</strong> requiring flexible mounting systems</li>
        </ul>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Gutter Installation</h2>
        <p className="text-lg mb-4">
          Whether you're building a new home in <strong>Beverly Hills</strong>, replacing aging gutters in <strong>Pasadena</strong>, or upgrading your system in <strong>Torrance</strong>, professional gutter installation protects your property and enhances functionality.
        </p>
        <p className="text-lg mb-6">
          Ready for a proper gutter system? Contact Shimmer Shine Property Detailing for expert gutter installation and replacement services throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Installation Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SolarEfficiencyContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Orange County leads California in solar adoption, with thousands of homes in <strong>Irvine</strong>, <strong>Mission Viejo</strong>, and <strong>Newport Beach</strong> investing in renewable energy. Professional solar panel cleaning and maintenance are essential for maximizing your system's efficiency and protecting your investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Orange County Solar Panels Need Regular Maintenance</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Environmental Factors</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Coastal salt air</strong> in <strong>Newport Beach</strong> and <strong>Huntington Beach</strong></li>
          <li><strong>Dust and smog</strong> from urban areas reducing light transmission</li>
          <li><strong>Bird droppings</strong> from seagulls and local wildlife</li>
          <li><strong>Pollen and organic debris</strong> from year-round plant growth</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Financial Impact</h3>
        <p className="text-gray-700 mb-6">
          Unmaintained solar panels can lose 15-25% efficiency, costing $500-2000 annually in lost energy production, warranty coverage, and reduced system lifespan.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Optimize Your Solar Efficiency</h2>
        <p className="text-lg mb-4">
          Whether you have a residential system in <strong>Irvine</strong>, a luxury installation in <strong>Newport Beach</strong>, or a commercial array in <strong>Costa Mesa</strong>, professional solar panel cleaning maximizes your investment and energy production.
        </p>
        <p className="text-lg mb-6">
          Ready to optimize your solar efficiency? Contact Shimmer Shine Property Detailing for expert solar panel cleaning and maintenance services throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Solar Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SolarMaintenanceContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los Angeles County's massive solar adoption, from luxury homes in <strong>Beverly Hills</strong> to family residences in <strong>Glendale</strong>, requires professional maintenance to ensure optimal performance. Proper care protects your investment and maximizes energy production in America's solar capital.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why LA County Solar Systems Need Professional Maintenance</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Urban Environment Challenges</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Air pollution and smog</strong> reducing efficiency in <strong>Downtown LA</strong> and <strong>Pasadena</strong></li>
          <li><strong>Construction dust</strong> from ongoing development projects</li>
          <li><strong>Vehicle emissions</strong> creating film on panels near busy streets</li>
          <li><strong>Industrial particles</strong> affecting systems near manufacturing</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Diverse Climate Zones</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Coastal areas</strong> dealing with salt air corrosion</li>
          <li><strong>Valley regions</strong> managing heat stress and dust</li>
          <li><strong>Foothill communities</strong> handling mountain debris</li>
          <li><strong>Desert edges</strong> managing extreme temperature variations</li>
        </ul>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Solar Panel Maintenance</h2>
        <p className="text-lg mb-4">
          Whether you have a residential system in <strong>Beverly Hills</strong>, a commercial installation in <strong>Burbank</strong>, or a community solar project in <strong>Glendale</strong>, professional maintenance maximizes your solar investment and energy production.
        </p>
        <p className="text-lg mb-6">
          Ready to optimize your solar performance? Contact Shimmer Shine Property Detailing for comprehensive solar panel maintenance and cleaning services throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Solar Maintenance Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExteriorHouseContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Orange County homeowners from <strong>Anaheim</strong> to <strong>Yorba Linda</strong> understand the importance of maintaining their home's exterior appearance. Professional house washing removes years of dirt, pollution, and organic growth, restoring your home's beauty and protecting your investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Orange County Homes Need Professional Exterior Washing</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Environmental Factors</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Air pollution</strong> from nearby freeways and urban areas</li>
          <li><strong>Coastal moisture</strong> promoting mildew and organic growth</li>
          <li><strong>Dust accumulation</strong> from construction and wind patterns</li>
          <li><strong>UV damage</strong> from intense California sunshine</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Property Protection</h3>
        <p className="text-gray-700 mb-6">
          Regular house washing provides paint preservation, siding protection, curb appeal enhancement, and preventive maintenance identifying issues before costly repairs.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Exterior House Washing</h2>
        <p className="text-lg mb-4">
          Whether you own a historic home in <strong>Fullerton</strong>, a modern residence in <strong>Yorba Linda</strong>, or a family home in <strong>Anaheim</strong>, professional exterior house washing enhances your property's appearance and protects your investment.
        </p>
        <p className="text-lg mb-6">
          Ready for a beautifully clean home exterior? Contact Shimmer Shine Property Detailing for expert house washing services throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free House Washing Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function RoofCleaningContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los Angeles County's diverse architectural styles and microclimates create unique roof maintenance challenges. From Spanish tile roofs in <strong>Pasadena</strong> to modern flat roofs in <strong>Hollywood</strong>, professional roof cleaning extends system life and maintains property value.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why LA County Roofs Need Professional Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Climate and Environmental Factors</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Smog and air pollution</strong> creating acidic deposits on roof surfaces</li>
          <li><strong>Coastal moisture</strong> promoting organic growth</li>
          <li><strong>Temperature extremes</strong> from Valley heat to coastal cooling</li>
          <li><strong>Santa Ana winds</strong> depositing debris and causing stress</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Roof Material Preservation</h3>
        <p className="text-gray-700 mb-6">
          Regular cleaning protects tile roofs from organic growth, asphalt shingles from granule loss, metal roofing from corrosion, and flat roofs from membrane degradation.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Roof Cleaning</h2>
        <p className="text-lg mb-4">
          Whether you have a Spanish tile roof in <strong>Pasadena</strong>, a modern flat roof in <strong>Hollywood</strong>, or a traditional shingle roof in <strong>Torrance</strong>, professional roof cleaning protects your investment and enhances your home's appearance.
        </p>
        <p className="text-lg mb-6">
          Ready for a cleaner, healthier roof? Contact Shimmer Shine Property Detailing for expert roof cleaning and maintenance services throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Roof Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SpringCleaningContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Spring in Orange County brings renewed energy and the perfect opportunity for comprehensive property cleaning. From coastal homes in <strong>Newport Beach</strong> to family neighborhoods in <strong>Tustin</strong>, professional spring cleaning services restore your property's beauty after winter and prepare for the active outdoor season ahead.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Orange County Properties Need Professional Spring Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Post-Winter Restoration</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Dust and debris</strong> accumulation from rare winter storms</li>
          <li><strong>Pollen buildup</strong> from early blooming trees and plants</li>
          <li><strong>Salt air residue</strong> on coastal properties</li>
          <li><strong>Organic growth</strong> from increased moisture</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Preparation for Active Season</h3>
        <p className="text-gray-700 mb-6">
          Spring cleaning prepares for outdoor entertaining, pool opening, garden season, and property showcasing for potential sales or refinancing.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Spring Cleaning</h2>
        <p className="text-lg mb-4">
          Whether you're preparing a coastal home in <strong>Newport Beach</strong> for entertaining season, refreshing a family residence in <strong>Irvine</strong> for outdoor activities, or maintaining a luxury property in <strong>Costa Mesa</strong>, professional spring cleaning services restore beauty and prepare your property for the year ahead.
        </p>
        <p className="text-lg mb-6">
          Ready for a fresh, clean start to spring? Contact Shimmer Shine Property Detailing for comprehensive spring cleaning services throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Spring Cleaning Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function FallPreparationContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Fall in Los Angeles County marks the transition from summer heat to winter rains, making it the ideal time for comprehensive property preparation. From hillside homes in <strong>Calabasas</strong> to urban properties in <strong>West Hollywood</strong>, professional fall maintenance protects your investment and prepares for seasonal challenges.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why LA County Properties Need Fall Preparation</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Seasonal Weather Transition</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Summer damage</strong> from heat, UV exposure, and heavy use</li>
          <li><strong>Debris accumulation</strong> from deciduous trees and landscaping</li>
          <li><strong>Fire season</strong> preparation with clean gutters and vegetation</li>
          <li><strong>Winter rain</strong> preparation ensuring proper drainage</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Property Protection</h3>
        <p className="text-gray-700 mb-6">
          Fall maintenance prevents water damage, fire hazards, winter damage, and emergency repairs during challenging weather.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Fall Preparation</h2>
        <p className="text-lg mb-4">
          Whether you're preparing a hillside home in <strong>Calabasas</strong> for fire season, a family residence in <strong>Culver City</strong> for winter rains, or a luxury property in <strong>West Hollywood</strong> for holiday entertaining, professional fall preparation protects your investment.
        </p>
        <p className="text-lg mb-6">
          Ready for comprehensive fall property preparation? Contact Shimmer Shine Property Detailing for expert fall cleaning and preparation services throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Fall Prep Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function RestaurantCleaningContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Orange County's vibrant dining scene, from beachfront restaurants in <strong>Huntington Beach</strong> to upscale establishments in <strong>Newport Beach</strong>, requires professional exterior cleaning services. Maintaining clean exteriors ensures health code compliance, attracts customers, and protects your business investment.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why Orange County Restaurants Need Professional Exterior Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Health Code Compliance</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Grease removal</strong> from exhaust areas and dumpster zones</li>
          <li><strong>Pest prevention</strong> through elimination of food residue</li>
          <li><strong>Sanitary conditions</strong> around food preparation areas</li>
          <li><strong>Professional appearance</strong> meeting public health standards</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Customer Attraction</h3>
        <p className="text-gray-700 mb-6">
          Clean restaurant exteriors provide positive first impressions, social media appeal, neighborhood integration, and brand representation reflecting quality and attention to detail.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Restaurant Cleaning</h2>
        <p className="text-lg mb-4">
          Whether you operate a beachfront restaurant in <strong>Huntington Beach</strong>, an upscale establishment in <strong>Newport Beach</strong>, or a family dining location in <strong>Costa Mesa</strong>, professional exterior cleaning ensures health compliance and attracts customers.
        </p>
        <p className="text-lg mb-6">
          Ready for professional restaurant exterior cleaning? Contact Shimmer Shine Property Detailing for specialized food service cleaning throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Restaurant Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function OfficeBuildingContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          San Diego County's thriving business environment, from downtown <strong>San Diego</strong> high-rises to suburban office parks in <strong>Escondido</strong>, requires professional exterior cleaning services. Maintaining clean office buildings ensures tenant satisfaction, attracts quality businesses, and protects property investments.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Why San Diego County Office Buildings Need Professional Cleaning</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Business Image and Tenant Attraction</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Tenant retention</strong> in competitive commercial real estate market</li>
          <li><strong>Lease rates</strong> maximization through premium presentation</li>
          <li><strong>Business attraction</strong> drawing quality companies</li>
          <li><strong>Professional reputation</strong> reflecting management quality</li>
        </ul>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Property Value Protection</h3>
        <p className="text-gray-700 mb-6">
          Regular cleaning maintains building materials, architectural features, HVAC efficiency, and investment value protecting owner equity and return on investment.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Professional Office Building Cleaning</h2>
        <p className="text-lg mb-4">
          Whether you manage a high-rise in <strong>downtown San Diego</strong>, an office park in <strong>Escondido</strong>, or a professional building in <strong>Chula Vista</strong>, professional exterior cleaning maintains tenant satisfaction and protects your commercial real estate investment.
        </p>
        <p className="text-lg mb-6">
          Ready for professional office building cleaning? Contact Shimmer Shine Property Detailing for comprehensive commercial cleaning services throughout San Diego County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Commercial Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function AmazingTransformationsContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Nothing demonstrates the power of professional cleaning like dramatic before and after results. From neglected driveways in <strong>Costa Mesa</strong> to weathered commercial buildings in <strong>Anaheim</strong>, these transformations showcase how professional cleaning services can completely revitalize Orange County properties.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Residential Transformation Success Stories</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Costa Mesa Family Home Revival</h3>
        <p className="text-gray-700 mb-4">
          <strong>The Challenge:</strong> A family home with 5 years of accumulated dirt, oil stains on the driveway, and windows obscured by hard water spots.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>The Results:</strong> Complete property transformation increasing curb appeal by an estimated 40% and preparing the home for successful sale above asking price.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Newport Beach Luxury Home Restoration</h3>
        <p className="text-gray-700 mb-6">
          Oceanfront property with severe salt air damage completely restored through specialized marine-environment cleaning, bringing back luxury appeal and protecting significant oceanfront real estate investment.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Your Own Amazing Transformation</h2>
        <p className="text-lg mb-4">
          Whether you want to revitalize a family home in <strong>Irvine</strong>, restore a commercial property in <strong>Costa Mesa</strong>, or prepare a luxury residence in <strong>Newport Beach</strong> for sale, professional cleaning services can create dramatic transformations.
        </p>
        <p className="text-lg mb-6">
          Ready for your own amazing before and after transformation? Contact Shimmer Shine Property Detailing for comprehensive cleaning services that deliver dramatic results throughout Orange County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Transformation Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CleaningResultsContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los Angeles County's diverse properties, from Beverly Hills mansions to Santa Monica beach houses, showcase the incredible transformative power of professional cleaning. These real before and after results demonstrate why property owners throughout LA County trust professional services for dramatic improvements.
        </p>
      </div>

      <div>
        <h2 className="heading-primary text-2xl text-gray-900 font-bold bg-yellow/20 p-3 rounded-lg border-l-4 border-yellow mb-4">Luxury Property Transformations</h2>
        
        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Beverly Hills Estate Restoration</h3>
        <p className="text-gray-700 mb-4">
          <strong>The Challenge:</strong> Multi-million dollar estate with years of smog damage, stained marble surfaces, and deteriorated outdoor entertaining areas.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>The Results:</strong> Complete estate transformation worthy of architectural photography, increased property value, and restored luxury living experience.
        </p>

        <h3 className="heading-primary text-xl text-gray-800 font-semibold bg-gray-100 px-3 py-2 rounded border-l-4 border-navy mb-3">Santa Monica Beachfront Revival</h3>
        <p className="text-gray-700 mb-6">
          Oceanfront property with severe salt air damage completely restored through marine environment cleaning, restoring million-dollar views and protecting significant coastal real estate investment.
        </p>
      </div>

      <div className="bg-navy text-white p-6 rounded-lg">
        <h2 className="heading-decorative text-2xl text-yellow mb-4">Get Your Own Amazing Transformation</h2>
        <p className="text-lg mb-4">
          Whether you want to revitalize a historic home in <strong>Pasadena</strong>, restore a beachfront property in <strong>Santa Monica</strong>, or enhance a commercial building in <strong>Glendale</strong>, professional cleaning services create dramatic transformations.
        </p>
        <p className="text-lg mb-6">
          Ready to see what professional cleaning can do for your property? Contact Shimmer Shine Property Detailing for comprehensive cleaning services that deliver amazing before and after results throughout Los Angeles County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-a-quote">
            <Button size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              Get Free Transformation Quote
            </Button>
          </Link>
          <Link href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-navy">
              Call {BUSINESS_INFO.phone}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
