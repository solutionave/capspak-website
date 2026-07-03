"use client";

import { Carousel } from "@/components/Carousel";
import { carouselImages } from "@/lib/carouselImages";
import AnnouncementsParallax from "@/components/AnnouncementsParallax";
import NewsletterGallery from "@/components/NewsletterGallery";
import { InfiniteShowcase } from "@/components/InfiniteShowcase";
import { showcaseItems } from "@/lib/showcase";
import CulturalDiplomacyReels from "@/components/CulturalDiplomacyReels";
import { useRef, useState } from "react";
import Link from "next/link";
import Partners from "./about/partners/page";

/** ---------- Types & Constants ---------- */

type SlideItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  media: string; // path to video or image
  type: "video" | "image";
};

const culturalVideoSlides: SlideItem[] = [
  {
    id: 1,
    title: "Turkish Language Certification",
    subtitle: "January 09, 2026",
    description:
      "CAPES, in collaboration with the Embassy of Türkiye in Pakistan, has initiated a Turkish Language Course. The six-month course is certified by the Ministry of National Education of the Republic of Türkiye. The course is taught by Mr. Yusuf Zya Ozen, who is a certified instructor associated with the embassy. This CAPES initiative is aimed at enhancing cultural diplomacy as well as people-to-people contact between Pakistan and Türkiye.",
    media: "/Assets/Opportunities/turkish-language.jpeg",
    type: "image",
  },
  {
    id: 2,
    title: `Pakistan-Indonesia Joint \n Independence Day Celebrations.`,
    subtitle: "August 13, 2025.",
    description: "On August 13, 2025, the Consortium for Asia Pacific & \n Eurasian Studies (CAPS) successfully hosted the Joint \n Independence Day celebration of Pakistan and Indonesia \n at the CAPES office. The event brought together \n representatives from the Indonesian embassy and the CAPES team \n  to foster mutual understanding and explore \n collaborative opportunities in people-to-people \n and cultural linkages.",
    media: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.14.49 PM.mp4",
    type: "video",
  },
  {
    id: 3,
    title: "Malaysia Food Festival",
    subtitle: "Sept 4-10, 2025",
    description: "On September 2025, the High Commission of Malaysia in \n Islamabad, in collaboration with Serena Hotel, launched the \n “Journey to Malaysia: Exploring Diverse Flavors and Culinary ",
    media: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.14.14 PM.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "Pakistan-Indonesia 75 years of friendships",
    subtitle: "November 6, 2025",
    description: "On November 6, 2025, the 75th Anniversary \n of Indonesia-Pakistan Diplomatic Relations took \n place in Islamabad. This event renewed the spirit  \n between the two nations, translating the deep \n relationship into concrete work. CAPES actively \n  participated in the organization of this event to build \n on strong relations with \n the Indonesian people. \n Traditions of Southeast Asia” Food Festival at Zamana Restaurant. \n The week-long festival showcases Malaysia’s rich cultural heritage \n through its vibrant food traditions. \n The festival was inaugurated by Ambassador Dato’ Mohammad \n Azhar Mazlan, High Commissioner of Malaysia to Pakistan, \n alongside Christoph Hoeflich, General Manager of Islamabad \n Serena Hotel.",
    media: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.13.59 PM.mp4",
    type: "video",
  },
  // Poster card requested by user

];

