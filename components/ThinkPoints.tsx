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
    title:
      "Evolving dynamics of China-Pakistan counter-terrorism cooperation ",
    blurb:
      "By  Dr. Khuram Iqbal  | Published February 8, 2024 ",
    image: "/Assets/NewsImages/evolving-dynamics.jpg",
    href: "https://www.tandfonline.com/doi/full/10.1080/18335330.2024.2315137",
  },
    {
    title:
      "Militancy in Balochistan: A Formidable Challenge to the China-Pakistan Economic Corridor ",
    blurb:
      "By Umair Pervez Khan | Published December 31, 2023.",
    image: "/Assets/NewsImages/baloch.jpg",
    href: "https://mail.google.com/mail/u/0?ui=2&ik=9b45d201d3&attid=0.1&permmsgid=msg-f:1848487131741821959&th=19a72540ab5a1c07&view=att&disp=safe&realattid=19a7253b773b73744211&zw",
  },
  {
    title:
      "Major power competition in the Indian Ocean and doctrinal development in Pakistan",
    blurb:
      "By Dr. Khuram Iqbal | Published August 2, 2023 ",
    image: "/Assets/NewsImages/strategy.jpg",
    href: "https://www.tandfonline.com/doi/full/10.1080/01495933.2023.2238522",
  },  
  {
    title:
      "Pakistan's Governing Elite and CPEC: An Elitist Perspective",
    blurb:
      "By Dr. Khuram Iqbal  | Published January 27, 2022. ",
    image: "/Assets/NewsImages/Sir-khurram.png",
    href: "https://doi.org/10.57169/jssa.006.02.0123",
  },

];

export default function CapsThinkPoints() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Research Publications
        </h2>
        <p className="mt-2 text-base text-gray-600">
          CAPES Think Point brings together the expertise of CAPES
          researchers/experts to offer fresh perspectives on the issues shaping
          the Asia-Pacific region. It provides a well-thought-out analysis that
          goes beyond conventional viewpoints and provides potential solutions.
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
