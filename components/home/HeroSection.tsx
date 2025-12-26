import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui";

const coreValues = [
  "Personalized immigration strategies",
  "Transparent, step-by-step process",
  "Global expertise with local support",
  "Dedicated adviser for your case",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-maroon-800 via-maroon-700 to-maroon-600 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-maroon-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-maroon-900/30 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cream-100 text-sm mb-8 border border-white/20">
            <span className="mr-2">🏢</span>
            Dubai-Based Immigration Experts
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
            Your Gateway to{" "}
            <span className="text-gold-300">Global Mobility</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-cream-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert Immigration Advisory from Dubai — We guide individuals, families, students, and professionals through visa, residency, and migration pathways for Europe, Canada, the UK, Australia & New Zealand.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-maroon-800 font-semibold rounded-lg hover:bg-cream-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Your Free Consultation
            </Link>
            <Link
              href="/eligibility"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Check Your Eligibility
            </Link>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-center text-cream-100 text-sm"
              >
                <Check className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                {value}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
