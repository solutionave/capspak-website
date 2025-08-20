export const site = {
  name: "Consortium for Asia Pacific Studies",
  shortName: "CAPSPak",
  tagline: "Consortium for Asia Pacific Studies",
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
    {
      label: "About",
      href: "/about",
      children: [
        {
          label: "Overview",
          href: "/about",
          description: "Mission & identity",
        },
        {
          label: "Structure & Governance",
          href: "/about/structure",
          description: "Org structure & leadership",
        },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      children: [
        {
          label: "Publications",
          href: "/publications",
          description: "Briefs, papers & reports",
        },
        {
          label: "Event Recordings",
          href: "/event-recordings",
          description: "Archive of past events",
        },
        {
          label: "Commentary",
          href: "/commentary",
          description: "Insights & short analyses",
        },
      ],
    },
    {
      label: "Events",
      href: "/events",
      children: [
        {
          label: "Expert Talks",
          href: "/events/expert-talks",
          description: "Focused discussions with practitioners",
        },
        {
          label: "Seminars",
          href: "/events/seminars",
          description: "In-depth thematic sessions",
        },
        {
          label: "Podcasts",
          href: "/events/podcasts",
          description: "Conversations & interviews",
        },
        {
          label: "Past Conferences",
          href: "/events/past-conferences",
          description: "Highlights & archives",
        },
      ],
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
