import React, { useState } from 'react';
import { ArrowRight, Play, X, Compass, Users, GraduationCap, Sparkle } from 'lucide-react';
import { Reveal } from './Reveal';
import { Marquee } from './Marquee';
import { Magnetic } from './Magnetic';
import { WatermarkField } from './WatermarkField';

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

  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Guided' },
    { icon: GraduationCap, value: '3,500+', label: 'Partner Universities' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-white">

      {/* Deep magenta ticker strip directly under the navbar */}
      <div className="ticker-strip relative mt-[64px] sm:mt-[72px] bg-[#2B0019] text-white/80 py-2.5 border-b border-white/5">
        <Marquee items={tickerItems} className="text-[11px] sm:text-xs font-bold tracking-[0.2em]" />
      </div>

      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">

        {/* Ambient gradient blob — top-right only. A second blob used to sit
            flush against the section's bottom-left corner; its blurred glow
            never fully faded before hitting this section's overflow-hidden
            edge, so it got hard-clipped into a visible straight-line seam
            right at the Hero/About boundary. Dropped rather than just
            repositioned, since any corner near a boundary risks the same
            clip. Also no longer scroll-linked (Parallax): a drifting glow
            would just reintroduce the seam at a different scroll position. */}
        <div className="absolute -top-20 right-0 pointer-events-none">
          <div className="brand-blob w-[32rem] h-[32rem] rounded-full animate-float-slow" aria-hidden="true" />
        </div>

        {/* Slanted, tiled Kasat mark filling the whole hero backdrop. Not
            parallax-driven: a scroll-linked shift would drag this layer away
            from the section's own edges and expose a blank seam. */}
        <WatermarkField size={150} opacityClass="opacity-[0.07]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center">

          <Reveal y={18}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] mb-6">
              <Sparkle className="w-3.5 h-3.5 text-[#880650]" />
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.18em] text-[#880650] uppercase">
                Kasat Group of Companies
              </span>
            </div>

            {/* Main Heading — editorial serif mix */}
            <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-[4.4rem] font-semibold text-[#2B0019] tracking-tight leading-[1.04] mb-7 max-w-4xl">
              Building <span className="italic text-[#880650]">global</span> careers through education.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#4A4A5A] font-normal leading-relaxed mb-9 max-w-xl mx-auto">
              Empowering students through quality guidance, admissions and future-ready education solutions in India and abroad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Magnetic>
                <a
                  href="#businesses"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-elevated group"
                >
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Magnetic>

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
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
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

          {/* Inline stat strip, replacing the old floating badges on the image */}
          <Reveal delay={150} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {stats.map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 subtle-glass rounded-2xl shadow-elevated border border-white/60 px-5 py-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#880650] flex items-center justify-center text-white flex-shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-extrabold text-[#2B0019] leading-none">{stat.value}</p>
                    <p className="text-[11px] text-[#626273] font-medium mt-0.5">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>

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
