# Oriente Travels & Tours — Website

A Phase 1 corporate portfolio website for Oriente Travels & Tours, built with
Next.js (App Router), TypeScript, and Tailwind CSS. Architecture is
scalable for future phases: database/CMS, authentication, bookings,
customer accounts, payments, and an admin dashboard.

## Getting Started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Build & Lint

```bash
npm run build
npm run lint
```

## Project Structure

```
app/                     Route segments (App Router)
  page.tsx                 Home
  about/                    About
  services/                 Services (index + /services/[slug])
  destinations/              Destinations (index + /destinations/[slug])
  corporate-travel/          Corporate Travel
  car-rental/                 Mobility — Car Rental
  vehicle-sales/               Mobility — Vehicle Sales
  contact/                      Contact
  privacy-policy/, terms/         Legal placeholders
  sitemap.ts, robots.ts             SEO
components/               Reusable UI (Navbar, Footer, Hero, cards, CTASection, forms/...)
lib/data/                 Static content (services, destinations, company info)
lib/services/             Service layer (inquiry submission — mocked for Phase 1)
lib/utils/                Small utilities
types/                    Shared TypeScript types (User, Service, Destination, Tour,
                          Vehicle, Booking, Inquiry, Testimonial, Partner, TeamMember)
```

## Notes

- All content (services, destinations, team, contact info) comes from the
  company profile provided; no prices, packages, partners, or testimonials
  were invented.
- Images are represented with styled placeholder blocks (gradients, icons)
  since no brand photography was supplied. Drop real photos into
  `public/images/` and swap the placeholder blocks in `Hero`,
  `DestinationCard`, and the homepage sections for `next/image`.
- Forms (`TravelInquiryForm`, `ContactForm`, `CorporateInquiryForm`,
  `VehicleInquiryForm`) currently submit through a mocked service layer in
  `lib/services/inquiryService.ts`. Point that function at
  `POST /api/contact` (or a future inquiries API) once a backend exists —
  no component changes required.
- Authentication, database, CMS, booking, and admin routes are intentionally
  **not** implemented yet, per the Phase 1 scope. Types for `User`, `Booking`,
  and `Inquiry` are already defined in `types/index.ts` for later phases.

## Roadmap (per project brief)

1. Corporate portfolio website (this build)
2. Database + CMS
3. Customer authentication
4. Travel inquiries/bookings
5. Customer dashboard
6. Admin dashboard
7. Vehicle inventory and vehicle sales
8. Online payments and booking management
