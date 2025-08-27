"use client"

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger'
  delay?: number
  duration?: number
  staggerChildren?: number
  viewport?: boolean
}

// Animation variants
const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  },
  slideRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
}

export function MotionWrapper({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0,
  duration,
  staggerChildren,
  viewport = true
}: MotionWrapperProps) {
  const variant = animations[animation]
  
  // Custom duration and stagger if provided
  if (duration || staggerChildren) {
    const customVariant = { ...variant }
    if (customVariant.visible && typeof customVariant.visible === 'object') {
      if (duration) {
        customVariant.visible.transition = { 
          ...customVariant.visible.transition, 
          duration 
        }
      }
      if (staggerChildren && customVariant.visible.transition) {
        customVariant.visible.transition.staggerChildren = staggerChildren
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      animate="visible"
      viewport={viewport ? { once: true, margin: "-50px" } : undefined}
      whileInView={viewport ? "visible" : undefined}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </motion.div>
  )
}

// Specialized components for common use cases
export function FadeIn({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <MotionWrapper animation="fadeIn" className={className} delay={delay}>
      {children}
    </MotionWrapper>
  )
}

export function SlideUp({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <MotionWrapper animation="slideUp" className={className} delay={delay}>
      {children}
    </MotionWrapper>
  )
}

export function StaggerContainer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <MotionWrapper animation="stagger" className={className} staggerChildren={0.1}>
      {children}
    </MotionWrapper>
  )
}

// Button with enhanced hover animations
export function MotionButton({ 
  children, 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}: { 
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  [key: string]: any
}) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.02, 
        y: disabled ? 0 : -2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Card with subtle hover effects
export function MotionCard({ 
  children, 
  className = '',
  hoverScale = 1.02,
  hoverY = -4
}: { 
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverY?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: hoverScale, 
        y: hoverY,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Page transition wrapper
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
