import { Container, SectionHeading } from "@/components/ui";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-maroon-800">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="A clear and simple process from consultation to approval"
          className="text-white [&>h2]:text-white [&>p]:text-maroon-200"
        />

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-maroon-600">
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 via-gold-500 to-maroon-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-maroon-900">
                    {step.step}
                  </span>
                </div>

                {/* Mobile connector */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-8 bg-maroon-600 -translate-x-1/2" />
                )}

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-maroon-200 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
