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
    slug: "Khuram Iqbal",
    name: "Dr. Khuram Iqbal",
    role: "President",
    about:
      "Dr. Khuram drives institutional vision, stakeholder engagement, and cross-programme alignment, drawing on 15+ years across aerospace policy and technology governance.",
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
    slug: "Muhammad Shoaib",
    name: "Dr. Muhammad Shoaib",
    role: "Vice President",
    about:
      "Shoaib coordinates analytical output quality and mentorship of fellows, focusing on escalation dynamics and innovation ecosystems.",
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
    slug: "Sardar Umair Pervaiz",
    name: "Sardar Umair Pervaiz",
    role: "General Secretary",
    bio: "Launch, orbital infrastructure & civil/military aerospace.",
    about:
      "Sardar Umair Pervaiz analyses regional launch capability maturation, orbital asset governance, and atmospheric platform innovation trends.",
    experience: ["Analyst, Regional Space Innovation Forum"],
    headshot: "/window.svg",
  },
  {
    id: "tm-fellow-stability",
    slug: "Sardar Boksh",
    name: "Sardar Boksh",
    role: "Secretary & Cheif Organizor",
    bio: "Deterrence dynamics & escalation risk mapping.",
    about:
      "Omar focuses on AI-enabled C2 impacts, escalation pathways, and risk reduction frameworks.",
    headshot: "/next.svg",
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    id: "tm-adv-1",
    slug: "Muhammad Muneeb Suleman",
    name: "Muhammad Muneeb Suleman",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-adv-2",
    slug: "Muhammad Ahmed Khan",
    name: "Muhammad Ahmed Khan",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-adv-3",
    slug: "Waleed Ahmed",
    name: "Waleed Ahmed ",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-adv-4",
    slug: "Ali Raza",
    name: "Ali Raza",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-adv-5",
    slug: "Sheraz Sheikh",
    name: "Sheraz Sheikh",
    role: "",
    bio: "",
    about:
      "",
  },
];

export const residentfellow: TeamMember[] = [
  {
    id: "tm-ae-1",
    slug: "Muhammad Waqar Anwar",
    name: "Muhammad Waqar Anwar",
    role: "",
    bio: "",
    about:
      "",
  },
];

export const researchteam: TeamMember[] = [
  {
    id: "tm-ac-1",
    slug: "Muhammad Asif",
    name: "Muhammad Asif",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-ac-2",
    slug: "Sharjeel Siddiqui",
    name: "Sharjeel Siddiqui",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-ac-3",
    slug: "Yusra Sarwar",
    name: "Yusra Sarwar",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-ac-4",
    slug: "Hadia Alludin",
    name: "Hadia Alludin",
    role: "",
    bio: "",
    about:
      "",
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
