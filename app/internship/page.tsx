import React from "react";

const Page = () => {
  // Fix: Space removed from variable name and added basic structure
  const eventData = {
    title: "CAPES First Internship Cohort",
    image: "/Assets/Opportunities/internship1.jpg",
    description:
      "CAPES launched its first internship round in summer 2025 from July 7 to August 31. Students from prominent universities of Pakistan were engaged. The organization launched its first-ever initiative to engage Southeast Asian students in collaboration with talented Pakistani students.",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 md:h-[500px] w-full bg-gray-200">
          <img
            src={eventData.image}
            alt="Internship Cohort Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {eventData.title}
          </h1>
          
          <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed font-normal mb-8">
            {eventData.description}
          </p>

          {/* Features/Badges */}
          <div className="flex flex-wrap gap-3">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;