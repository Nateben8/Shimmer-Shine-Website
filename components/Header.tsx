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
                <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 hover:scale-105 transition-transform">
                  <Image
                    src="/logo.png"
                    alt="Shimmer Shine Logo"
                    fill
                    className="object-contain"
                    priority
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
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-6 bg-white">
              <nav className="space-y-6">
                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-4">
                  {navigation.slice(0, 4).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-center text-gray-800 hover:text-navy font-bold py-4 px-6 rounded-lg border-2 border-gray-200 hover:border-navy transition-all text-sm uppercase tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link href="/get-a-quote">
                    <Button variant="default" size="lg" className="w-full bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse border-2 border-navy">
                      GET FREE QUOTE
                    </Button>
                  </Link>
                  <Link href={`tel:${BUSINESS_INFO.phone}`}>
                    <Button variant="outline" size="lg" className="w-full border-2 border-navy text-navy font-bold">
                      <Phone className="h-5 w-5 mr-2" />
                      CALL {BUSINESS_INFO.phone}
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
