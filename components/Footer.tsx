import Link from "next/link"
import Image from "next/image"
import { BUSINESS_INFO, SITE_CONFIG, SERVICES } from "@/lib/constants"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white border-t-4 border-yellow">
      {/* Mobile Footer - Simplified */}
      <div className="block md:hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-6">
            {/* Logo and Company Name */}
            <div className="flex items-center justify-center space-x-3">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Shimmer Shine Property Detailing"
                  fill
                  className="object-contain"
                  sizes="64px"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="heading-primary text-navy text-lg font-bold leading-tight">
                  Shimmer Shine<br />
                  <span className="text-yellow">Property Detailing</span>
                </h3>
              </div>
            </div>
            
            {/* Essential Contact */}
            <div className="space-y-3">
              <Link 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="flex items-center justify-center space-x-3 bg-navy text-white rounded-lg p-4 hover:bg-navy/90 transition-colors"
              >
                <Phone className="h-5 w-5 text-yellow" />
                <span className="font-bold text-lg">{BUSINESS_INFO.phone}</span>
              </Link>
              
              <Link 
                href="/get-a-quote"
                className="block bg-yellow text-navy px-6 py-4 rounded-lg font-bold text-center hover:bg-yellow/90 transition-colors text-lg"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-navy font-bold">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
              <p className="text-gray-600 text-sm">Licensed & Insured • 5-Star Rated</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <Link 
                href={SITE_CONFIG.links.facebook} 
                className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-yellow hover:bg-navy/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href={SITE_CONFIG.links.instagram} 
                className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-yellow hover:bg-navy/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href={SITE_CONFIG.links.yelp} 
                className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-yellow hover:bg-navy/90 transition-colors"
                aria-label="Yelp Reviews"
              >
                <Star className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-16 h-16">
                  <Image
                    src="/logo.png"
                    alt="Shimmer Shine Property Detailing"
                    fill
                    className="object-contain"
                    sizes="64px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="heading-primary text-navy text-xl font-bold leading-tight">
                    Shimmer Shine<br />
                    <span className="text-yellow">Property Detailing</span>
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Professional property detailing services with old-school quality and modern reliability. Serving Orange County since 2021.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <Link href={`tel:${BUSINESS_INFO.phone}`} className="text-navy hover:text-yellow transition-colors font-medium">
                    {BUSINESS_INFO.phone}
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <Link href={`mailto:${BUSINESS_INFO.email}`} className="text-navy hover:text-yellow transition-colors font-medium">
                    {BUSINESS_INFO.email}
                  </Link>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center mt-0.5">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                  <div className="text-navy">
                    <p className="font-medium">{BUSINESS_INFO.address.street}</p>
                    <p className="text-gray-600">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zipCode}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Link 
                  href={SITE_CONFIG.links.facebook} 
                  className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-yellow hover:bg-navy/90 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link 
                  href={SITE_CONFIG.links.instagram} 
                  className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-yellow hover:bg-navy/90 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link 
                  href={SITE_CONFIG.links.yelp} 
                  className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-yellow hover:bg-navy/90 transition-colors"
                  aria-label="Yelp Reviews"
                >
                  <Star className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="heading-primary text-navy text-lg font-bold border-b-2 border-yellow pb-2">
                Our Services
              </h4>
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-gray-600 hover:text-navy transition-colors font-medium flex items-center space-x-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full group-hover:scale-125 transition-transform"></div>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h4 className="heading-primary text-navy text-lg font-bold border-b-2 border-yellow pb-2">
                Service Areas
              </h4>
              <ul className="space-y-2">
                {BUSINESS_INFO.cities.slice(0, 8).map((city) => (
                  <li key={city}>
                    <Link 
                      href={`/cities/${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-navy transition-colors font-medium flex items-center space-x-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full group-hover:scale-125 transition-transform"></div>
                      <span>{city}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                href="/service-areas" 
                className="inline-flex items-center space-x-2 text-yellow hover:text-navy transition-colors font-bold group"
              >
                <span>View All Areas</span>
                <div className="transform group-hover:translate-x-1 transition-transform">→</div>
              </Link>
            </div>

            {/* Business Hours & Credentials */}
            <div className="space-y-4">
              <h4 className="heading-primary text-navy text-lg font-bold border-b-2 border-yellow pb-2">
                Business Hours
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow" />
                  <div>
                    <p className="text-navy font-medium text-sm">Mon-Fri</p>
                    <p className="text-gray-600 text-xs">7:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow" />
                  <div>
                    <p className="text-navy font-medium text-sm">Saturday</p>
                    <p className="text-gray-600 text-xs">8:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow" />
                  <div>
                    <p className="text-navy font-medium text-sm">Sunday</p>
                    <p className="text-gray-600 text-xs">Closed</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-navy text-center rounded-lg p-3">
                  <p className="text-yellow font-bold text-sm">Licensed & Insured</p>
                  <p className="text-white text-xs">Since 2021</p>
                </div>
                <div className="bg-yellow text-center rounded-lg p-3">
                  <p className="text-navy font-bold text-sm">5-Star Rated</p>
                  <p className="text-navy text-xs">Trusted Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-600">
              <p className="text-center sm:text-left text-sm">
                © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Bringing the shine back to life, one property at a time.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link href="/gallery" className="text-gray-600 hover:text-navy transition-colors text-sm">
                Gallery
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-navy transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-navy transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-navy transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
