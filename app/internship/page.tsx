"use client";

import React from "react";

const Page = () => {
  const eventData = {
    title: "CAPES First Internship Cohort",
    // Dono images ko array mein daal diya hai
    images: [
      "/Assets/Opportunities/internship-second.jpeg", // Naya poster (First)
      "/Assets/Opportunities/internship1.jpg",        // Purana poster (Second)
    ],
    description:
      "CAPES launched its first internship round in summer 2025 from July 7 to August 31. Students from prominent universities of Pakistan were engaged. The organization launched its first-ever initiative to engage Southeast Asian students in collaboration with talented Pakistani students.",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* --- Image Section (Dono Posters yahan hain) --- */}
        <div className="flex flex-col w-full bg-gray-200">
          {eventData.images.map((img, index) => (
            <div key={index} className="w-full border-b border-gray-100 last:border-0">
              <img
                src={img}
                alt={`Internship Poster ${index + 1}`}
                className="w-full h-auto object-contain"
                // object-contain use kiya hai taake poster ki details cut na hon
              />
            </div>
          ))}
        </div>

        {/* --- Text Content Section --- */}
        <div className="p-8 md:p-12">
          <h1 className="text-[#3D2B1F] text-3xl md:text-4xl font-[1000] uppercase tracking-tighter leading-none mb-6">
            {eventData.title}
          </h1>
          
          <div className="w-20 h-1.5 bg-[#BC8A5F] mb-8 rounded-full"></div>
          
          <div className="space-y-6">
            <p className="text-gray-700 text-lg md:text-xl font-bold leading-relaxed italic">
              "Building bridges between Southeast Asian and Pakistani talent."
            </p>
            
            <p className="text-gray-600 text-base md:text-lg leading-loose font-medium">
              {eventData.description}
            </p>
          </div>

          {/* Footer Info Badge */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
             <div className="px-4 py-2 bg-[#3D2B1F] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                Summer 2025
             </div>
             <div className="px-4 py-2 border border-gray-200 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                International Initiative
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;