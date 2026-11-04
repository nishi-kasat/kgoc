import React, { useState } from 'react';
import { ArrowRight, Play, X, Compass } from 'lucide-react';
import graduateHero from '../assets/graduate-hero.jpg';

export const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Tagline with horizontal line */}
            <div className="flex items-center gap-3 w-full mb-4">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#880650] uppercase whitespace-nowrap">
                Kasat Group of Companies
              </span>
              <div className="h-[1.5px] bg-[#D52A91]/60 flex-grow max-w-xs" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[2.85rem] font-extrabold text-[#6F0043] tracking-tight leading-[1.18] mb-6">
              A Diversified Education Group<br />
              for India & Global Opportunities
            </h1>

            {/* Supporting Text - increased font size for high readability */}
            <p className="text-base sm:text-lg md:text-xl text-[#4A4A5A] font-normal leading-relaxed mb-8 max-w-xl">
              Empowering students through quality guidance, admissions and future-ready education solutions in India and abroad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Explore Our Businesses Button */}
              <a
                href="#businesses"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-sm group"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Watch Our Story Button */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-base font-semibold text-[#880650] bg-white hover:bg-[#FBEAF4]/60 border border-[#880650]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#880650]/30"
              >
                <div className="w-6 h-6 rounded-full border border-[#880650] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-[#880650] text-[#880650] ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual with graduate holding diploma toward sunset sky */}
          <div className="lg:col-span-6 relative flex justify-end">
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-card border border-[#F1D3E5]/70 bg-gradient-to-tr from-brand-light/30 to-transparent p-2">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src={graduateHero}
                  alt="Graduate holding diploma towards sky at sunset - Empowering Global Education"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video / Story Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-[#F1D3E5] shadow-2xl relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FBEAF4] flex items-center justify-center text-[#880650]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#202033]">The Kasat Group Story</h3>
                <p className="text-xs text-[#626273]">Building Opportunities Through Education</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FFF9FC] p-5 border border-[#F1D3E5] text-base text-[#4A4A5A] space-y-3 leading-relaxed mb-6">
              <p>
                <strong>Kasat Group of Companies (KGoC)</strong> was founded by <strong>Er. Nandkishor Kasat</strong> with a single mission: to empower students across Maharashtra and India with accessible, credible, and ethical academic pathways.
              </p>
              <p>
                Through <strong>Kasat's Emerge India & Overseas</strong>, we provide specialized career counseling and admissions assistance for renowned colleges in India and abroad.
              </p>
              <p>
                Through <strong>Kasat Virtual College of Education</strong>, we offer flexible, recognized degree and diploma programs for modern distance learners.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#880650] hover:bg-[#68003C]"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
