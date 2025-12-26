import { Metadata } from "next";
import Link from "next/link";
import { Check, GraduationCap, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Study Pathways & Student Visas",
  description: "Expert assistance with student visa applications for Canada, UK, Australia, New Zealand, and Europe. We guide you from program selection to visa approval.",
};

const studyDestinations = [
  { country: "Canada", benefits: ["Post-Graduate Work Permit", "Pathway to PR", "Part-time work allowed"] },
  { country: "UK", benefits: ["Graduate Route visa", "Part-time work rights", "World-class universities"] },
  { country: "Australia", benefits: ["Post-Study Work Rights", "Part-time work allowed", "PR pathways"] },
  { country: "New Zealand", benefits: ["Post-Study Work Visa", "Quality education", "Work rights"] },
  { country: "Europe", benefits: ["Affordable tuition", "Schengen access", "Work opportunities"] },
];

export default function StudyPathwaysPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Study Pathways & Student Visas
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Planning to study overseas? We assist with program selection, documentation, and visa submission to help you achieve your educational goals abroad.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Help With */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-6">
                Your Complete Study Abroad Guide
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                From choosing the right program to stepping onto campus, we provide comprehensive support for your international education journey.
              </p>
              <ul className="space-y-4">
                {[
                  "Choose the right program and destination for your goals",
                  "Application review and documentation support",
                  "Student visa submission assistance",
                  "Interview preparation guidance",
                  "Pre-departure briefing and arrival support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-maroon-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-100 rounded-2xl p-8">
              <h3 className="font-semibold text-maroon-900 mb-4 font-heading">
                Study Destinations & Benefits
              </h3>
              <div className="space-y-4">
                {studyDestinations.map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-cream-200">
                    <h4 className="font-medium text-maroon-800 mb-2">{item.country}</h4>
                    <ul className="space-y-1">
                      {item.benefits.map((benefit, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-maroon-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container size="md">
          <SectionHeading
            title="Student Visa Application Process"
            subtitle="Our comprehensive approach to securing your student visa"
          />
          <div className="space-y-6">
            {[
              { step: "1", title: "Program Selection", desc: "We help you identify programs that match your academic goals and career aspirations." },
              { step: "2", title: "University Application", desc: "We assist with university applications and ensure all requirements are met." },
              { step: "3", title: "Documentation", desc: "We compile financial documents, academic records, and all supporting materials." },
              { step: "4", title: "Visa Application", desc: "We prepare and submit your student visa application with proper documentation." },
              { step: "5", title: "Interview Prep", desc: "We provide guidance for visa interviews if required by your destination." },
            ].map((item, i) => (
              <div key={i} className="flex items-start bg-white rounded-xl p-6 border border-cream-200">
                <div className="w-10 h-10 bg-maroon-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-maroon-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-cream-50">
        <Container>
          <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-8 text-center">
            After Your Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Work Permits", href: "/services/employment-permits", desc: "Post-study work visa assistance" },
              { title: "Permanent Residency", href: "/services/permanent-residency", desc: "Transition from student to resident" },
              { title: "Family Sponsorship", href: "/services/family-sponsorship", desc: "Bring your family to join you" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white rounded-xl p-6 border border-cream-200 hover:border-maroon-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-maroon-900 mb-2 group-hover:text-maroon-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <span className="inline-flex items-center text-maroon-700 text-sm font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Study Abroad?"
        subtitle="Get expert guidance on your student visa application. Start with a free consultation."
        primaryCTA={{ text: "Begin Your Student Application", href: "/contact" }}
      />
    </>
  );
}
