export const site = {
  name: "Consortium for Asia Pacific Studies",
  shortName: "CAPES",
  tagline: "Consortium for Asia Pacific and Eurasian Studies",
  description:
    "CAPES is a Pakistan-based think tank producing independent research, policy briefs, and analysis on Asia-Pacific and Eurasian geopolitics, security studies, and defense policy.",
  url: "https://www.capespak.com",
  email: "capspakofficial@gmail.com ",
  twitter: "capspak",
  linkedin: "company/capspak",
  github: "capspak",
  keywords: [
    "CAPES",
    "Consortium for Asia Pacific and Eurasian Studies",
    "Asia Pacific think tank Pakistan",
    "Eurasian studies",
    "Pakistan foreign policy",
    "geopolitics research",
    "Aerospace",
    "Security Studies",
    "Policy Research",
    "Pakistan",
    "Think Tank",
    "Defense",
    "Strategic Studies",
    "International Relations Pakistan",
  ],
  nav: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        {
          label: "Vision and Mission",
          href: "/about",
        },
        {
          label: "Structure & Governance",
          href: "/about/structure",
        },
        {
          label: "Our Partners",
          href: "/about/partners",

        },
        {
          label: "CAPES Chapters",
          href: "#",
          children: [
            {
              label: "Eurasia",
              href: "/eurasia",
            },
             {
              label: "Southeast Asia",
              href: "/about/capes-chapters/southeast-asia",
            },
             {
              label: "Northeast Asia",
              href: "/about/capes-chapters/northeast-asia", 
            },
             {
              label: "Oceania",
              href: "/about/capes-chapters/oceania",
            },
            {
              label: "CAPES-CAF",
              href: "/about/capes-chapters/caps-caf",
            },
          ]
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
          label: "Weekly News Monitor",
          href: "/weeklynewsmonitor",
        },
        {
          label: "Newsletter",
          href: "/newsletter",
        },
         {
          label: "Research Publications",
          href: "/research-publications",
        },
         {
          label: "Policy Brief",
          href: "/policy-brief",
        },
      ],
    },
    {
      label: "Events",
      href: "/events",
    },
    // Stand‑alone Events & Publications removed (now under Resources)
    {
      label: "Opportunities",
      href: "/opportunities",
      children: [
        {
          label: "CAPES Internship Program",
          href: "/internship",
        },
        {
          label: "CAPES Membership",
          href: "/opportunities",
        },
        {
          label: "Fellowship",
          href: "/fellowship",
        },
       
      ],
    },
      //  {
      //     label: "Policy Briefs",
      //     href: "/policy-briefs",
      //   },

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
