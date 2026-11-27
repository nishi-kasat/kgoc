import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import emergeLogo from '../assets/emerge-logo-aligned.png';
import kvceLogo from '../assets/kvce-logo-aligned.png';
import { Reveal } from './Reveal';

const businesses = [
  {
    index: '01',
    name: "Kasat's Emerge India & Overseas",
    logo: emergeLogo,
    desc: 'A leading education consultancy offering admissions in Medical, Engineering, Management, Paramedical, Hospitality and more, in India and abroad.',
    cta: 'Visit Emerge India & Overseas',
    href: 'https://www.emergeio.kasat.org.in/',
  },
  {
    index: '02',
    name: 'Kasat Virtual College of Education',
    logo: kvceLogo,
    desc: 'An online education platform offering UGC-entitled degrees, diplomas and specialisations through a flexible, industry-relevant learning model.',
    cta: 'Visit Kasat Virtual College',
    href: 'https://www.kvce.kasat.org.in/',
  },
];

export const Businesses = () => {
  return (
    <section id="businesses" className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Heading */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-4 bg-[#880650] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#880650] uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2B0019] tracking-tight leading-[1.05] max-w-xl">
              Two verticals, <span className="italic text-[#880650]">one</span> mission.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#626273] max-w-sm leading-relaxed">
            Admissions counseling for India and abroad, and flexible UGC-entitled degrees — built around the same promise of honest, student-first guidance.
          </p>
        </Reveal>

        {/* Alternating editorial rows */}
        <div className="divide-y divide-[#F1D3E5]">
          {businesses.map((biz, i) => (
            <Reveal
              key={biz.index}
              delay={i * 100}
              className="group py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              {/* Index numeral */}
              <div className="hidden lg:flex lg:col-span-1 items-start">
                <span className="font-serif text-2xl text-[#D52A91]/50 font-semibold">{biz.index}</span>
              </div>

              {/* Logo panel */}
              <div
                className={`lg:col-span-4 flex items-center justify-center h-32 sm:h-40 rounded-3xl bg-gradient-to-br from-[#FFF9FC] to-[#FBEAF4] border border-[#F1D3E5] p-6 transition-all duration-300 group-hover:shadow-card-hover group-hover:-translate-y-1 ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={biz.logo}
                  alt={`${biz.name} Logo`}
                  className="max-h-20 sm:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className={`lg:col-span-7 text-left ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="lg:hidden font-serif text-xl text-[#D52A91]/60 font-semibold block mb-2">{biz.index}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2B0019] mb-3 tracking-tight">
                  {biz.name}
                </h3>
                <p className="text-sm sm:text-base md:text-[1.05rem] text-[#4A4A5A] leading-relaxed font-normal mb-6 max-w-2xl">
                  {biz.desc}
                </p>
                <a
                  href={biz.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#880650] hover:text-[#68003C] group/link"
                  aria-label={`${biz.cta} (opens in a new tab)`}
                >
                  <span className="border-b border-[#880650]/30 group-hover/link:border-[#880650] transition-colors pb-0.5">
                    {biz.cta}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
