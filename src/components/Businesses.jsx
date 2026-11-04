import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import emergeLogo from '../assets/emerge logo.jpg';
import kvceLogo from '../assets/kvce logo.jpg';
import { CardCornerStripes } from './DecorativeLines';

export const Businesses = () => {
  return (
    <section id="businesses" className="py-8 sm:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with flanking horizontal lines matching mockup */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="h-[1.5px] bg-[#880650]/40 w-16 sm:w-28 md:w-36" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#880650] tracking-tight">
            Our Businesses
          </h2>
          <div className="h-[1.5px] bg-[#880650]/40 w-16 sm:w-28 md:w-36" />
        </div>

        {/* Two-Column Horizontal Business Cards Layout matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Emerge India & Overseas */}
          <div className="relative bg-white rounded-2xl border border-[#D52A91]/50 p-5 sm:p-7 shadow-xs hover:shadow-card transition-all flex flex-col justify-between overflow-hidden">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Left Column: Logo matching mockup */}
              <div className="sm:col-span-5 flex items-center justify-center p-2">
                <img
                  src={emergeLogo}
                  alt="Kasat's Emerge India & Overseas Logo"
                  className="max-h-24 sm:max-h-28 w-auto object-contain"
                />
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block sm:col-span-1 h-28 w-px bg-slate-200 justify-self-center" />

              {/* Right Column: Description & Action Button matching mockup */}
              <div className="sm:col-span-6 flex flex-col justify-between h-full text-left">
                <p className="text-xs sm:text-sm text-[#202033] leading-relaxed mb-4">
                  A leading education consultancy offering admissions in Medical, Engineering, Management, Paramedical, Hospitality and more, in India and abroad.
                </p>

                <div>
                  <a
                    href="https://emergeio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-xs"
                    aria-label="Visit Emerge India & Overseas (opens in a new tab)"
                  >
                    <span>Visit Emerge India & Overseas</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Corner curved striped decoration as in mockup */}
            <CardCornerStripes />
          </div>

          {/* Card 2: Kasat Virtual College of Education */}
          <div className="relative bg-white rounded-2xl border border-[#D52A91]/50 p-5 sm:p-7 shadow-xs hover:shadow-card transition-all flex flex-col justify-between overflow-hidden">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Left Column: KVCE Logo matching mockup */}
              <div className="sm:col-span-5 flex items-center justify-center p-2">
                <img
                  src={kvceLogo}
                  alt="Kasat Virtual College of Education Logo"
                  className="max-h-24 sm:max-h-28 w-auto object-contain"
                />
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block sm:col-span-1 h-28 w-px bg-slate-200 justify-self-center" />

              {/* Right Column: Description & Action Button matching mockup */}
              <div className="sm:col-span-6 flex flex-col justify-between h-full text-left">
                <p className="text-xs sm:text-sm text-[#202033] leading-relaxed mb-4">
                  An online education platform offering UGC-entitled degrees, diplomas and specialisations through a flexible, industry-relevant learning model.
                </p>

                <div>
                  <a
                    href="https://kvce.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-xs"
                    aria-label="Visit KVCE (opens in a new tab)"
                  >
                    <span>Visit KVCE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Corner curved striped decoration as in mockup */}
            <CardCornerStripes />
          </div>

        </div>

      </div>
    </section>
  );
};
