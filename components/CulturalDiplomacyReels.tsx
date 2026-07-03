"use client";

type SlideItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  media: string;
  type: "video" | "image";
};

interface CulturalDiplomacyReelsProps {
  slides: SlideItem[];
  onMediaClick: (media: string, type: "video" | "image", slide: SlideItem) => void;
}

export default function CulturalDiplomacyReels({ slides, onMediaClick }: CulturalDiplomacyReelsProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-700 mb-4">
            Cultural Diplomacy Reels
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our cultural initiatives and people-to-people exchange programs fostering understanding and collaboration across Asia-Pacific and Eurasian regions.
          </p>
        </div>

        {/* Grid of Reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slides.map((slide) => (
            <div
              key={slide.id}
              onClick={() => onMediaClick(slide.media, slide.type, slide)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md 
                         transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2"
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 bg-gray-900 overflow-hidden">
                {slide.type === "video" ? (
                  <>
                    {/* Video Thumbnail (poster frame) */}
                    <video
                      src={slide.media}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onLoadedMetadata={(e) => {
                        // Seek to a frame in the video for thumbnail
                        (e.target as HTMLVideoElement).currentTime = 0;
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-blue-600 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image Thumbnail */}
                    <img
                      src={slide.media}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-2">
                  {slide.subtitle}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
