"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ZipCodePopup from "@/components/ZipCodePopup"
import { useRouter } from "next/navigation"
import { ButtonProps } from "@/components/ui/button"

interface GetQuoteButtonProps extends Omit<ButtonProps, 'onClick'> {
  children: React.ReactNode
  redirectPath?: string
  onClick?: () => void
}

export default function GetQuoteButton({ 
  children, 
  redirectPath = "/get-a-quote",
  className = "",
  onClick,
  ...props 
}: GetQuoteButtonProps) {
  const [showZipPopup, setShowZipPopup] = useState(false)
  const router = useRouter()

  const handleZipCodeSubmit = (zipCode: string, county: string) => {
    // Store zip code and county in session storage for the quote form
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('userZipCode', zipCode)
      sessionStorage.setItem('userCounty', county)
    }
    
    // Route to county-specific quote pages
    let countyPath = '/get-a-quote'
    
    if (county === 'Orange County') {
      countyPath = '/get-a-quote'
    } else if (county === 'Los Angeles County') {
      countyPath = '/get-a-quote/los-angeles'
    } else if (county === 'San Diego County') {
      countyPath = '/get-a-quote/san-diego'
    }
    
    // Navigate to the appropriate county quote page with zip code as query parameter
    const url = `${countyPath}?zip=${zipCode}&county=${encodeURIComponent(county)}`
    router.push(url)
  }

  return (
    <>
      <Button
        onClick={() => {
          if (onClick) onClick()
          setShowZipPopup(true)
        }}
        className={className}
        {...props}
      >
        {children}
      </Button>
      
      <ZipCodePopup
        isOpen={showZipPopup}
        onClose={() => setShowZipPopup(false)}
        onZipCodeSubmit={handleZipCodeSubmit}
      />
    </>
  )
}
