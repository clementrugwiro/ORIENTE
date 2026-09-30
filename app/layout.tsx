import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oriente Travels & Tours | Travel, Tourism & Mobility Solutions",
    template: "%s | Oriente Travels & Tours",
  },
  description:
    "Professional, personalized and dependable travel, tourism and mobility solutions from Rwanda to the world.",
  keywords: [
    "Oriente Travels",
    "Rwanda travel agency",
    "Dubai tours from Rwanda",
    "corporate travel Rwanda",
    "car rental Rwanda",
    "Kigali travel agency",
  ],
  metadataBase: new URL("https://www.orientetravels.example"),
  openGraph: {
    title: "Oriente Travels & Tours | Travel, Tourism & Mobility Solutions",
    description:
      "Professional, personalized and dependable travel, tourism and mobility solutions from Rwanda to the world.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
