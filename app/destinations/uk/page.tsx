import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Immigration to the United Kingdom",
  description: "Expert guidance for UK immigration - Skilled Worker Visa, Student Visa, Family Visa, and settlement routes from Dubai.",
};

const visaPrograms = [
  {
    name: "Skilled Worker Visa",
    description: "For those with a job offer from a UK employer with a sponsor license. Requires meeting salary and English language requirements.",
    processing: "3-8 weeks",
  },
  {
    name: "Student Visa",
    description: "Study at UK universities and colleges with work rights during and after your course via the Graduate Route.",
    processing: "3-4 weeks",
  },
  {
    name: "Family Visa",
    description: "Join family members who are British citizens or have settled status in the UK.",
    processing: "8-24 weeks",
  },
  {
    name: "Global Talent Visa",
    description: "For leaders and emerging talent in academia, research, arts, culture, and digital technology.",
    processing: "3-8 weeks",
  },
  {
    name: "Graduate Route",
    description: "Stay and work in the UK for 2 years (3 for PhD) after completing your studies.",
    processing: "8 weeks",
  },
];

export default function UKPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-7xl mb-6 block">🇬🇧</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Immigration to the United Kingdom
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              The UK offers excellent career opportunities, world-renowned education, and a rich cultural experience. Discover your pathway to living and working in Britain.
            </p>
          </div>
        </Container>
      </section>

      {/* Why UK */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-6">
                Why Choose the UK?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The United Kingdom combines rich history with modern opportunities. From London&apos;s global business hub to world-class universities, the UK offers diverse pathways for skilled professionals, students, and families.
              </p>
              <ul className="space-y-3">
                {[
                  "Global financial and business center",
                  "Top-ranked universities worldwide",
                  "English-speaking environment",
                  "Access to Europe (pre-settled and settled status)",
                  "Strong employment opportunities",
                  "Rich cultural heritage",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-maroon-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-100 rounded-2xl p-8">
              <h3 className="font-semibold text-maroon-900 mb-4 font-heading">Quick Facts</h3>
              <div className="space-y-4">
                {[
                  { label: "Capital", value: "London" },
                  { label: "Language", value: "English" },
                  { label: "Currency", value: "British Pound (GBP)" },
                  { label: "ILR Path", value: "5 years to settlement" },
                  { label: "Citizenship", value: "1 year after ILR" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-cream-200 last:border-0">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium text-maroon-800">{item.value}</span>
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
            title="UK Visa Categories"
            subtitle="Explore the pathways available for your move to the UK"
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
            title="How We Help with UK Immigration"
            subtitle="Our comprehensive services for your UK journey"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Skilled Worker Applications", desc: "We coordinate with sponsors and prepare compliant applications." },
              { title: "Student Visa Support", desc: "From CAS to visa approval, we guide your UK study journey." },
              { title: "Family Visa Processing", desc: "Spouse, partner, and dependent visa applications expertly handled." },
              { title: "Settlement Applications", desc: "We help you transition from temporary visa to Indefinite Leave to Remain." },
              { title: "Citizenship Applications", desc: "British citizenship applications prepared and submitted." },
              { title: "Business & Investor Visas", desc: "Innovator and Start-up visa guidance for entrepreneurs." },
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
              { name: "Australia", flag: "🇦🇺", href: "/destinations/australia" },
              { name: "New Zealand", flag: "🇳🇿", href: "/destinations/new-zealand" },
              { name: "Europe", flag: "🇪🇺", href: "/destinations/europe" },
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
        title="Ready to Move to the UK?"
        subtitle="Get expert guidance on your UK immigration journey. Start with a free consultation."
        primaryCTA={{ text: "Start Your UK Journey", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
