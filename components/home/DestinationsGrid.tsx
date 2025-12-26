import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { DESTINATIONS } from "@/lib/constants";

export function DestinationsGrid() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <Container>
        <SectionHeading
          title="Choose Your Destination"
          subtitle="We specialize in immigration services for the world's most sought-after destinations"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {DESTINATIONS.map((destination) => (
            <Link
              key={destination.id}
              href={destination.href}
              className="group relative bg-cream-100 rounded-xl p-6 text-center border border-cream-200 hover:border-maroon-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Flag */}
              <span className="text-5xl md:text-6xl mb-4 block">
                {destination.flag}
              </span>

              {/* Name */}
              <h3 className="font-semibold text-maroon-800 group-hover:text-maroon-600 transition-colors">
                {destination.name}
              </h3>

              {/* Arrow */}
              <ArrowRight className="h-4 w-4 text-maroon-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/destinations"
            className="inline-flex items-center text-maroon-700 font-medium hover:text-maroon-800 transition-colors"
          >
            View all destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
