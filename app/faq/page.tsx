"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-cream-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-50 transition-colors"
      >
        <span className="font-semibold text-maroon-900 pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-maroon-600 flex-shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Find answers to common questions about our immigration services and processes.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container size="md">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Questions */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container size="md">
          <SectionHeading
            title="Still Have Questions?"
            subtitle="We're here to help with any questions about your immigration journey"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-cream-200 text-center">
              <h3 className="font-semibold text-maroon-900 mb-2 font-heading">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Email us your question and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@memglobaladvisory.com"
                className="inline-flex items-center text-maroon-700 font-medium hover:text-maroon-800"
              >
                info@memglobaladvisory.com
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cream-200 text-center">
              <h3 className="font-semibold text-maroon-900 mb-2 font-heading">
                Book a Consultation
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Discuss your specific situation with one of our immigration advisers.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-maroon-700 font-medium hover:text-maroon-800"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Start Your Journey?"
        subtitle="Get personalized guidance for your immigration pathway."
        primaryCTA={{ text: "Get Free Consultation", href: "/contact" }}
      />
    </>
  );
}
