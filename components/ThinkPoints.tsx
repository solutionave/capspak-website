// app/components/CapsThinkPoints.tsx

import Image from "next/image";
import Link from "next/link";

export type ThinkPoint = {
  title: string;
  blurb: string;
  image: string; // path under /public or a full URL
  href: string; // target article URL/route
};

export const DEFAULT_ITEMS: ThinkPoint[] = [
  {
    title: "Ease of Doing Business in Pakistan: A South Korean Experience",
    blurb:
      "Key takeaways on regulatory frictions and practical reforms inspired by Korea's playbook.",
    image: "/Assets/capsthinkpoint/1.jpg",
    href: "/articles/ease-of-doing-business-pakistan-south-korea",
  },
  {
    title:
      "Weaponization of Terrorism and International Treaties by India: A Perspective from Russia",
    blurb:
      "How treaty frameworks are invoked in geopolitical narratives—viewed from Moscow.",
    image: "/Assets/capsthinkpoint/2.jpg",
    href: "/articles/weaponization-terrorism-international-treaties-india-russia",
  },
  {
    title: "Is Pakistan Ready to Ride the EV Wave with China?",
    blurb:
      "Industrial policy, charging infra, and investment flows tied to China’s EV ecosystem.",
    image: "/Assets/capsthinkpoint/3.jpg",
    href: "/articles/is-pakistan-ready-for-ev-wave-with-china",
  },
  {
    title: "Spring Festival: A cultural bridge between Pakistan and China",
    blurb:
      "Soft power and people-to-people ties that move beyond trade statistics.",
    image: "/Assets/capsthinkpoint/4.jpg",
    href: "/articles/spring-festival-cultural-bridge-pakistan-china",
  },
  {
    title:
      "Leveraging the EPA: A Vision for Pakistan-South Korea Trade Cooperation",
    blurb:
      "Priority sectors, tariff lines, and a roadmap for bilateral trade expansion.",
    image: "/Assets/capsthinkpoint/5.jpg",
    href: "/articles/leveraging-epa-pakistan-south-korea-trade",
  },
  {
    title: "Japan should start giving security aid to Pakistan",
    blurb:
      "Strategic logic behind Tokyo’s support mechanisms and scope for Islamabad.",
    image: "/Assets/capsthinkpoint/6.jpg",
    href: "/articles/japan-should-give-security-aid-to-pakistan",
  },
  {
    title: "Japan’s OSA Initiative: Implications for Asia-Pacific and Pakistan",
    blurb:
      "Opportunities and constraints of the Official Security Assistance (OSA) program.",
    image: "/Assets/capsthinkpoint/7.jpg",
    href: "/articles/japan-osa-initiative-implications-pakistan",
  },
  {
    title:
      "Indo-Pacific realities mean Pakistan-China alliance can only deepen",
    blurb:
      "Strategic trends in the Indo-Pacific and their effect on Islamabad–Beijing ties.",
    image: "/Assets/capsthinkpoint/8.jpg",
    href: "/articles/indo-pacific-pakistan-china-alliance",
  },
  {
    title:
      "India-Afghanistan Strategic Partnership: Options for China and Pakistan",
    blurb:
      "Regional calculus and policy levers available to Beijing and Islamabad.",
    image: "/Assets/capsthinkpoint/9.jpg",
    href: "/articles/india-afghanistan-strategic-partnership-options",
  },
  {
    title:
      "South Korea's Demographic Challenge and Immigration Strategy: Opportunities for Pakistan",
    blurb:
      "Labor mobility pathways and sectoral matches for Pakistani workers and firms.",
    image: "/Assets/capsthinkpoint/10.jpg",
    href: "/articles/south-korea-demographic-challenge-immigration-pakistan",
  },
  {
    title: "PAK-INDIA Conflicts from War Rooms To News Rooms",
    blurb:
      "Labor mobility pathways and sectoral matches for Pakistani workers and firms.",
    image: "/Assets/capsthinkpoint/11.jpg",
    href: "/articles/south-korea-demographic-challenge-immigration-pakistan",
  },
];

export default function CapsThinkPoints() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {/* {heading} */}
          CAPS Think Points
        </h2>
        <p className="mt-2 text-base text-gray-600">
          {/* {subheading} */}
          Curated briefs connecting Pakistan’s policy landscape with regional
          dynamics.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEFAULT_ITEMS.map((item, idx) => (
          <article
            key={idx}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={idx < 3}
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold leading-snug">
                <Link
                  href={item.href}
                  className="underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded"
                >
                  {item.title}
                </Link>
              </h3>

              <p className="mt-2 text-sm text-gray-600">{item.blurb}</p>

              <div className="mt-4">
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  aria-label={`Read more: ${item.title}`}
                >
                  Read more
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
