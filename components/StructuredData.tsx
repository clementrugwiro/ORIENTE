import { companyInfo } from "@/lib/data/company";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",

    name: companyInfo.name,

    url: "https://orientetravels.co.rw",

    logo: "https://orientetravels.co.rw/images/logo.png",

    description: companyInfo.whoWeAre,

    telephone: companyInfo.contact.phones[0],

    email: companyInfo.contact.emails[0],

    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.contact.address,
      addressLocality: "Kigali",
      addressCountry: "RW",
    },

    areaServed: [
      "Rwanda",
      "Africa",
      "Dubai",
      "Europe",
      "USA",
      "China",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}