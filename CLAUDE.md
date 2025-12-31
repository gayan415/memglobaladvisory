# MEM Global Advisory Partners - Project Context

## Overview
Professional immigration consultancy website for a Dubai-based firm serving clients migrating to Europe, Canada, UK, Australia, and New Zealand.

**Live Site:** https://memglobaladvisory.vercel.app/
**Local Dev:** `npm run dev` → http://localhost:3000
**GitHub:** https://github.com/gayan415/memglobaladvisory

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |
| Framer Motion | Animations (installed, not yet used) |
| React Hook Form + Zod | Form validation (Stripe-ready) |
| Vercel | Hosting |

---

## Design System

### Colors
```
Maroon (Primary): #6B2C3E (maroon-700)
Off-white (Background): #FDFBF7 (cream-50)
Gold (Accent): #B8860B (gold-500)
```

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Key Classes
- `bg-maroon-700` - Primary buttons
- `bg-cream-50` - Page backgrounds
- `bg-cream-100` - Card/section backgrounds
- `text-maroon-900` - Headings
- `font-heading` - Playfair Display

---

## Project Structure

```
memglobaladvisory/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage
│   ├── about/
│   ├── services/             # 5 pages (overview + 4 detail)
│   ├── destinations/         # 6 pages (overview + 5 countries)
│   ├── how-it-works/
│   ├── faq/
│   ├── blog/                 # Placeholder
│   ├── contact/
│   └── eligibility/          # Multi-step wizard
├── components/
│   ├── layout/               # Header, Footer, WhatsAppButton
│   ├── ui/                   # Button, Card, Container, SectionHeading
│   ├── home/                 # Homepage sections
│   ├── forms/                # ContactForm
│   └── shared/               # CTABanner
├── lib/
│   ├── constants.ts          # Site content, nav links, services, etc.
│   └── utils.ts              # cn(), getWhatsAppUrl(), formatPhoneDisplay()
└── public/
    └── images/               # (empty - add images here)
```

---

## Content Location

All site content is centralized in `lib/constants.ts`:
- `SITE_CONFIG` - Company name, contact details, addresses
- `NAV_LINKS` - Navigation structure
- `SERVICES` - 4 service offerings with descriptions
- `DESTINATIONS` - 5 countries with visa types
- `PROCESS_STEPS` - 5-step process
- `TESTIMONIALS` - Client quotes
- `WHY_CHOOSE_US` - Value propositions
- `FAQS` - Frequently asked questions

---

## Pages Built (19 total)

### Core Pages
- `/` - Homepage with hero, services, destinations, process, testimonials
- `/about` - Company story, mission, values, stats
- `/how-it-works` - 5-step process explanation
- `/faq` - Accordion FAQ (uses FAQS from constants)
- `/contact` - Contact form + WhatsApp + office details
- `/blog` - Placeholder with "Coming Soon"
- `/eligibility` - Multi-step eligibility checker wizard

### Services (5 pages)
- `/services` - Overview with all 4 services
- `/services/employment-permits` - Work visa details
- `/services/study-pathways` - Student visa details
- `/services/family-sponsorship` - Family visa details
- `/services/permanent-residency` - PR & citizenship details

### Destinations (6 pages)
- `/destinations` - Overview with comparison table
- `/destinations/canada` - Express Entry, PNP, etc.
- `/destinations/uk` - Skilled Worker, Student, Family
- `/destinations/australia` - 189, 190, 482, etc.
- `/destinations/new-zealand` - Skilled Migrant, Work visas
- `/destinations/europe` - EU Blue Card, Golden Visa

---

## Deployment Status

- **Vercel:** Connected to `gayan415/memglobaladvisory` (auto-deploys on push)
- **Live URL:** https://memglobaladvisory.vercel.app/
- **Status:** Production ready (pending contact details)

---

## Priority Next Steps

### 1. Stripe Payment Integration
**Status:** Never implemented before - needs full setup

**Steps to implement:**
1. Create Stripe account at https://stripe.com
2. Get API keys (publishable + secret) from Stripe Dashboard
3. Install Stripe: `npm install stripe @stripe/stripe-js @stripe/react-stripe-js`
4. Create environment variables:
   ```
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   ```
5. Build required components:
   - `/app/api/checkout/route.ts` - API route to create checkout session
   - `/app/pricing/page.tsx` - Pricing/packages page
   - `/app/success/page.tsx` - Payment success page
   - `/app/cancel/page.tsx` - Payment cancelled page
