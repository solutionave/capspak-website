import { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Policy Briefs",
  description:
    "Read CAPES policy briefs on Pakistan's Northern Pivot, Japan's development finance, the Russian labor market, critical minerals, and other Asia-Pacific and Eurasian policy issues.",
};

type PolicyBriefsType = {
  title: string;
  blurb: string;
  image: string;
  href: string;
};

const DEFAULT_ITEMS: PolicyBriefsType[] = [
  //  {
  //   title:
  //     "Eurasianism and Pakistan’s Strategic Location",
  //   blurb: "By Dr. Gul-i-Ayesha Bhatti | Published ",
  //   image: "/Assets/PolicyBrief/Eurasianism.jpeg",
  //   href: "/Assets/PolicyBrief/Eurasianism and Pakistan's Strategic Location (1).pdf",
  // },
  //  {
  //   title:
  //     "Virtual Consultative Dialogue on Academic Cooperation",
  //   blurb: "By  Dr. Faisal Javaid | Published 18 March, 2026.",
  //   image: "/Assets/PolicyBrief/Virtual-cunsultative.jpeg",
  //   href: "/Assets/PolicyBrief/Virtual Consultative Dialogue on Academic Cooperation.pdf",
  // },
    {
    title:
      "QTTA and Pakistan’s Northern Pivot: Reconfiguring Trade amid Regional Disruptions",
    blurb: "By  Dr. Sundas Khizar. | Published March 30, 2026",
    image: "/Assets/PolicyBrief/PB.jfif",
    href: "/Assets/PolicyBrief/4. QTTA and Pakistan’s Northern Pivot-Reconfiguring Trade amid Regional Disruptions-1.pdf",
  },
  {
    title:
      "Beyond Bailouts: What Japan’s Return Means for Pakistan’s Development Finance",
    blurb: "By Sardar Bakhsh | Published March 03, 2026 ",
    image: "/Assets/PolicyBrief/pak-japan.jpg",
    href: "/Assets/PolicyBrief/pak-japan.pdf",
  },
  {
    title:
      "Pakistan’s Strategic Entry into the Russian Labour Market",
    blurb: "By  Dr. Sundas Khizar. | Published February 27, 2026 ",
    image: "/Assets/PolicyBrief/27-feb.jpg",
    href: "/Assets/PolicyBrief/2. Pakistan's Strategic Entry into Russian Labor Market.pdf",
  },
  {
    title:
      "The Tashkent-Islamabad Axis: Architecting a New Era of Regional Leadership and Prosperity",
    blurb: "By  Dr. Sundas Khizar. | Published January 26, 2026 ",
    image: "/Assets/PolicyBrief/26-jan.jpg",
    href: "/Assets/PolicyBrief/1. The Tashkent-Islamabad Axis-Architecting a New Era of Regional Leadership and Prosperity.pdf",
  },
  {
    title:
      "Patan’s Emerging Role in the Critical Minerals Economy: Challenges and Opportunities in U.S. Economic Cooperation",
    blurb: "By Muhammad Umar | Published November 14, 2025",
    image: "/Assets/PolicyBrief/minerals.jpg",
    href: "/Assets/PolicyBrief/Pakistans Emerging Role in the Critical Minerals Economy.pdf",
  },

   {
    title:
    
      "Digital Bridge: Positioning Pakistan as Japan IT Partner",
    blurb: "By Sharjeel Siddiqui | Published November 10, 2025",
    image: "/Assets/PolicyBrief/5.png",
    href: "/Assets/PolicyBrief/5. Digital Bridge.pdf",
  },
   {
    title:
      "Turning Global Civilization Initiative (GCI) to Pakistan’s Advantage",
    blurb: "By Muhammad Asif Khan | Published  June 12, 2025 ",
    image: "/Assets/PolicyBrief/Global-Civilization.jpg",
    href: "/Assets/PolicyBrief/4. Turning Global Civilization Initiative (GCI) to Pakistan’s Advantage.pdf",
  },
  

   {
    title:
      "South Korea's Demographic Challenge and Immigration Strategy: Opportunities for Pakistan",
    blurb:
      "By Najam-ul-Hassan Naqvi  | Published March 16, 2025 ",
    image: "/Assets/PolicyBrief/SK.png",
    href: "/Assets/PolicyBrief/South Korea.docx-1.pdf",
  },

    {
    title:
      "Japan’s OSA Initiative: Implications forAsia-Pacific and Pakistan",
    blurb:
      "By Najam-ul-Hassan Naqvi  | Published February 2, 2025 ",
    image: "/Assets/PolicyBrief/japan-osa.jpg",
    href: "/Assets/PolicyBrief/japan-osa.pdf",
  },

   {
    title:
      "Is Pakistan Ready to Ride the EV Wave with China?",
    blurb:
      "By Najam-ul-Hassan Naqvi  | Published January 27, 2025 ",
    image: "/Assets/PolicyBrief/EV.jpg",
    href: "/Assets/PolicyBrief/EV Wave.docx.pdf",
  },

];

export default function PolicyBriefs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
         Policy Brief's
        </h2>
        <p className="mt-2 text-base text-gray-600">
          
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEFAULT_ITEMS.map((item, idx) => (
          <article
            key={idx}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
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

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold leading-snug">
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  className="underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded"
                >
                  {item.title}
                </Link>
              </h3>

              <p className="mt-2 text-sm text-gray-600 flex-1">{item.blurb}</p>

              <div className="mt-4">
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
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
