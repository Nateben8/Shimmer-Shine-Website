"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { Menu, X, Phone, MapPin } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Get Quote", href: "/get-a-quote" },
  ];

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-2 lg:py-0">
          <div className="grid grid-cols-3 items-center -my-2 lg:-my-2">
            
            {/* Left Navigation - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="heading-primary text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide">
                HOME
              </Link>
              <Link href="/services" className="heading-primary text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide">
                SERVICES
              </Link>
              <Link href="/gallery" className="heading-primary text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide">
                GALLERY
              </Link>
            </div>

            {/* Mobile Logo - Left Side */}
            <div className="lg:hidden flex justify-start">
              <Link href="/" className="block">
                <div className="relative w-28 h-28 hover:scale-105 transition-transform">
                  <Image
                    src="/logo.png"
                    alt="Shimmer Shine Property Detailing Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="112px"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Logo - Centered */}
            <div className="hidden lg:flex justify-center col-span-1">
              <Link href="/" className="block">
                <div className="relative w-44 h-44 hover:scale-105 transition-transform">
                  <Image
                    src="/logo.png"
                    alt="Shimmer Shine Property Detailing Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="176px"
                  />
                </div>
              </Link>
            </div>

            {/* Right Navigation - Desktop Only */}
            <div className="hidden lg:flex items-center justify-end space-x-8">
              <Link href="/about" className="heading-primary text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide">
                ABOUT
              </Link>
              <Link href="/blog" className="heading-primary text-gray-800 hover:text-navy font-bold transition-colors text-lg tracking-wide">
                BLOG
              </Link>
              <Link href="/get-a-quote">
                <Button variant="default" size="lg" className="heading-primary bg-yellow hover:bg-yellow/90 font-bold text-navy shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-navy">
                  GET QUOTE
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Right Side */}
            <div className="lg:hidden flex justify-end col-span-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <span className="heading-primary text-navy font-bold text-base tracking-wide">Menu</span>
                {isMenuOpen ? (
                  <X className="h-7 w-7 text-navy" />
                ) : (
                  <Menu className="h-7 w-7 text-navy" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-gradient-to-br from-navy to-navy-700 shadow-2xl h-full flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-yellow/20 bg-navy/90 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Shimmer Shine Property Detailing Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="heading-primary font-bold text-yellow text-xl tracking-wide">MENU</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-yellow/20 transition-colors border border-yellow/30"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-yellow" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <nav className="px-6 py-8 space-y-6">
              <div className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block w-full text-left font-bold py-5 px-6 rounded-xl border-2 transition-all duration-200 text-xl tracking-wide min-h-[64px] flex items-center touch-manipulation shadow-lg hover:shadow-xl ${
                      item.name === 'Get Quote' 
                        ? 'bg-yellow text-navy hover:bg-yellow/90 hover:text-navy border-yellow shadow-lg' 
                        : 'bg-white/10 text-yellow hover:text-navy hover:bg-yellow border-yellow/30 hover:border-yellow'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="heading-primary">{item.name.toUpperCase()}</span>
                      <div className={`w-3 h-3 rounded-full opacity-60 ${
                        item.name === 'Get Quote' ? 'bg-navy' : 'bg-yellow'
                      }`}></div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="bg-yellow/10 rounded-xl p-6 border-2 border-yellow/30 shadow-lg">
                <div className="flex items-center justify-center space-x-3 text-white mb-4">
                  <Phone className="h-6 w-6 text-yellow" />
                  <span className="heading-primary font-bold text-2xl">{BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-200 text-lg">
                  <MapPin className="h-5 w-5 text-yellow" />
                  <span className="body-text">Orange County, LA & San Diego</span>
                </div>
              </div>
              
              <div className="bg-yellow/5 rounded-xl p-6 border-2 border-yellow/20 shadow-lg mb-8">
                <div className="text-center">
                  <div className="heading-decorative text-yellow font-bold text-xl mb-4">Why Choose Us?</div>
                  <div className="grid grid-cols-1 gap-4 text-base text-gray-200">
                    <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-3">
                      <span className="text-yellow text-xl">★</span>
                      <span className="body-text font-semibold">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-3">
                      <span className="text-yellow text-xl">⚡</span>
                      <span className="body-text font-semibold">Same Day Service</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-3">
                      <span className="text-yellow text-xl">⭐</span>
                      <span className="body-text font-semibold">500+ 5-Star Reviews</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-3">
                      <span className="text-yellow text-xl">💰</span>
                      <span className="body-text font-semibold">Free Estimates</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
