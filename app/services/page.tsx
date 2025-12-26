import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Heart, Home, Check } from "lucide-react";
import { Container, SectionHeading, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { CTABanner } from "@/components/shared";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive immigration services including work permits, student visas, family sponsorship, and permanent residency applications for Canada, UK, Australia, New Zealand, and Europe.",
};

const iconMap = {
  Briefcase,
  GraduationCap,
  Heart,
  Home,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Our Services
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Comprehensive immigration solutions tailored to your unique journey. From work permits to permanent residency, we guide you every step of the way.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card key={service.id} hover className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-maroon-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-maroon-700" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-maroon-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-maroon-700 font-medium hover:text-maroon-800 transition-colors group"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container size="md">
          <SectionHeading
            title="Our Approach"
            subtitle="Every service follows our proven methodology"
          />
          <div className="space-y-8">
            {[
              { step: "1", title: "Assessment", desc: "We evaluate your profile, goals, and eligibility for different pathways." },
              { step: "2", title: "Strategy", desc: "We develop a customized plan based on your unique circumstances." },
              { step: "3", title: "Preparation", desc: "We help you gather, prepare, and review all required documentation." },
              { step: "4", title: "Submission", desc: "We submit your application and monitor its progress." },
              { step: "5", title: "Support", desc: "We provide ongoing assistance until you receive your decision." },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
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

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Book a free consultation and we'll help you find the right pathway."
        primaryCTA={{ text: "Get Free Consultation", href: "/contact" }}
      />
    </>
  );
}
