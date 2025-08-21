import Link from "next/link"
import Image from "next/image"
import { BUSINESS_INFO, SITE_CONFIG, SERVICES } from "@/lib/constants"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Shimmer Shine Property Detailing Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="heading-primary text-white text-lg font-bold">
                  Shimmer Shine Property Detailing
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Professional property detailing services with old-school quality and modern reliability.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-yellow" />
                <Link href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-yellow">
                  {BUSINESS_INFO.phone}
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-yellow" />
                <Link href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-yellow">
                  {BUSINESS_INFO.email}
                </Link>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-yellow mt-0.5" />
                <div>
                  <p>{BUSINESS_INFO.address.street}</p>
                  <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zipCode}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href={SITE_CONFIG.links.facebook} 
                className="text-gray-300 hover:text-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href={SITE_CONFIG.links.instagram} 
                className="text-gray-300 hover:text-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href={SITE_CONFIG.links.yelp} 
                className="text-gray-300 hover:text-yellow transition-colors"
                aria-label="Yelp Reviews"
              >
                <Star className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-primary text-white text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-gray-300 hover:text-yellow text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="heading-primary text-white text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {BUSINESS_INFO.cities.slice(0, 8).map((city) => (
                <li key={city}>
                  <Link 
                    href={`/cities/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-yellow text-sm transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              href="/service-areas" 
              className="text-yellow text-sm hover:underline"
            >
              View All Areas →
            </Link>
          </div>

          {/* Business Hours & Info */}
          <div>
            <h4 className="heading-primary text-white text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow" />
                <span className="text-gray-300">Mon-Fri: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow" />
                <span className="text-gray-300">Saturday: 8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow" />
                <span className="text-gray-300">Sunday: Closed</span>
              </div>
            </div>

            <div className="mt-4 space-y-1">
              <div className="retro-badge text-xs">
                Licensed & Insured
              </div>
              <div className="retro-badge text-xs">
                500+ 5-Star Reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-400 bg-navy-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-yellow">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-yellow">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-yellow">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
