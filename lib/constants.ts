export const SITE_CONFIG = {
  name: "Shimmer Shine Property Detailing",
  description: "Professional window cleaning, pressure washing, and property detailing services in Orange County, Los Angeles, and San Diego. Family-owned since 2021 with old-school quality and modern reliability.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.shimmershinepropertydetailing.com",
  ogImage: "/logo.png",
  links: {
    phone: "(714) 497-0035",
    email: "support@shimmershinepropertydetailing.com",
    facebook: "https://facebook.com/shimmershinepd",
    instagram: "https://instagram.com/shimmershinepd",
    yelp: "https://yelp.com/biz/shimmer-shine-property-detailing",
    google: "https://g.page/shimmer-shine-property-detailing",
  }
}

export const BUSINESS_INFO = {
  name: "Shimmer Shine Property Detailing",
  legalName: "Shimmer Shine Property Detailing LLC",
  foundedYear: 2021,
  phone: "(714) 497-0035",
  email: "support@shimmershinepropertydetailing.com",
  address: {
    street: "",
    city: "Yorba Linda",
    state: "CA",
    zipCode: "92886",
    county: "Orange County"
  },
  serviceAreas: [
    "Orange County",
    "Los Angeles County", 
    "San Diego County"
  ],
  cities: [
    // Orange County
    "Aliso Viejo", "Anaheim", "Brea", "Buena Park", "Costa Mesa", "Cypress", 
    "Dana Point", "Fountain Valley", "Fullerton", "Garden Grove", "Huntington Beach", 
    "Irvine", "La Habra", "La Palma", "Laguna Beach", "Laguna Hills", "Laguna Niguel", 
    "Laguna Woods", "Lake Forest", "Los Alamitos", "Mission Viejo", "Newport Beach", 
    "Orange", "Placentia", "Rancho Santa Margarita", "San Clemente", "San Juan Capistrano", 
    "Santa Ana", "Seal Beach", "Stanton", "Tustin", "Villa Park", "Westminster", "Yorba Linda",
    
    // Los Angeles County
    "Agoura Hills", "Alhambra", "Arcadia", "Artesia", "Avalon", "Azusa", "Baldwin Park", "Bell", 
    "Bell Gardens", "Bellflower", "Beverly Hills", "Bradbury", "Burbank", "Calabasas", 
    "Carson", "Cerritos", "Claremont", "Commerce", "Compton", "Covina", "Cudahy", 
    "Culver City", "Diamond Bar", "Downey", "Duarte", "El Monte", "El Segundo", 
    "Gardena", "Glendale", "Glendora", "Hawaiian Gardens", "Hawthorne", "Hermosa Beach", 
    "Hidden Hills", "Huntington Park", "Industry", "Inglewood", "Irwindale", "La Cañada Flintridge", 
    "La Habra Heights", "La Mirada", "La Puente", "La Verne", "Lakewood", "Lancaster", 
    "Lawndale", "Lomita", "Long Beach", "Los Angeles", "Lynwood", "Malibu", "Manhattan Beach", 
    "Maywood", "Monrovia", "Montebello", "Monterey Park", "Norwalk", "Palmdale", "Palos Verdes Estates", 
    "Paramount", "Pasadena", "Pico Rivera", "Pomona", "Rancho Palos Verdes", "Redondo Beach", 
    "Rolling Hills", "Rolling Hills Estates", "Rosemead", "San Dimas", "San Fernando", 
    "San Gabriel", "San Marino", "Santa Clarita", "Santa Fe Springs", "Santa Monica", 
    "Sierra Madre", "Signal Hill", "South El Monte", "South Gate", "South Pasadena", 
    "Temple City", "Torrance", "Vernon", "Walnut", "West Covina", "West Hollywood", 
    "Westlake Village", "Whittier", "Venice",
    
    // San Diego County
    "Carlsbad", "Chula Vista", "Coronado", "Del Mar", "El Cajon", "Encinitas", 
    "Escondido", "Imperial Beach", "La Mesa", "Lemon Grove", "National City", 
    "Oceanside", "Poway", "San Diego", "San Marcos", "Santee", "Solana Beach", 
    "Vista", "La Jolla", "Pacific Beach", "Mission Beach", "Ocean Beach", 
    "Point Loma", "Hillcrest", "Balboa Park", "University City", "Carmel Valley", 
    "Rancho Bernardo", "Scripps Ranch", "Mira Mesa", "Clairemont", "Bay Park"
  ],
  licenses: ["CA License #123456", "Bonded & Insured"],
  certifications: ["IWCA Certified", "PWNA Member"]
}

