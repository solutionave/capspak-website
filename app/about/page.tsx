import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";
import Image from "next/image";
import bg_image from "../../public/Assets/About_bgimg.png";

export const metadata: Metadata = { title: `About | ${site.shortName}` };

export default function AboutPage() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center text-white py-28">
        <Image
          src={bg_image}
          alt="Background"
          fill
          className="object-cover object-center -z-10 blur-[1px]"
          priority
        />
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-100 -z-10" />
        <h1 className="text-4xl font-bold mb-4 text-white">
          Advancing independent discourse on Asia-Pacific
        </h1>
        <p className="text-lg max-w-2xl text-center text-white">
          Consortium for Asia Pacific Studies (CAPS) is a Pakistan-based
          multi-institutional forum that seeks to expand objective understanding
          of Asia Pacific region, which has assumed greater geopolitical
          significance in recent times and is projected to maintain its
          relevance for foreseeable future. Due to limited avenues of
          independent research on the evolving world order and its implications
          for Pakistan, CAPS stands out as a pioneering platform that brings
          together prominent and emerging scholars working on wide range of
          topics related to Asia Pacific. Our goal is to inform policy discourse
          and educate public on Pakistan’s policy choices amidst global
          transformations.
        </p>
      </div>

      <div className="flex my-20 text-justify">
        <Section title="President’s Message" className=" w-2/3 pl-28">
          <p className="text-justify">
            The Consortium for Asia Pacific Studies (CAPS) in Pakistan is
            established to realign academic and policy discourse with the
            shifting dynamics of global power. A transition which is
            characterized by the shift of global center of gravity from West to
            the East. Yet, Pakistan’s foreign policy and academic discourse in
            international relations have not corresponded to this tectonic
            transformation.
          </p>
          <p className="text-justify"> 
            Despite a multitude of statements on the importance of Asia-Pacific
            in our foreign policy, including the Vision East Asia initiative
            declared in 2003, these commitments have largely been rhetorical.As
            far as national research focus is concerned, the only time ASEAN
            finds a mention in our academic discourse is when it is contrasted
            with SAARC as a success story. We must admit that even within our
            own research eco-system, the emphasis on Asia-Pacific studies
            remains peripheral. Such limited academic attention reflects our
            general tendency to overlook the Asia-Pacific region. This neglect
            becomes more striking when we look at the narratives emerging from
            our state-funded think tanks and academic institutions. Too often,
            they oscillate between focusing on the high-politics between the
            United States and China, thereby missing the essential roles of
            middle and small powers within the Asia-Pacific. These nations play
            critical parts in the fabric of the region, from economic
            cooperation to security alliances, and hold keys to regional
            stability. To ignore small and middle powers in the Asia Pacific is
            to overlook potential partnerships and avenues for Pakistan in a
            region of vital global significance.
          </p>
        </Section>
        <div className="w-[200px] p-20">
          <div className="bg-[#90b4d8] h-[550] w-[350] py-10 px-10 justify-center items-center text-center">
            <Image
              src="/Assets/President_img.JPG"
              alt="President's Image"
              width={310}
              height={450}
              className="object-cover relative  shadow-2xl"
            />
            <p className="py-5 text-white text-2xl font-semibold">
              Dr. Khuram Iqbal
            </p>
          </div>
        </div>
      </div>

      {/* Our Methodology (image left, text right) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
        <div className="grid gap-12 md:grid-cols-4 items-stretch">
          <div className="md:col-span-1">
            <div className="relative h-full min-h-[280px] bg-[#90b4d8]">
              {/* Offset image on top */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-transparent">
                <Image
                  src="/Assets/methodology_image.png" // <-- replace with your asset
                  alt="Methodology visual"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 75% column — text */}
          <div className="md:col-span-3">
            <Section title="Our Methodology">
              <p>
                We harness the power of modern digital communication platforms
                to both generate and circulate expert discourse concerning the
                Asia Pacific region. Through leveraging these advanced tools, we
                facilitate the exchange of insights, analyses, and perspectives
                among scholars and stakeholders, ensuring a wide-reaching and
                impactful dissemination of knowledge.
              </p>
            </Section>
          </div>
        </div>
      </div>

      {/* Objectives (same design language as Week cards) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl justify-center items-center text-center mx-auto">
            <p className="text-2xl font-bold tracking-tight bg-[#90b4d8] py-2">
              Our Objectives
            </p>
          </div>

          {/* Desktop grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-3 px-24">
            {objectives.map((o) => (
              <ObjectiveCard key={o.title} objective={o} />
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div
            className="mt-10 -mx-4 md:hidden overflow-x-auto pb-4 scroll-smooth"
            aria-label="Objectives"
          >
            <ul className="flex gap-2 px-4 snap-x snap-mandatory min-w-max">
              {objectives.map((o) => (
                <li key={o.title} className="snap-start w-80 flex-shrink-0">
                  <ObjectiveCard objective={o} compact />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

type Objective = {
  title: string;
  body: string;
  image: string;
  alt: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const objectives: Objective[] = [
  {
    title:
      "To develop Pakistan-based research community on politics and security of Asia-Pacific",
    body: "",
    image: "/Assets/weeksimages/1.jpg",
    alt: "Knowledge base visual",
    ctaHref: "/publications",
    ctaLabel: "Explore",
  },
  {
    title:
      " To project an informed understanding of Asia Pacific region among Pakistani policy makers, academia and opinion makers",
    body: "",
    image: "/Assets/weeksimages/1.jpg",
    alt: "Network visual",
    ctaHref: "/about#team",
    ctaLabel: "Meet the Team",
  },
  {
    title:
      "To develop linkages between Pakistan and Asia Pacific region through collaborative research, dialogue and advocacy ",
    body: "",
    image: "/Assets/weeksimages/1.jpg",
    alt: "Training visual",
    ctaHref: "/programs",
    ctaLabel: "Programs",
  },
];

function ObjectiveCard({
  objective,
  compact,
}: {
  objective: Objective;
  compact?: boolean;
}) {
  return (
    <article
      className={`
        relative group rounded-2xl overflow-hidden isolate flex flex-col
        shadow-md hover:shadow-2xl transition-all duration-500
        ring-1 ring-neutral-800 hover:ring-brand-500/50 hover:-translate-y-1
        before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]
        after:absolute after:inset-0 after:pointer-events-none after:rounded-[inherit]
        after:ring-1 after:ring-inset after:ring-white/10
        ${compact ? "h-96" : "h-96"}
        max-w-[280px] ${compact ? "max-w-[260px]" : ""}
        w-full mx-auto
      `}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={objective.image}
          alt={objective.alt}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Hover sweep overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black/25 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      </div>

      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      {/* Content centered in the middle */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center p-6">
        <div>
          <h3 className="text-white text-xl font-semibold leading-tight tracking-tight drop-shadow">
            {objective.title}
          </h3>
          {objective.body ? (
            <p className="mt-3 text-sm text-neutral-100/95 leading-relaxed drop-shadow">
              {objective.body}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
