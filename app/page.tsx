"use client";

import { Carousel } from "@/components/Carousel";
import { carouselImages } from "@/lib/carouselImages";
import AnnouncementsParallax from "@/components/AnnouncementsParallax";
import NewsletterGallery from "@/components/NewsletterGallery";
import { InfiniteShowcase } from "@/components/InfiniteShowcase";
import { showcaseItems } from "@/lib/showcase";
import { useState } from "react";
import Partners from "./about/partners/page";

type SlideItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  media: string;
  type: "video" | "image";
};

const culturalVideoSlides: SlideItem[] = [
  {
    id: 4,
    title: "Turkish Language Certification",
    subtitle: "January 09, 2026",
    description:
      "CAPES, in collaboration with the Embassy of Türkiye in Pakistan, has initiated a Turkish Language Course. The six-month course is certified by the Ministry of National Education of the Republic of Türkiye. The course is taught by Mr. Yusuf Zya Ozen, who is a certified instructor associated with the embassy. This CAPES initiative is aimed at enhancing cultural diplomacy as well as people-to-people contact between Pakistan and Türkiye.",
    media: "/Assets/Opportunities/turkish-language.jpeg",
    type: "image",
  },
  {
    id: 1,
    title: "Pakistan-Indonesia Joint Independence Day Celebrations.",
    subtitle: "August 13, 2025.",
    description:
      "On August 13, 2025, the Consortium for Asia Pacific & Eurasian Studies (CAPS) successfully hosted the Joint Independence Day celebration of Pakistan and Indonesia at the CAPES office. The event brought together representatives from the Indonesian embassy and the CAPES team to foster mutual understanding and explore collaborative opportunities in people-to-people and cultural linkages.",
    media: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.14.49 PM.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "Malaysia Food Festival",
    subtitle: "Sept 4-10, 2025",
    description:
      "On September 2025, the High Commission of Malaysia in Islamabad, in collaboration with Serena Hotel, launched the “Journey to Malaysia: Exploring Diverse Flavors and Culinary Traditions” Food Festival at Zamana Restaurant. The week-long festival showcases Malaysia’s rich cultural heritage through its vibrant food traditions. The festival was inaugurated by Ambassador Dato’ Mohammad Azhar Mazlan, High Commissioner of Malaysia to Pakistan, alongside Christoph Hoeflich, General Manager of Islamabad Serena Hotel.",
    media: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.14.14 PM.mp4",
    type: "video",
  },
  {
    id: 3,
    title: "Pakistan-Indonesia 75 years of friendships",
    subtitle: "November 6, 2025",
    description:
      "On November 6, 2025, the 75th Anniversary of Indonesia-Pakistan Diplomatic Relations took place in Islamabad. This event renewed the spirit between the two nations, translating the deep relationship into concrete work. CAPES actively participated in the organization of this event to build on strong relations with the Indonesian people.",
    media: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.13.59 PM.mp4",
    type: "video",
  },
];

export default function Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedType, setSelectedType] = useState<"video" | "image">("video");
  const [selectedSlide, setSelectedSlide] = useState<SlideItem | null>(null);

  const openVideo = (mediaUrl: string, type: "video" | "image", slide?: SlideItem) => {
    setSelectedVideo(mediaUrl);
    setSelectedType(type);
    setSelectedSlide(slide ?? null);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo("");
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative">
        <Carousel images={carouselImages} aspect="21/9" hideCaptions className="[&>div>ul>li>span]:brightness-100" />
      </section>

      <AnnouncementsParallax />
      <NewsletterGallery />

      {/* CAPES POLICY BRIEF */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                <span className="uppercase">Capes</span> Policy Brief
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <InfiniteShowcase items={showcaseItems} />
          </div>
        </div>
      </section>

      {/* CULTURAL DIPLOMACY - CARDS SAME STYLE, HORIZONTAL SCROLL WITHOUT ARROWS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#001D3D]">Cultural Diplomacy</h2>

          <div className="flex gap-6 overflow-x-auto scrollbar-none">
            {culturalVideoSlides.map((slide) => (
              <div
                key={slide.id}
                className="w-[300px] h-[400px] rounded-2xl shadow-lg cursor-pointer flex-shrink-0 bg-white hover:shadow-xl transition-shadow duration-300"
                onClick={() => openVideo(slide.media, slide.type, slide)}
              >
                <div className="h-3/5 w-full overflow-hidden rounded-t-2xl">
                  {slide.type === "video" ? (
                    <video src={slide.media} className="w-full h-full object-cover" />
                  ) : (
                    <img src={slide.media} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-4 h-2/5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-[#001D3D]">{slide.title}</h3>
                    <p className="text-sm text-gray-600">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <Partners />

      {/* VIDEO/IMAGE POPUP */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={closeVideo}></div>
          <div className="relative w-full max-w-6xl z-10 animate-in zoom-in-95 duration-200">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 z-20"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 flex flex-col md:flex-row max-h-[80vh]">
              <div className="md:w-1/2 w-full bg-[#0b1220] flex items-center justify-center p-4">
                {selectedType === "video" ? (
                  <video src={selectedVideo} controls autoPlay className="w-full h-full max-h-[70vh] object-contain rounded-md" />
                ) : (
                  <img src={selectedVideo} alt={selectedSlide?.title ?? "Poster"} className="w-full h-auto max-h-[70vh] object-contain rounded-md" />
                )}
              </div>

              <div className="md:w-1/2 w-full p-6 flex flex-col">
                <div className="text-sm text-[#21B1DB] font-bold uppercase tracking-wider mb-1">{selectedSlide?.subtitle}</div>
                <h3 className="text-2xl font-semibold mb-2 text-[#001D3D]">{selectedSlide?.title}</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line overflow-auto max-h-[56vh]">{selectedSlide?.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}