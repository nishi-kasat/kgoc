import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import emergeLogo from '../assets/emerge-logo-aligned.png';
import kvceLogo from '../assets/kvce-logo-aligned.png';
import { CardCornerStripes } from './DecorativeLines';
import { Reveal } from './Reveal';

export const Businesses = () => {
  return (
    <section id="businesses" className="py-12 sm:py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with flanking horizontal lines */}
        <Reveal className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div className="h-[1.5px] bg-[#880650]/40 w-16 sm:w-28 md:w-36" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#880650] tracking-tight">
            Our Businesses
          </h2>
          <div className="h-[1.5px] bg-[#880650]/40 w-16 sm:w-28 md:w-36" />
        </Reveal>

        {/* Two-Column Horizontal Business Cards Layout with identical structural alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* Card 1: Kasat's Emerge India & Overseas */}
          <Reveal className="relative bg-white rounded-3xl border border-[#D52A91]/50 p-6 sm:p-8 shadow-xs hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#880650] to-[#D52A91]" />
            
            {/* Top Area: Logo | Divider | Description (Fixed identical height for perfect cross-card alignment) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Left Column: Logo Container */}
              <div className="sm:col-span-5 flex items-center justify-center h-28 sm:h-36">
                <img
                  src={emergeLogo}
                  alt="Kasat's Emerge India & Overseas Logo"
                  className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block sm:col-span-1 h-28 sm:h-36 w-px bg-slate-200 justify-self-center" />

              {/* Right Column: Description */}
              <div className="sm:col-span-6 flex items-center h-28 sm:h-36 text-left">
                <p className="text-sm sm:text-base md:text-[1.02rem] text-[#28283C] leading-relaxed font-normal">
                  A leading education consultancy offering admissions in Medical, Engineering, Management, Paramedical, Hospitality and more, in India and abroad.
                </p>
              </div>

            </div>

            {/* Bottom Center Button */}
            <div className="pt-6 pb-1 flex justify-center w-full z-10">
              <a
                href="https://www.emergeio.kasat.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap"
                aria-label="Visit Kasat's Emerge India & Overseas (opens in a new tab)"
              >
                <span>Visit Kasat's Emerge India & Overseas</span>
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
            </div>

            {/* Corner curved striped decoration */}
            <CardCornerStripes />
          </Reveal>

          {/* Card 2: Kasat Virtual College of Education (Identical alignment to Emerge card) */}
          <Reveal delay={120} className="relative bg-white rounded-3xl border border-[#D52A91]/50 p-6 sm:p-8 shadow-xs hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#880650] to-[#D52A91]" />
            
            {/* Top Area: Logo | Divider | Description (Fixed identical height for perfect cross-card alignment) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Left Column: Logo Container */}
              <div className="sm:col-span-5 flex items-center justify-center h-28 sm:h-36">
                <img
                  src={kvceLogo}
                  alt="Kasat Virtual College of Education Logo"
                  className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block sm:col-span-1 h-28 sm:h-36 w-px bg-slate-200 justify-self-center" />

              {/* Right Column: Description */}
              <div className="sm:col-span-6 flex items-center h-28 sm:h-36 text-left">
                <p className="text-sm sm:text-base md:text-[1.02rem] text-[#28283C] leading-relaxed font-normal">
                  An online education platform offering UGC-entitled degrees, diplomas and specialisations through a flexible, industry-relevant learning model.
                </p>
              </div>

            </div>

            {/* Bottom Center Button */}
            <div className="pt-6 pb-1 flex justify-center w-full z-10">
              <a
                href="https://www.kvce.kasat.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap"
                aria-label="Visit Kasat Virtual College of Education (opens in a new tab)"
              >
                <span>Visit Kasat Virtual College of Education</span>
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
            </div>

            {/* Corner curved striped decoration */}
            <CardCornerStripes />
          </Reveal>

        </div>

      </div>
    </section>
  );
};
