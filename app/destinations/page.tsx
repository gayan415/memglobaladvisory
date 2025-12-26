import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";
import { DESTINATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore immigration pathways to Canada, UK, Australia, New Zealand, and Europe. MEM Global Advisory Partners helps you find the right destination for your goals.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Choose Your Destination
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              We specialize in immigration services for the world&apos;s most sought-after destinations. Each offers unique opportunities for work, study, and settlement.
            </p>
          </div>
        </Container>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((destination) => (
              <Link
                key={destination.id}
                href={destination.href}
                className="group bg-white rounded-2xl p-8 border border-cream-200 hover:border-maroon-300 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-6xl mb-6 block">{destination.flag}</span>
                <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-3 group-hover:text-maroon-700 transition-colors">
                  {destination.name}
                </h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.visaTypes.slice(0, 3).map((visa, i) => (
                    <span key={i} className="text-xs bg-cream-100 px-3 py-1 rounded-full text-maroon-700">
                      {visa}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-maroon-700 font-medium group-hover:text-maroon-800">
                  Explore pathways
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <SectionHeading
            title="Compare Destinations"
            subtitle="Key factors to consider when choosing your destination"
          />
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-cream-200">
              <thead>
                <tr className="border-b border-cream-200">
                  <th className="p-4 text-left text-maroon-900 font-semibold">Factor</th>
                  {DESTINATIONS.map((d) => (
                    <th key={d.id} className="p-4 text-center text-maroon-900 font-semibold">
                      {d.flag} {d.name.split(" ")[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-cream-100">
                  <td className="p-4 font-medium text-maroon-800">Processing Time</td>
                  <td className="p-4 text-center">6-12 months</td>
                  <td className="p-4 text-center">3-8 weeks</td>
                  <td className="p-4 text-center">6-18 months</td>
                  <td className="p-4 text-center">6-12 months</td>
                  <td className="p-4 text-center">Varies</td>
                </tr>
                <tr className="border-b border-cream-100">
                  <td className="p-4 font-medium text-maroon-800">Points System</td>
                  <td className="p-4 text-center">Yes</td>
                  <td className="p-4 text-center">Partial</td>
                  <td className="p-4 text-center">Yes</td>
                  <td className="p-4 text-center">Yes</td>
                  <td className="p-4 text-center">Varies</td>
                </tr>
                <tr className="border-b border-cream-100">
                  <td className="p-4 font-medium text-maroon-800">Work Rights</td>
                  <td className="p-4 text-center">Full</td>
                  <td className="p-4 text-center">Full</td>
                  <td className="p-4 text-center">Full</td>
                  <td className="p-4 text-center">Full</td>
                  <td className="p-4 text-center">Full</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-maroon-800">Path to Citizenship</td>
                  <td className="p-4 text-center">3-5 years</td>
                  <td className="p-4 text-center">5-6 years</td>
                  <td className="p-4 text-center">4 years</td>
                  <td className="p-4 text-center">5 years</td>
                  <td className="p-4 text-center">5-10 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Not Sure Which Destination Is Right?"
        subtitle="Book a free consultation and we'll help you find the perfect match for your goals."
        primaryCTA={{ text: "Get Free Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
