export interface TeamMember {
  id: string;
  slug: string; // used for profile route
  name: string;
  role: string;
  unit?: string;
  bio?: string; // short line used in listings
  about?: string; // longer paragraph for profile
  experience?: string[]; // bullet list
  publications?: string[]; // placeholder titles
  headshot?: string;
  email?: string;
  linkedin?: string;
}

export interface GovernanceBody {
  id: string;
  title: string;
  description?: string;
  members: TeamMember[];
}

export const leadership: TeamMember[] = [
  {
    id: "tm-exec-dir",
    slug: "ayesha-khan",
    name: "Dr. Ayesha Khan",
    role: "Executive Director",
    bio: "Leads overall strategy & external engagement.",
    about:
      "Dr. Khan drives institutional vision, stakeholder engagement, and cross-programme alignment, drawing on 15+ years across aerospace policy and technology governance.",
    experience: [
      "Former Senior Policy Advisor, National Innovation Council",
      "Visiting Scholar, Space Policy Institute",
      "Board Member, Regional STEM Outreach Initiative",
    ],
    publications: [
      "Aerospace Resilience Pathways (2025)",
      "Dual-Use Tech Governance in Emerging Economies (2024)",
    ],
    headshot: "/vercel.svg",
  },
  {
    id: "tm-policy-head",
    slug: "imran-siddiqui",
    name: "Imran Siddiqui",
    role: "Head of Policy Research",
    bio: "Oversees cross-domain policy analysis & publications.",
    about:
      "Imran coordinates analytical output quality and mentorship of fellows, focusing on escalation dynamics and innovation ecosystems.",
    experience: [
      "Former Defence Innovation Analyst",
      "Research Lead, Strategic Stability Project",
    ],
    publications: ["Escalation Ladders & Autonomous Systems (2025)"],
    headshot: "/globe.svg",
  },
];

export const researchFellows: TeamMember[] = [
  {
    id: "tm-fellow-aero",
    slug: "sara-malik",
    name: "Sara Malik",
    role: "Fellow – Aerospace & Space",
    unit: "Aerospace Futures",
    bio: "Launch, orbital infrastructure & civil/military aerospace.",
    about:
      "Sara analyses regional launch capability maturation, orbital asset governance, and atmospheric platform innovation trends.",
    experience: ["Analyst, Regional Space Innovation Forum"],
    headshot: "/window.svg",
  },
  {
    id: "tm-fellow-stability",
    slug: "omar-qureshi",
    name: "Omar Qureshi",
    role: "Fellow – Strategic Stability",
    unit: "Strategic Stability",
    bio: "Deterrence dynamics & escalation risk mapping.",
    about:
      "Omar focuses on AI-enabled C2 impacts, escalation pathways, and risk reduction frameworks.",
    headshot: "/next.svg",
  },
  {
    id: "tm-fellow-ind",
    slug: "hiba-raza",
    name: "Hiba Raza",
    role: "Fellow – Industrial Base",
    unit: "Industrial Base",
    bio: "Supply chain resilience & capability diffusion.",
    about:
      "Hiba studies aerospace-adjacent manufacturing ecosystems, dual-use export controls, and localisation opportunities.",
    headshot: "/file.svg",
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    id: "tm-adv-1",
    slug: "farooq-ahmed",
    name: "Lt. Gen. (R) Farooq Ahmed",
    role: "Advisory Board Member",
    bio: "Strategic affairs & defence modernisation.",
    about:
      "Provides strategic perspective on force modernisation and regional stability considerations.",
  },
  {
    id: "tm-adv-2",
    slug: "nadia-rehman",
    name: "Prof. Nadia Rehman",
    role: "Advisory Board Member",
    bio: "Technology governance & ethics.",
    about:
      "Advises on ethical frameworks, AI governance, and responsible innovation practices.",
  },
];

export const governanceBodies: GovernanceBody[] = [
  {
    id: "gb-board",
    title: "Advisory Board",
    description:
      "Provides strategic guidance, integrity oversight & horizon scanning on emerging risks.",
    members: advisoryBoard,
  },
  {
    id: "gb-exec",
    title: "Executive Leadership",
    description:
      "Accountable for implementation, partnerships and resource stewardship.",
    members: leadership,
  },
];

export function getAllTeam(): TeamMember[] {
  return [...leadership, ...researchFellows, ...advisoryBoard];
}
export function getTeamMember(slug: string): TeamMember | undefined {
  return getAllTeam().find((m) => m.slug === slug);
}
export function getTeamSlugs(): string[] {
  return getAllTeam().map((m) => m.slug);
}
