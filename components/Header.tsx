"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"
import { Menu, X, Phone, MapPin } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

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
          <div className="grid grid-cols-3 items-center -my-4 lg:-my-2">
            
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
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 hover:scale-105 transition-transform">
                  <Image
                    src="/logo.png"
                    alt="Shimmer Shine Property Detailing - Professional Window Cleaning, Pressure Washing & Solar Panel Cleaning Orange County"
                    title="Shimmer Shine Property Detailing - Licensed & Insured Cleaning Services Orange County"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 176px"
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
            <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
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

      {/* Mobile Navigation Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white shadow-2xl min-h-screen overflow-y-auto">
            {/* Close Button Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">SS</span>
                </div>
                <span className="font-bold text-navy text-lg">Menu</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            
            <nav className="px-4 py-6 space-y-4">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block w-full text-left text-gray-800 hover:text-navy hover:bg-gray-50 font-semibold py-4 px-4 rounded-lg border border-gray-100 hover:border-navy/20 transition-all duration-200 text-lg tracking-wide min-h-[56px] flex items-center touch-manipulation ${
                        item.name === 'Get Quote' ? 'hidden' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <div className="w-2 h-2 bg-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center justify-center space-x-3 text-navy mb-3">
                    <Phone className="h-5 w-5 text-yellow" />
                    <span className="font-bold text-xl">{BUSINESS_INFO.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 text-base">
                    <MapPin className="h-4 w-4 text-yellow" />
                    <span>Orange County, LA & San Diego</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-4 pt-3">
                  <Link href="/get-a-quote" onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] border-2 border-navy text-lg py-5 rounded-xl min-h-[60px]"
                    >
                      <span className="mr-3 text-xl">🌟</span>
                      GET FREE QUOTE
                    </Button>
                  </Link>
                  <Link href={`tel:${BUSINESS_INFO.phone}`} onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all duration-200 hover:scale-[1.02] text-lg py-5 rounded-xl min-h-[60px]"
                    >
                      <Phone className="h-6 w-6 mr-3" />
                      CALL NOW
                    </Button>
                  </Link>
                </div>

                {/* Service Highlights */}
                <div className="bg-navy/5 rounded-xl p-5 border border-navy/10">
                  <div className="text-center">
                    <div className="text-navy font-bold text-base mb-3">🏆 Why Choose Us?</div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow text-lg">✓</span>
                        <span>Licensed & Insured</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow text-lg">✓</span>
                        <span>Same Day Service</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow text-lg">✓</span>
                        <span>500+ 5-Star Reviews</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow text-lg">✓</span>
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
