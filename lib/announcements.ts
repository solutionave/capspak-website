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
  // Hidden (not published) to remove the preview announcement while keeping its title intact in code.
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
    published: false, // was true; set to false to remove it from active/published announcements
    category: "general",
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
