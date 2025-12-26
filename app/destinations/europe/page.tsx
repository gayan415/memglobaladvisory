import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Immigration to Europe",
  description: "Expert guidance for European immigration - EU Blue Card, Golden Visas, National Work Visas, and Residency Programs from Dubai.",
};

const visaPrograms = [
  {
    name: "EU Blue Card",
    description: "Work and residence permit for highly qualified professionals across EU member states. Valid for up to 4 years with path to permanent residence.",
    processing: "2-4 months",
  },
  {
    name: "Golden Visa Programs",
    description: "Investment-based residence permits available in Portugal, Spain, Greece, and other EU countries.",
    processing: "3-6 months",
  },
  {
    name: "National Work Visa",
    description: "Country-specific work visas for employment in individual European nations including Germany, France, Netherlands.",
    processing: "2-4 months",
  },
  {
    name: "Student Visa",
    description: "Study at European universities with affordable tuition and Schengen area access.",
    processing: "4-8 weeks",
  },
  {
    name: "Family Reunification",
    description: "Join family members who are legal residents in EU countries.",
    processing: "3-12 months",
  },
];

const popularCountries = [
  { country: "Germany", highlight: "Strong economy, EU Blue Card" },
  { country: "Netherlands", highlight: "Tech hub, English-friendly" },
  { country: "Portugal", highlight: "Golden Visa, quality of life" },
  { country: "Spain", highlight: "Lifestyle, Golden Visa" },
  { country: "France", highlight: "Culture, business opportunities" },
  { country: "Ireland", highlight: "English-speaking, tech sector" },
];

export default function EuropePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-7xl mb-6 block">🇪🇺</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Immigration to Europe
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Europe offers diverse opportunities across 27 EU nations. From the EU Blue Card to Golden Visas, discover your pathway to living and working in Europe.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Europe */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-6">
                Why Choose Europe?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Europe offers unparalleled diversity — from historic cities to modern economies. With Schengen area access, excellent healthcare, and rich cultural experiences, Europe provides unique opportunities for work, study, and life.
              </p>
              <ul className="space-y-3">
                {[
                  "Access to 27 Schengen countries",
                  "Strong social security systems",
                  "World-class healthcare",
                  "Rich cultural heritage",
                  "Excellent education opportunities",
                  "Diverse career options",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-maroon-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-100 rounded-2xl p-8">
              <h3 className="font-semibold text-maroon-900 mb-4 font-heading">Popular Destinations</h3>
              <div className="space-y-3">
                {popularCountries.map((item, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-cream-200 last:border-0">
                    <span className="font-medium text-maroon-800">{item.country}</span>
                    <span className="text-sm text-gray-600">{item.highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Visa Programs */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <SectionHeading
            title="European Immigration Pathways"
            subtitle="Explore the options available for your move to Europe"
          />
          <div className="space-y-6">
            {visaPrograms.map((program, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 border border-cream-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-maroon-900 font-heading mb-2">
                      {program.name}
                    </h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-sm text-gray-500">Processing</span>
                    <p className="font-medium text-maroon-700">{program.processing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <SectionHeading
            title="How We Help with European Immigration"
            subtitle="Our comprehensive services for your European journey"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "EU Blue Card Applications", desc: "We help qualified professionals secure EU Blue Cards across member states." },
              { title: "Golden Visa Programs", desc: "Investment-based residence in Portugal, Spain, Greece and more." },
              { title: "National Work Visas", desc: "Country-specific work permit applications for Germany, Netherlands, France." },
              { title: "Student Visa Support", desc: "Study at European universities with comprehensive visa assistance." },
              { title: "Family Reunification", desc: "Bring your family to join you in your European destination." },
              { title: "Permanent Residence", desc: "Long-term residence and citizenship pathway guidance." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-cream-200">
                <h3 className="font-semibold text-maroon-900 mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other Destinations */}
      <section className="py-16 bg-cream-100">
        <Container>
          <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-8 text-center">
            Explore Other Destinations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Canada", flag: "🇨🇦", href: "/destinations/canada" },
              { name: "UK", flag: "🇬🇧", href: "/destinations/uk" },
              { name: "Australia", flag: "🇦🇺", href: "/destinations/australia" },
              { name: "New Zealand", flag: "🇳🇿", href: "/destinations/new-zealand" },
            ].map((dest, i) => (
              <Link
                key={i}
                href={dest.href}
                className="group bg-white rounded-xl p-4 text-center border border-cream-200 hover:border-maroon-300 hover:shadow-md transition-all"
              >
                <span className="text-3xl block mb-2">{dest.flag}</span>
                <span className="font-medium text-maroon-800 group-hover:text-maroon-600">{dest.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Move to Europe?"
        subtitle="Get expert guidance on your European immigration journey. Start with a free consultation."
        primaryCTA={{ text: "Start Your Europe Journey", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
