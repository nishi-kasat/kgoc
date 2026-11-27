import React from 'react';
import founderImg from '../assets/Nandkishor Kasat.jpg';
import { Reveal } from './Reveal';

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Ambient decorative blob */}
      <div className="brand-blob absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Column 1: Founder Photo */}
          <Reveal className="md:col-span-5 lg:col-span-4 flex flex-col items-center justify-center" y={16}>
            <div className="relative w-56 sm:w-64 md:w-full md:max-w-xs">
              {/* Decorative gradient frame */}
              <div
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[#A50062] via-[#D52A91] to-[#FBEAF4] rotate-2 scale-[1.035] opacity-80"
                aria-hidden="true"
              />
              <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] shadow-card border-2 border-white bg-slate-50">
                <img
                  src={founderImg}
                  alt="Er. Nandkishor Kasat - Founder, Kasat Group of Companies"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#6F0043] shadow-2xs">
                    Founder & Leader
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#202033]">
                Er. Nandkishor Kasat
              </h3>
              <p className="text-sm font-semibold text-[#880650] mt-0.5">
                Founder, Kasat Group of Companies
              </p>
            </div>
          </Reveal>

          {/* Column 2: About KGoC Content */}
          <Reveal className="md:col-span-7 lg:col-span-8 text-left" delay={100} y={16}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-4 bg-[#880650] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#880650] uppercase">
                About Kasat Group of Companies
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6F0043] tracking-tight leading-[1.1] mb-5">
              Building <span className="italic">global</span> careers through education
            </h2>

            <p className="text-base sm:text-lg text-[#333344] leading-relaxed mb-4 font-normal">
              Founded by <strong>Er. Nandkishor Kasat</strong>, Kasat Group of Companies (KGoC) is a trusted name in education and career guidance, committed to helping students achieve their academic and professional aspirations through expert support, strategic partnerships and continuous guidance.
            </p>

            <p className="text-base sm:text-lg text-[#333344] leading-relaxed mb-8 font-normal">
              Under his visionary leadership, the group operates two dedicated verticals: <strong>Kasat's Emerge India & Overseas</strong> for university admissions and career counseling, and <strong>Kasat Virtual College of Education</strong> for flexible online degrees.
            </p>

            <a
              href="#businesses"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-sm hover:shadow-card group"
            >
              <span>Explore Our Businesses</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
