import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDestinations, interests } from "@/lib/content";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Eastward — Eastern Prince Edward Island",
    template: "%s | Eastward",
  },
  description: site.description,
  openGraph: {
    title: "Eastward — Eastern Prince Edward Island",
    description: site.description,
    siteName: site.name,
    type: "website",
    url: "/",
    images: [{ url: site.shareImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eastward — Eastern Prince Edward Island",
    description: site.description,
    images: [site.shareImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const destinations = getDestinations();

  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader
          destinations={destinations.map((destination) => ({
            href: `/destinations/${destination.slug}`,
            label: destination.name,
            note: destination.tagline,
          }))}
          interests={interests.map((interest) => ({
            href: `/things-to-do/${interest.slug}`,
            label: interest.name,
            note: interest.summary,
          }))}
        />
        <main id="main">{children}</main>
        <SiteFooter
          destinations={destinations.map((destination) => ({
            href: `/destinations/${destination.slug}`,
            label: destination.name,
          }))}
        />
      </body>
    </html>
  );
}
