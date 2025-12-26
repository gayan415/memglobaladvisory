import { Metadata } from "next";
import Link from "next/link";
import { Check, Heart, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Family & Spouse Sponsorship",
  description: "Expert assistance with family reunification visas including spouse visas, dependent visas, and parent sponsorship for Canada, UK, Australia, New Zealand, and Europe.",
};

const familyVisaTypes = [
  { country: "Canada", visas: ["Spouse/Partner", "Dependent Children", "Parents & Grandparents", "Super Visa"] },
  { country: "UK", visas: ["Spouse Visa", "Fiancé(e) Visa", "Child Visa", "Parent Visa"] },
  { country: "Australia", visas: ["Partner Visa (820/801)", "Prospective Marriage", "Child Visa", "Parent Visa"] },
  { country: "New Zealand", visas: ["Partnership Visa", "Dependent Child", "Parent Visa"] },
  { country: "Europe", visas: ["Family Reunification", "Spouse Visa", "Dependent Visa"] },
];

export default function FamilySponsorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Family & Spouse Sponsorship
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Reuniting with loved ones should be smooth and supportive. We handle eligibility assessment and sponsorship preparation to bring your family together.
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
                Bringing Families Together
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Family separation is challenging. We understand the importance of reuniting with your loved ones and work diligently to make the process as smooth as possible.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive eligibility assessment for sponsors and applicants",
                  "Relationship documentation guidance",
                  "Financial requirement verification",
                  "Application preparation and submission",
                  "Ongoing support through the entire process",
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
                Family Visa Categories
              </h3>
              <div className="space-y-4">
                {familyVisaTypes.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-medium text-maroon-800 mb-2">{item.country}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.visas.map((visa, j) => (
                        <span key={j} className="text-xs bg-white px-3 py-1 rounded-full text-gray-600 border border-cream-200">
                          {visa}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who Can Sponsor */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <SectionHeading
            title="Who Can You Sponsor?"
            subtitle="Different relationships qualify for different visa categories"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Spouse/Partner", desc: "Legally married spouse or de facto/common-law partner" },
              { title: "Children", desc: "Dependent children including adopted children" },
              { title: "Parents", desc: "Parents and in some cases grandparents" },
              { title: "Fiancé(e)", desc: "Prospective spouse for marriage visa categories" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-cream-200 text-center">
                <h3 className="font-semibold text-maroon-900 mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container size="md">
          <SectionHeading
            title="Family Sponsorship Process"
            subtitle="Our approach to family reunification applications"
          />
          <div className="space-y-6">
            {[
              { step: "1", title: "Eligibility Check", desc: "We verify that both sponsor and applicant meet all requirements." },
              { step: "2", title: "Relationship Evidence", desc: "We guide you on documenting your genuine relationship." },
              { step: "3", title: "Financial Proof", desc: "We help compile evidence of financial support capability." },
              { step: "4", title: "Application Prep", desc: "We prepare comprehensive applications with all supporting documents." },
              { step: "5", title: "Submission & Follow-up", desc: "We submit and monitor your application until decision." },
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
      <section className="py-16 bg-cream-100">
        <Container>
          <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Work Permits", href: "/services/employment-permits", desc: "Work authorization for family members" },
              { title: "Permanent Residency", href: "/services/permanent-residency", desc: "Long-term settlement for families" },
              { title: "Study Pathways", href: "/services/study-pathways", desc: "Education options for dependents" },
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
        title="Ready to Reunite with Your Family?"
        subtitle="Get expert guidance on your family sponsorship application. Start with a free consultation."
        primaryCTA={{ text: "Get Family Sponsorship Help", href: "/contact" }}
      />
    </>
  );
}