export default function Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedType, setSelectedType] = useState<"video" | "image">("video");
  const [selectedSlide, setSelectedSlide] = useState<SlideItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

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
      {/* 1. HERO SECTION */}
      <section className="relative">
        <Carousel
          images={carouselImages}
          aspect="21/9"
          hideCaptions
          className="[&>div>ul>li>span]:brightness-100"
        />
      </section>

      <AnnouncementsParallax />
      <NewsletterGallery />

      {/* 2. CAPES POLICY BRIEF */} 
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

      {/* 3. IMPACT IN ACTION (original section commented out) */}
  {/*
        <section className="py-16 bg-white font-sans">

          <div className="mx-auto max-w-7xl px-4">

            <div className="text-center mb-10">

              <h2 className="text-4xl font-extrabold text-[#001D3D] mb-4">Impact in Action</h2>

              <p className="text-neutral-500 text-lg">Glimpses from our recent conferences and community workshops.</p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">

              <Link href="/conferences" className="md:col-span-2 block h-full">

                <div className="relative rounded-[2rem] overflow-hidden shadow-lg h-full group cursor-pointer">

                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">

                    {[

                      "/Assets/Events/In-house-discussion.jpeg",

                      "/Assets/Events/Nevigation.jpeg",

                      "/Assets/Events/developing.jpg",

                      "/Assets/Events/pak-russia.jpg",

                      "/Assets/HomePageSlider/Eurasia.png",

                      "/Assets/Events/In-house-discussion.jpeg",

                      "/Assets/Events/Pak_indo.jpg",

                      "/Assets/Events/bridging.jpg",

                      "/Assets/Events/religions.jpg",

                    ].map((img, index) => (

                      <div key={index} className="bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />

                    ))}

                  </div>

                  <div className="absolute inset-0 bg-white/60 group-hover:bg-white/10 transition"></div>

                  <div className="relative z-10 flex items-center justify-center p-8 h-full">

                    <h3 className="text-black text-3xl font-bold tracking-wide transform transition-all duration-300 group-hover:text-white group-hover:scale-110">

                      Conferences

                    </h3>

                  </div>

                </div>

              </Link>


              <div className="flex flex-col gap-6 h-full">

                <Link href="/workshops" className="flex-1 flex">

                  <div className="w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-[2rem] flex items-center justify-center p-8 transition-transform hover:scale-[1.02] cursor-pointer shadow-md">

                    <h3 className="text-white text-2xl font-bold">Workshops</h3>

                  </div>

                </Link>

                <Link href="/gallery" className="flex-1 flex">

                  <div className="w-full bg-[#F1F4F9] rounded-[2rem] flex items-center justify-center p-8 transition-transform hover:scale-[1.02] border border-neutral-100 shadow-sm">

                    <span className="text-[#001D3D] text-xl font-semibold flex items-center gap-2">View Gallery →</span>

                  </div>

                </Link>

              </div>

            </div>

          </div>

        </section>
      */}

      {/* Cultural Diplomacy Reels Section */}
      <CulturalDiplomacyReels 
        slides={culturalVideoSlides} 
        onMediaClick={openVideo}
      />

      {/* Partners Section */}
      <Partners />

      {/* LANDSCAPE VIDEO POPUP */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={closeVideo}></div>
          
          <div className="relative w-full max-w-6xl z-10 animate-in zoom-in-95 duration-200">
            {/* close button (top-right) */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 z-20"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Panel: media left, text right (stack on small screens) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 flex flex-col md:flex-row max-h-[80vh]">
              {/* Media column */}
              <div className="md:w-1/2 w-full bg-[#0b1220] flex items-center justify-center p-4">
                {selectedType === "video" ? (
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    className="w-full h-full max-h-[70vh] object-contain rounded-md"
                  />
                ) : (
                  <img
                    src={selectedVideo}
                    alt={selectedSlide?.title ?? "Poster"}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-md"
                  />
                )}
              </div>

              {/* Text column */}
              <div className="md:w-1/2 w-full p-6 flex flex-col">
                <div className="text-sm text-[#21B1DB] font-bold uppercase tracking-wider mb-1">{selectedSlide?.subtitle}</div>
                <h3 className="text-2xl font-semibold mb-2 text-[#001D3D]">{selectedSlide?.title}</h3>
                <div className="text-sm text-gray-700 whitespace-pre-line overflow-auto max-h-[56vh] mb-4">{selectedSlide?.description}</div>

                <div className="mt-auto flex gap-3 justify-end">
                  {/* <button onClick={closeVideo} className="px-4 py-2 bg-[#21B1DB] text-white rounded-md">Close</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}