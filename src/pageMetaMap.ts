export interface PageMetaData {
  url: string;
  bundleEntryPoint: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const pages: PageMetaData[] = [
  // Homepage
  {
    url: "index.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Nationwide Medical Director Services | Compliance for Med Spas, Wellness & Healthcare Clinics",
    description: "EliteUSMD connects aesthetic and healthcare clinics with experienced medical directors. We serve med spas, wellness centers, telehealth clinics & more.",
    keywords: "medical director services, healthcare compliance, med spa medical director, wellness clinic oversight, telehealth medical director, nationwide medical directors",
    ogImage: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png"
  },

  // Main Service Pages
  {
    url: "services/medical-director",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Director Services | Expert Oversight for Healthcare Practices",
    description: "Find qualified medical directors for your healthcare practice. Expert oversight, compliance support, and practice growth guidance for all clinic types.",
    keywords: "medical director services, healthcare oversight, clinic compliance, practice management, medical supervision"
  },
  {
    url: "services/chart-review",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Chart Review Services | Healthcare Documentation Compliance",
    description: "Professional medical chart review services ensuring compliance and quality care. Expert documentation review for med spas and healthcare clinics.",
    keywords: "medical chart review, healthcare documentation, compliance review, patient records audit"
  },
  {
    url: "services/training",
    bundleEntryPoint: "/src/main.jsx",
    title: "Healthcare Staff Training | Medical Practice Compliance Education",
    description: "Comprehensive training programs for healthcare staff. Ensure compliance, improve patient care, and maintain professional standards in your practice.",
    keywords: "healthcare training, medical staff education, compliance training, practice management training"
  },
  {
    url: "services/medical-oversight",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Oversight Services | Healthcare Practice Compliance",
    description: "Comprehensive medical oversight services ensuring healthcare practice compliance and quality care standards across all specialties.",
    keywords: "medical oversight services, healthcare compliance, quality care standards"
  },
  {
    url: "services/medical-supervision",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Supervision Services | Healthcare Practice Support",
    description: "Expert medical supervision services for healthcare practices. Ensure compliance and quality care with professional oversight.",
    keywords: "medical supervision, healthcare oversight, practice compliance"
  },
  {
    url: "services/device-consultations",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Device Consultations | Healthcare Equipment Guidance",
    description: "Expert consultation for medical device selection and implementation. Ensure compliance and optimize ROI in healthcare equipment investments.",
    keywords: "medical device consultation, healthcare equipment guidance, practice technology"
  },

  // Professional Type Pages
  {
    url: "services/medical-director/np",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Nurse Practitioners | Healthcare Practice Support",
    description: "Connect NPs with qualified medical directors. Expert oversight and compliance support for nurse practitioner-led healthcare practices.",
    keywords: "NP medical director, nurse practitioner oversight, healthcare practice compliance"
  },
  {
    url: "services/medical-director/pa",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Physician Assistants | Practice Oversight",
    description: "Find experienced medical directors for PA-led practices. Comprehensive support for physician assistant healthcare services and compliance.",
    keywords: "PA medical director, physician assistant oversight, healthcare compliance"
  },
  {
    url: "services/medical-director/rn",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Registered Nurses | Healthcare Practice Support",
    description: "Connect RNs with qualified medical directors. Expert oversight and compliance support for nurse-led healthcare practices.",
    keywords: "RN medical director, registered nurse oversight, healthcare compliance"
  },

  // Clinic Types
  {
    url: "clinic-types/medical-spas",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Director Services for Med Spas | Aesthetic Practice Compliance",
    description: "Expert medical director services tailored for med spas and aesthetic practices. Ensure compliance while growing your aesthetic business.",
    keywords: "med spa medical director, aesthetic practice compliance, medical spa oversight"
  },
  {
    url: "clinic-types/aesthetic-clinics",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Aesthetic Clinics | Expert Oversight Services",
    description: "Specialized medical director services for aesthetic clinics. Expert oversight ensuring compliance and safety in cosmetic procedures and treatments.",
    keywords: "aesthetic clinic medical director, cosmetic practice compliance, aesthetic medicine oversight"
  },
  {
    url: "clinic-types/weight-loss-clinics",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Weight Loss Clinics | Compliance & Oversight",
    description: "Specialized medical director services for weight loss clinics. Expert oversight ensuring compliance and quality care in weight management practices.",
    keywords: "weight loss clinic medical director, weight management compliance, obesity medicine oversight"
  },
  {
    url: "clinic-types/wellness-centers",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Wellness Centers | Healthcare Compliance",
    description: "Connect with experienced medical directors for your wellness center. Comprehensive oversight for integrative and holistic healthcare practices.",
    keywords: "wellness center medical director, integrative medicine compliance, holistic healthcare oversight"
  },
  {
    url: "clinic-types/iv-therapy",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for IV Therapy Clinics | Compliance Solutions",
    description: "Expert medical oversight for IV therapy clinics. Ensure compliance and safety in vitamin therapy and wellness infusion services.",
    keywords: "IV therapy medical director, infusion clinic compliance, vitamin therapy oversight"
  },
  {
    url: "clinic-types/mobile-services",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Mobile Healthcare | Compliance & Oversight",
    description: "Specialized medical director services for mobile healthcare providers. Expert oversight ensuring compliance in mobile medical services.",
    keywords: "mobile healthcare medical director, traveling medical services, mobile clinic compliance"
  },
  {
    url: "clinic-types/home-healthcare",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Home Healthcare | Expert Oversight",
    description: "Connect with experienced medical directors for home healthcare services. Ensure compliance and quality care in home-based medical services.",
    keywords: "home healthcare medical director, home health compliance, residential medical services"
  },
  {
    url: "clinic-types/chiropractors",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Directors for Chiropractors | Practice Growth Solutions",
    description: "Expert medical director services helping chiropractors expand their practice. Legally offer additional services with proper medical oversight.",
    keywords: "chiropractic medical director, expanded services compliance, chiropractic practice growth"
  },

  // Location Pages - States
  {
    url: "locations/california",
    bundleEntryPoint: "/src/main.jsx",
    title: "California Medical Director Services | Healthcare Practice Compliance",
    description: "Find qualified medical directors in California. Expert oversight for med spas, wellness centers, and healthcare practices across the state.",
    keywords: "California medical director, CA healthcare compliance, California med spa oversight"
  },
  {
    url: "locations/florida",
    bundleEntryPoint: "/src/main.jsx",
    title: "Florida Medical Director Services | Healthcare Compliance Solutions",
    description: "Connect with experienced medical directors in Florida. Comprehensive oversight for healthcare practices throughout the Sunshine State.",
    keywords: "Florida medical director, FL healthcare compliance, Florida med spa oversight"
  },
  {
    url: "locations/texas",
    bundleEntryPoint: "/src/main.jsx",
    title: "Texas Medical Director Services | Healthcare Practice Oversight",
    description: "Expert medical director services across Texas. Ensuring compliance and quality care for healthcare practices throughout the Lone Star State.",
    keywords: "Texas medical director, TX healthcare compliance, Texas med spa oversight"
  },
  {
    url: "locations/nevada",
    bundleEntryPoint: "/src/main.jsx",
    title: "Nevada Medical Director Services | Healthcare Compliance",
    description: "Find qualified medical directors in Nevada. Expert oversight for med spas, wellness centers, and healthcare practices across the Silver State.",
    keywords: "Nevada medical director, NV healthcare compliance, Las Vegas medical oversight"
  },
  {
    url: "locations/arizona",
    bundleEntryPoint: "/src/main.jsx",
    title: "Arizona Medical Director Services | Practice Compliance",
    description: "Connect with experienced medical directors in Arizona. Comprehensive oversight for healthcare practices throughout the Grand Canyon State.",
    keywords: "Arizona medical director, AZ healthcare compliance, Phoenix medical oversight"
  },
  {
    url: "locations/new-york",
    bundleEntryPoint: "/src/main.jsx",
    title: "New York Medical Director Services | Healthcare Oversight",
    description: "Expert medical director services across New York State. Ensuring compliance and quality care for healthcare practices in the Empire State.",
    keywords: "New York medical director, NY healthcare compliance, NYC medical oversight"
  },

  // Location Pages - Cities
  {
    url: "locations/california/los-angeles",
    bundleEntryPoint: "/src/main.jsx",
    title: "Los Angeles Medical Director Services | Healthcare Compliance",
    description: "Find qualified medical directors in Los Angeles. Expert oversight for aesthetic practices and healthcare clinics in the LA metro area.",
    keywords: "Los Angeles medical director, LA healthcare compliance, Southern California medical oversight"
  },
  {
    url: "locations/california/san-francisco",
    bundleEntryPoint: "/src/main.jsx",
    title: "San Francisco Medical Director Services | Bay Area Healthcare Compliance",
    description: "Expert medical director services in San Francisco. Comprehensive oversight for healthcare practices throughout the Bay Area.",
    keywords: "San Francisco medical director, Bay Area healthcare compliance, Northern California medical oversight"
  },
  {
    url: "locations/florida/miami",
    bundleEntryPoint: "/src/main.jsx",
    title: "Miami Medical Director Services | Healthcare Practice Oversight",
    description: "Expert medical director services in Miami. Comprehensive oversight for med spas and healthcare practices in South Florida.",
    keywords: "Miami medical director, South Florida healthcare compliance, Miami-Dade medical oversight"
  },
  {
    url: "locations/florida/orlando",
    bundleEntryPoint: "/src/main.jsx",
    title: "Orlando Medical Director Services | Central Florida Healthcare Compliance",
    description: "Connect with experienced medical directors in Orlando. Expert oversight for healthcare practices in Central Florida.",
    keywords: "Orlando medical director, Central Florida healthcare compliance, Orange County medical oversight"
  },
  {
    url: "locations/texas/dallas",
    bundleEntryPoint: "/src/main.jsx",
    title: "Dallas Medical Director Services | Practice Compliance",
    description: "Connect with experienced medical directors in Dallas. Expert oversight for healthcare practices in the DFW metroplex.",
    keywords: "Dallas medical director, DFW healthcare compliance, North Texas medical oversight"
  },
  {
    url: "locations/texas/houston",
    bundleEntryPoint: "/src/main.jsx",
    title: "Houston Medical Director Services | Healthcare Compliance",
    description: "Expert medical director services in Houston. Comprehensive oversight for healthcare practices throughout the Greater Houston area.",
    keywords: "Houston medical director, Harris County healthcare compliance, Southeast Texas medical oversight"
  },

  // Resource Pages
  {
    url: "resources/medical-director-role",
    bundleEntryPoint: "/src/main.jsx",
    title: "Understanding Medical Director Responsibilities | Healthcare Compliance Guide",
    description: "Comprehensive guide to medical director roles and responsibilities. Learn about healthcare compliance, oversight requirements, and practice management.",
    keywords: "medical director responsibilities, healthcare compliance guide, practice oversight requirements"
  },
  {
    url: "resources/becoming-medical-director",
    bundleEntryPoint: "/src/main.jsx",
    title: "How to Become a Medical Director | Healthcare Leadership Guide",
    description: "Step-by-step guide to becoming a medical director. Learn about requirements, responsibilities, and career development in healthcare leadership.",
    keywords: "become medical director, healthcare leadership, medical director career"
  },
  {
    url: "resources/medical-direction-challenges",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Direction Challenges & Solutions | Healthcare Guide",
    description: "Expert insights on common medical direction challenges and effective solutions. Navigate healthcare compliance and practice management successfully.",
    keywords: "medical direction challenges, healthcare compliance solutions, practice management guide"
  },
  {
    url: "resources/why-medical-directors-vital",
    bundleEntryPoint: "/src/main.jsx",
    title: "Importance of Medical Directors | Healthcare Practice Success",
    description: "Understand why medical directors are crucial for healthcare practice success. Learn about compliance requirements and quality care standards.",
    keywords: "medical director importance, healthcare compliance requirements, practice quality standards"
  },
  {
    url: "resources/medical-director-responsibilities",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Director Responsibilities Guide | Healthcare Compliance",
    description: "Comprehensive guide to medical director duties and responsibilities. Expert insights on healthcare oversight and practice management.",
    keywords: "medical director duties, healthcare oversight responsibilities, practice management guide"
  },

  // Core Pages
  {
    url: "contact",
    bundleEntryPoint: "/src/main.jsx",
    title: "Contact EliteUSMD | Medical Director Services",
    description: "Connect with EliteUSMD for expert medical director services. Find the right medical oversight solution for your healthcare practice.",
    keywords: "contact medical director service, healthcare compliance contact, practice oversight consultation"
  },
  {
    url: "about",
    bundleEntryPoint: "/src/main.jsx",
    title: "About EliteUSMD | Expert Medical Director Services",
    description: "Learn about EliteUSMD's comprehensive medical director services. Nationwide healthcare compliance and practice oversight solutions.",
    keywords: "about medical director service, healthcare compliance company, practice oversight experts"
  }
]
