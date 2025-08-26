import Link from "next/link"
import Image from "next/image"
import { BUSINESS_INFO, SITE_CONFIG, SERVICES } from "@/lib/constants"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-gradient-to-br from-navy via-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC107' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section with CTA */}
        <div className="border-b border-white/10 bg-gradient-to-r from-yellow/10 to-transparent">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h2 className="heading-primary text-2xl sm:text-3xl lg:text-4xl mb-4 text-white" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
                Ready for That Classic Shine?
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers across Orange County. Get your free quote today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/get-a-quote"
                  className="bg-yellow text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Link>
                <Link 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center space-x-2 text-yellow hover:text-white transition-colors text-lg font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  <span>{BUSINESS_INFO.phone}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-16 h-16 bg-white/10 rounded-xl p-2 backdrop-blur-sm">
                  <Image
                    src="/logo.png"
                    alt="Shimmer Shine Property Detailing - Best Window Cleaning & Pressure Washing Orange County Since 2021"
                    title="Professional Property Cleaning Services Orange County - Licensed & Insured"
                    fill
                    className="object-contain brightness-0 invert p-1"
                    sizes="64px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="heading-primary text-white text-xl font-bold leading-tight">
                    Shimmer Shine<br />
                    <span className="text-yellow">Property Detailing</span>
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed">
                Professional property detailing services with old-school quality and modern reliability. Serving Orange County since 2021.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-yellow/30 transition-colors">
                    <Phone className="h-5 w-5 text-yellow" />
                  </div>
                  <Link href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-yellow transition-colors font-medium">
                    {BUSINESS_INFO.phone}
                  </Link>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-yellow/30 transition-colors">
                    <Mail className="h-5 w-5 text-yellow" />
                  </div>
                  <Link href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-yellow transition-colors font-medium">
                    {BUSINESS_INFO.email}
                  </Link>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-yellow/30 transition-colors mt-0.5">
                    <MapPin className="h-5 w-5 text-yellow" />
                  </div>
                  <div className="text-white">
                    <p className="font-medium">{BUSINESS_INFO.address.street}</p>
                    <p className="text-gray-300">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zipCode}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <Link 
                  href={SITE_CONFIG.links.facebook} 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-yellow hover:bg-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link 
                  href={SITE_CONFIG.links.instagram} 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-yellow hover:bg-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link 
                  href={SITE_CONFIG.links.yelp} 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-yellow hover:bg-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="Yelp Reviews"
                >
                  <Star className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="heading-primary text-white text-xl mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-gray-300 hover:text-yellow transition-colors font-medium flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-yellow/60 rounded-full group-hover:bg-yellow transition-colors"></div>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div className="space-y-6">
              <h4 className="heading-primary text-white text-xl mb-6 relative">
                Service Areas
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {BUSINESS_INFO.cities.slice(0, 8).map((city) => (
                  <li key={city}>
                    <Link 
                      href={`/cities/${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-300 hover:text-yellow transition-colors font-medium flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-yellow/60 rounded-full group-hover:bg-yellow transition-colors"></div>
                      <span>{city}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                href="/service-areas" 
                className="inline-flex items-center space-x-2 text-yellow hover:text-white transition-colors font-semibold group"
              >
                <span>View All Areas</span>
                <div className="transform group-hover:translate-x-1 transition-transform">→</div>
              </Link>
            </div>

            {/* Business Hours & Credentials */}
            <div className="space-y-6">
              <h4 className="heading-primary text-white text-xl mb-6 relative">
                Business Hours
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow rounded-full"></div>
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Mon-Fri</p>
                    <p className="text-gray-300 text-sm">7:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Saturday</p>
                    <p className="text-gray-300 text-sm">8:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Sunday</p>
                    <p className="text-gray-300 text-sm">Closed</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="bg-gradient-to-r from-yellow/20 to-yellow/10 border border-yellow/30 rounded-lg p-3 text-center">
                  <p className="text-yellow font-bold text-sm">Licensed & Insured</p>
                  <p className="text-white text-xs">Professional Service Since 2021</p>
                </div>
                <div className="bg-gradient-to-r from-yellow/20 to-yellow/10 border border-yellow/30 rounded-lg p-3 text-center">
                  <p className="text-yellow font-bold text-sm">5-Star Rated Service</p>
                  <p className="text-white text-xs">Trusted by Thousands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
                <p className="text-center sm:text-left">
                  © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
                </p>
                <p className="text-sm text-gray-400">
                  Bringing the shine back to life, one property at a time.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                <Link href="/gallery" className="text-gray-300 hover:text-yellow transition-colors text-sm font-medium">
                  Gallery
                </Link>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-yellow transition-colors text-sm font-medium">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-yellow transition-colors text-sm font-medium">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-300 hover:text-yellow transition-colors text-sm font-medium">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
