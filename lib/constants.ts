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
    shortDescription: "Crystal-clear windows inside and out",
    description: "Professional residential and commercial window cleaning with streak-free results. We clean interior and exterior windows, screens, and sills using eco-friendly solutions and traditional squeegee techniques.",
    features: ["Interior & exterior cleaning", "Screen cleaning", "Sill wiping", "Streak-free guarantee"],
    priceRange: "Custom Quote",
    duration: "1-3 hours",
    icon: "/interior window cleaning icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    shortDescription: "Deep cleaning for driveways, patios, and more",
    description: "High-pressure cleaning services for concrete, brick, stone, and wood surfaces. Remove dirt, grime, mold, and stains from driveways, sidewalks, patios, decks, and building exteriors.",
    features: ["Driveway cleaning", "Patio & deck cleaning", "Building exterior wash", "Concrete restoration"],
    priceRange: "Custom Quote",
    duration: "2-4 hours", 
    icon: "/pressure washing icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    shortDescription: "Maximize your solar efficiency",
    description: "Specialized solar panel cleaning to maintain peak energy efficiency. Our gentle cleaning process removes dust, bird droppings, and debris without damaging panels or voiding warranties.",
    features: ["Efficiency optimization", "Warranty-safe cleaning", "Bird dropping removal", "Monthly maintenance plans"],
    priceRange: "Custom Quote",
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
    shortDescription: "Complete cleanup after construction",
    description: "Thorough post-construction cleaning for new builds and renovations. We remove construction dust, debris, and residue from all surfaces including windows, floors, and fixtures.",
    features: ["Construction dust removal", "Window cleaning", "Floor cleaning", "Fixture cleaning"],
    priceRange: "Custom Quote",
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
    question: "How often should I have my windows cleaned?",
    answer: "For residential properties, we recommend cleaning every 2-3 months for optimal appearance. Commercial properties may need monthly cleaning depending on location and environmental factors."
  },
  {
    question: "Do you provide your own equipment and cleaning supplies?",
    answer: "Yes, we bring all necessary equipment, tools, and eco-friendly cleaning solutions. You don't need to provide anything - we come fully prepared for every job."
  },
  {
    question: "Are you licensed and insured?", 
    answer: "Absolutely! We're fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers compensation for your peace of mind."
  },
  {
    question: "What areas do you service?",
    answer: "We proudly serve Orange County, Los Angeles County, and San Diego County. This includes cities like Costa Mesa, Newport Beach, Los Angeles, Santa Monica, San Diego, and many more."
  },
  {
    question: "Do you offer emergency or same-day service?",
    answer: "Yes, we offer emergency cleaning services for urgent situations. Same-day service may be available depending on our schedule and your location."
  },
  {
    question: "What makes Shimmer Shine different from other cleaning companies?",
    answer: "We've been family-owned since 2021, combining old-school craftsmanship with modern reliability. Our attention to detail, eco-friendly practices, and commitment to customer satisfaction set us apart."
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
