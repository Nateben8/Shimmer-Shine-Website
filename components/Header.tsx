"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"
import { Menu, X, Phone, MapPin } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Get Quote", href: "/get-a-quote" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white py-1 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3 text-yellow" />
              <span>{BUSINESS_INFO.phone}</span>
            </div>
            <div className="hidden md:block">
              <span>Licensed & Insured • 500+ 5-Star Reviews</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin className="h-3 w-3 text-yellow" />
            <span>Serving Orange County, LA & San Diego</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-0">
          <div className="grid grid-cols-3 items-center -my-2">
            
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide"
              >
                HOME
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide"
              >
                SERVICES
              </Link>
              <Link
                href="/gallery"
                className="text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide"
              >
                GALLERY
              </Link>
            </div>

            {/* Centered Logo */}
            <div className="flex justify-center col-span-3 lg:col-span-1">
              <Link href="/" className="block">
                <div className="relative w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 hover:scale-105 transition-transform">
                  <Image
                    src="/logo.png"
                    alt="Shimmer Shine Property Detailing - Professional Window Cleaning, Pressure Washing & Solar Panel Cleaning Orange County"
                    title="Shimmer Shine Property Detailing - Licensed & Insured Cleaning Services Orange County"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
                  />
                </div>
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center justify-end space-x-8">
              <Link
                href="/about"
                className="text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide"
              >
                ABOUT
              </Link>
              <Link
                href="/blog"
                className="text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide"
              >
                BLOG
              </Link>
              <Link href="/get-a-quote">
                <Button variant="default" size="lg" className="bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse border-2 border-navy">
                  GET QUOTE
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-navy" />
                ) : (
                  <Menu className="h-6 w-6 text-navy" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-200 bg-white shadow-lg">
              <nav className="px-4 py-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block w-full text-left text-gray-800 hover:text-navy hover:bg-gray-50 font-semibold py-4 px-6 rounded-xl border border-gray-100 hover:border-navy/20 transition-all duration-200 text-base tracking-wide transform hover:scale-[1.02] ${
                        item.name === 'Get Quote' ? 'hidden' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <div className="w-2 h-2 bg-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-center space-x-2 text-navy mb-2">
                    <Phone className="h-4 w-4 text-yellow" />
                    <span className="font-bold text-lg">{BUSINESS_INFO.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                    <MapPin className="h-3 w-3 text-yellow" />
                    <span>Orange County, LA & San Diego</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <Link href="/get-a-quote" onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] border-2 border-navy text-base py-4 rounded-xl"
                    >
                      <span className="mr-2">🌟</span>
                      GET FREE QUOTE
                    </Button>
                  </Link>
                  <Link href={`tel:${BUSINESS_INFO.phone}`} onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all duration-200 hover:scale-[1.02] text-base py-4 rounded-xl"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      CALL NOW
                    </Button>
                  </Link>
                </div>

                {/* Service Highlights */}
                <div className="bg-navy/5 rounded-xl p-4 border border-navy/10">
                  <div className="text-center">
                    <div className="text-navy font-bold text-sm mb-2">🏆 Why Choose Us?</div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow">✓</span>
                        <span>Licensed & Insured</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow">✓</span>
                        <span>Same Day Service</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow">✓</span>
                        <span>500+ 5-Star Reviews</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow">✓</span>
                        <span>Free Estimates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
