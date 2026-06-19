const bookingUrl = 'https://seriousmd.com/doc/mary-clarice-lopez'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Consultation', to: '/consultation' },
  { label: 'Contact', to: '/contact' }
]

const trustHighlights = [
  'Registered Nutritionist-Dietitian',
  'Evidence-Based Nutrition Care',
  'Personalized Meal Planning & Nutrition Counseling'
]

const services = [
  {
    title: 'Nutrition Counseling',
    description: 'Personalized guidance to support health goals, daily habits, and sustainable nutrition changes.'
  },
  {
    title: 'Nutrition Analysis',
    description: 'Detailed review of meals, products, or menus to identify nutrients and support informed decisions.'
  },
  {
    title: 'Content Creation',
    description: 'Evidence-based nutrition content for campaigns, educational materials, and digital platforms.'
  },
  {
    title: 'Community / Public Health Nutrition',
    description: 'Nutrition support for programs and outreach that promote healthier communities and public wellbeing.'
  }
]

const audiences = [
  'Individuals managing diabetes',
  'Adults seeking weight management support',
  'Parents looking for pediatric nutrition guidance',
  'Pregnant and postpartum women',
  'Older adults',
  'Individuals with neurodivergent nutrition needs',
  'Women seeking wellness support'
]

const consultationSteps = [
  'Book your consultation through SeriousMD',
  'Discuss your health goals, lifestyle, and nutrition concerns',
  'Receive personalized nutrition guidance and practical next steps'
]

const credentials = [
  'Registered Nutritionist-Dietitian',
  'BS Nutrition and Dietetics',
  'Polytechnic University of the Philippines (Cum Laude)'
]

const experiences = [
  {
    role: 'Clinical Nutritionist',
    organization: 'Wellbees (Jan 2026 to present)',
    points: [
      'Provides virtual nutrition counseling and personalized meal planning through a global wellness platform.',
      'Supports clients in weight management, lifestyle nutrition, maternal-child nutrition, workplace wellness, and sports nutrition.',
      'Delivers evidence-based guidance through structured online consultations.'
    ]
  },
  {
    role: 'Clinical Nutritionist-Dietitian',
    organization: 'Private Practice (Sept 2017 to present)',
    points: [
      'Provides individualized nutrition counseling and consultations.',
      'Delivers health and wellness talks.',
      'Conducts nutrient analysis for products and meal plans.',
      'Experienced in brand collaborations and content creation.',
      'Promotes evidence-based nutrition and practical healthy lifestyle strategies.'
    ]
  }
]

const values = [
  'Evidence-Based Care',
  'Personalized Guidance',
  'Practical Nutrition',
  'Supportive Counseling',
  'Sustainable Lifestyle Changes'
]

const includedServices = [
  'Nutrition assessment',
  'Personalized nutrition counseling',
  'Meal planning guidance',
  'Nutrient counting',
  'Practical food and lifestyle recommendations',
  'Nutrition education',
  'Follow-up support when needed'
]

const clinicHours = [
  { day: 'Monday to Saturday', hours: '09:00 AM – 05:00 PM' },
  { day: 'Sunday', hours: '01:00 PM – 04:00 PM' }
]

const preparationChecklist = [
  'Your main health or nutrition concern',
  'Current medications or supplements, if any',
  'Recent laboratory results, if available',
  'Usual food intake or eating pattern',
  'Questions you want to ask during the consultation'
]

const faqs = [
  {
    question: 'How do I book a consultation?',
    answer: 'Book directly through SeriousMD using the booking button.'
  },
  {
    question: 'How much is the consultation?',
    answer: 'The consultation fee ranges from ₱1,280 to ₱1,600.'
  },
  {
    question: 'What services are available?',
    answer: 'Services include diabetes education, weight management, pediatric nutrition, geriatric nutrition, women’s nutrition, pre and postpartum nutrition, and neurodivergent nutrition.'
  },
  {
    question: 'Is the consultation online?',
    answer: 'Please confirm consultation format and availability through the SeriousMD booking page.'
  }
]

const contactOptions = ['Email', 'SMS', 'Viber', 'Messenger']

const collaborationItems = [
  'Nutrient Analysis',
  'Speaking Engagement (Seminar/Webinar/Wellness Events)',
  'Brand Collaboration/Partnership',
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/MacyTheDietitian/"
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@macythedietitian"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@macythedietitian"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/macythedietitian"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@macythedietitian"
  },
];

const consultationFee = '₱1,280 – ₱1,600'

const footerDisclaimer = 'The information on this website is for general educational purposes and does not replace personalized medical advice. For individual nutrition care, please book a consultation with a qualified health professional.'

export function useSiteContent() {
  return {
    audiences,
    bookingUrl,
    clinicHours,
    collaborationItems,
    consultationFee,
    consultationSteps,
    contactOptions,
    credentials,
    experiences,
    faqs,
    footerDisclaimer,
    includedServices,
    navLinks,
    preparationChecklist,
    services,
    socialLinks,
    trustHighlights,
    values
  }
}
