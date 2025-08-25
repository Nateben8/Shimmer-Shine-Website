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

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center mb-4">
              <div className="retro-badge">
                <Award className="h-4 w-4 mr-1" />
                Licensed & Insured
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="heading-decorative text-4xl md:text-6xl lg:text-7xl text-yellow leading-tight">
                Classic Shine,
              </h1>
              <h2 className="heading-primary text-3xl md:text-5xl lg:text-6xl text-white">
                Modern Quality!
              </h2>
            </div>

            {/* Subheading */}
            <p className="body-text text-xl md:text-2xl text-gray-100 leading-relaxed">
              Professional window cleaning, pressure washing, and property detailing services across Orange County, Los Angeles, and San Diego.
            </p>

            {/* Social Proof */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow fill-current" />
                  ))}
                </div>
                <span className="text-gray-200 ml-2">4.9/5 (500+ Reviews)</span>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow" />
                <span className="text-sm">Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-yellow" />
                <span className="text-sm">Same Day Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-a-quote">
                <Button variant="retro" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                  Get Free Quote in 60 Seconds
                </Button>
              </Link>
              <Link href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="retro-navy" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-navy hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </Button>
              </Link>
            </div>

            {/* Urgency Message */}
            <div className="bg-yellow text-navy px-4 py-3 rounded-lg shadow-retro-yellow">
              <p className="font-bold text-center">
                🚨 Limited Slots Available - Book Now for 10% Off Your First Service!
              </p>
            </div>
          </div>

          {/* Hero Image with Mascot */}
          <div className="relative">
            <div className="polaroid-frame">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
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
