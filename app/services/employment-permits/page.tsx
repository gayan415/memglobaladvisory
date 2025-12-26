import { Metadata } from "next";
import Link from "next/link";
import { Check, Briefcase, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Employment Permits & Work Visas",
  description: "Expert assistance with work visa applications for Canada, UK, Australia, New Zealand, and Europe. We help you navigate employer sponsorship and skilled worker programs.",
};

const workVisaTypes = [
  { country: "Canada", visas: ["LMIA Work Permit", "Intra-Company Transfer", "CUSMA/NAFTA", "Open Work Permit"] },
  { country: "UK", visas: ["Skilled Worker Visa", "Health & Care Worker", "Global Talent", "Intra-company Transfer"] },
  { country: "Australia", visas: ["TSS Visa (482)", "Employer Nomination (186)", "Regional Sponsored (494)"] },
  { country: "New Zealand", visas: ["Essential Skills", "Specific Purpose", "Working Holiday"] },
  { country: "Europe", visas: ["EU Blue Card", "National Work Visa", "ICT Permit"] },
];

export default function EmploymentPermitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Employment Permits & Work Visas
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Moving abroad for a job? We help you navigate work visa requirements and optimize your application for success across all major destinations.
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
                How We Help You Secure Work Authorization
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you have a job offer in hand or are exploring opportunities abroad, our team guides you through the complex process of obtaining work authorization in your destination country.
              </p>
              <ul className="space-y-4">
                {[
                  "Identify the most suitable work visa category for your situation",
                  "Prepare and optimize your application documents",
                  "Coordinate with employers and immigration authorities",
                  "Track submission progress and handle any requests",
                  "Provide guidance on maintaining status after arrival",
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
                Work Visa Types by Country
              </h3>
              <div className="space-y-4">
                {workVisaTypes.map((item, i) => (
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

      {/* Process */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container size="md">
          <SectionHeading
            title="Work Visa Application Process"
            subtitle="Our step-by-step approach to securing your work authorization"
          />
          <div className="space-y-6">
            {[
              { step: "1", title: "Assessment", desc: "We review your job offer, qualifications, and destination to identify the best visa pathway." },
              { step: "2", title: "Employer Coordination", desc: "We work with your employer on sponsorship requirements and labor market compliance if needed." },
              { step: "3", title: "Documentation", desc: "We compile and review all required documents including contracts, qualifications, and supporting evidence." },
              { step: "4", title: "Application", desc: "We prepare and submit your application, ensuring all requirements are met." },
              { step: "5", title: "Follow-up", desc: "We track your application and respond to any additional requests from authorities." },
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
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Permanent Residency", href: "/services/permanent-residency", desc: "Transition from work visa to permanent status" },
              { title: "Family Sponsorship", href: "/services/family-sponsorship", desc: "Bring your family to join you abroad" },
              { title: "Study Pathways", href: "/services/study-pathways", desc: "Student visa with work rights" },
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
        title="Ready to Work Abroad?"
        subtitle="Get expert guidance on your work visa application. Start with a free consultation."
        primaryCTA={{ text: "Start Your Work Visa Journey", href: "/contact" }}
      />
    </>
  );
}
