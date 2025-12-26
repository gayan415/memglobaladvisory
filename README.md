# MEM Global Advisory Partners

Immigration consultancy website for a Dubai-based firm serving clients migrating to Canada, UK, Australia, New Zealand, and Europe.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| React Hook Form + Zod | Forms & validation |
| Lucide React | Icons |
| Vercel | Hosting |

---

## Configuration

Before deploying, update contact details in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  phone: "+971-XXX-XXXX",      // Your phone number
  whatsapp: "+971XXXXXXXX",    // WhatsApp (no dashes)
  email: "info@memglobaladvisory.com",
};
```

---

## Deploy

```bash
npm run build    # Build for production
vercel           # Deploy to Vercel
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | Company information |
| `/services/*` | Service pages (4) |
| `/destinations/*` | Country pages (5) |
| `/how-it-works` | Process explanation |
| `/faq` | Frequently asked questions |
| `/contact` | Contact form |
| `/eligibility` | Eligibility checker |
| `/blog` | Resources (placeholder) |

---

## Development

See [`CLAUDE.md`](./CLAUDE.md) for detailed context, component examples, and roadmap.

---

## License

Private - All rights reserved.
