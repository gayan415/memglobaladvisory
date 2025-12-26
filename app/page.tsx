import {
  HeroSection,
  DestinationsGrid,
  ServicesPreview,
  WhyChooseUs,
  ProcessSteps,
  TestimonialsSection,
} from "@/components/home";
import { CTABanner } from "@/components/shared";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DestinationsGrid />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSteps />
      <TestimonialsSection />
      <CTABanner
        title="Ready to Start Your Journey?"
        subtitle="Get expert guidance on your immigration pathway. Schedule a free consultation today."
        primaryCTA={{ text: "Get Free Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Check Eligibility", href: "/eligibility" }}
      />
    </>
  );
}
