export const site = {
  name: "Consortium for Asia Pacific Studies",
  shortName: "CAPSPak",
  tagline: "Consortium for Asia Pacific Studies",
  url: "https://www.capspak.example", // replace with real domain
  email: "info@capspak.com ",
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
    {
      label: "About",
      href: "/about",
      children: [
        {
          label: "Overview",
          href: "/about",
        },
        {
          label: "Structure & Governance",
          href: "/about/structure",

        },
      ],
    },
    {
      label: "Publications",
      href: "/Publications",
      children: [
        {
          label: "Think Points",
          href: "/thinkpoints",
        },
        {
          label: "Weekly Newsletter",
          href: "/weeklynewsletter",
        },
        {
          label: "News Monitor",
          href: "/newsmonitor",
        },
      ],
    },
    {
      label: "Seminars",
      href: "/events/seminars",
    },
    // Stand‑alone Events & Publications removed (now under Resources)
    { label: "Announcements", href: "/announcements" },
    { label: "Opportunities", href: "/opportunities" },
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
