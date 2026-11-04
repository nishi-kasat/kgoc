import React from 'react';
import { Target, Rocket, Gem, ArrowRight } from 'lucide-react';
import founderPhoto from '../assets/Nandkishor Kasat.jpg';
import { StripedCircleBackground } from './DecorativeLines';

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout matching mockup: Founder | About Content | Vision-Mission-Values */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Founder with Striped Magenta Circular Background matching mockup (4 cols) */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-center">
            <div className="relative w-56 sm:w-64 h-56 sm:h-64 flex items-center justify-center">
              
              {/* Striped Magenta Circle Backdrop matching mockup */}
              <StripedCircleBackground className="w-52 sm:w-60 h-52 sm:h-60" />

              {/* Er. Nandkishor Kasat Photo in front */}
              <div className="absolute inset-x-4 bottom-0 top-3 flex items-end justify-center overflow-hidden">
                <img
                  src={founderPhoto}
                  alt="Er. Nandkishor Kasat - Founder, Kasat Group of Companies"
                  className="w-full h-full object-cover object-top rounded-full"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          {/* Column 2: About KGoC Content matching mockup (5 cols) */}
          <div className="md:col-span-8 lg:col-span-5 text-left">
            
            {/* Category Tag matching mockup */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-[#880650] rounded-full" />
              <span className="text-xs font-extrabold tracking-wider text-[#880650] uppercase">
                About Kasat Group of Companies
              </span>
            </div>

            {/* Heading matching mockup */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6F0043] tracking-tight leading-snug mb-3">
              Building Global Careers Through Education
            </h2>

            {/* Paragraph matching mockup */}
            <p className="text-xs sm:text-sm text-[#626273] leading-relaxed mb-6 font-normal">
              Founded by Er. Nandkishor Kasat, Kasat Group of Companies (KGoC) is a trusted name in education and career guidance, committed to helping students achieve their academic and professional aspirations through expert support, strategic partnerships and continuous guidance.
            </p>

            {/* Button matching mockup */}
            <div>
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#880650] bg-white border border-[#880650] hover:bg-[#FBEAF4] transition-all"
              >
                <span>Know More About KGoC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Column 3: Vision, Mission & Values matching mockup (4 cols) */}
          <div id="vision-mission" className="md:col-span-12 lg:col-span-4 flex flex-col space-y-6 pt-4 lg:pt-0">
            
            {/* Our Vision matching mockup */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] flex items-center justify-center text-[#880650] flex-shrink-0 mt-0.5">
                <Target className="w-5 h-5 text-[#880650]" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-[#202033] mb-1">
                  Our Vision
                </h3>
                <p className="text-xs text-[#626273] leading-relaxed">
                  To make quality education accessible to every student and help them build a successful global career.
                </p>
              </div>
            </div>

            {/* Our Mission matching mockup */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] flex items-center justify-center text-[#880650] flex-shrink-0 mt-0.5">
                <Rocket className="w-5 h-5 text-[#880650]" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-[#202033] mb-1">
                  Our Mission
                </h3>
                <p className="text-xs text-[#626273] leading-relaxed">
                  To provide the right guidance, admissions and continuous support for students to achieve their dreams.
                </p>
              </div>
            </div>

            {/* Our Values matching mockup */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] flex items-center justify-center text-[#880650] flex-shrink-0 mt-0.5">
                <Gem className="w-5 h-5 text-[#880650]" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-[#202033] mb-1">
                  Our Values
                </h3>
                <p className="text-xs text-[#626273] leading-relaxed font-medium">
                  Student Success &nbsp;|&nbsp; Honest Guidance &nbsp;|&nbsp; Transparency &nbsp;|&nbsp; Global Opportunities
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
