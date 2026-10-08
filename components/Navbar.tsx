"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/corporate-travel", label: "Corporate Travel" },
  { href: "/car-rental", label: "Car Rental" },
  { href: "/vehicle-sales", label: "Car Sales" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-primary-dark/95 backdrop-blur shadow-md"
          : "bg-primary-dark"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-oriente flex h-20 items-center justify-between"
      >
         <Link href="/" className="flex items-center focus-ring rounded">
          <Image
            src="/images/Oriente.png"
            alt="Oriente Travels and Tours"
            width={220}
            height={67}
            priority
            quality={100}
            className="h-14 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium text-white/80 transition-colors hover:text-accent focus-ring rounded",
                  pathname === link.href && "text-accent"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Plan Your Journey
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white focus-ring lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-primary-dark lg:hidden">
          <ul className="container-oriente flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-accent focus-ring",
                    pathname === link.href && "text-accent"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="btn-primary w-full">
                Plan Your Journey
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
