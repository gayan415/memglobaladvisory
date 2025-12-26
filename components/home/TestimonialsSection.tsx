"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <Container size="md">
        <SectionHeading
          title="Success Stories"
          subtitle="Hear from clients who achieved their immigration goals with our support"
        />

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-cream-200">
            <Quote className="h-12 w-12 text-maroon-200 mb-6" />

            <blockquote className="text-xl md:text-2xl text-maroon-800 font-heading leading-relaxed mb-8">
              &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-maroon-900">
                  {TESTIMONIALS[currentIndex].author}
                </p>
                <p className="text-sm text-gray-600">
                  {TESTIMONIALS[currentIndex].location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-maroon-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-maroon-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-maroon-700" : "bg-maroon-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
