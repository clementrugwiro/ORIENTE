import Link from "next/link";
import { Compass, Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "@/lib/data/company";
import { services } from "@/lib/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="container-oriente grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Compass className="h-5 w-5 text-accent" aria-hidden="true" />
            Oriente <span className="text-accent">Travels &amp; Tours</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {companyInfo.whoWeAre.split(". ")[0]}. {companyInfo.philosophy}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
            <li><Link href="/destinations" className="hover:text-accent">Destinations</Link></li>
            <li><Link href="/corporate-travel" className="hover:text-accent">Corporate Travel</Link></li>
            <li><Link href="/car-rental" className="hover:text-accent">Car Rental</Link></li>
            <li><Link href="/vehicle-sales" className="hover:text-accent">Vehicle Sales</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{companyInfo.contact.address}</span>
            </li>
            {companyInfo.contact.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-accent">{phone}</a>
              </li>
            ))}
            {companyInfo.contact.emails.map((email) => (
              <li key={email} className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${email}`} className="hover:text-accent break-all">{email}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3" aria-label="Social media placeholders">
            {["Facebook", "Instagram", "LinkedIn"].map((label) => (
              <span
                key={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs text-white/50"
                title={`${label} (coming soon)`}
              >
                {label[0]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-oriente flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>&copy; {year} {companyInfo.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
