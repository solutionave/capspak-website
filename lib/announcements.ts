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
