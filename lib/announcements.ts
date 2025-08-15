export type Announcement = {
  id: string;
  title: string;
  message: string;
  href?: string;
  level?: "info" | "warning" | "update";
  start?: string; // ISO date string inclusive
  end?: string; // ISO date string inclusive
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
  published: boolean;
  category?:
    | "call-for-papers"
    | "call-for-writings"
    | "program"
    | "event"
    | "greeting"
    | "general";
  deadline?: string; // ISO date for submission deadlines
};

// In-memory static announcements (replace with CMS or API later)
const announcements: Announcement[] = [
  {
    id: "2025-q3-launch",
    title: "Website Launch (Preview)",
    message:
      "You are viewing the preview deployment of the new CAPSPak site. Feedback welcome.",
    level: "info",
    start: "2025-08-01",
    end: "2025-09-30",
    createdAt: "2025-08-10",
    tags: ["site", "launch"],
    published: true,
    category: "general",
  },
  {
    id: "2025-space-policy-roundtable",
    title: "Space Policy Roundtable – Registration Open",
    message:
      "Limited seats available for our September roundtable on regional space governance.",
    href: "/events#space-policy-roundtable",
    level: "update",
    start: "2025-08-15",
    end: "2025-09-05",
    createdAt: "2025-08-15",
    tags: ["events", "registration"],
    published: true,
    category: "event",
  },
  {
    id: "cfp-capspak-journal-2026",
    title: "Call for Papers – CAPSPak Journal 2026 Edition",
    message:
      "Submit original research on aerospace policy, strategic stability, or dual‑use technology governance.",
    href: "/publications#call-for-papers",
    level: "update",
    start: "2025-08-10",
    end: "2025-09-30",
    deadline: "2025-09-30",
    createdAt: "2025-08-10",
    tags: ["call", "papers"],
    published: true,
    category: "call-for-papers",
  },
  {
    id: "cfw-internship-program-2025",
    title: "Call for Writings – Internship Programme Insight Series",
    message:
      "Inviting analytical briefs (1,200–1,800 words) from interns on aerospace innovation and policy.",
    href: "/programs#internship",
    level: "info",
    start: "2025-08-12",
    end: "2025-09-15",
    deadline: "2025-09-15",
    createdAt: "2025-08-12",
    tags: ["call", "internship"],
    published: true,
    category: "call-for-writings",
  },
  {
    id: "greeting-independence-day-2025",
    title: "Independence Day Greetings",
    message:
      "Honouring the vision, resilience, and innovation shaping Pakistan's future in aerospace and technology.",
    level: "info",
    start: "2025-08-14",
    end: "2025-08-18",
    createdAt: "2025-08-14",
    tags: ["greeting"],
    published: true,
    category: "greeting",
  },
];

export function getAnnouncements(): Announcement[] {
  return announcements
    .filter((a) => a.published)
    .sort((a, b) =>
      (b.start ?? b.createdAt).localeCompare(a.start ?? a.createdAt)
    );
}

export function getActiveAnnouncements(
  date: Date = new Date()
): Announcement[] {
  const ref = date.toISOString().slice(0, 10); // YYYY-MM-DD
  return getAnnouncements().filter((a) => {
    const afterStart = !a.start || ref >= a.start;
    const beforeEnd = !a.end || ref <= a.end;
    return afterStart && beforeEnd;
  });
}
