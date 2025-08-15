export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string; // ISO or human date
  href?: string;
  tag?: string;
}

const news: NewsItem[] = [
  {
    id: "n-geo-brief",
    title: "Regional Security Brief Released",
    summary:
      "New analysis outlines emerging cross-border security dynamics and policy implications for 2025.",
    date: "2025-08-01",
    href: "/publications/regional-security-brief",
    tag: "Analysis",
  },
  {
    id: "n-mou",
    title: "MoU Signed with Partner Institution",
    summary:
      "CAPSPak formalises collaboration focusing on strategic studies and joint policy dialogues.",
    date: "2025-07-28",
    tag: "Partnership",
  },
  {
    id: "n-forum",
    title: "Think Tank Forum Participation",
    summary:
      "Delegation contributed to panels on climate resilience and strategic connectivity.",
    date: "2025-07-19",
    tag: "Event",
  },
  {
    id: "n-lab",
    title: "Policy Innovation Lab Launch",
    summary:
      "New internal lab will prototype data-driven tools to support evidence-based policymaking.",
    date: "2025-07-05",
    tag: "Initiative",
  },
  {
    id: "n-award",
    title: "Research Team Recognised",
    summary:
      "Our energy transitions cluster received regional recognition for impactful advisory work.",
    date: "2025-06-22",
    tag: "Recognition",
  },
];

export function getNews(): NewsItem[] {
  return news;
}

export function getRecentNews(limit?: number): NewsItem[] {
  const arr = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
  return typeof limit === "number" ? arr.slice(0, limit) : arr;
}