6. Define service packages with prices
7. Test with Stripe test keys before going live

**Architecture notes:**
- React Hook Form + Zod already installed (form validation ready)
- Can use Stripe Checkout (hosted) or Stripe Elements (embedded)
- Stripe Checkout is simpler for first implementation

### 2. Domain & Email Setup
**Domain:**
- Purchase `memglobaladvisory.com` (Namecheap/Cloudflare/GoDaddy ~$12-15/year)
- In Vercel: Settings → Domains → Add domain
- Update DNS records as instructed by Vercel
- Update `SITE_CONFIG.url` in constants.ts

**Email addresses to set up:**
- `info@memglobaladvisory.com` - General inquiries
- `support@memglobaladvisory.com` - Client support

**Email hosting options:**
1. **Google Workspace** (~$6/user/month) - Professional, reliable
2. **Zoho Mail** (Free for 5 users) - Good free option
3. **Cloudflare Email Routing** (Free) - Forward to existing email
4. **ProtonMail** (~$4/user/month) - Privacy-focused

**Contact form integration:**
- Once email is set up, integrate with Resend/SendGrid to send form submissions to info@memglobaladvisory.com

---

## Other Next Steps

### Add Logo
When logo is ready:
- Add to `public/images/logo.svg`
- Update `components/layout/Header.tsx` to use Image component

### Set Up Contact Form Backend
Currently logs to console. Options:
- **Resend** - Email API (free tier: 100 emails/day)
- **SendGrid** - Email API
- **Formspree** - No-code form backend

---

## Future Enhancements

### Phase 1: Quick Wins
- [ ] Add actual logo
- [ ] Add hero background image (optional)
- [ ] Add team photos to About page
- [ ] Add country flag images (replace emoji with SVG)
- [ ] Set up email notifications for contact form

### Phase 2: Functionality
- [ ] **Stripe Payments** - Architecture ready (Zod schemas, form structure)
  - Add `/api/checkout` route
  - Create pricing/packages page
  - Integrate Stripe Elements
- [ ] **Blog CMS** - Options:
  - MDX files in `/content/blog`
  - Headless CMS (Sanity, Contentful)
  - Notion as CMS
- [ ] **Calendly Integration** - Replace/supplement WhatsApp

### Phase 3: Growth
- [ ] Multi-language support (Arabic)
- [ ] Client portal (document upload, case tracking)
- [ ] Live chat widget
- [ ] Analytics (Google Analytics, Vercel Analytics)

---

## Useful Commands

```bash
# Development
npm run dev           # Start dev server at localhost:3000

# Build & Test Production Locally
npm run build         # Production build
npm run start         # Start production server

# Deploy (auto-deploys on push to main)
git add . && git commit -m "Description" && git push

# Type checking
npx tsc --noEmit      # Check TypeScript errors
```

---

## Component Usage Examples

### Adding a new page
```tsx
// app/new-page/page.tsx
import { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { CTABanner } from "@/components/shared";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for SEO",
};

export default function NewPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-20">
        <Container>
          <h1 className="text-4xl font-bold text-white font-heading">Title</h1>
        </Container>
      </section>

      <section className="py-16 bg-cream-50">
        <Container>
          <SectionHeading title="Section" subtitle="Subtitle" />
          {/* Content */}
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
```

### Using the Button component
```tsx
import { Button } from "@/components/ui";

<Button variant="primary" size="lg">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

### Using the Card component
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";

<Card hover>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

---

## Notes

- **Deployment**: Auto-deploys when pushing to `main` branch on GitHub
- **WhatsApp Button**: Floating on all pages (bottom-right), configured in `components/layout/WhatsAppButton.tsx`
- **Forms**: Contact form logs to console - needs backend/email integration for production
- **SEO**: Each page has metadata, but needs OpenGraph images for social sharing
- **Images**: Currently using emoji flags - consider SVG flags for better quality
- **Contact Details**: Using placeholder values - update in `lib/constants.ts` before going live with custom domain

---

## Reference Websites (from client brief)
- https://www.cblanche.com/
- https://rapidlineimmigration.com/
- https://dm-consultant.ae/

Client preference: Simple design, dark maroon font, off-white background.