export const SERVICES = [
  {
    id: "window-cleaning",
    name: "Window Cleaning",
    shortDescription: "Professional window cleaning services with same-day availability and free estimates",
    description: "Transform your property's appearance with our professional window cleaning services throughout Orange County. As licensed and insured window cleaners, we specialize in both residential and commercial properties, delivering crystal-clear, streak-free results every time. Our experienced team uses eco-friendly cleaning solutions and professional-grade equipment to ensure your windows sparkle. We offer flexible scheduling with same-day service availability, recurring maintenance plans, and always provide free, no-obligation quotes. Serving Orange County, Los Angeles, and San Diego with reliable, affordable window cleaning you can trust.",
    features: ["Same-day service availability", "Free estimates and quotes", "Licensed and insured professionals", "Residential and commercial services", "Recurring maintenance plans", "Eco-friendly cleaning solutions"],
    priceRange: "Custom Quote",
    duration: "1-3 hours",
    icon: "/interior window cleaning icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    shortDescription: "Expert pressure washing services for driveways, walkways, and exterior surfaces",
    description: "Restore your property's curb appeal with our professional pressure washing services. We specialize in removing years of built-up dirt, grime, oil stains, mold, and mildew from driveways, walkways, patios, and building exteriors. Our experienced team uses commercial-grade equipment and appropriate pressure settings for each surface type, ensuring effective cleaning without damage. From residential driveways to commercial properties, we handle projects of all sizes with same-day availability. We also provide specialized services including oil stain removal, graffiti removal, and mold remediation throughout Orange County, Los Angeles, and San Diego.",
    features: ["Professional-grade equipment", "Oil and stain removal", "Driveway and walkway cleaning", "Mold and mildew removal", "Commercial and residential", "Same-day service available"],
    priceRange: "Custom Quote",
    duration: "2-4 hours", 
    icon: "/pressure washing icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    shortDescription: "Maximize your solar efficiency with professional panel cleaning and maintenance",
    description: "Maximize your solar investment with our specialized solar panel cleaning services. Dirty solar panels can reduce energy efficiency by up to 30%, directly impacting your savings and environmental benefits. Our trained technicians use purified water and safe cleaning methods specifically designed for solar installations, ensuring no damage to your valuable equipment. We provide thorough cleaning, inspection, and maintenance for both residential and commercial solar systems. With flexible scheduling including same-day service and recurring maintenance plans, we help you maintain peak solar performance year-round throughout Orange County, Los Angeles, and San Diego.",
    features: ["Efficiency restoration up to 30%", "Safe, specialized cleaning methods", "Purified water system", "Panel inspection included", "Residential and commercial", "Recurring maintenance plans"],
    priceRange: "Custom Quote",
    duration: "1-2 hours",
    icon: "/Solar panel cleaning icon.png",
    iconType: "image",
    category: "specialty"
  },
  {
    id: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortDescription: "Protect your property with professional gutter cleaning and maintenance services",
    description: "Protect your property investment with our comprehensive gutter cleaning and maintenance services. Clogged gutters can lead to water damage, foundation issues, and costly repairs. Our experienced team removes leaves, debris, and buildup from gutters and downspouts, ensuring proper water flow and drainage. We provide thorough cleaning, inspection for damage or wear, and can identify potential issues before they become expensive problems. Available for both residential and commercial properties with seasonal maintenance programs, emergency services, and same-day availability throughout Orange County, Los Angeles, and San Diego.",
    features: ["Complete debris removal", "Downspout cleaning included", "Gutter inspection service", "Seasonal maintenance programs", "Emergency service available", "Residential and commercial"],
    priceRange: "Custom Quote",
    duration: "1-3 hours",
    icon: "/Gutter Cleaning icon.png",
    iconType: "image",
    category: "maintenance"
  },
  {
    id: "post-construction-cleanup",
    name: "Post-Construction Cleanup",
    shortDescription: "Professional construction cleanup services to make your space move-in ready",
    description: "Transform your newly constructed or renovated space with our specialized post-construction cleanup services. Construction projects leave behind dust, debris, adhesive residue, and other materials that require professional attention. Our experienced team handles everything from fine dust removal to window cleaning, floor polishing, and fixture cleaning. We understand the unique challenges of construction cleanup and use appropriate tools and techniques to make your space spotless and move-in ready. Whether it's a new home, office renovation, or commercial build-out, we provide thorough, detailed cleaning with same-day availability throughout Orange County, Los Angeles, and San Diego.",
    features: ["Complete dust and debris removal", "Window and fixture cleaning", "Floor cleaning and polishing", "Move-in ready service", "New construction and renovations", "Same-day availability"],
    priceRange: "Custom Quote",
    duration: "4-8 hours",
    icon: "/House Washing Icon.png",
    iconType: "image",
    category: "specialty"
  },
  {
    id: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortDescription: "Comprehensive commercial cleaning services with flexible contracts and scheduling",
    description: "Maintain a professional, healthy work environment with our comprehensive commercial cleaning services. We understand that every business has unique cleaning needs and schedules. Our experienced team provides customized cleaning solutions for offices, medical facilities, restaurants, retail spaces, and industrial facilities. We offer flexible service options including daily, weekly, or monthly cleaning, after-hours service, and emergency cleaning. Our services include janitorial maintenance, deep cleaning, sanitization, and specialized cleaning for healthcare and food service environments. With competitive pricing and reliable service, we help businesses throughout Orange County, Los Angeles, and San Diego maintain clean, professional spaces.",
    features: ["Customized cleaning plans", "Flexible scheduling options", "Medical and restaurant specialists", "After-hours service available", "Competitive contract pricing", "Emergency cleaning services"],
    priceRange: "$0.05-$0.15/sq ft",
    duration: "2-8 hours",
    icon: "/Roof Washing Icon.png",
    iconType: "image",
    category: "commercial"
  }
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Costa Mesa, CA",
    rating: 5,
    text: "Shimmer Shine has been cleaning our windows for over 10 years. They're always professional, punctual, and do amazing work. Our windows have never looked better!",
    service: "Window Cleaning",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    location: "Newport Beach, CA", 
    rating: 5,
    text: "The pressure washing service was incredible. They transformed our driveway and patio - it looks brand new! Fair pricing and excellent customer service.",
    service: "Pressure Washing",
    date: "2024-01-08"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    location: "Irvine, CA",
    rating: 5,
    text: "Professional solar panel cleaning that increased our energy efficiency by 15%. They're careful with the equipment and very knowledgeable about solar systems.",
    service: "Solar Panel Cleaning", 
    date: "2023-12-20"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Santa Ana, CA",
    rating: 5,
    text: "Old-school quality with modern reliability. The team is courteous, thorough, and takes pride in their work. Highly recommend for any property cleaning needs.",
    service: "Commercial Cleaning",
    date: "2023-12-12"
  }
]

