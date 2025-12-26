import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui";
import { SITE_CONFIG, SERVICES, DESTINATIONS } from "@/lib/constants";
import { formatPhoneDisplay } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold font-heading mb-4">
                MEM Global Advisory
              </h3>
              <p className="text-maroon-200 text-sm leading-relaxed mb-6">
                Expert immigration advisory from Dubai. We guide individuals, families, and professionals through visa and migration pathways with clarity and care.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center text-maroon-200 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                  {formatPhoneDisplay(SITE_CONFIG.phone)}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center text-maroon-200 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  {SITE_CONFIG.email}
                </a>
                <div className="flex items-start text-maroon-200 text-sm">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                  {SITE_CONFIG.address.full}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.href}
                      className="text-maroon-200 hover:text-white transition-colors text-sm"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Destinations
              </h4>
              <ul className="space-y-2">
                {DESTINATIONS.map((destination) => (
                  <li key={destination.id}>
                    <Link
                      href={destination.href}
                      className="text-maroon-200 hover:text-white transition-colors text-sm"
                    >
                      {destination.flag} {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-maroon-200 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-maroon-200 hover:text-white transition-colors text-sm"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eligibility"
                    className="text-maroon-200 hover:text-white transition-colors text-sm"
                  >
                    Check Eligibility
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-maroon-200 hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-maroon-200 hover:text-white transition-colors text-sm"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-maroon-200 hover:text-white transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-maroon-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-maroon-300 text-sm">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-maroon-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-maroon-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
