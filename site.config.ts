export const site = {
  name: "Centre for Aerospace & Policy Studies Pakistan",
  shortName: "CAPSPak",
  tagline: "Advancing aerospace, security, and policy research in Pakistan",
  url: "https://www.capspak.example", // replace with real domain
  email: "info@capspak.example",
  twitter: "capspak",
  linkedin: "company/capspak",
  github: "capspak",
  keywords: [
    "Aerospace",
    "Security Studies",
    "Policy Research",
    "Pakistan",
    "Think Tank",
    "Defense",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Programs", href: "/programs" },
    { label: "Events", href: "/events" },
    { label: "Publications", href: "/publications" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com/capspak" },
    { label: "LinkedIn", href: "https://linkedin.com/company/capspak" },
    { label: "GitHub", href: "https://github.com/capspak" },
  ],
  footer: {
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof site;
