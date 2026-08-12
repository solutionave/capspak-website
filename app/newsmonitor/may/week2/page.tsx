import { Metadata } from "next";
import {
  NewsItem,
  NewsSection,
  weeklyReportWeek2,
} from "@/lib/weeklyReportWeek2";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weekly News Monitor – May 12-16, 2025",
  description:
    "CAPES Weekly News Monitor for May 12-16, 2025 — curated Asia-Pacific and Eurasian news summaries organized by category.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Asia Pacific · Week 2 · May
          </h1>
          <p className="text-sm text-neutral-500">
            Weekly News Monitor (12–16 May 2025)
          </p>
        </div>
        <Link
          href="/"
          className="rounded-md px-3 py-2 bg-black text-white hover:opacity-90"
        >
          Back
        </Link>
      </div>

      {/* Render sections */}
      {weeklyReportWeek2?.map((section: NewsSection) => (
        <div key={section?.category} className="mb-10">
          <h2 className="text-xl font-bold uppercase mb-4">
            {section?.category}
          </h2>
          <ul className="space-y-6">
            {section?.items.map((item: NewsItem, idx: number) => (
              <li key={idx}>
                <h3 className="font-semibold">{item?.title}</h3>
                <p className="text-neutral-700 mt-1">{item?.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
