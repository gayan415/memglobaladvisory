import { Metadata } from "next";
import { Check, Globe, Users, Award, Clock } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MEM Global Advisory Partners - Dubai-based immigration consultancy dedicated to supporting clients in their journey to relocate and build new lives in top global destinations.",
};

const stats = [
  { icon: Globe, label: "Countries Served", value: "5+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Clock, label: "Cases Processed", value: "1000+" },
];

const values = [
  {
    title: "Client-Centered Approach",
    description: "Your goals and circumstances are unique. We take the time to understand your story and craft solutions that work for you.",
  },
  {
    title: "Transparency & Integrity",
    description: "We provide honest assessments and clear communication at every step. No hidden costs, no false promises.",
  },
  {
    title: "Expert Knowledge",
    description: "Our team stays current with the latest immigration policies and procedures across multiple jurisdictions.",
  },
  {
    title: "End-to-End Support",
    description: "From initial consultation to final approval, we're with you every step of the way.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              About MEM Global Advisory
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              We are a Dubai-based immigration consultancy dedicated to supporting clients in their journey to relocate and build new lives in top global destinations.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-maroon-900 font-heading mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At MEM Global Advisory Partners, our mission is to simplify the complex immigration process with clarity, integrity, and strategic guidance — from your first consultation to final approval.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We combine deep knowledge of immigration processes with personalized service — because every client&apos;s story and goals are unique.
              </p>
              <ul className="space-y-3">
                {["Expert guidance tailored to your situation", "Clear, honest communication", "Comprehensive documentation support", "Ongoing assistance through approval"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-maroon-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-maroon-100 rounded-2xl p-8 md:p-12">
              <blockquote className="text-xl text-maroon-800 font-heading italic leading-relaxed">
                &ldquo;We believe everyone deserves the opportunity to pursue their dreams, wherever in the world those dreams may take them.&rdquo;
              </blockquote>
              <p className="mt-4 text-maroon-600 font-medium">— MEM Global Team</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-maroon-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-10 w-10 text-gold-400 mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-maroon-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-cream-200"
              >
                <h3 className="text-xl font-semibold text-maroon-900 font-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <SectionHeading
            title="Why Choose Us?"
            subtitle="What sets MEM Global Advisory apart"
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { title: "Multicountry Expertise", desc: "Deep knowledge across Europe, Canada, UK, Australia, and New Zealand immigration systems." },
                { title: "Tailored Migration Pathways", desc: "We design strategies that fit your specific circumstances and goals." },
                { title: "Clear Communication", desc: "Transparent, step-by-step guidance with prompt support at every stage." },
                { title: "Professional Compliance", desc: "Expert document preparation that meets all regulatory requirements." },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-8 h-8 bg-maroon-700 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-maroon-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
