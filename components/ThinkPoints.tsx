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
    title: "Rethinking Pakistan’s Palm Oil Dependency",
    blurb:
      "By Yusra Sarwar | Published January 22, 2026.",
    image: "/Assets/capsthinkpoint/palm-oil.jpeg",
    href: "https://dailytimes.com.pk/1439227/rethinking-pakistans-palm-oil-dependency/",
  },
   {
    title: "Caricature to contrast",
    blurb:
      "By Muhammad Umar | Published January 05, 2026",
    image: "/Assets/capsthinkpoint/Caricature.jpg",
    href: "https://www.thenews.pk/print/1390812-caricature-to-contrast",
  },
  {
    title: "Bangladesh shaken: Osman Hadi's killing, Tarique Rahman's return",
    blurb:
      "By Umair Pervez Khan | Published January 04, 2026",
    image: "/Assets/capsthinkpoint/bangladesh-shaken.jpg",
    href: "https://www.dailysabah.com/opinion/op-ed/bangladesh-shaken-osman-hadis-killing-tarique-rahmans-return",
  },
   {
    title: "What drives Students’ Educational Choices From West to East",
    blurb:
      "By Yusra Sarwar | Published December 31, 2025.",
    image: "/Assets/education-west-to-east.webp",
    href: "https://stratheia.com/what-drives-students-educational-choices-from-west-to-east/",
  },
   {
    title: "India-Bangladesh rift over Hasina: What is next",
    blurb:
      "By Umair Pervez Khan | Published December 8, 2025.",
    image: "/Assets/capsthinkpoint/bangladesh.jpg",
    href: "https://www.dailysabah.com/opinion/op-ed/india-bangladesh-rift-over-hasina-what-is-next",
  },
  {
    title: "Eroding nuclear stability",
    blurb:
      "By Muhammad Umar | Published November 29, 2025.",
    image: "/Assets/Events/Indianbsfsoldier.jpg",
    href: "https://www.thenews.pk/print/1383486-eroding-nuclear-stability",
  },
  {
    title: "Where Afghanistan Fits in Iran’s Changing Regional Playbook ",
    blurb:
      "By Syed Basim Raza and Muhammad Shoaib | Published October 31, 2025.",
    image: "/Assets/NewsImages/diplomat.jpg",
    href: "https://thediplomat.com/2025/10/where-afghanistan-fits-in-irans-changing-regional-playbook/",
  },
   {
    title: " Lost accord: Collapse of Pakistan-Afghanistan peace hopes ",
    blurb:
      "By Umair Pervez Khan | Published October 30, 2025.",
    image: "/Assets/capsthinkpoint/peace-hopes.jpg",
    href: "https://www.dailysabah.com/politics/diplomacy/erdogan-zelenskyy-back-istanbul-process-for-cease-fire-push-for-peace",
  },
  {
    title: "Why the Vietnam-Pakistan trade pact matters",
    blurb:
      "By Hadia Allaudin | Published October 17, 2025.",
    image: "/Assets/NewsImages/pak viet trade.jpg",
    href: "https://moderndiplomacy.eu/2025/10/17/why-the-vietnam-pakistan-trade-pact-matters/",
  },
  {
    title: "South Asian Community and Australia’s battle against Neo-Nazis ",
    blurb:
      "By Yusra Sarwar | Published October 2, 2025.",
    image: "/Assets/NewsImages/nazis.jpg",
    href: "https://www.pakistantoday.com.pk/2025/10/02/south-asian-community-and-australias-battle-against-neo-nazis/",
  },
  {
    title: "The Mounting Frustration Between Kabul and Islamabad over TTP",
    blurb:
      "By International Affairs Forum | Published September 29, 2025.",
    image: "/Assets/NewsImages/kabul & isb.png",
    href: "https://www.ia-forum.org/Content/ViewInternal_Document.cfm?contenttype_id=1&ContentID=19181",
  },
  {
    title: "Myanmar’s Rohingya: Persecuted and displaced",
    blurb:
      "By Muhammad Asif Khan | Published September 24, 2025.",
    image: "/Assets/NewsImages/rohingya.jpg",
    href: "https://www.dailysabah.com/opinion/op-ed/myanmars-rohingya-persecuted-and-displaced",
  },
   {
    title: "The decline of US influence in the Pacific: A blessing for Palestine",
    blurb:
      "By Sharjeel Siddiqui | Published September 23, 2025.",
    image: "/Assets/NewsImages/palestine.webp",
    href: "https://www.middleeastmonitor.com/20250923-the-decline-of-us-influence-in-the-pacific-a-blessing-for-palestine/",
  },
   {
    title: "IMEC without Türkiye: Can India succeed without bridge to Europe?",
    blurb:
      "By Umair Pervaiz Khan, Muhammad Asif Khan | Published September 3, 2025.",
    image: "/Assets/NewsImages/imec turkey.jpg",
    href: "https://www.dailysabah.com/opinion/op-ed/imec-without-turkiye-can-india-succeed-without-bridge-to-europe",
  },
  {
    title: "Quadcopters Have Become the Taliban’s New Weapon – and Pakistan Is Not Ready",
    blurb:
      "By Hammad Waleed, Mohammad Shoaib | Published September 3, 2025.",
    image: "/Assets/NewsImages/taliban weapon.png",
    href: "https://smallwarsjournal.com/2025/09/03/quadcopters-have-become-the-talibans-new-weapon-and-pakistan-is-not-ready/",
  },
  {
    title: "From non-proliferation to power generation: ASEAN’s nuclear dilemma",
    blurb:
      "By Ali Halim | Published September 1, 2025.",
    image: "/Assets/NewsImages/power generation.jpg",
    href: "https://www.onlineopinion.com.au/view.asp?article=23627",
  },
   {
    title: "From the Pacific to Pakistan",
    blurb:
      "By Yusra Sarwar | Published July 6, 2025.",
    image: "/Assets/NewsImages/pak to pacific.png",
    href: "https://dailytimes.com.pk/writer/yusra-sarwar/",
  },
  {
    title: "Spring Festival: A cultural bridge between Pakistan and China",
    blurb:
      "By Muhammad Asif Khan | Published January 27, 2025.",
    image: "/Assets/NewsImages/spring festival.png",
    href: "https://www.chinadaily.com.cn/a/202501/27/WS6796ff0ea310a2ab06ea9931.html",
  },
   {
    title: "Is Pakistan Ready to Ride the EV Wave with China?",
    blurb:
      "By Najam Ul Hassan Naqvi | Published January 27, 2025.",
    image: "/Assets/NewsImages/EV.jpg",
    href: "/docs/EV Wave.pdf",
  },
   {
    title: "Japan should start giving security aid to Pakistan",
    blurb:
      "By Najam Ul Hassan Naqvi | Published February 11, 2025.",
    image: "/Assets/NewsImages/Pakistan.png",
    href: "https://asiatimes.com/2025/02/japan-should-start-giving-security-aid-to-pakistan/",
  },
  {
    title: "South Korea's Demographic Challenge and Immigration Strategy: Opportunities for Pakistan?",
    blurb:
      "By Najam Ul Hassan Naqvi | Published March 16, 2025.",
    image: "/Assets/NewsImages/south-korea.jpg",
    href: "/docs/South Korea.pdf",
  },
  {
    title: "Is India still relevant in the US Asia-Pacific strategy?",
    blurb:
      "By Hadia Allaudin | Published August 7, 2025. Examining India's evolving place in Washington’s regional calculus.",
    image: "/Assets/NewsImages/Trump.jpg",
    href: "https://moderndiplomacy.eu/2025/08/07/is-india-still-relevant-in-the-us-asia-pacific-strategy/",
  },
  {
    title: "Turkey’s big energy gamble in post-Assad Syria",
    blurb:
      "By Sardar Bakhsh and Zainab Bibi | Published August 8, 2025. The geopolitical and economic risks of Ankara’s energy strategy.",
    image: "/Assets/NewsImages/Turkey.jpg",
    href: "https://www.middleeastmonitor.com/20250808-turkeys-big-energy-gamble-in-post-assad-syria/",
  },
  {
    title: "A Regional Blueprint For ECO Climate Cooperation",
    blurb:
      "By Areesha Nisar | Published August 9, 2025. Regional cooperation framework to address shared climate challenges.",
    image: "/Assets/NewsImages/Regional.jpg",
    href: "https://gasam.org.tr/a-regional-blueprint-for-eco-climate-cooperation/",
  },
  {
    title: "From reliance to rethinking: US’ decades-long bet on India shifts",
    blurb:
      "By Umair Pervez Khan | Published August 10, 2025. Why Washington may be reconsidering its strategic reliance on New Delhi.",
    image: "/Assets/NewsImages/Reliance.jpg",
    href: "https://www.dailysabah.com/opinion/op-ed/from-reliance-to-rethinking-us-decades-long-bet-on-india-shifts",
  },
  {
    title: "Pakistan’s engagement with Australia: from mines to markets",
    blurb:
      "By Areesha Nisar | Published August 19, 2025. Exploring trade diversification and mining cooperation opportunities.",
    image: "/Assets/NewsImages/Australia.jpg",
    href: "https://www.onlineopinion.com.au/view.asp?article=23609",
  },
  {
    title: "Islands on the Edge: The Pacific’s Struggle for Climate Justice",
    blurb:
      "By Hadia Allaudin | Published August 21, 2025. Pacific states’ survival depends on global climate commitments.",
    image: "/Assets/NewsImages/Islands.jpg",
    href: "https://www.internationalaffairs.org.au/australianoutlook/islands-on-the-edge-the-pacifics-struggle-for-climate-justice/",
  },
  {
    title:
      "Pakistan’s Role in Focus: Driving SCO 2025 to Deliver on Climate Promises",
    blurb:
      "By Ali Abdul Halim | Published August 22, 2025. Islamabad’s role in shaping a climate-positive agenda within SCO.",
    image: "/Assets/NewsImages/PakistansRole.jpg",
    href: "https://thediplomaticinsight.com/pak-role-in-driving-sco-to-deliver-on-climate/",
  },
  {
    title: "India’s Foreign Policy: A Case of Upholding Unilateral Norms",
    blurb:
      "By M. Asif Khan | Published July 17, 2025. An analysis of India’s foreign policy through the lens of unilateralism.",
    image: "/Assets/NewsImages/Indias Foreign.jpg",
    href: "https://gasam.org.tr/indias-foreign-policy-a-case-of-upholding-unilateral-norms/",
  },
  {
    title: "Opportunity or Dependency? Türkiye-Pakistan Energy Pact",
    blurb:
      "By Lidzikir Ahmad & Yusra Sarwar | Published July 17, 2025. Examining the implications of Türkiye-Pakistan energy cooperation.",
    image: "/Assets/NewsImages/opportunity.jpg",
    href: "https://gasam.org.tr/opportunity-or-dependency-turkiye-pakistan-energy-pact/",
  },
  {
    title:
      "Are China, Pakistan, Bangladesh Quietly Planting the Region’s New Framework?",
    blurb:
      "By Mr. Umair Pervaiz & Gulshan Rafiq | Published July 18, 2025. Insights into emerging regional alignments in South Asia.",
    image: "/Assets/NewsImages/CBP.jpg",
    href: "https://www.scmp.com/opinion/asia-opinion/article/3318341/are-china-pakistan-bangladesh-quietly-planting-regions-new-framework",
  },
];

export default function CapsThinkPoints() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Think Points
        </h2>
        <p className="mt-2 text-base text-gray-600">
          CAPES Think Point brings together the expertise of CAPES researchers/experts to offer fresh perspectives on the issues shaping the Asia-Pacific & Eurasian region. It provides a well-thought-out analysis that goes beyond conventional viewpoints and provides potential solutions.
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
                  Read More
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
