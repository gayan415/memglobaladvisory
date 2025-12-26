import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Immigration to Canada",
  description: "Expert guidance for Canada immigration - Express Entry, Provincial Nominee Programs, Study Permits, Work Permits, and Family Sponsorship from Dubai.",
};

const visaPrograms = [
  {
    name: "Express Entry",
    description: "Points-based system for skilled workers including Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades.",
    processing: "6-8 months",
  },
  {
    name: "Provincial Nominee Program (PNP)",
    description: "Province-specific immigration streams that can add 600 CRS points to your Express Entry profile.",
    processing: "12-18 months",
  },
  {
    name: "Study Permit",
    description: "Study at designated Canadian institutions with work rights during and after your studies.",
    processing: "4-12 weeks",
  },
  {
    name: "Work Permit",
    description: "LMIA-based work permits, Intra-company transfers, and CUSMA professional permits.",
    processing: "4-16 weeks",
  },
  {
    name: "Family Sponsorship",
    description: "Sponsor your spouse, children, parents, or grandparents to join you in Canada.",
    processing: "12-24 months",
  },
];

export default function CanadaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-7xl mb-6 block">🇨🇦</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Immigration to Canada
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Canada offers world-class opportunities for skilled workers, students, and families. Discover your pathway to Canadian permanent residency.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Canada */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-6">
                Why Choose Canada?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Canada consistently ranks among the best countries for quality of life, healthcare, education, and career opportunities. With welcoming immigration policies and a multicultural society, it&apos;s an ideal destination for new beginnings.
              </p>
              <ul className="space-y-3">
                {[
                  "Universal healthcare coverage",
                  "World-class education system",
                  "Strong economy and job market",
                  "Path to citizenship in 3-5 years",
                  "Family-friendly policies",
                  "Safe and welcoming communities",
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
                  { label: "Capital", value: "Ottawa" },
                  { label: "Languages", value: "English, French" },
                  { label: "Currency", value: "Canadian Dollar (CAD)" },
                  { label: "PR Path", value: "3-5 years to citizenship" },
                  { label: "Work Rights", value: "Full work rights with PR" },
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
            title="Canada Immigration Programs"
            subtitle="Explore the pathways available for your move to Canada"
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
            title="How We Help with Canada Immigration"
            subtitle="Our comprehensive services for your Canadian journey"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Express Entry Profile Optimization", desc: "We help maximize your CRS score and improve your chances of receiving an ITA." },
              { title: "PNP Application Support", desc: "We identify suitable Provincial Nominee Programs and manage your application." },
              { title: "Study Permit Assistance", desc: "From university selection to visa approval, we guide your study journey." },
              { title: "Work Permit Processing", desc: "We handle LMIA applications and employer coordination for work permits." },
              { title: "Family Sponsorship", desc: "We manage spousal, dependent, and parent/grandparent sponsorship applications." },
              { title: "Document Preparation", desc: "We ensure all your documents meet IRCC requirements." },
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
              { name: "UK", flag: "🇬🇧", href: "/destinations/uk" },
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
        title="Ready to Move to Canada?"
        subtitle="Get expert guidance on your Canada immigration journey. Start with a free consultation."
        primaryCTA={{ text: "Start Your Canada Journey", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
