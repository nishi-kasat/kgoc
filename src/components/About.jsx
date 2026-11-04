import React from 'react';
import { Target, Rocket, Gem } from 'lucide-react';
import founderImg from '../assets/founder-circle.png';

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white relative">
      {/* Anchor for leadership navigation link so it scrolls to this unified founder section */}
      <div id="leadership" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout: Founder Photo (No purple circle behind) | About & Leadership | Vision-Mission-Values */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Founder Photo cleanly presented without purple circle */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center justify-center">
            <div className="relative w-48 sm:w-56 h-48 sm:h-56 flex items-center justify-center">
              <img
                src={founderImg}
                alt="Er. Nandkishor Kasat - Founder, Kasat Group of Companies"
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Founder Designation under photo */}
            <div className="mt-3 text-center">
              <h3 className="text-base font-extrabold text-[#202033]">
                Er. Nandkishor Kasat
              </h3>
              <p className="text-xs font-semibold text-[#880650]">
                Founder, Kasat Group of Companies
              </p>
            </div>
          </div>

          {/* Column 2: About KGoC & Leadership Content */}
          <div className="md:col-span-8 lg:col-span-5 text-left">
            
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-[#880650] rounded-full" />
              <span className="text-xs font-extrabold tracking-wider text-[#880650] uppercase">
                About Kasat Group of Companies
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6F0043] tracking-tight leading-snug mb-3">
              Building Global Careers Through Education
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-[#626273] leading-relaxed mb-4 font-normal">
              Founded by <strong>Er. Nandkishor Kasat</strong>, Kasat Group of Companies (KGoC) is a trusted name in education and career guidance, committed to helping students achieve their academic and professional aspirations through expert support, strategic partnerships and continuous guidance.
            </p>

            <p className="text-xs sm:text-sm text-[#626273] leading-relaxed mb-6 font-normal">
              Under his visionary leadership, the group operates two dedicated verticals: <strong>Emerge India & Overseas</strong> for university admissions and career counseling, and <strong>Kasat Virtual College of Education</strong> for flexible online degrees.
            </p>

            {/* Direct Connect Link */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#880650] hover:bg-[#68003C] transition-all shadow-xs"
              >
                <span>Connect With Us</span>
                <span>→</span>
              </a>
            </div>

          </div>

          {/* Column 3: Vision, Mission & Values */}
          <div id="vision-mission" className="md:col-span-12 lg:col-span-4 flex flex-col space-y-6 pt-4 lg:pt-0">
            
            {/* Our Vision */}
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

            {/* Our Mission */}
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

            {/* Our Values */}
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
