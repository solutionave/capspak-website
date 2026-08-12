"use client";

import React, { useState } from 'react';

const CapsCafDashboard = () => {
  // Poster modal ki state
  const [showPoster, setShowPoster] = useState(false);

  // Button styling (Aapka base color: #669bbc)
  const buttonBaseClass = `
    relative flex items-center justify-center text-center
    w-full py-4 px-6 rounded-md
    bg-[#669bbc] text-white shadow-[0_5px_0_0_#4d7a9e]
    hover:shadow-[0_2px_0_0_#4d7a9e] hover:translate-y-[3px]
    hover:bg-[#5584a8] transition-all duration-200 ease-in-out
    group border border-white/10
  `;

  // Dashboard layout
  const content = (
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
          CAPES-CAF (Climate Action Forum)
        </h1>
        <p className="mt-3 text-sm md:text-base text-neutral-600">
          CAPES-CAF is CAPES's chapter dedicated to climate policy and resilience, covering research, partnerships, and events on climate action across Asia-Pacific and Eurasia.
        </p>
      </div>

      {/* Grid Layout (3 Columns) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">About CAPES-caf</span>
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
            <span className="text-lg font-bold tracking-tight uppercase">CAPES-caf Team</span>
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
            <span className="text-lg font-bold tracking-tight uppercase">CAPES-caf Events</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Upcoming Seminars</span>
          </div>
        </button>

        {/* This button triggers the poster popup */}
        <button
          className={buttonBaseClass}
          onClick={() => setShowPoster(true)}
        >
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">CAPES-caf Monitor</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Regional Tracking</span>
          </div>
        </button>

      </div>

{/* Poster Popup (Modal) */}
{showPoster && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
    onClick={() => setShowPoster(false)}
  >
    {/* Background white hata diya aur width ko fit-content kar diya */}
    <div
      className="relative w-fit h-fit rounded-lg overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Close Button - Isko thoda styling di hai taake poster ke upar nazar aaye */}
      <button
        className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10 backdrop-blur-sm"
        onClick={() => setShowPoster(false)}
      >
        ✕
      </button>

      <img
        src="/Assets/Opportunities/Climate action forum.jpeg"
        alt="Climate Action Forum Poster"
        className="block w-auto max-w-[95vw] max-h-[90vh] object-contain"
      />
    </div>
  </div>
)}
    </div>
  );

  return content;
};

export default CapsCafDashboard;
