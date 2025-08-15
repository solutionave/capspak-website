import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "../site.config";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementServer from "../components/AnnouncementServer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: site.tagline,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
  keywords: [...site.keywords, 'solutionave', 'solutionave design', 'solutionave development'],
  authors: [{ name: site.name }, { name: 'solutionave', url: 'https://solutionave.com' }],
  creator: 'solutionave',
  publisher: site.name,
  other: { developer: 'solutionave' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-800 flex min-h-screen flex-col`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: site.name,
              url: site.url,
              description: site.tagline,
              sameAs: [
                `https://twitter.com/${site.twitter}`,
                `https://linkedin.com/${site.linkedin}`,
                site.github ? `https://github.com/${site.github}` : undefined
              ].filter(Boolean),
              creator: {
                '@type': 'Organization',
                name: 'solutionave',
                url: 'https://solutionave.com',
                description: 'Design & development partner',
              },
              publisher: { '@type': 'Organization', name: site.name },
            })
          }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-neutral-900 text-white px-3 py-2 rounded">Skip to content</a>
  <AnnouncementServer />
  <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

