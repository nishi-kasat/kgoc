import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import emergeLogo from '../assets/emerge-logo-trimmed.png';
import kvceLogo from '../assets/kvce-logo-trimmed.png';
import { CardCornerStripes } from './DecorativeLines';

export const Businesses = () => {
  return (
    <section id="businesses" className="py-12 sm:py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with flanking horizontal lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div className="h-[1.5px] bg-[#880650]/40 w-16 sm:w-28 md:w-36" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#880650] tracking-tight">
            Our Businesses
          </h2>
          <div className="h-[1.5px] bg-[#880650]/40 w-16 sm:w-28 md:w-36" />
        </div>

        {/* Two-Column Horizontal Business Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Card 1: Emerge India & Overseas */}
          <div className="relative bg-white rounded-3xl border border-[#D52A91]/50 p-6 sm:p-8 shadow-xs hover:shadow-card transition-all flex flex-col justify-between overflow-hidden">

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">

              {/* Left Column: Big Logo Container - sized identically to KVCE */}
              <div className="sm:col-span-5 flex items-center justify-center">
                <div className="w-full h-28 sm:h-32 md:h-36 flex items-center justify-center p-1 bg-white rounded-xl">
                  <img
                    src={emergeLogo}
                    alt="Kasat's Emerge India & Overseas Logo"
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block sm:col-span-1 h-36 w-px bg-slate-200 justify-self-center" />

              {/* Right Column: Description & Action Button - increased body text */}
              <div className="sm:col-span-6 flex flex-col justify-between h-full text-left">
                <p className="text-sm sm:text-base md:text-[1.05rem] text-[#28283C] leading-relaxed mb-5 font-normal">
                  A leading education consultancy offering admissions in Medical, Engineering, Management, Paramedical, Hospitality and more, in India and abroad.
                </p>

                <div>
                  <a
                    href="https://emergeio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-xs"
                    aria-label="Visit Kasat's Emerge India & Overseas (opens in a new tab)"
                  >
                    <span>Visit Kasat's Emerge India & Overseas</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Corner curved striped decoration */}
            <CardCornerStripes />
          </div>

          {/* Card 2: Kasat Virtual College of Education */}
          <div className="relative bg-white rounded-3xl border border-[#D52A91]/50 p-6 sm:p-8 shadow-xs hover:shadow-card transition-all flex flex-col justify-between overflow-hidden">

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">

              {/* Left Column: Big Logo Container - sized identically to Emerge */}
              <div className="sm:col-span-5 flex items-center justify-center">
                <div className="w-full h-28 sm:h-32 md:h-36 flex items-center justify-center p-1 bg-white rounded-xl">
                  <img
                    src={kvceLogo}
                    alt="Kasat Virtual College of Education Logo"
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block sm:col-span-1 h-36 w-px bg-slate-200 justify-self-center" />

              {/* Right Column: Description & Action Button - increased body text */}
              <div className="sm:col-span-6 flex flex-col justify-between h-full text-left">
                <p className="text-sm sm:text-base md:text-[1.05rem] text-[#28283C] leading-relaxed mb-5 font-normal">
                  An online education platform offering UGC-entitled degrees, diplomas and specialisations through a flexible, industry-relevant learning model.
                </p>

                <div>
                  <a
                    href="https://kvce.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-xs"
                    aria-label="Visit Kasat Virtual College of Education (opens in a new tab)"
                  >
                    <span>Visit Kasat Virtual College of Education</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Corner curved striped decoration */}
            <CardCornerStripes />
          </div>

        </div>

      </div>
    </section>
  );
};
