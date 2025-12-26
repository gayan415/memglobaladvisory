import { Metadata } from "next";
import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description: "Immigration guides, visa checklists, policy updates, and expert advice for Canada, UK, Australia, New Zealand, and Europe immigration.",
};

const upcomingTopics = [
  "Express Entry 2025: What to Expect",
  "UK Skilled Worker Visa Guide",
  "Australia Points Calculator Explained",
  "New Zealand Skilled Migrant Update",
  "EU Blue Card vs National Visas",
  "Document Checklist for PR Applications",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Resources & Blog
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Expert guides, policy updates, and helpful resources for your immigration journey.
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container size="md">
          <div className="text-center">
            <div className="w-20 h-20 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="h-10 w-10 text-maroon-600" />
            </div>
            <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We&apos;re working on comprehensive guides and resources to help you navigate the immigration process. Subscribe to be notified when new content is available.
            </p>

            {/* Email Signup Placeholder */}
            <div className="max-w-md mx-auto mb-12">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-cream-300 focus:outline-none focus:ring-2 focus:ring-maroon-500"
                />
                <button className="px-6 py-3 bg-maroon-700 text-white rounded-lg font-medium hover:bg-maroon-800 transition-colors">
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We&apos;ll only send you relevant immigration updates. No spam.
              </p>
            </div>

            {/* Upcoming Topics */}
            <div className="bg-white rounded-2xl p-8 border border-cream-200 text-left">
              <h3 className="font-semibold text-maroon-900 mb-4 text-center">
                Upcoming Topics
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {upcomingTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center text-gray-600 text-sm"
                  >
                    <ArrowRight className="h-4 w-4 text-maroon-400 mr-2 flex-shrink-0" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Resources */}
      <section className="py-16 bg-cream-100">
        <Container>
          <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-8 text-center">
            Quick Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Check Your Eligibility",
                desc: "Quick assessment to see which pathways might work for you.",
                href: "/eligibility",
                cta: "Start Assessment",
              },
              {
                title: "Our Services",
                desc: "Learn about how we can help with your immigration journey.",
                href: "/services",
                cta: "View Services",
              },
              {
                title: "FAQ",
                desc: "Find answers to common immigration questions.",
                href: "/faq",
                cta: "Read FAQ",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white rounded-xl p-6 border border-cream-200 hover:border-maroon-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-maroon-900 mb-2 group-hover:text-maroon-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <span className="inline-flex items-center text-maroon-700 text-sm font-medium group-hover:text-maroon-800">
                  {item.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Have Questions Now?"
        subtitle="Don't wait for our blog - get personalized guidance today."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
