export const SITE_CONFIG = {
  name: "Shimmer Shine Property Detailing",
  description: "Professional window cleaning, pressure washing, and property detailing services in Orange County, Los Angeles, and San Diego. Family-owned since 2021 with old-school quality and modern reliability.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shimmershinepd.com",
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
    shortDescription: "Same day window cleaning Orange County with free quotes",
    description: "Best window cleaners in Orange County providing same day window cleaning Orange County services. Licensed window cleaning Orange County for residential window cleaning Orange County and commercial window cleaning Orange County. Our local window cleaners near me Orange County deliver streak-free results with free quote window cleaning Orange County. Affordable window cleaning Orange County with recurring window cleaning Orange County options available. Professional window cleaning Orange County using eco-friendly solutions throughout Orange County, Los Angeles, and San Diego.",
    features: ["Same day window cleaning Orange County", "Free quote window cleaning Orange County", "Licensed window cleaning Orange County", "Residential & commercial window cleaning Orange County", "Affordable recurring window cleaning Orange County", "Local window cleaners near me Orange County"],
    priceRange: "$150-$400",
    duration: "1-3 hours",
    icon: "/interior window cleaning icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    shortDescription: "Same day pressure washing Orange County with free quotes",
    description: "Best pressure washing Orange County providing same day pressure washing Orange County services. Professional pressure washing Orange County for residential pressure washing Orange County and commercial pressure washing Orange County. Our local pressure washing near me Orange County delivers exceptional results with pressure washing quotes Orange County. Affordable pressure washing Orange County specializing in driveway pressure washing Orange County, oil stain removal Orange County, graffiti removal Orange County, and mold removal pressure washing Orange County throughout Orange County, Los Angeles, and San Diego.",
    features: ["Same day pressure washing Orange County", "Pressure washing quotes Orange County", "Driveway pressure washing Orange County", "Oil stain removal Orange County", "Commercial pressure washing Orange County", "Local pressure washing near me Orange County"],
    priceRange: "$200-$600",
    duration: "2-4 hours", 
    icon: "/pressure washing icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    shortDescription: "Solar panel cleaning near me Orange County with efficiency restoration",
    description: "Professional solar panel cleaning Orange County services to improve solar panel efficiency Orange County by up to 30%. Our residential solar panel cleaning Orange County and commercial solar panel cleaning Orange County uses safe solar panel cleaning methods with purified water. We provide solar panel cleaning quotes Orange County, recurring solar panel cleaning Orange County, and same day solar panel cleaning Orange County. Our licensed solar panel cleaning Orange County team specializes in solar panel maintenance Orange County, solar panel inspection Orange County, and increase solar panel output Orange County throughout Orange County, Los Angeles, and San Diego.",
    features: ["Solar panel cleaning near me Orange County", "Improve solar panel efficiency Orange County", "Residential solar panel cleaning Orange County", "Commercial solar panel cleaning Orange County", "Recurring solar panel cleaning Orange County", "Same day solar panel cleaning Orange County"],
    priceRange: "$150-$350",
    duration: "1-2 hours",
    icon: "/Solar panel cleaning icon.png",
    iconType: "image",
    category: "specialty"
  },
  {
    id: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortDescription: "Keep water flowing properly",
    description: "Complete gutter cleaning and maintenance services. We remove leaves, debris, and blockages, check for proper drainage, and provide minor repairs to keep your gutters functioning properly.",
    features: ["Debris removal", "Downspout clearing", "Gutter inspection", "Minor repairs"],
    priceRange: "Custom Quote",
    duration: "1-3 hours",
    icon: "/Gutter Cleaning icon.png",
    iconType: "image",
    category: "maintenance"
  },
  {
    id: "post-construction-cleanup",
    name: "Post-Construction Cleanup",
    shortDescription: "Local post construction cleaning near me Orange County with rapid response",
    description: "Professional post construction cleanup Orange County services for residential post construction cleaning Orange County and commercial post construction cleanup Orange County. Our local post construction cleaning near me Orange County team provides same day post construction cleanup Orange County, dust removal after construction Orange County, debris removal post construction Orange County, and move in ready post construction cleaning Orange County. We specialize in new construction cleanup Orange County, post renovation cleaning Orange County, final construction cleaning Orange County, and detailed post construction cleaning Orange County throughout Orange County, Los Angeles, and San Diego.",
    features: ["Local post construction cleaning near me Orange County", "Same day post construction cleanup Orange County", "Residential post construction cleaning Orange County", "Commercial post construction cleanup Orange County", "Move in ready post construction cleaning Orange County", "Free quote post construction cleaning Orange County"],
    priceRange: "$500-$5000",
    duration: "4-8 hours",
    icon: "/House Washing Icon.png",
    iconType: "image",
    category: "specialty"
  },
  {
    id: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortDescription: "Professional services for businesses",
    description: "Regular commercial cleaning services for offices, retail stores, and industrial facilities. Maintain a professional appearance with scheduled window cleaning, pressure washing, and facility maintenance.",
    features: ["Scheduled service", "Office buildings", "Retail storefronts", "Industrial facilities"],
    priceRange: "Custom Quote",
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
