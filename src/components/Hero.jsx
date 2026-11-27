import React, { useState } from 'react';
import { ArrowRight, Play, X, Compass, Users, GraduationCap, Sparkle } from 'lucide-react';
import graduateHero from '../assets/graduate-hero.jpg';
import { Reveal } from './Reveal';
import { Marquee } from './Marquee';

export const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const tickerItems = [
    "KASAT'S EMERGE INDIA & OVERSEAS",
    'KASAT VIRTUAL COLLEGE OF EDUCATION',
    '10,000+ STUDENTS GUIDED',
    '3,500+ PARTNER UNIVERSITIES',
    '1,500+ COURSES',
    '7 CONTINENTS',
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-white">

      {/* Deep magenta ticker strip directly under the navbar */}
      <div className="relative mt-[64px] sm:mt-[72px] bg-[#2B0019] text-white/80 py-2.5 border-b border-white/5">
        <Marquee items={tickerItems} className="text-[11px] sm:text-xs font-bold tracking-[0.2em]" />
      </div>

      <div className="relative pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">

        {/* Ambient gradient blobs */}
        <div className="brand-blob absolute -top-20 right-0 w-[32rem] h-[32rem] rounded-full pointer-events-none animate-float-slow" aria-hidden="true" />
        <div className="brand-blob absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none animate-float-slow-delayed opacity-60" aria-hidden="true" />

        {/* Oversized outline watermark word, purely decorative */}
        <div
          className="watermark-text absolute top-10 left-0 right-0 text-center text-[16vw] sm:text-[11rem] font-black leading-none pointer-events-none select-none hidden sm:block"
          aria-hidden="true"
        >
          KGoC
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column: Heading, Subtitle & Action Buttons */}
            <Reveal className="lg:col-span-7 flex flex-col items-start z-10" y={18}>

              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] mb-6">
                <Sparkle className="w-3.5 h-3.5 text-[#880650]" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.18em] text-[#880650] uppercase">
                  Kasat Group of Companies
                </span>
              </div>

              {/* Main Heading — editorial serif mix */}
              <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-[4.2rem] font-semibold text-[#2B0019] tracking-tight leading-[1.02] mb-7">
                Building <span className="italic text-[#880650]">global</span><br />
                careers through<br />
                education.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#4A4A5A] font-normal leading-relaxed mb-9 max-w-xl">
                Empowering students through quality guidance, admissions and future-ready education solutions in India and abroad.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#businesses"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-elevated group"
                >
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-[#2B0019] hover:text-[#880650] border border-[#202033]/15 hover:border-[#880650]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#880650]/30"
                >
                  <div className="w-7 h-7 rounded-full border border-current flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Vertical chips */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.emergeio.kasat.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-[#333344] px-4 py-2 rounded-full border border-[#F1D3E5] hover:border-[#D52A91] hover:text-[#880650] hover:bg-[#FFF9FC] transition-colors"
                >
                  Kasat's Emerge India &amp; Overseas
                </a>
                <a
                  href="https://www.kvce.kasat.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-[#333344] px-4 py-2 rounded-full border border-[#F1D3E5] hover:border-[#D52A91] hover:text-[#880650] hover:bg-[#FFF9FC] transition-colors"
                >
                  Kasat Virtual College of Education
                </a>
              </div>

            </Reveal>

            {/* Right Column: Hero Visual, bleeding toward the edge */}
            <Reveal className="lg:col-span-5 relative flex justify-center lg:justify-end" delay={150} y={24}>
              <div className="relative w-full max-w-md lg:max-w-none lg:w-[115%]">
                <div className="relative rounded-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-r-none overflow-hidden shadow-elevated aspect-[4/5] sm:aspect-[4/4.2]">
                  <img
                    src={graduateHero}
                    alt="Graduate holding diploma towards sky at sunset - Empowering Global Education"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0019]/50 via-transparent to-transparent" />
                </div>

                {/* Floating stat badge: top-left */}
                <div className="hidden sm:flex absolute -top-6 -left-6 lg:-left-10 items-center gap-3 subtle-glass rounded-2xl shadow-elevated border border-white/60 px-4 py-3.5 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-[#880650] flex items-center justify-center text-white flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-[#2B0019] leading-none">10,000+</p>
                    <p className="text-[11px] text-[#626273] font-medium mt-0.5">Students Guided</p>
                  </div>
                </div>

                {/* Floating stat badge: bottom-right */}
                <div className="hidden sm:flex absolute -bottom-6 -right-3 lg:right-6 items-center gap-3 subtle-glass rounded-2xl shadow-elevated border border-white/60 px-4 py-3.5 animate-float-slow-delayed">
                  <div className="w-10 h-10 rounded-xl bg-[#880650] flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-[#2B0019] leading-none">3,500+</p>
                    <p className="text-[11px] text-[#626273] font-medium mt-0.5">Partner Universities</p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* Video / Story Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
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
                <h3 className="font-serif text-xl font-bold text-[#202033]">The Kasat Group Story</h3>
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
