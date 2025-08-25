import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  location: string
  service: string
  image: string
  description: string
  category: string
}

interface GalleryPreviewProps {
  title?: string
  subtitle?: string
  items?: GalleryItem[]
  showViewAll?: boolean
  className?: string
}

const defaultItems: GalleryItem[] = [
  {
    id: 1,
    title: "Newport Beach Oceanfront",
    location: "Newport Beach, CA",
    service: "Window Cleaning",
    image: "/window-cleaning-before-after.png",
    description: "Crystal clear windows restored from salt air damage",
    category: "WINDOW CLEANING"
  },
  {
    id: 2,
    title: "Anaheim Hills Estate",
    location: "Anaheim Hills, CA", 
    service: "Pressure Washing",
    image: "/pressure-washing-before-after.png",
    description: "Concrete driveway restored from years of stains",
    category: "PRESSURE WASHING"
  },
  {
    id: 3,
    title: "Costa Mesa Construction",
    location: "Costa Mesa, CA",
    service: "Post-Construction Cleanup", 
    image: "/post-construction-cleanup-hero.jpg",
    description: "Complete site cleanup and debris removal",
    category: "POST-CONSTRUCTION"
  }
]

export default function GalleryPreview({ 
  title = "Amazing Transformations",
  subtitle = "See the dramatic before and after results from our professional cleaning services",
  items = defaultItems,
  showViewAll = true,
  className = ""
}: GalleryPreviewProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-primary text-3xl md:text-4xl mb-4">
            {title}
          </h2>
          <p className="body-text text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {items.map((item) => (
            <Card key={item.id} className="retro-card overflow-hidden hover:shadow-retro-yellow transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.service} transformation in ${item.location}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-yellow text-navy px-2 py-1 rounded text-xs font-bold">
                  {item.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="heading-primary text-lg text-navy mb-2">{item.title}</h4>
                <p className="body-text text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link href="/gallery">
              <Button variant="retro" size="lg" className="text-lg px-8 py-4">
                View Complete Gallery
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
