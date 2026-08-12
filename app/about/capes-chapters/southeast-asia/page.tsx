import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Southeast Asia Chapter",
  description:
    "CAPES Southeast Asia Chapter — research, partnerships, and events tracking ASEAN geopolitics, and Pakistan's growing engagement with Indonesia, Malaysia, and Southeast Asia.",
};

const EurasiaDashboard = () => {
  // Aapka color: #669bbc
  const buttonBaseClass = `
    relative flex items-center justify-center text-center
    w-full py-4 px-6 rounded-md 
    bg-[#669bbc] text-white shadow-[0_5px_0_0_#4d7a9e] 
    hover:shadow-[0_2px_0_0_#4d7a9e] hover:translate-y-[3px] 
    hover:bg-[#5584a8] transition-all duration-200 ease-in-out 
    group border border-white/10
  `;

  return (
    <div className="w-full min-h-screen bg-[#f1f4f8] py-12 px-4 flex flex-col items-center">
      
      {/* Logo Section */}
      <div className="mb-12">
        <img 
          src="/logos/logo_nobackground.png" 
          alt="CAPES Logo" 
          className="h-28 w-auto object-contain"
        />
      </div>

      <div className="max-w-2xl text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#001D3D] uppercase">
          Southeast Asia Chapter
        </h1>
        <p className="mt-3 text-sm md:text-base text-neutral-600">
          CAPES's Southeast Asia Chapter follows ASEAN geopolitics and Pakistan's growing engagement with Indonesia, Malaysia, and the wider region, through dedicated research, partnerships, and events.
        </p>
      </div>

      {/* Grid Layout (3 Columns as per Pic 1) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">About Southeast-Asia</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Institutional Profile</span>
          </div>
        </button>

        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">Vision & Mission</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Our Strategic Goals</span>
          </div>
        </button>

        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">Southeast-Asia Team</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Board & Experts</span>
          </div>
        </button>

        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">Reports</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Latest Research</span>
          </div>
        </button>

        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">Southeast-Asia Events</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Upcoming Seminars</span>
          </div>
        </button>

        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">Southeast-Asia Monitor</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Regional Tracking</span>
          </div>
        </button>

      </div>
    </div>
  );
};

export default EurasiaDashboard;