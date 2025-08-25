"use client"

import { Button } from "@/components/ui/button"

interface ScrollToFormButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "retro" | "retro-navy"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function ScrollToFormButton({ 
  children, 
  className, 
  variant = "retro-navy", 
  size = "lg" 
}: ScrollToFormButtonProps) {
  const scrollToForm = () => {
    const element = document.getElementById('c6041d28-0ae8-4628-a9c4-14a29c7ff3e8')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={scrollToForm}
    >
      {children}
    </Button>
  )
}