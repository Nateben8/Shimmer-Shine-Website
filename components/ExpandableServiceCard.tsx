"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

interface Service {
  id: string
  name: string
  shortDescription: string
  description: string
  icon: string
  iconType?: string
}

interface ExpandableServiceCardProps {
  service: Service
}

export default function ExpandableServiceCard({ service }: ExpandableServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getServiceButtonText = (serviceId: string) => {
    switch (serviceId) {
      case 'window-cleaning':
        return {
          desktop: 'Professional Window Cleaning',
          mobile: 'Window Cleaning'
        }
      case 'pressure-washing':
        return {
          desktop: 'Best Pressure Washing',
          mobile: 'Pressure Washing'
        }
      case 'solar-panel-cleaning':
        return {
          desktop: 'Solar Panel Cleaning',
          mobile: 'Solar Cleaning'
        }
      case 'gutter-cleaning':
        return {
          desktop: 'Gutter Cleaning Services',
          mobile: 'Gutter Cleaning'
        }
      case 'post-construction-cleanup':
        return {
          desktop: 'Post Construction Cleanup',
          mobile: 'Post Construction'
        }
      case 'commercial-cleaning':
        return {
          desktop: 'Commercial Cleaning',
          mobile: 'Commercial Clean'
        }
      default:
        return {
          desktop: service.name,
          mobile: service.name
        }
    }
  }

  const buttonText = getServiceButtonText(service.id)

  return (
    <Card className="retro-card-glass hover-lift group h-full flex flex-col relative overflow-hidden">
      {/* Subtle sparkle overlay */}
      <div className="absolute top-2 right-2 w-3 h-3 text-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sparkle-enhanced">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
        </svg>
      </div>
      
      <CardHeader className="text-center p-4 sm:p-6 flex-grow">
        <div className="mb-3 sm:mb-4 flex items-center justify-center">
          {service.iconType === "image" ? (
            <div className="relative">
              <div className="absolute inset-0 bg-yellow/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={service.icon}
                alt={`Professional ${service.name} service icon - ${service.description.slice(0, 50)}...`}
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16 relative z-10 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 640px) 48px, 64px"
              />
            </div>
          ) : (
            <div className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              {service.icon}
            </div>
          )}
        </div>
        <CardTitle className="heading-primary text-base sm:text-lg md:text-xl mb-2 px-2">
          {service.name}
        </CardTitle>
        <CardDescription className="body-text text-sm sm:text-base text-gray-600 leading-relaxed px-2">
          {service.shortDescription}
        </CardDescription>
        
        {/* Expandable Content - Arrow Indicator */}
        <div className="mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group w-full flex items-center justify-center py-3 transition-all duration-300 hover:bg-yellow/10 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-navy group-hover:text-yellow transition-colors">
                {isExpanded ? 'Show Less' : 'Show More Details'}
              </span>
              <div className="flex items-center justify-center w-8 h-8 bg-yellow rounded-full group-hover:bg-navy transition-all duration-300 group-hover:scale-110">
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-navy group-hover:text-yellow transition-colors" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-navy group-hover:text-yellow transition-colors animate-bounce" />
                )}
              </div>
            </div>
          </button>
          
          {isExpanded && (
            <div className="mt-4 p-5 glass-card rounded-xl animate-in slide-in-from-top-2 duration-300 relative overflow-hidden">
              {/* Subtle water wave effect */}
              <div className="absolute inset-0 water-wave opacity-50"></div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-yellow rounded-full animate-pulse"></div>
                  <h4 className="font-bold text-navy text-sm">Service Details</h4>
                </div>
                <p className="body-text text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="border-t border-white/30 pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-yellow rounded-full animate-pulse"></div>
                    <h4 className="font-bold text-navy text-sm">Why Choose Us</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2 glass-overlay rounded-lg p-2 hover-lift-subtle">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full sparkle-enhanced"></div>
                      <span className="text-xs font-medium text-navy">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2 glass-overlay rounded-lg p-2 hover-lift-subtle">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full sparkle-enhanced"></div>
                      <span className="text-xs font-medium text-navy">Same Day Service</span>
                    </div>
                    <div className="flex items-center space-x-2 glass-overlay rounded-lg p-2 hover-lift-subtle">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full sparkle-enhanced"></div>
                      <span className="text-xs font-medium text-navy">Free Estimates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="text-center p-4 sm:p-6 pt-0 mt-auto">
        <div className="space-y-3">
          <Link href="/get-a-quote">
            <Button className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-navy/10">
              <span className="text-sm">Get Free Quote</span>
              <ArrowRight className="h-4 w-4 ml-2 flex-shrink-0" />
            </Button>
          </Link>

        </div>
      </CardContent>
    </Card>
  )
}