export const FAQ_DATA = [
  {
    question: "How much does window cleaning cost in Orange County?",
    answer: "Window cleaning costs in Orange County typically range from $150-$400 for residential homes and $200-$800 for commercial properties, depending on size, number of windows, and accessibility. We provide free, no-obligation quotes with transparent pricing and no hidden fees."
  },
  {
    question: "How often should I have my windows cleaned professionally?",
    answer: "For residential properties in Orange County, we recommend professional window cleaning every 2-3 months for optimal appearance and longevity. Commercial properties typically need monthly cleaning due to higher traffic and environmental exposure. Coastal properties may require more frequent cleaning due to salt air."
  },
  {
    question: "Do you provide pressure washing services in Los Angeles County?",
    answer: "Yes! We provide comprehensive pressure washing services throughout Los Angeles County, including driveways, patios, decks, sidewalks, and building exteriors. Our eco-friendly pressure washing removes dirt, grime, mold, and stains while protecting your property's surfaces."
  },
  {
    question: "Are you licensed and insured for window cleaning and pressure washing?",
    answer: "Absolutely! Shimmer Shine Property Detailing is fully licensed, bonded, and insured in California. We carry comprehensive general liability insurance, workers' compensation, and are bonded for your complete protection and peace of mind."
  },
  {
    question: "What cities do you serve for window cleaning and pressure washing?",
    answer: "We serve over 139 cities across Orange County, Los Angeles County, and San Diego County. This includes Yorba Linda, Costa Mesa, Newport Beach, Irvine, Huntington Beach, Santa Ana, Anaheim, Beverly Hills, Santa Monica, Manhattan Beach, La Jolla, Del Mar, and many more throughout Southern California."
  },
  {
    question: "Do you offer same-day window cleaning and pressure washing services?",
    answer: "Yes, we offer same-day and emergency cleaning services when our schedule permits. For urgent cleaning needs like post-construction cleanup, event preparation, or emergency situations, call us at (714) 497-0035 and we'll do our best to accommodate your timeline."
  },
  {
    question: "What makes your window cleaning service different from competitors?",
    answer: "Shimmer Shine combines old-school craftsmanship with modern reliability. We're family-owned since 2021, use eco-friendly cleaning solutions, provide 5-star rated service, offer free estimates, and guarantee crystal-clear results. Our attention to detail and customer satisfaction sets us apart from other cleaning companies."
  },
  {
    question: "Do you clean solar panels in Orange County and Los Angeles?",
    answer: "Yes! We specialize in professional solar panel cleaning throughout Orange County and Los Angeles County. Our gentle, warranty-safe cleaning process removes dust, debris, and bird droppings to maximize your solar energy efficiency and protect your investment."
  },
  {
    question: "What's included in your gutter cleaning service?",
    answer: "Our comprehensive gutter cleaning service includes debris removal, downspout clearing, drainage inspection, minor repairs, and a final rinse. We also check for proper water flow and can identify potential issues before they become costly problems."
  },
  {
    question: "Do you provide commercial window cleaning and pressure washing?",
    answer: "Yes! We provide professional commercial cleaning services for office buildings, retail stores, restaurants, medical facilities, and other commercial properties throughout Southern California. We offer flexible scheduling, competitive pricing, and maintain the highest professional standards."
  },
  {
    question: "How do I get a free quote for window cleaning or pressure washing?",
    answer: "Getting a free quote is easy! Call us at (714) 497-0035, fill out our online form, or request a quote through our website. We provide detailed, transparent estimates with no hidden fees and no obligation to purchase."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, checks, all major credit cards, Venmo, and Zelle for your convenience. Payment is due upon completion of services, and we provide detailed invoices for all work performed."
  },
  {
    question: "Do you offer bundle discounts for multiple services in Orange County?",
    answer: "Yes! We offer a Fall Special with 20% off when you bundle 2 or more services. Popular combinations include window cleaning + pressure washing, or window cleaning + gutter cleaning + solar panel cleaning. This is perfect for comprehensive fall property maintenance in Orange County."
  },
  {
    question: "What areas of Orange County do you serve for window cleaning?",
    answer: "We provide window cleaning services throughout Orange County including Newport Beach, Irvine, Costa Mesa, Huntington Beach, Anaheim, Santa Ana, Yorba Linda, Fullerton, Garden Grove, Orange, Tustin, Mission Viejo, Laguna Beach, Dana Point, San Clemente, Aliso Viejo, Lake Forest, Rancho Santa Margarita, and all surrounding communities."
  },
  {
    question: "How often should I schedule pressure washing in Orange County's climate?",
    answer: "In Orange County's Mediterranean climate, we recommend pressure washing your driveway and exterior surfaces every 6-12 months. Coastal properties may need more frequent cleaning due to salt air, while inland properties can often go longer between services. Our team can assess your specific needs during our free consultation."
  },
  {
    question: "Do you provide emergency cleaning services in Orange County?",
    answer: "Yes! We offer emergency and same-day cleaning services throughout Orange County for urgent situations like real estate showings, special events, post-construction cleanup, or storm damage cleanup. Call (714) 497-0035 for immediate assistance."
  },
  {
    question: "What's the best time of year for exterior cleaning in Orange County?",
    answer: "Fall and spring are ideal times for comprehensive exterior cleaning in Orange County. Fall cleaning prepares your property for winter rains, while spring cleaning removes winter buildup. Our Fall Special offers 20% off bundled services, making it the perfect time for complete property maintenance."
  },
  {
    question: "Do you clean high-rise buildings and commercial properties in Orange County?",
    answer: "Yes! We provide commercial window cleaning and pressure washing for high-rise buildings, office complexes, retail centers, and industrial facilities throughout Orange County. We have specialized equipment and insurance for commercial properties and offer flexible scheduling including after-hours service."
  },
  {
    question: "How do you handle Orange County's hard water stains on windows?",
    answer: "Orange County's hard water can leave mineral deposits on windows. We use specialized cleaning solutions and techniques specifically designed for hard water stains. Our process includes water treatment and protective coatings that help prevent future buildup, keeping your windows cleaner longer."
  },
  {
    question: "What safety measures do you take for residential cleaning in Orange County?",
    answer: "Safety is our top priority. We're fully licensed and insured, use professional-grade equipment, follow OSHA safety protocols, and our technicians are trained in safe cleaning practices. We also carry comprehensive liability insurance and workers' compensation for complete protection of Orange County homeowners."
  }
]

export const BLOG_CATEGORIES = [
  "Window Cleaning Tips",
  "Pressure Washing Guide", 
  "Solar Panel Maintenance",
  "Gutter Care",
  "Property Maintenance",
  "Seasonal Cleaning",
  "Commercial Services",
  "Before & After"
]
