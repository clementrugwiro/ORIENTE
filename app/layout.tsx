import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
metadataBase: new URL("https://www.orientetravels.co.rw"),

title: {
default:
"Oriente Travels | Travel Agency, Tours & Car Rental in Rwanda",
template: "%s | Oriente Travels",
},

description:
"Oriente Travels and Tours is a Rwanda-based travel company providing airline ticketing, hotel reservations, visa assistance, tours, corporate travel, car rental and vehicle solutions.",

keywords: [
"Oriente Travels",
"travel agency Rwanda",
"travel agency Kigali",
"Rwanda travel agency",
"Rwanda tours",
"Dubai tours from Rwanda",
"corporate travel Rwanda",
"car rental Rwanda",
"vehicle sales Rwanda",
"travel services Kigali",
],

alternates: {
canonical: "/",
},

openGraph: {
title:
"Oriente Travels | Travel Agency, Tours & Car Rental in Rwanda",
description:
"Professional travel, tourism and mobility solutions from Rwanda to the world.",
url: "https://www.orientetravels.co.rw/",
siteName: "Oriente Travels",
type: "website",
locale: "en_RW",
images: [
{
url: "/images/airplane-taking-off-sunset.jpg",
width: 1200,
height: 630,
alt: "Oriente Travels and Tours",
},
],
},

twitter: {
card: "summary_large_image",
title:
"Oriente Travels | Travel Agency, Tours & Car Rental in Rwanda",
description:
"Professional travel, tourism and mobility solutions from Rwanda to the world.",
images: ["/images/airplane-taking-off-sunset.jpg"],
},

robots: {
index: true,
follow: true,
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
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}