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
            className="flex items-center justify-center space-x-2 text-navy hover:text-yellow transition-colors text-sm font-semibold mx-auto"
          >
            <span>{isExpanded ? 'Less Info' : 'More Info'}</span>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          
          {isExpanded && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow animate-in slide-in-from-top-2 duration-300">
              <p className="body-text text-sm text-gray-700 leading-relaxed text-left">
                {service.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow/20 text-navy">
                  Licensed & Insured
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow/20 text-navy">
                  Same Day Service
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow/20 text-navy">
                  Free Estimates
                </span>
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="text-center p-4 sm:p-6 pt-0 mt-auto">
        <div className="space-y-3">
          <div className="retro-badge text-xs sm:text-sm">
            Get Custom Quote
          </div>
          <Link href={`/services/${service.id}`}>
            <Button variant="outline" className="w-full group-hover:bg-yellow group-hover:text-navy transition-colors text-xs py-2 px-2 min-h-[44px] leading-tight">
              <span className="text-center break-words hyphens-auto overflow-hidden">
                <span className="hidden lg:inline">{buttonText.desktop}</span>
                <span className="lg:hidden">{buttonText.mobile}</span>
              </span>
              <ArrowRight className="h-3 w-3 ml-1 flex-shrink-0" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
