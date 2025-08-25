import { getPageSEO } from "@/lib/seo"
import { getLocalBusinessSchema } from "@/lib/schema"
import { BUSINESS_INFO } from "@/lib/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Camera, 
  Star, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar
} from "lucide-react"

export const metadata = {
  title: "Gallery - Before & After Results | Shimmer Shine Property Detailing",
  description: "View our amazing before and after results from window cleaning, pressure washing, and property detailing services across Orange County, Los Angeles, and San Diego.",
  keywords: "before after gallery, window cleaning results, pressure washing before after, property detailing gallery, Orange County cleaning results, Los Angeles pressure washing, San Diego window cleaning",
  openGraph: {
    title: "Gallery - Before & After Results | Shimmer Shine Property Detailing",
    description: "View our amazing before and after results from window cleaning, pressure washing, and property detailing services across Orange County, Los Angeles, and San Diego.",
    url: "https://shimmershinepd.com/gallery",
    images: [
      {
        url: "https://shimmershinepd.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Shimmer Shine Property Detailing Gallery"
      }
    ]
  }
}

const galleryCategories = [
  {
    id: "window-cleaning",
    name: "Window Cleaning",
    description: "Crystal clear transformations",
    icon: "/interior window cleaning icon.png",
    iconType: "image",
    items: [
      {
        id: 1,
        title: "House Siding & Window Cleaning",
        location: "Orange County, CA",
        service: "Combined Siding & Window Cleaning",
        beforeImage: "/Before%20and%20After%20images/House%20siding%20&%20window%20wash.jpg",
        afterImage: "/Before%20and%20After%20images/House%20siding%20&%20window%20wash.jpg",
        description: "Professional siding and window cleaning combination service"
      },
      {
        id: 2,
        title: "Commercial Window Cleaning - Los Angeles",
        location: "Los Angeles County, CA", 
        service: "Commercial Window Cleaning",
        beforeImage: "/blog/commercial-window-cleaning-los-angeles.jpg",
        afterImage: "/blog/commercial-window-cleaning-los-angeles.jpg",
        description: "Professional commercial window cleaning for office buildings"
      },
      {
        id: 3,
        title: "Residential Window Cleaning - San Diego",
        location: "San Diego County, CA",
        service: "Residential Window Cleaning",
        beforeImage: "/blog/residential-window-cleaning-san-diego.jpg", 
        afterImage: "/blog/residential-window-cleaning-san-diego.jpg",
        description: "Professional residential window cleaning services"
      },
      {
        id: 4,
        title: "Window Cleaning Guide - Orange County",
        location: "Orange County, CA",
        service: "Professional Window Cleaning",
        beforeImage: "/blog/window-cleaning-orange-county-guide.jpg", 
        afterImage: "/blog/window-cleaning-orange-county-guide.jpg",
        description: "Complete window cleaning service for Orange County properties"
      }
    ]
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    description: "Dramatic surface restoration",
    icon: "/pressure washing icon.png",
    iconType: "image",
    items: [
      {
        id: 4,
        title: "Concrete Driveway Restoration",
        location: "Orange County, CA",
        service: "Driveway Pressure Washing",
        beforeImage: "/Before%20and%20After%20images/big%20concrete%20pressure%20wash%20for%20driveway.jpg",
        afterImage: "/Before%20and%20After%20images/big%20concrete%20pressure%20wash%20for%20driveway.jpg",
        description: "Heavily stained concrete driveway restored to like-new condition"
      },
      {
        id: 5,
        title: "Backyard Concrete Patio",
        location: "Los Angeles County, CA",
        service: "Patio Pressure Washing", 
        beforeImage: "/Before%20and%20After%20images/backyard%20concrete%20patio%20pressure%20washing%20.jpg",
        afterImage: "/Before%20and%20After%20images/backyard%20concrete%20patio%20pressure%20washing%20.jpg",
        description: "Algae and dirt-covered patio completely revitalized"
      },
      {
        id: 6,
        title: "Brick Wall Restoration",
        location: "San Diego County, CA",
        service: "Brick Pressure Washing",
        beforeImage: "/Before%20and%20After%20images/brick%20wall%20pressure%20wash%205.jpg",
        afterImage: "/Before%20and%20After%20images/brick%20wall%20pressure%20wash%205.jpg",
        description: "Weather-stained brick wall professionally restored"
      },
      {
        id: 7,
        title: "Stone Walkway Cleaning",
        location: "Orange County, CA",
        service: "Stone Pressure Washing",
        beforeImage: "/Before%20and%20After%20images/Stone%20walkway%20pressure%20wash%204.jpg",
        afterImage: "/Before%20and%20After%20images/Stone%20walkway%20pressure%20wash%204.jpg",
        description: "Moss and algae removed from stone walkway"
      },
      {
        id: 8,
        title: "Tennis Court Restoration",
        location: "Los Angeles County, CA",
        service: "Sports Surface Cleaning",
        beforeImage: "/Before%20and%20After%20images/tenniss%20court%20pressure%20washing.jpg",
        afterImage: "/Before%20and%20After%20images/tenniss%20court%20pressure%20washing.jpg",
        description: "Professional tennis court surface cleaning and restoration"
      },
      {
        id: 9,
        title: "Storefront Concrete Cleaning",
        location: "San Diego County, CA",
        service: "Commercial Pressure Washing",
        beforeImage: "/Before%20and%20After%20images/storefront%20concrete%20pressure%20washing.jpg",
        afterImage: "/Before%20and%20After%20images/storefront%20concrete%20pressure%20washing.jpg",
        description: "Commercial storefront concrete professionally cleaned"
      }
    ]
  },
  {
    id: "house-washing",
    name: "House Washing & Soft Wash",
    description: "Complete exterior home restoration",
    icon: "/House Washing Icon.png",
    iconType: "image",
    items: [
      {
        id: 10,
        title: "Full House Soft Wash",
        location: "Orange County, CA",
        service: "House Soft Washing",
        beforeImage: "/Before%20and%20After%20images/Full%20house%20soft%20wash.jpg",
        afterImage: "/Before%20and%20After%20images/Full%20house%20soft%20wash.jpg",
        description: "Complete exterior house cleaning with gentle soft wash technique"
      },
      {
        id: 11,
        title: "House Siding & Window Cleaning",
        location: "Los Angeles County, CA",
        service: "Siding & Window Wash",
        beforeImage: "/Before%20and%20After%20images/House%20siding%20&%20window%20wash.jpg",
        afterImage: "/Before%20and%20After%20images/House%20siding%20&%20window%20wash.jpg",
        description: "Professional siding and window cleaning combination service"
      },
      {
        id: 12,
        title: "Stone House Soft Wash",
        location: "San Diego County, CA",
        service: "Stone Siding Cleaning",
        beforeImage: "/Before%20and%20After%20images/Stone%20house%20soft%20wash.jpg",
        afterImage: "/Before%20and%20After%20images/Stone%20house%20soft%20wash.jpg",
        description: "Delicate stone siding cleaned with specialized soft wash methods"
      },
      {
        id: 13,
        title: "House Roof Cleaning",
        location: "Orange County, CA",
        service: "Roof Soft Washing",
        beforeImage: "/Before%20and%20After%20images/house%20roof%20wash.jpg",
        afterImage: "/Before%20and%20After%20images/house%20roof%20wash.jpg",
        description: "Professional roof cleaning to remove algae and stains"
      },
      {
        id: 14,
        title: "Metal Roof Restoration",
        location: "Los Angeles County, CA",
        service: "Metal Roof Cleaning",
        beforeImage: "/Before%20and%20After%20images/Metal%20roof%20pressure%20wash.jpg",
        afterImage: "/Before%20and%20After%20images/Metal%20roof%20pressure%20wash.jpg",
        description: "Metal roof professionally cleaned and restored"
      }
    ]
  },
  {
    id: "deck-restoration",
    name: "Deck Restoration",
    description: "Wood deck cleaning and restoration",
    icon: "/House Washing Icon.png",
    iconType: "image",
    items: [
      {
        id: 15,
        title: "Wood Deck Restoration",
        location: "Orange County, CA",
        service: "Deck Cleaning & Staining",
        beforeImage: "/Before%20and%20After%20images/Wood%20deck%20wash%20and%20stain.jpg",
        afterImage: "/Before%20and%20After%20images/Wood%20deck%20wash%20and%20stain.jpg",
        description: "Complete wood deck restoration with cleaning and staining"
      },
      {
        id: 16,
        title: "Backyard Deck Pressure Wash",
        location: "Los Angeles County, CA",
        service: "Deck Pressure Washing",
        beforeImage: "/Before%20and%20After%20images/backyard%20wood%20deck%20pressure%20wash%204.jpg",
        afterImage: "/Before%20and%20After%20images/backyard%20wood%20deck%20pressure%20wash%204.jpg",
        description: "Weather-damaged deck restored with professional pressure washing"
      },
      {
        id: 17,
        title: "Wood Deck Soft Wash",
        location: "San Diego County, CA",
        service: "Gentle Deck Cleaning",
        beforeImage: "/Before%20and%20After%20images/Wood%20deck%20soft%20wash%203.jpg",
        afterImage: "/Before%20and%20After%20images/Wood%20deck%20soft%20wash%203.jpg",
        description: "Delicate wood deck cleaned with soft wash technique"
      },
      {
        id: 18,
        title: "Wood Fence Restoration",
        location: "Orange County, CA",
        service: "Fence Cleaning & Restoration",
        beforeImage: "/Before%20and%20After%20images/wood%20fence%20restoration.jpg",
        afterImage: "/Before%20and%20After%20images/wood%20fence%20restoration.jpg",
        description: "Wood fence professionally cleaned and restored"
      }
    ]
  },
  {
    id: "post-construction",
    name: "Post-Construction Cleanup",
    description: "Complete site transformation",
    icon: "/House Washing Icon.png",
    iconType: "image",
    items: [
      {
        id: 7,
        title: "Orange County Construction Site",
        location: "Costa Mesa, CA",
        service: "Post-Construction Cleanup",
        beforeImage: "/PostContructioncleanup2.jpg",
        afterImage: "/Post%20construction%20cleanup.jpg",
        description: "Complete post-construction cleanup and site preparation"
      },
      {
        id: 8,
        title: "Commercial Construction Cleanup",
        location: "Orange County, CA",
        service: "Commercial Post-Construction",
        beforeImage: "/Post%20Construction%20Cleanup2.jpeg",
        afterImage: "/Post%20Construction%20Cleanup2.jpeg",
        description: "Professional commercial construction site cleanup and preparation"
      },
      {
        id: 9,
        title: "Residential Construction Cleanup",
        location: "Los Angeles County, CA",
        service: "Residential Post-Construction",
        beforeImage: "/Post%20Construction%20Cleanup3.jpeg",
        afterImage: "/Post%20Construction%20Cleanup3.jpeg",
        description: "Complete residential construction cleanup and debris removal"
      }
    ]
  },
  {
    id: "gutter-cleaning",
    name: "Gutter Cleaning",
    description: "Professional gutter maintenance",
    icon: "/Gutter Cleaning icon.png",
    iconType: "image",
    items: [
      {
        id: 19,
        title: "Residential Gutter Cleaning",
        location: "Orange County, CA",
        service: "Gutter Cleaning & Maintenance",
        beforeImage: "/Before%20and%20After%20images/Gutter%20clean.jpg",
        afterImage: "/Before%20and%20After%20images/Gutter%20clean.jpg",
        description: "Professional gutter cleaning and debris removal"
      },
      {
        id: 20,
        title: "Commercial Gutter Cleaning",
        location: "Los Angeles County, CA",
        service: "Commercial Gutter Maintenance",
        beforeImage: "/clean-gutter.jpg",
        afterImage: "/clean-gutter.jpg",
        description: "Professional commercial gutter cleaning and maintenance"
      },
      {
        id: 21,
        title: "Gutter Cleaning Before & After",
        location: "San Diego County, CA",
        service: "Complete Gutter Restoration",
        beforeImage: "/gutter-cleaning-before-after.jpg",
        afterImage: "/gutter-cleaning-before-after.jpg",
        description: "Complete gutter cleaning transformation with debris removal"
      }
    ]
  },
  {
    id: "solar-panel",
    name: "Solar Panel Cleaning", 
    description: "Efficiency restoration",
    icon: "/Solar panel cleaning icon.png",
    iconType: "image",
    items: [
      {
        id: 20,
        title: "Southern California Solar Panel Cleaning",
        location: "Orange County, CA",
        service: "Solar Panel Cleaning",
        beforeImage: "/blog/solar-panel-cleaning-southern-california.jpg",
        afterImage: "/blog/solar-panel-cleaning-southern-california.jpg",
        description: "Professional solar panel cleaning to maximize energy efficiency"
      },
      {
        id: 21,
        title: "Los Angeles Solar Panel Maintenance",
        location: "Los Angeles County, CA", 
        service: "Solar Panel Maintenance",
        beforeImage: "/blog/solar-panel-maintenance-los-angeles.jpg",
        afterImage: "/blog/solar-panel-maintenance-los-angeles.jpg",
        description: "Regular solar panel maintenance for optimal performance"
      },
      {
        id: 22,
        title: "Orange County Solar Efficiency",
        location: "Orange County, CA",
        service: "Solar Panel Efficiency Restoration",
        beforeImage: "/blog/solar-panel-efficiency-orange-county.jpg",
        afterImage: "/blog/solar-panel-efficiency-orange-county.jpg",
        description: "Solar panel efficiency restoration through professional cleaning"
      }
    ]
  }
]

