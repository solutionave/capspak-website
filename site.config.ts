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
    {
      label: "Research",
      href: "/research",
      children: [
        {
          label: "Pillars",
          href: "/research#pillars",
          description: "Core thematic areas",
        },
        {
          label: "Publications",
          href: "/publications",
          description: "Briefs, papers, data",
        },
        {
          label: "Events",
          href: "/events",
          description: "Dialogues & workshops",
        },
      ],
    },
    {
      label: "Programs",
      href: "/programs",
      children: [
        {
          label: "Fellowships",
          href: "/programs#fellowships",
          description: "Early-career & visiting",
        },
        {
          label: "Policy Labs",
          href: "/programs#policy-labs",
          description: "Rapid analysis sprints",
        },
        {
          label: "Youth Outreach",
          href: "/programs#youth",
          description: "STEM & policy mentorship",
        },
      ],
    },
    { label: "Events", href: "/events" },
    { label: "Publications", href: "/publications" },
    { label: "Announcements", href: "/announcements" },
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
