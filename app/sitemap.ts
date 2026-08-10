import type { MetadataRoute } from "next";
import { site } from "../site.config";
import { getAllTeam } from "../lib/team";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/structure", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/partners", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/capes-chapters/southeast-asia", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/capes-chapters/northeast-asia", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/capes-chapters/oceania", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/capes-chapters/caps-caf", priority: 0.5, changeFrequency: "monthly" },
  { path: "/eurasia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/research", priority: 0.8, changeFrequency: "monthly" },
  { path: "/research-publications", priority: 0.8, changeFrequency: "weekly" },
  { path: "/publication", priority: 0.7, changeFrequency: "weekly" },
  { path: "/policy-brief", priority: 0.8, changeFrequency: "weekly" },
  { path: "/thinkpoints", priority: 0.7, changeFrequency: "weekly" },
  { path: "/weeklynewsmonitor", priority: 0.7, changeFrequency: "weekly" },
  { path: "/newsletter", priority: 0.6, changeFrequency: "weekly" },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" },
  { path: "/programs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/opportunities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/internship", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fellowship", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const teamEntries: MetadataRoute.Sitemap = getAllTeam()
    .filter((member) => member.slug)
    .map((member) => ({
      url: `${site.url}/team/${member.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    }));

  return [...staticEntries, ...teamEntries];
}
