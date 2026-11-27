import React from 'react';
import { Eye, Target, UserCheck, Shield, Sparkles, Flame, Globe } from 'lucide-react';
import { Reveal } from './Reveal';
import { WatermarkField } from './WatermarkField';

const values = [
  { title: 'Student Success', icon: UserCheck },
  { title: 'Honest Guidance', icon: Shield },
  { title: 'Transparency', icon: Sparkles },
  { title: 'Commitment', icon: Flame },
  { title: 'Global Opportunities', icon: Globe },
];

export const VisionMissionValues = () => {
  return (
    <section id="vision-mission" className="py-20 sm:py-24 md:py-32 bg-[#FFF9FC] relative overflow-hidden">
      <div className="brand-blob absolute bottom-0 -left-32 w-96 h-96 rounded-full pointer-events-none" aria-hidden="true" />
      <WatermarkField rotate={9} size={72} gap={88} opacityClass="opacity-[0.08]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <Reveal className="mb-14 sm:mb-20 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 bg-[#880650] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#880650] uppercase">
              Guiding Philosophy
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2B0019] tracking-tight leading-[1.08]">
            What drives <span className="italic text-[#880650]">every</span> decision we make.
          </h2>
        </Reveal>

        {/* Vision & Mission as large typographic columns, not boxed cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 sm:mb-20 pb-16 sm:pb-20 border-b border-[#F1D3E5]">

          <Reveal className="flex gap-5 sm:gap-6">
            <span className="font-serif text-3xl sm:text-4xl text-[#D52A91]/50 font-semibold flex-shrink-0">01</span>
            <div>
              <div className="w-11 h-11 rounded-xl bg-white border border-[#F1D3E5] flex items-center justify-center text-[#880650] mb-4 shadow-2xs">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B0019] mb-3">
                Our Vision
              </h3>
              <p className="text-[#4A4A5A] text-base leading-relaxed">
                To make quality education and career opportunities accessible to students and help them build successful futures.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex gap-5 sm:gap-6">
            <span className="font-serif text-3xl sm:text-4xl text-[#D52A91]/50 font-semibold flex-shrink-0">02</span>
            <div>
              <div className="w-11 h-11 rounded-xl bg-white border border-[#F1D3E5] flex items-center justify-center text-[#880650] mb-4 shadow-2xs">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B0019] mb-3">
                Our Mission
              </h3>
              <p className="text-[#4A4A5A] text-base leading-relaxed">
                To provide students with the right guidance, educational opportunities and continuous support throughout their academic journey.
              </p>
            </div>
          </Reveal>

        </div>

        {/* Values as an inline tag row instead of five repeated boxes */}
        <Reveal delay={150}>
          <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#880650] uppercase mb-6">
            Our Values
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 pl-3 pr-5 py-2.5 rounded-full bg-white border border-[#F1D3E5] hover:border-[#D52A91]/60 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-full bg-[#FBEAF4] flex items-center justify-center text-[#880650] flex-shrink-0">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-[#2B0019]">{val.title}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
