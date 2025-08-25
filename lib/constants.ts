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
    description: "Professional residential and commercial window cleaning services in Orange County, Los Angeles, and San Diego. Our expert window cleaners deliver streak-free results using eco-friendly cleaning solutions and traditional squeegee techniques. We specialize in interior window cleaning, exterior window cleaning, screen cleaning, and window sill maintenance for homes, offices, retail stores, and commercial buildings throughout Southern California.",
    features: ["Interior & exterior window cleaning", "Screen cleaning & repair", "Window sill wiping", "Streak-free guarantee", "Eco-friendly cleaning solutions", "Commercial & residential service"],
    priceRange: "$150-$400",
    duration: "1-3 hours",
    icon: "/interior window cleaning icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    shortDescription: "Deep cleaning for driveways, patios, and more",
    description: "Professional pressure washing services in Orange County, Los Angeles, and San Diego County. Our high-pressure cleaning specialists remove dirt, grime, mold, mildew, and stubborn stains from concrete driveways, brick patios, stone walkways, wood decks, and building exteriors. We provide residential pressure washing, commercial pressure washing, and industrial cleaning services using state-of-the-art equipment and eco-friendly cleaning solutions throughout Southern California.",
    features: ["Driveway pressure washing", "Patio & deck cleaning", "Building exterior washing", "Concrete restoration", "Mold & mildew removal", "Commercial & residential service"],
    priceRange: "$200-$600",
    duration: "2-4 hours", 
    icon: "/pressure washing icon.png",
    iconType: "image",
    category: "cleaning"
  },
  {
    id: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    shortDescription: "Maximize your solar efficiency",
    description: "Professional solar panel cleaning services in Orange County, Los Angeles, and San Diego to maximize your solar energy efficiency. Our certified solar panel cleaners use specialized equipment and warranty-safe cleaning methods to remove dust, bird droppings, pollen, and debris from residential and commercial solar installations. Regular solar panel maintenance can increase energy production by up to 25% while protecting your solar investment throughout Southern California.",
    features: ["Solar efficiency optimization", "Warranty-safe cleaning methods", "Bird dropping & debris removal", "Monthly maintenance programs", "Residential & commercial service", "Certified solar technicians"],
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
