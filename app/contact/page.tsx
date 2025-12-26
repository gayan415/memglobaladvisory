import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { formatPhoneDisplay, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MEM Global Advisory Partners. Schedule a free consultation for your immigration needs to Canada, UK, Australia, New Zealand, and Europe.",
};

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Hello! I'm interested in learning more about your immigration services."
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-maroon-100 leading-relaxed">
              Ready to start your immigration journey? Get in touch with our team for a free consultation and personalized guidance.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-6">
                Send Us a Message
              </h2>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-cream-200 shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-6">
                Get in Touch
              </h2>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6 text-white" fill="white" />
                </div>
                <div>
                  <p className="font-semibold text-green-800">Chat on WhatsApp</p>
                  <p className="text-sm text-green-600">Quick response guaranteed</p>
                </div>
              </a>

              {/* Contact Details */}
              <div className="bg-white rounded-xl p-6 border border-cream-200 space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-maroon-600 mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="font-medium text-maroon-800 hover:text-maroon-600"
                    >
                      {formatPhoneDisplay(SITE_CONFIG.phone)}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-maroon-600 mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-medium text-maroon-800 hover:text-maroon-600"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-maroon-600 mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="font-medium text-maroon-800">
                      {SITE_CONFIG.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-maroon-600 mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Office Hours</p>
                    <p className="font-medium text-maroon-800">
                      Sun - Thu: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-gray-600">
                      Fri - Sat: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-cream-100 rounded-xl p-6 border border-cream-200">
                <h3 className="font-semibold text-maroon-900 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-maroon-500 rounded-full mr-2 mt-2" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-maroon-500 rounded-full mr-2 mt-2" />
                    Free initial consultation
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-maroon-500 rounded-full mr-2 mt-2" />
                    Personalized assessment
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-maroon-500 rounded-full mr-2 mt-2" />
                    Clear next steps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-cream-100">
        <Container size="md">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
          <div className="space-y-4">
            {[
              { q: "Is the initial consultation free?", a: "Yes, your first consultation is completely free. We'll assess your situation and provide guidance on the best pathway for your goals." },
              { q: "How quickly can I expect a response?", a: "We typically respond within 24 hours on business days. For urgent matters, contact us via WhatsApp for faster response." },
              { q: "Do I need to visit your office?", a: "No, we offer consultations via phone, video call, and WhatsApp. In-person meetings are also available at our Dubai office." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-cream-200">
                <h4 className="font-semibold text-maroon-900 mb-2">{item.q}</h4>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
