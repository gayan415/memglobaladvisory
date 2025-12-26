import { Metadata } from "next";
import { MessageSquare, FileSearch, FileCheck, Send, PartyPopper } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";
import { PROCESS_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn about our simple 5-step immigration process - from free consultation to final approval. MEM Global Advisory Partners guides you every step of the way.",
};

const stepIcons = [MessageSquare, FileSearch, FileCheck, Send, PartyPopper];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              How It Works
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Our streamlined process takes the complexity out of immigration. Here&apos;s how we guide you from initial consultation to successful approval.
            </p>
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              const isLast = index === PROCESS_STEPS.length - 1;
              return (
                <div key={step.step} className="relative">
                  {/* Connection line */}
                  {!isLast && (
                    <div className="absolute left-7 top-20 w-0.5 h-16 bg-maroon-200" />
                  )}

                  <div className="flex items-start mb-12">
                    {/* Step number */}
                    <div className="relative z-10 w-14 h-14 bg-maroon-700 rounded-full flex items-center justify-center flex-shrink-0 mr-6 shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow bg-white rounded-xl p-6 md:p-8 border border-cream-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-maroon-600 bg-maroon-50 px-3 py-1 rounded-full mr-3">
                          Step {step.step}
                        </span>
                        <h3 className="text-xl font-semibold text-maroon-900 font-heading">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <SectionHeading
            title="What to Expect"
            subtitle="A closer look at each stage of your journey"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Initial Contact",
                items: ["Free 30-minute consultation", "Profile assessment", "Discussion of your goals", "Overview of options"],
              },
              {
                title: "Planning Phase",
                items: ["Detailed eligibility analysis", "Customized strategy development", "Timeline estimation", "Cost breakdown"],
              },
              {
                title: "Document Preparation",
                items: ["Comprehensive checklist", "Document review", "Form completion assistance", "Quality assurance"],
              },
              {
                title: "Application Submission",
                items: ["Final review", "Official submission", "Payment handling", "Confirmation receipt"],
              },
              {
                title: "Tracking & Updates",
                items: ["Regular status updates", "Authority correspondence", "Additional document requests", "Timeline monitoring"],
              },
              {
                title: "Final Decision",
                items: ["Result notification", "Next steps guidance", "Celebration!", "Ongoing support"],
              },
            ].map((phase, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-cream-200">
                <h3 className="font-semibold text-maroon-900 mb-4 font-heading">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-maroon-400 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container size="md">
          <SectionHeading
            title="Common Questions"
            subtitle="Quick answers about our process"
          />
          <div className="space-y-6">
            {[
              { q: "How long does the consultation take?", a: "Our initial consultation typically takes 30-45 minutes. This gives us enough time to understand your situation and provide preliminary guidance." },
              { q: "What documents should I bring?", a: "For the initial consultation, just bring your passport and any relevant documents like educational certificates or work experience letters. We'll provide a detailed checklist for your specific case afterward." },
              { q: "How do you communicate updates?", a: "We keep you informed via your preferred method - email, phone, or WhatsApp. You'll receive regular updates on your application status and any actions required." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-cream-200">
                <h4 className="font-semibold text-maroon-900 mb-2">{item.q}</h4>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Book your free consultation today and take the first step toward your new life abroad."
        primaryCTA={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
