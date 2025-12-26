import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "light";
}

export function CTABanner({
  title = "Ready to Start Your Journey?",
  subtitle = "Get expert guidance on your immigration pathway. Schedule a free consultation today.",
  primaryCTA = { text: "Get Free Consultation", href: "/contact" },
  secondaryCTA,
  variant = "default",
}: CTABannerProps) {
  const bgClass =
    variant === "default"
      ? "bg-gradient-to-r from-maroon-700 to-maroon-800"
      : "bg-cream-100";
  const textClass = variant === "default" ? "text-white" : "text-maroon-900";
  const subtitleClass =
    variant === "default" ? "text-maroon-100" : "text-gray-600";
  const primaryBtnClass =
    variant === "default"
      ? "bg-white text-maroon-800 hover:bg-cream-100"
      : "bg-maroon-700 text-white hover:bg-maroon-800";
  const secondaryBtnClass =
    variant === "default"
      ? "border-white/30 text-white hover:bg-white/10"
      : "border-maroon-300 text-maroon-700 hover:bg-maroon-50";

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-4 ${textClass}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${subtitleClass}`}>{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${primaryBtnClass}`}
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg border-2 transition-all duration-300 ${secondaryBtnClass}`}
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
