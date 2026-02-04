"use client";

import { Carousel } from "@/components/Carousel";
import { carouselImages } from "@/lib/carouselImages";
import AnnouncementsParallax from "@/components/AnnouncementsParallax";
import NewsletterGallery from "@/components/NewsletterGallery";
import { InfiniteShowcase } from "@/components/InfiniteShowcase";
import { showcaseItems } from "@/lib/showcase";
import { useRef, useState } from "react";
import Link from "next/link";

/** ---------- Types & Constants ---------- */

type VideoSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  video: string;
};

const culturalVideoSlides: VideoSlide[] = [
  {
    id: 1,
    title: "Pakistan-Indonesia 75 years of friendship",
    subtitle: "November 6, 2025",
    description: "On August 13, 2025, the Consortium for Asia Pacific & \n Eurasian Studies (CAPS) successfully hosted the Joint \n Independence Day celebration of Pakistan and Indonesia \n at the CAPES office. The event brought together \n representatives from the Indonesian embassy and the CAPES team \n  to foster mutual understanding and explore \n collaborative opportunities in people-to-people \n and cultural linkages." ,
    video: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.14.49 PM.mp4",
  },
  {
    id: 2,
    title: "Malaysia Food Festival",
    subtitle: "Sept 4-10, 2025",
    description: "On September 2025, the High Commission of Malaysia in \n Islamabad, in collaboration with Serena Hotel, launched the \n “Journey to Malaysia: Exploring Diverse Flavors and Culinary ",
    video: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.14.14 PM.mp4",
  },
  {
    id: 3,
    title: "Pakistan-Indonesia 75 years of friendships",
    subtitle: "November 6, 2025",
    description: "On November 6, 2025, the 75th Anniversary \n of Indonesia-Pakistan Diplomatic Relations took \n place in Islamabad. This event renewed the spirit  \n between the two nations, translating the deep \n relationship into concrete work. CAPES actively \n  participated in the organization of this event to build \n on strong relations with \n the Indonesian people. \n Traditions of Southeast Asia” Food Festival at Zamana Restaurant. \n The week-long festival showcases Malaysia’s rich cultural heritage \n through its vibrant food traditions. \n The festival was inaugurated by Ambassador Dato’ Mohammad \n Azhar Mazlan, High Commissioner of Malaysia to Pakistan, \n alongside Christoph Hoeflich, General Manager of Islamabad \n Serena Hotel.",
    video: "/Assets/weeklynewsmonitor/WhatsApp Video 2026-02-03 at 6.13.59 PM.mp4",
  }
];

export default function Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
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

       {/* 3. IMPACT IN ACTION (Original Images Restored) */}

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

      {/* 4. CULTURAL DIPLOMACY SECTION */}
      <section className="py-24 bg-white relative group/slider">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight text-[#001D3D] mb-12">
            Cultural Diplomacy
          </h2>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white shadow-xl border flex items-center justify-center hover:bg-[#21B1DB] hover:text-white transition-all opacity-0 group-hover/slider:opacity-100"
            >‹</button>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white shadow-xl border flex items-center justify-center hover:bg-[#21B1DB] hover:text-white transition-all opacity-0 group-hover/slider:opacity-100"
            >›</button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar snap-x scroll-smooth pb-4"
            >
              {culturalVideoSlides.map((slide) => (
                <div
                  key={slide.id}
                  onClick={() => openVideo(slide.video)}
                  className="relative group/card h-96 min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] flex-shrink-0 rounded-2xl overflow-hidden isolate flex flex-col shadow-md hover:shadow-2xl transition-all duration-500 ring-1 ring-neutral-800/10 hover:ring-[#21B1DB]/50 cursor-pointer snap-start"
                >
                  <div className="absolute inset-0 -z-20">
                    <video
                      src={slide.video}
                      className="w-full h-full object-cover"
                      muted loop playsInline
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    />
                  </div>

                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity group-hover/card:opacity-90" />

                  <div className="flex flex-col h-full p-6 relative z-10">
                    <div className="mt-auto overflow-hidden">
                      <div className="text-[12px] text-[#21B1DB] font-bold uppercase tracking-wider mb-1">
                        {slide.subtitle}
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover/card:text-[#21B1DB] transition-colors">
                        {slide.title}
                      </h3>
                      
                      {/* Description - Fixed for Grid with word-break */}
                      <p className="text-white/80 text-xs leading-relaxed overflow-hidden break-all whitespace-pre-line line-clamp-4">
                        {slide.description}
                      </p>                  
               
<div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white">
  <span className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center shadow-md">
    ▶
  </span>
  <span className="tracking-wide">Watch Now</span>
</div>


                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LANDSCAPE VIDEO POPUP */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={closeVideo}></div>
          
          <div className="relative w-full max-w-4xl z-10 animate-in zoom-in-95 duration-200">
            <button 
              onClick={closeVideo} 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="w-full aspect-video bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}