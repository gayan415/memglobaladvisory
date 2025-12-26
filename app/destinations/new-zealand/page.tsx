import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Immigration to New Zealand",
  description: "Expert guidance for New Zealand immigration - Skilled Migrant Category, Work Visas, Student Visas, and Residence pathways from Dubai.",
};

const visaPrograms = [
  {
    name: "Skilled Migrant Category",
    description: "Points-based residence visa for skilled workers with qualifications, work experience, and a job offer or employment in New Zealand.",
    processing: "6-12 months",
  },
  {
    name: "Work to Residence",
    description: "Temporary work visa that provides a pathway to residence after working in New Zealand.",
    processing: "3-6 months",
  },
  {
    name: "Student Visa",
    description: "Study at New Zealand institutions with work rights and post-study work visa options.",
    processing: "4-8 weeks",
  },
  {
    name: "Partnership Visa",
    description: "For partners of New Zealand citizens or residents in a genuine and stable relationship.",
    processing: "6-12 months",
  },
  {
    name: "Entrepreneur Visa",
    description: "For experienced business people wanting to establish a business in New Zealand.",
    processing: "6-12 months",
  },
];

export default function NewZealandPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-7xl mb-6 block">🇳🇿</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Immigration to New Zealand
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              New Zealand offers an exceptional work-life balance, stunning natural beauty, and welcoming communities. Discover your pathway to Aotearoa.
            </p>
          </div>
        </Container>
      </section>

      {/* Why NZ */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-6">
                Why Choose New Zealand?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                New Zealand is renowned for its quality of life, safety, and natural beauty. With a strong economy, excellent healthcare, and a welcoming attitude toward immigrants, it&apos;s perfect for those seeking a balanced lifestyle.
              </p>
              <ul className="space-y-3">
                {[
                  "Outstanding work-life balance",
                  "Safe and peaceful environment",
                  "World-class natural beauty",
                  "Strong education system",
                  "Friendly, multicultural society",
                  "Clean, green living",
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
                  { label: "Capital", value: "Wellington" },
                  { label: "Languages", value: "English, Māori" },
                  { label: "Currency", value: "New Zealand Dollar (NZD)" },
                  { label: "Residence Path", value: "Points-based system" },
                  { label: "Citizenship", value: "5 years residence" },
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
            title="New Zealand Visa Categories"
            subtitle="Explore the pathways available for your move to New Zealand"
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
            title="How We Help with New Zealand Immigration"
            subtitle="Our comprehensive services for your New Zealand journey"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Points Calculation", desc: "We assess and optimize your points for the Skilled Migrant Category." },
              { title: "EOI Submission", desc: "Expression of Interest preparation and submission management." },
              { title: "Work Visa Support", desc: "Essential Skills and work to residence visa applications." },
              { title: "Student Pathway", desc: "Study visa and post-study work visa guidance." },
              { title: "Partner Applications", desc: "Partnership-based residence and work visa support." },
              { title: "Business Immigration", desc: "Entrepreneur and investor visa category assistance." },
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
        title="Ready to Move to New Zealand?"
        subtitle="Get expert guidance on your New Zealand immigration journey. Start with a free consultation."
        primaryCTA={{ text: "Start Your NZ Journey", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
