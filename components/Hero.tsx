"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Phone, Award, Shield, Users } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy to-navy-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">


            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="heading-decorative text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-yellow leading-tight text-center sm:text-left" style={{textShadow: '1px 1px 0px #FFFFFF, 2px 2px 0px #F5F5F5'}}>
                Classic Shine,
              </h1>
              <h2 className="heading-primary text-3xl sm:text-3xl md:text-5xl lg:text-6xl text-white text-center sm:text-left" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                Modern Quality!
              </h2>
            </div>

            {/* Subheading */}
            <p className="body-text text-lg sm:text-lg md:text-xl text-gray-100 leading-relaxed text-center sm:text-left px-2 sm:px-0">
              Same day window cleaning Orange County with free quotes. Licensed and insured residential and commercial window cleaning services across Orange County, Los Angeles, and San Diego.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-5 sm:w-5 text-yellow fill-current" />
                  ))}
                </div>
                <span className="text-gray-200 ml-2 text-base sm:text-base font-semibold">5-Star Rated Service</span>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4">
              <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/10 rounded-lg p-3 sm:bg-transparent sm:p-0">
                <Shield className="h-5 w-5 sm:h-5 sm:w-5 text-yellow flex-shrink-0" />
                <span className="text-sm sm:text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/10 rounded-lg p-3 sm:bg-transparent sm:p-0">
                <Award className="h-5 w-5 sm:h-5 sm:w-5 text-yellow flex-shrink-0" />
                <span className="text-sm sm:text-sm font-semibold">Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/10 rounded-lg p-3 sm:bg-transparent sm:p-0 sm:col-span-2 md:col-span-1">
                <Users className="h-5 w-5 sm:h-5 sm:w-5 text-yellow flex-shrink-0" />
                <span className="text-sm sm:text-sm font-semibold">Same Day Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 relative z-10">
              <Link 
                href="/get-a-quote" 
                className="w-full block relative z-10 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <div className="retro-button w-full text-lg px-8 py-5 min-h-[60px] font-bold shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-center flex items-center justify-center relative z-10 select-none">
                  Get Free Quote in 60 Seconds
                </div>
              </Link>
              <Link 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="w-full block relative z-10 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <div className="retro-button-navy w-full text-lg px-8 py-5 bg-white text-navy hover:bg-gray-100 min-h-[60px] font-bold transition-all duration-200 cursor-pointer text-center flex items-center justify-center relative z-10 select-none">
                  <Phone className="h-6 w-6 mr-3" />
                  Call {BUSINESS_INFO.phone}
                </div>
              </Link>
            </div>


          </div>

          {/* Hero Image with Mascot */}
          <div className="relative order-first lg:order-last">
            <div className="polaroid-frame">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center h-full border-4 border-navy shadow-lg">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video
                      src="/Homepage video1.MOV"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-lg"
                      style={{ objectFit: 'cover' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              <div className="text-center mt-4 text-navy">
                <p className="font-arvo font-bold">See Our Work in Action!</p>
                <p className="text-sm text-gray-600">Professional Property Detailing</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
