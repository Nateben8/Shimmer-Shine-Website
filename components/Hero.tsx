"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Phone, Award, Shield, Users } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { MotionWrapper, SlideUp, StaggerContainer, MotionButton } from "@/components/MotionWrapper"

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


            {/* Main Headline with Sparkles */}
            <SlideUp delay={200}>
              <div className="space-y-3 sm:space-y-4 relative">
                {/* Sparkles around Classic Shine */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Mobile: Keep sparkles within bounds */}
                  <MotionWrapper animation="fadeIn" delay={800}>
                    <div className="absolute top-2 left-2 sm:-top-4 sm:-left-2 w-6 h-6 text-yellow opacity-80 animate-pulse">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                        <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                      </svg>
                    </div>
                  </MotionWrapper>
                  <MotionWrapper animation="fadeIn" delay={1000}>
                    <div className="absolute top-4 right-8 sm:-top-2 sm:right-8 w-4 h-4 text-yellow opacity-90 animate-bounce delay-300">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                        <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                      </svg>
                    </div>
                  </MotionWrapper>
                  <MotionWrapper animation="fadeIn" delay={1200}>
                    <div className="absolute top-8 left-2 sm:top-8 sm:-left-4 w-5 h-5 text-yellow opacity-75 animate-pulse delay-500">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                        <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                      </svg>
                    </div>
                  </MotionWrapper>
                  <MotionWrapper animation="fadeIn" delay={1400}>
                    <div className="absolute top-12 right-4 w-3 h-3 text-white opacity-85 animate-bounce delay-700">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                        <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                      </svg>
                    </div>
                  </MotionWrapper>
                  <MotionWrapper animation="fadeIn" delay={1600}>
                    <div className="absolute bottom-4 left-1/3 w-4 h-4 text-white opacity-80 animate-pulse delay-200">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                        <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                      </svg>
                    </div>
                  </MotionWrapper>
                  <MotionWrapper animation="fadeIn" delay={1800}>
                    <div className="absolute bottom-2 right-8 sm:right-12 w-5 h-5 text-yellow opacity-70 animate-bounce delay-1000">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                        <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                      </svg>
                    </div>
                  </MotionWrapper>
                  <MotionWrapper animation="fadeIn" delay={2000}>
                    <div className="absolute top-6 right-1/4 w-3 h-3 text-white opacity-90 animate-pulse delay-800">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                        <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                      </svg>
                    </div>
                  </MotionWrapper>
                </div>
                
                <h1 className="heading-decorative text-5xl sm:text-4xl md:text-6xl lg:text-7xl text-yellow text-center sm:text-left relative z-10" style={{textShadow: '1px 1px 0px #FFFFFF, 2px 2px 0px #F5F5F5'}}>
                  Classic Shine,
                </h1>
                <h2 className="heading-primary text-4xl sm:text-3xl md:text-5xl lg:text-6xl text-white text-center sm:text-left relative z-10" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
                  Modern Quality!
                </h2>
              </div>
            </SlideUp>

            {/* Subheading */}
            <SlideUp delay={400}>
              <p className="body-lg text-gray-100 text-center sm:text-left px-2 sm:px-0">
                Delivering old-school craftsmanship with modern reliability since 2021. Professional window cleaning, pressure washing, and property detailing across Orange County, Los Angeles, and San Diego. Same-day service available with free, no-obligation quotes.
              </p>
            </SlideUp>

            {/* Social Proof */}
            <SlideUp delay={600}>
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-5 sm:w-5 text-yellow fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-200 ml-2 body-text font-semibold">5-Star Rated Service</span>
                </div>
              </div>
            </SlideUp>

            {/* Value Props */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4">
                <MotionWrapper animation="slideUp" delay={800}>
                  <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/10 rounded-lg p-3 sm:bg-transparent sm:p-0 touch-target">
                    <Shield className="h-5 w-5 sm:h-5 sm:w-5 text-yellow flex-shrink-0" />
                    <span className="body-sm font-semibold">Licensed & Insured</span>
                  </div>
                </MotionWrapper>
                <MotionWrapper animation="slideUp" delay={900}>
                  <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/10 rounded-lg p-3 sm:bg-transparent sm:p-0 touch-target">
                    <Award className="h-5 w-5 sm:h-5 sm:w-5 text-yellow flex-shrink-0" />
                    <span className="body-sm font-semibold">Satisfaction Guaranteed</span>
                  </div>
                </MotionWrapper>
                <MotionWrapper animation="slideUp" delay={1000}>
                  <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/10 rounded-lg p-3 sm:bg-transparent sm:p-0 sm:col-span-2 md:col-span-1 touch-target">
                    <Users className="h-5 w-5 sm:h-5 sm:w-5 text-yellow flex-shrink-0" />
                    <span className="body-sm font-semibold">Same Day Service</span>
                  </div>
                </MotionWrapper>
              </div>
            </StaggerContainer>

            {/* CTA Buttons */}
            <SlideUp delay={1100}>
              <div className="flex flex-col gap-4 relative z-10">
                <Link 
                  href="/get-a-quote" 
                  className="w-full block relative z-10 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  <MotionButton className="retro-button w-full text-lg px-8 py-5 min-h-[60px] font-bold shadow-lg cursor-pointer text-center flex items-center justify-center relative z-10 select-none">
                    Get Free Quote in 60 Seconds
                  </MotionButton>
                </Link>
                <Link 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="w-full block relative z-10 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  <MotionButton className="retro-button-navy w-full text-lg px-8 py-5 bg-white text-navy min-h-[60px] font-bold cursor-pointer text-center flex items-center justify-center relative z-10 select-none">
                    <Phone className="h-6 w-6 mr-3" />
                    Call {BUSINESS_INFO.phone}
                  </MotionButton>
                </Link>
              </div>
            </SlideUp>


          </div>

          {/* Hero Video Section */}
          <SlideUp delay={300}>
            <div className="relative order-first lg:order-last">
              <div className="polaroid-frame">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full bg-navy">
                    <video
                      src="/Homepage video1.MOV"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      style={{ objectFit: 'cover' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className="text-center mt-4 text-navy">
                  <p className="heading-md">See Our Work in Action!</p>
                  <p className="body-sm text-gray-600">Professional Property Detailing</p>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
