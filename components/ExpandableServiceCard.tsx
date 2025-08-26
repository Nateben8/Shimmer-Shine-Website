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
    <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300 group h-full flex flex-col">
      <CardHeader className="text-center p-4 sm:p-6 flex-grow">
        <div className="mb-3 sm:mb-4 flex items-center justify-center">
          {service.iconType === "image" ? (
            <Image
              src={service.icon}
              alt={`Professional ${service.name} service icon - ${service.description.slice(0, 50)}...`}
              width={64}
              height={64}
              className="w-12 h-12 sm:w-16 sm:h-16"
              loading="lazy"
              sizes="(max-width: 640px) 48px, 64px"
            />
          ) : (
            <div className="text-4xl sm:text-5xl">{service.icon}</div>
          )}
        </div>
        <CardTitle className="heading-primary text-base sm:text-lg md:text-xl mb-2 px-2">
          {service.name}
        </CardTitle>
        <CardDescription className="body-text text-sm sm:text-base text-gray-600 leading-relaxed px-2">
          {service.shortDescription}
        </CardDescription>
        
        {/* Expandable Content */}
        <div className="mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group w-full bg-gradient-to-r from-yellow/10 to-yellow/20 hover:from-yellow/20 hover:to-yellow/30 border-2 border-yellow/30 hover:border-yellow rounded-xl p-3 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-sm font-bold text-navy group-hover:text-navy">
                  {isExpanded ? 'Hide Details' : 'See What\'s Included'}
                </div>
                <div className="text-xs text-gray-600 group-hover:text-gray-700">
                  {isExpanded ? 'Collapse service details' : 'Click to view full service details'}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-yellow bg-navy px-2 py-1 rounded-full font-semibold">
                  {isExpanded ? 'Less' : 'More'}
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-navy group-hover:text-yellow transition-colors" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-navy group-hover:text-yellow transition-colors" />
                )}
              </div>
            </div>
          </button>
          
          {isExpanded && (
            <div className="mt-4 p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-yellow/20 shadow-inner animate-in slide-in-from-top-2 duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <h4 className="font-bold text-navy text-sm">Service Details</h4>
                </div>
                <p className="body-text text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-yellow rounded-full"></div>
                    <h4 className="font-bold text-navy text-sm">Why Choose Us</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                      <span className="text-xs font-medium text-navy">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                      <span className="text-xs font-medium text-navy">Same Day Service</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
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
          <p className="text-xs text-gray-500 leading-relaxed">
            Click above to expand and see what's included in this service
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