export default function GalleryPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="retro-badge mb-6">
              Before & After Results
            </div>
            
            <h1 className="heading-decorative text-5xl md:text-7xl text-yellow mb-6">
              Our Gallery
            </h1>
            
            <h2 className="heading-primary text-2xl md:text-3xl text-white mb-6">
              See the Dramatic Difference Professional Cleaning Makes
            </h2>
            
            <p className="body-text text-xl text-gray-100 leading-relaxed mb-8">
              Real before and after results from our professional cleaning services across Orange County, Los Angeles, and San Diego. These transformations showcase the quality and attention to detail that has made us Southern California's trusted choice since 2021.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow">100%</div>
                <div className="text-sm text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow">4+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-a-quote">
                <Button variant="retro" size="lg" className="text-lg px-8 py-4">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy">
                  Call {BUSINESS_INFO.phone}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      {galleryCategories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                {category.iconType === "image" ? (
                  <Image
                    src={category.icon}
                    alt={`${category.name} icon`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                ) : (
                  <div className="text-6xl">{category.icon}</div>
                )}
              </div>
              <h3 className="heading-primary text-3xl md:text-4xl mb-4">
                {category.name}
              </h3>
              <p className="body-text text-xl text-gray-600">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <Card key={item.id} className="retro-card hover:shadow-retro-yellow transition-all duration-300 group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    {/* Combined Before/After Image */}
                    <div className="relative h-full">
                      <Image
                        src={item.beforeImage}
                        alt={`${item.title} - ${item.service} before and after results`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        BEFORE
                      </div>
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="heading-primary text-lg text-navy">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="retro-badge text-xs">
                        {item.service}
                      </div>
                      <p className="body-text text-sm text-gray-700">
                        {item.description}
                      </p>
                      <Link href="/get-a-quote">
                        <Button variant="outline" className="w-full group-hover:bg-yellow group-hover:text-navy transition-colors">
                          Get Similar Results
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
      ))}

      {/* Featured Projects Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="heading-decorative text-4xl md:text-5xl text-yellow mb-4">
              Featured Transformations
            </h3>
            <p className="body-text text-xl text-gray-100 max-w-3xl mx-auto">
              Our most dramatic before and after results from across Southern California
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Window Cleaning Showcase */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/window-cleaning-before-after.png"
                    alt="Dramatic window cleaning transformation in Newport Beach showing crystal clear results"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                  <div className="absolute top-4 left-4 bg-yellow text-navy px-3 py-1 rounded-lg font-bold text-sm">
                    FEATURED PROJECT
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-arvo font-bold text-yellow text-lg">Newport Beach Oceanfront Home</h4>
                  <p className="text-sm text-gray-300">Professional window cleaning restoration</p>
                </div>
              </div>
            </div>

            {/* Pressure Washing Showcase */}
            <div className="relative">
              <div className="polaroid-frame">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/pressure-washing-before-after.png"
                    alt="Dramatic pressure washing transformation in Anaheim Hills showing concrete restoration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                  <div className="absolute top-4 left-4 bg-yellow text-navy px-3 py-1 rounded-lg font-bold text-sm">
                    FEATURED PROJECT
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-arvo font-bold text-yellow text-lg">Anaheim Hills Estate Driveway</h4>
                  <p className="text-sm text-gray-300">Professional pressure washing restoration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Post-Construction Showcase */}
          <div className="max-w-4xl mx-auto">
            <div className="polaroid-frame">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/PostContructioncleanup2.jpg"
                  alt="Professional post-construction cleanup transformation in Orange County showing complete debris removal and site preparation"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={90}
                />
                <div className="absolute top-4 left-4 bg-yellow text-navy px-3 py-1 rounded-lg font-bold text-sm">
                  LATEST PROJECT
                </div>
              </div>
              <div className="text-center mt-4">
                <h4 className="font-arvo font-bold text-yellow text-xl">Orange County Construction Site</h4>
                <p className="text-gray-300">Complete post-construction cleanup and site preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              Results Across Southern California
            </h3>
            <p className="body-text text-xl text-gray-600">
              Professional cleaning services with consistent results in every community we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Orange County */}
            <Card className="retro-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">OC</span>
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Orange County
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="body-text text-sm text-gray-700">
                    From luxury homes in Newport Beach to commercial properties in Costa Mesa, we deliver exceptional results throughout Orange County.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Projects Completed:</span>
                      <span className="font-bold text-navy">200+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cities Served:</span>
                      <span className="font-bold text-navy">35+</span>
                    </div>
                  </div>
                  <Link href="/cities">
                    <Button variant="outline" className="w-full text-xs">
                      View OC Cities
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Los Angeles County */}
            <Card className="retro-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">LA</span>
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  Los Angeles County
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="body-text text-sm text-gray-700">
                    From Beverly Hills estates to Santa Monica beachfront properties, we provide premium cleaning services throughout LA County.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Projects Completed:</span>
                      <span className="font-bold text-navy">180+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cities Served:</span>
                      <span className="font-bold text-navy">25+</span>
                    </div>
                  </div>
                  <Link href="/cities">
                    <Button variant="outline" className="w-full text-xs">
                      View LA Cities
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* San Diego County */}
            <Card className="retro-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">SD</span>
                </div>
                <CardTitle className="heading-primary text-xl text-navy">
                  San Diego County
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="body-text text-sm text-gray-700">
                    From La Jolla coastal homes to downtown San Diego commercial buildings, we deliver consistent quality throughout San Diego County.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Projects Completed:</span>
                      <span className="font-bold text-navy">120+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cities Served:</span>
                      <span className="font-bold text-navy">18+</span>
                    </div>
                  </div>
                  <Link href="/cities">
                    <Button variant="outline" className="w-full text-xs">
                      View SD Cities
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials with Gallery Context */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="heading-primary text-3xl md:text-4xl mb-4">
              What Our Customers Say About These Results
            </h3>
            <p className="body-text text-xl text-gray-600">
              Real reviews from the projects featured in our gallery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="retro-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow fill-current" />
                  ))}
                </div>
                <CardTitle className="heading-primary text-lg">
                  Sarah M.
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Newport Beach • Window Cleaning
                </p>
              </CardHeader>
              <CardContent>
                <p className="body-text text-gray-700 italic">
                  "The before and after difference was incredible! Our oceanfront windows look crystal clear again. Professional service from start to finish."
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow fill-current" />
                  ))}
                </div>
                <CardTitle className="heading-primary text-lg">
                  Mike R.
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Anaheim Hills • Pressure Washing
                </p>
              </CardHeader>
              <CardContent>
                <p className="body-text text-gray-700 italic">
                  "My driveway looked hopeless with years of oil stains. Shimmer Shine made it look brand new! Amazing transformation."
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow fill-current" />
                  ))}
                </div>
                <CardTitle className="heading-primary text-lg">
                  Jennifer L.
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Costa Mesa • Post-Construction
                </p>
              </CardHeader>
              <CardContent>
                <p className="body-text text-gray-700 italic">
                  "After our kitchen renovation, the construction mess was overwhelming. They cleaned everything perfectly - we could move right in!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="heading-decorative text-4xl md:text-5xl text-navy mb-6">
            Ready for Your Own Amazing Results?
          </h3>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-4xl mx-auto">
            Join the hundreds of satisfied customers featured in our gallery. Experience the Shimmer Shine difference with professional cleaning services that deliver dramatic, lasting results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href="/get-a-quote">
              <Button variant="retro-navy" size="lg" className="text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all">
                Get Your Free Quote Today
              </Button>
            </Link>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-yellow text-yellow hover:bg-yellow hover:text-navy shadow-lg">
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
