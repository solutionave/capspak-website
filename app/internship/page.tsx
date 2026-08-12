import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Program",
  description:
    "Learn about the CAPES Internship Program, engaging Pakistani and Southeast Asian students in policy research on Asia-Pacific and Eurasian affairs.",
};

const Page = () => {
  // Pure data ko structured format mein convert kar diya hai
  const cohortsData = [
    {
      id: "cohort-1",
      title: "CAPES First Internship Cohort",
      year: "Summer 2025",
      tag: "International Initiative",
      tagColor: "bg-[#3D2B1F]",
      images: [
        "/Assets/Opportunities/internship-second.jpeg",
        "/Assets/Opportunities/internship1.jpg",
      ],
      tagline: "Building bridges between Southeast Asian and Pakistani talent.",
      description:
        "CAPES successfully launched its first internship round in summer 2025 from July 7 to August 31. Students from prominent universities of Pakistan were engaged. The organization launched its first-ever initiative to engage Southeast Asian students in collaboration with talented Pakistani students.",
      details: [
        { label: "Status", value: "Completed" },
        { label: "Timeline", value: "July 7 - Aug 31, 2025" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-black text-[#3D2B1F] tracking-tight uppercase">
            CAPES Internships
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Explore our journey and current opportunities
          </p>
          <div className="w-24 h-1 bg-[#BC8A5F] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Cohorts Loop */}
        {cohortsData.map((cohort) => (
          <div 
            key={cohort.id} 
            className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* --- Left Side: Image(s) Section (5 Columns) --- */}
            <div className="lg:col-span-5 bg-gray-50 p-6 flex flex-col justify-center gap-4 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className={`grid gap-4 ${cohort.images.length > 1 ? "grid-cols-2 lg:grid-cols-1" : "grid-cols-1"}`}>
                {cohort.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="overflow-hidden rounded-2xl bg-white shadow-md border border-gray-200/60 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <img
                      src={img}
                      alt={`${cohort.title} - Poster ${idx + 1}`}
                      className="w-full h-auto max-h-[450px] object-contain mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Side: Content Section (7 Columns) --- */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-md">
                    {cohort.year}
                  </span>
                  <span className={`px-3 py-1 text-white text-[11px] font-bold uppercase tracking-wider rounded-md ${cohort.tagColor}`}>
                    {cohort.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[#3D2B1F] text-2xl md:text-3xl font-[1000] uppercase tracking-tight leading-tight mb-4">
                  {cohort.title}
                </h2>
                
                <div className="w-12 h-1 bg-[#BC8A5F] mb-6 rounded-full"></div>
                
                {/* Text Content */}
                <div className="space-y-4">
                  <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed italic border-l-4 border-[#BC8A5F] pl-4">
                    "{cohort.tagline}"
                  </p>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                    {cohort.description}
                  </p>
                </div>
              </div>

              {/* Quick Details Grid / Footer Info */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {cohort.details.map((detail, dIdx) => (
                    <div key={dIdx} className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <p className="text-[10px] uppercase tracking-wider font-black text-gray-400 mb-0.5">
                        {detail.label}
                      </p>
                      <p className="text-xs font-bold text-[#3D2B1F] break-words">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Page;