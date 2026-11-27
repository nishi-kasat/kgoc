import React from 'react';
import { Quote } from 'lucide-react';
import founderImg from '../assets/Nandkishor Kasat.jpg';
import { Reveal } from './Reveal';
import { Tilt } from './Tilt';
import { Magnetic } from './Magnetic';

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Ambient decorative blob */}
      <div className="brand-blob absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Column 1: Founder Photo — bleeding, editorial framing (echoes hero image treatment) */}
          <Reveal className="lg:col-span-5 relative" y={16}>
            <Tilt className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-elevated" max={5}>
              <img
                src={founderImg}
                alt="Er. Nandkishor Kasat - Founder, Kasat Group of Companies"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0019]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-xl sm:text-2xl font-semibold text-white leading-tight">
                  Er. Nandkishor Kasat
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white/75 mt-1 uppercase tracking-wider">
                  Founder, Kasat Group of Companies
                </p>
              </div>
            </Tilt>
          </Reveal>

          {/* Column 2: Org story + founder's own words, one strong voice instead of two repeated sections */}
          <Reveal className="lg:col-span-7 text-left" delay={100} y={16}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-4 bg-[#880650] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#880650] uppercase">
                About Kasat Group of Companies
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2B0019] tracking-tight leading-[1.08] mb-6">
              Building <span className="italic text-[#880650]">global</span> careers through education
            </h2>

            <p className="text-base sm:text-lg text-[#333344] leading-relaxed mb-5 font-normal max-w-2xl">
              Founded by <strong>Er. Nandkishor Kasat</strong>, Kasat Group of Companies (KGoC) is a trusted name in education and career guidance — operating two dedicated verticals: <strong>Kasat's Emerge India &amp; Overseas</strong> for university admissions and career counseling, and <strong>Kasat Virtual College of Education</strong> for flexible online degrees.
            </p>

            {/* Founder pull-quote, integrated rather than boxed */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#880650] my-8 max-w-2xl">
              <Quote className="w-10 h-10 text-[#FBEAF4] absolute -top-3 -left-5 -z-10 rotate-180" aria-hidden="true" />
              <p className="font-serif italic text-xl sm:text-2xl text-[#2B0019] leading-snug">
                "Education is the cornerstone of societal progress and personal transformation."
              </p>
              <p className="text-sm text-[#626273] mt-3 font-semibold not-italic">
                — Er. Nandkishor Kasat, Founder
              </p>
            </div>

            <Magnetic>
              <a
                href="#businesses"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-sm hover:shadow-card group"
              >
                <span>Explore Our Businesses</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
