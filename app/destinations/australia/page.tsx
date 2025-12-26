import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Immigration to Australia",
  description: "Expert guidance for Australia immigration - Skilled Migration, Student Visas, Partner Visas, and Employer Sponsored visas from Dubai.",
};

const visaPrograms = [
  {
    name: "Skilled Independent Visa (189)",
    description: "Points-tested permanent visa for skilled workers not sponsored by an employer, state, or family member.",
    processing: "6-12 months",
  },
  {
    name: "Skilled Nominated Visa (190)",
    description: "Permanent visa for skilled workers nominated by an Australian state or territory government.",
    processing: "6-12 months",
  },
  {
    name: "Employer Sponsored (482 & 186)",
    description: "Temporary Skill Shortage visa and Employer Nomination Scheme for skilled workers with employer sponsorship.",
    processing: "1-6 months",
  },
  {
    name: "Student Visa (500)",
    description: "Study at Australian institutions with work rights during your course.",
    processing: "4-8 weeks",
  },
  {
    name: "Partner Visa (820/801)",
    description: "For partners of Australian citizens, permanent residents, or eligible New Zealand citizens.",
    processing: "12-24 months",
  },
];

export default function AustraliaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-7xl mb-6 block">🇦🇺</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Immigration to Australia
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Australia offers an exceptional quality of life, strong economy, and diverse opportunities. Explore your pathway to living and working Down Under.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Australia */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-6">
                Why Choose Australia?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Australia consistently ranks among the world&apos;s most livable countries. With beautiful landscapes, excellent healthcare, and a thriving economy, it&apos;s an ideal destination for skilled professionals and families.
              </p>
              <ul className="space-y-3">
                {[
                  "High quality of life and standard of living",
                  "Strong economy with low unemployment",
                  "World-class healthcare system",
                  "Excellent education and universities",
                  "Multicultural and welcoming society",
                  "Beautiful natural environment",
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
                  { label: "Capital", value: "Canberra" },
                  { label: "Language", value: "English" },
                  { label: "Currency", value: "Australian Dollar (AUD)" },
                  { label: "PR Path", value: "Immediate with 189/190" },
                  { label: "Citizenship", value: "4 years residence" },
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
            title="Australia Visa Categories"
            subtitle="Explore the pathways available for your move to Australia"
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
            title="How We Help with Australia Immigration"
            subtitle="Our comprehensive services for your Australian journey"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Skills Assessment", desc: "We guide you through the assessment process with the relevant assessing authority." },
              { title: "Points Optimization", desc: "We help maximize your points score for skilled migration visas." },
              { title: "EOI Management", desc: "Expression of Interest submission and management through SkillSelect." },
              { title: "State Nomination", desc: "We identify suitable state nomination pathways for subclass 190." },
              { title: "Employer Sponsorship", desc: "We work with employers on TSS and ENS visa applications." },
              { title: "Partner Visa Support", desc: "Comprehensive support for partner and family visa applications." },
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
        title="Ready to Move to Australia?"
        subtitle="Get expert guidance on your Australia immigration journey. Start with a free consultation."
        primaryCTA={{ text: "Start Your Australia Journey", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
