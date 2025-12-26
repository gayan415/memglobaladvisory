"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  destination: z.string().min(1, "Please select a destination"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: "employment-permits", label: "Employment Permits / Work Visa" },
  { value: "study-pathways", label: "Study Pathways / Student Visa" },
  { value: "family-sponsorship", label: "Family & Spouse Sponsorship" },
  { value: "permanent-residency", label: "Permanent Residency & Citizenship" },
  { value: "other", label: "Other / Not Sure" },
];

const destinations = [
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "australia", label: "Australia" },
  { value: "new-zealand", label: "New Zealand" },
  { value: "europe", label: "Europe" },
  { value: "multiple", label: "Multiple / Not Sure" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission - in production, this would send to an API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-700 mb-4">
          Thank you for contacting us. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-green-700 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-maroon-800 mb-2">
            Full Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-colors",
              errors.name ? "border-red-300" : "border-cream-300"
            )}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-maroon-800 mb-2">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-colors",
              errors.email ? "border-red-300" : "border-cream-300"
            )}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-maroon-800 mb-2">
          Phone / WhatsApp *
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-colors",
            errors.phone ? "border-red-300" : "border-cream-300"
          )}
          placeholder="+971 XXX XXXX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-maroon-800 mb-2">
            Service Interested In *
          </label>
          <select
            {...register("service")}
            id="service"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-colors",
              errors.service ? "border-red-300" : "border-cream-300"
            )}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-maroon-800 mb-2">
            Preferred Destination *
          </label>
          <select
            {...register("destination")}
            id="destination"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-colors",
              errors.destination ? "border-red-300" : "border-cream-300"
            )}
          >
            <option value="">Select a destination</option>
            {destinations.map((dest) => (
              <option key={dest.value} value={dest.value}>
                {dest.label}
              </option>
            ))}
          </select>
          {errors.destination && (
            <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-maroon-800 mb-2">
          Your Message *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-colors resize-none",
            errors.message ? "border-red-300" : "border-cream-300"
          )}
          placeholder="Tell us about your immigration goals..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
