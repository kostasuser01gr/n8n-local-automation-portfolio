import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.portfolio),
  title: {
    default: `${site.name} | n8n Automation Portfolio`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: [
    "n8n automation portfolio",
    "workflow engineering",
    "self-hosted n8n",
    "PostgreSQL automation",
    "Docker Colima",
    "local-first automation",
    "n8n workflow examples"
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    images: [site.socialImage]
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.socialImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.github,
    knowsAbout: ["n8n", "workflow automation", "PostgreSQL", "Docker", "React", "release engineering"],
    hasPart: {
      "@type": "SoftwareSourceCode",
      name: site.title,
      codeRepository: site.github,
      programmingLanguage: ["TypeScript", "JSON", "SQL"]
    }
  };

  return (
    <html lang="en">
      <body>
        <Background />
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
