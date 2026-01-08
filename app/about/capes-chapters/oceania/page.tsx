import React from 'react';

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
          alt="Eurasia Logo" 
          className="h-28 w-auto object-contain"
        />
      </div>

      {/* Grid Layout (3 Columns as per Pic 1) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">About Oceania</span>
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
            <span className="text-lg font-bold tracking-tight uppercase">Oceania Team</span>
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
            <span className="text-lg font-bold tracking-tight uppercase">Oceania Events</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Upcoming Seminars</span>
          </div>
        </button>

        <button className={buttonBaseClass}>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-lg font-bold tracking-tight uppercase">Oceania Monitor</span>
            <span className="text-[9px] opacity-80 uppercase font-medium tracking-widest mt-1">Regional Tracking</span>
          </div>
        </button>

      </div>
    </div>
  );
};

export default EurasiaDashboard;