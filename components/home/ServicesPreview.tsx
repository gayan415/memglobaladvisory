import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Heart, Home } from "lucide-react";
import { Container, SectionHeading, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Briefcase,
  GraduationCap,
  Heart,
  Home,
};

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive immigration solutions tailored to your unique journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.id} hover className="flex flex-col h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-maroon-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-maroon-700" />
                  </div>
                  <CardTitle>{service.shortTitle}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-maroon-700 font-medium hover:text-maroon-800 transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-maroon-700 text-white font-medium rounded-lg hover:bg-maroon-800 transition-colors shadow-md"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
