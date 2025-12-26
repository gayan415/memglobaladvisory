import { Globe, Target, MessageSquare, Shield } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = {
  Globe,
  Target,
  MessageSquare,
  Shield,
};

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <Container>
        <SectionHeading
          title="Why Choose MEM Global"
          subtitle="We're committed to making your immigration journey smooth and successful"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-maroon-700" />
                </div>
                <h3 className="text-lg font-semibold text-maroon-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
