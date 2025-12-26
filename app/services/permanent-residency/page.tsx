import { Metadata } from "next";
import Link from "next/link";
import { Check, Home, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Permanent Residency & Citizenship",
  description: "Expert assistance with permanent residency and citizenship applications for Canada, UK, Australia, New Zealand, and Europe. From assessment to approval.",
};

const prPathways = [
  { country: "Canada", pathways: ["Express Entry", "Provincial Nominee Program", "Canadian Experience Class", "Atlantic Immigration"] },
  { country: "UK", pathways: ["Indefinite Leave to Remain", "Settlement Visa", "British Citizenship", "EU Settlement"] },
  { country: "Australia", pathways: ["Skilled Independent (189)", "State Nominated (190)", "Regional (191)", "Employer Sponsored"] },
  { country: "New Zealand", pathways: ["Skilled Migrant Category", "Residence from Work", "Investor Visa", "Entrepreneur"] },
  { country: "Europe", pathways: ["Long-term Residence", "Golden Visa", "EU Citizenship", "National PR Programs"] },
];

export default function PermanentResidencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Permanent Residency & Citizenship
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Ready to call your new country home? We offer complete support from points assessment to final decision, helping you secure your future abroad.
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
                Your Path to Permanent Status
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Permanent residency opens doors to a new life — the right to live, work, and study without restrictions, access to social benefits, and a pathway to citizenship.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive points and eligibility assessment",
                  "Strategic pathway planning for maximum success",
                  "Complete application preparation and review",
                  "Expression of Interest (EOI) management",
                  "Follow-up through final decision and landing",
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
                PR Pathways by Country
              </h3>
              <div className="space-y-4">
                {prPathways.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-medium text-maroon-800 mb-2">{item.country}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.pathways.map((pathway, j) => (
                        <span key={j} className="text-xs bg-white px-3 py-1 rounded-full text-gray-600 border border-cream-200">
                          {pathway}
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

      {/* Benefits of PR */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <SectionHeading
            title="Benefits of Permanent Residency"
            subtitle="What permanent status means for you and your family"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Live & Work Freely", desc: "No work permit restrictions. Live and work anywhere in your new country." },
              { title: "Access Healthcare", desc: "Enjoy the same healthcare benefits as citizens in most countries." },
              { title: "Education Benefits", desc: "Access domestic tuition rates and education grants." },
              { title: "Social Security", desc: "Qualify for pensions, unemployment benefits, and social programs." },
              { title: "Sponsor Family", desc: "Bring your family members to join you permanently." },
              { title: "Path to Citizenship", desc: "Become eligible for citizenship after meeting residence requirements." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-cream-200">
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
            title="PR Application Process"
            subtitle="Our comprehensive approach to permanent residency applications"
          />
          <div className="space-y-6">
            {[
              { step: "1", title: "Points Assessment", desc: "We calculate your points score and identify the best pathways for your profile." },
              { step: "2", title: "Strategy Development", desc: "We create a roadmap to maximize your chances, including any improvements needed." },
              { step: "3", title: "EOI Submission", desc: "We prepare and submit your Expression of Interest where applicable." },
              { step: "4", title: "Full Application", desc: "Upon invitation, we compile and submit your complete application package." },
              { step: "5", title: "Finalization", desc: "We guide you through medical exams, police checks, and landing procedures." },
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
            Building Your Profile
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Work Permits", href: "/services/employment-permits", desc: "Gain work experience to boost your PR application" },
              { title: "Study Pathways", href: "/services/study-pathways", desc: "Education can improve your points score" },
              { title: "Family Sponsorship", href: "/services/family-sponsorship", desc: "Bring your family once you have PR" },
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
        title="Ready to Make It Permanent?"
        subtitle="Get expert guidance on your permanent residency application. Start with a free consultation."
        primaryCTA={{ text: "Find Your PR Pathway", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
