import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").regex(/^[\d\s\-\(\)\+\.]+$/, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address").max(200, "Address must be less than 200 characters"),
  city: z.string().min(2, "Please enter your city").max(50, "City must be less than 50 characters"),
  zipCode: z.string().min(5, "Please enter a valid zip code").max(10, "Zip code must be less than 10 characters"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  propertyType: z.enum(["residential", "commercial"], {
    required_error: "Please select property type"
  }),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
  urgency: z.enum(["standard", "urgent", "emergency"]).default("standard"),
  hearAboutUs: z.string().optional(),
  marketingConsent: z.boolean().default(false)
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  interests: z.array(z.string()).optional()
})

export type NewsletterData = z.infer<typeof newsletterSchema>

export const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  rating: z.number().min(1).max(5),
  title: z.string().min(5, "Title must be at least 5 characters").max(100),
  review: z.string().min(10, "Review must be at least 10 characters").max(1000),
  service: z.string().min(1, "Please select the service you received"),
  location: z.string().min(2, "Please enter your city").max(50),
  wouldRecommend: z.boolean(),
  photos: z.array(z.string()).optional()
})

export type ReviewData = z.infer<typeof reviewSchema>

// Validation helpers
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '')
  return phoneRegex.test(cleaned) && cleaned.length >= 10
}

export const validateZipCode = (zipCode: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/
  return zipRegex.test(zipCode)
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>\"']/g, '')
}

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}
