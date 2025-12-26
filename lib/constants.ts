// MEM Global Advisory Partners - Site Constants

// Types
type NavChild = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const SITE_CONFIG = {
  name: "MEM Global Advisory Partners",
  tagline: "Your Gateway to Global Mobility",
  description: "Expert Immigration Advisory from Dubai - We guide individuals, families, students, and professionals through visa, residency, and migration pathways for Europe, Canada, the UK, Australia & New Zealand.",
  url: "https://memglobaladvisory.com",
  email: "info@memglobaladvisory.com",
  phone: "+971-XXX-XXXX", // Replace with actual phone
  whatsapp: "+971XXXXXXXX", // Replace with actual WhatsApp number (no dashes)
  address: {
    city: "Dubai",
    country: "United Arab Emirates",
    full: "Dubai, United Arab Emirates", // Replace with full address
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Employment Permits", href: "/services/employment-permits" },
      { label: "Study Pathways", href: "/services/study-pathways" },
      { label: "Family Sponsorship", href: "/services/family-sponsorship" },
      { label: "Permanent Residency", href: "/services/permanent-residency" },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Canada", href: "/destinations/canada" },
      { label: "United Kingdom", href: "/destinations/uk" },
      { label: "Australia", href: "/destinations/australia" },
      { label: "New Zealand", href: "/destinations/new-zealand" },
      { label: "Europe", href: "/destinations/europe" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "employment-permits",
    title: "Employment Permits",
    shortTitle: "Work Visas",
    description: "Moving abroad for a job? We help you navigate work visa requirements and optimize your application for success.",
    icon: "Briefcase",
    href: "/services/employment-permits",
    benefits: [
      "Identify the most suitable work visa category",
      "Prepare and optimize your application",
      "Liaise with employers and authorities",
      "Track submission progress",
    ],
    cta: "Start Your Work Visa Journey",
  },
  {
    id: "study-pathways",
    title: "Study Pathways",
    shortTitle: "Student Visas",
    description: "Planning to study overseas? We assist with program selection, documentation, and visa submission.",
    icon: "GraduationCap",
    href: "/services/study-pathways",
    benefits: [
      "Choose the right program and destination",
      "Application review and documentation",
      "Visa submission support",
      "Interview preparation guidance",
    ],
    cta: "Begin Your Student Application",
  },
  {
    id: "family-sponsorship",
    title: "Family & Spouse Sponsorship",
    shortTitle: "Family Visas",
    description: "Reuniting with loved ones should be smooth and supportive. We handle eligibility and sponsorship preparation.",
    icon: "Heart",
    href: "/services/family-sponsorship",
    benefits: [
      "Eligibility assessment",
      "Sponsorship preparation",
      "Application preparation & submission",
      "Ongoing support through approval",
    ],
    cta: "Get Family Sponsorship Help",
  },
  {
    id: "permanent-residency",
    title: "Permanent Residency & Citizenship",
    shortTitle: "PR & Citizenship",
    description: "Ready to call your new country home? We offer complete support from assessment to final decision.",
    icon: "Home",
    href: "/services/permanent-residency",
    benefits: [
      "Points & eligibility assessment",
      "Strategy planning",
      "Complete application support",
      "Follow-up through final decision",
    ],
    cta: "Find Your PR Pathway",
  },
] as const;

export const DESTINATIONS = [
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    href: "/destinations/canada",
    description: "Express Entry, Provincial Nominee Programs, Study Permits, and Family Sponsorship.",
    visaTypes: ["Express Entry", "PNP", "Study Permit", "Work Permit", "Family Sponsorship"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    href: "/destinations/uk",
    description: "Skilled Worker Visa, Student Visa, Family Visa, and Settlement routes.",
    visaTypes: ["Skilled Worker", "Student Visa", "Family Visa", "Graduate Visa", "Innovator"],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    href: "/destinations/australia",
    description: "Skilled Migration, Student Visas, Partner Visas, and Business visas.",
    visaTypes: ["Skilled Independent", "Employer Sponsored", "Student Visa", "Partner Visa", "Business Visa"],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    href: "/destinations/new-zealand",
    description: "Skilled Migrant Category, Work Visas, Student Visas, and Residence pathways.",
    visaTypes: ["Skilled Migrant", "Work Visa", "Student Visa", "Residence", "Partnership"],
  },
  {
    id: "europe",
    name: "Europe",
    flag: "🇪🇺",
    href: "/destinations/europe",
    description: "EU Blue Card, National Visas, Golden Visas, and Residency programs across Europe.",
    visaTypes: ["EU Blue Card", "National D Visa", "Golden Visa", "Student Visa", "Family Reunification"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Free Consultation",
    description: "Understand your profile, goals, and explore your options with our expert advisers.",
  },
  {
    step: 2,
    title: "Strategy Plan",
    description: "We design your best migration pathway based on your unique circumstances.",
  },
  {
    step: 3,
    title: "Documentation",
    description: "We prepare, review, and finalize all your forms and supporting documents.",
  },
  {
    step: 4,
    title: "Submission",
    description: "We lodge your application and monitor your file with authorities.",
  },
  {
    step: 5,
    title: "Decision & Support",
    description: "You receive your outcome with our continued support for next steps.",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "They helped me with my Canada work status — seamless, supportive, and always reachable.",
    author: "L. Fernando",
    location: "Canada Work Permit",
  },
  {
    id: 2,
    quote: "Thanks to MEM's guidance, my UK spouse visa was approved with no stress. Highly recommend!",
    author: "M. Khan",
    location: "UK Spouse Visa",
  },
  {
    id: 3,
    quote: "Professional service from start to finish. They made my Australia PR journey smooth and stress-free.",
    author: "S. Patel",
    location: "Australia PR",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Multicountry Expertise",
    description: "Deep knowledge across Europe, Canada, UK, Australia, and New Zealand immigration systems.",
    icon: "Globe",
  },
  {
    title: "Tailored Solutions",
    description: "Every client's story is unique. We design pathways that fit your specific circumstances.",
    icon: "Target",
  },
  {
    title: "Clear Communication",
    description: "Transparent, step-by-step guidance with prompt support at every stage.",
    icon: "MessageSquare",
  },
  {
    title: "Professional Compliance",
    description: "Expert document preparation that meets all regulatory requirements.",
    icon: "Shield",
  },
] as const;

export const FAQS = [
  {
    question: "How long will the immigration process take?",
    answer: "Timelines depend on the destination country and visa type. Processing times can range from a few weeks for some work permits to several months for permanent residency applications. We'll provide a clear estimate after your initial consultation based on your specific case.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer: "No advisor can guarantee approval since final decisions are made by immigration authorities. However, we maximize your chances through expert preparation, thorough documentation, and strategic application approaches based on our extensive experience.",
  },
  {
    question: "What if my case seems complex?",
    answer: "We specialize in tailoring strategies for every unique profile — whether you're a skilled worker, student, investor, or seeking family sponsorship. Complex cases often just need the right approach and thorough preparation.",
  },
  {
    question: "What documents will I need?",
    answer: "Required documents vary by visa type but typically include passport, educational certificates, work experience letters, financial documents, and language test results. We provide a comprehensive checklist tailored to your specific application.",
  },
  {
    question: "Can you help if I've been refused before?",
    answer: "Yes, we can review your previous application, identify areas for improvement, and help you prepare a stronger case for reapplication. Many successful applicants have had previous refusals.",
  },
  {
    question: "Do you offer payment plans for your services?",
    answer: "We understand immigration can be a significant investment. Please contact us to discuss flexible payment arrangements that work for your situation.",
  },
] as const;
