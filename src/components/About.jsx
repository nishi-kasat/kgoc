import React from 'react';
import { Target, Rocket, Gem } from 'lucide-react';
import founderImg from '../assets/founder-circle.png';

export const About = () => {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout: Founder Photo | About KGoC | Integrated Vision, Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Founder Photo */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center justify-center">
            <div className="relative w-52 sm:w-60 h-52 sm:h-60 flex items-center justify-center">
              <img
                src={founderImg}
                alt="Er. Nandkishor Kasat - Founder, Kasat Group of Companies"
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Founder Designation under photo - prominent readable size */}
            <div className="mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#202033]">
                Er. Nandkishor Kasat
              </h3>
              <p className="text-sm font-semibold text-[#880650] mt-0.5">
                Founder, Kasat Group of Companies
              </p>
            </div>
          </div>

          {/* Column 2: About KGoC Content - increased body text size */}
          <div className="md:col-span-8 lg:col-span-5 text-left">
            
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-4 bg-[#880650] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#880650] uppercase">
                About Kasat Group of Companies
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#6F0043] tracking-tight leading-tight mb-4">
              Building Global Careers Through Education
            </h2>

            {/* Paragraphs - comfortable text-base sm:text-lg */}
            <p className="text-base sm:text-lg text-[#333344] leading-relaxed mb-4 font-normal">
              Founded by <strong>Er. Nandkishor Kasat</strong>, Kasat Group of Companies (KGoC) is a trusted name in education and career guidance, committed to helping students achieve their academic and professional aspirations through expert support, strategic partnerships and continuous guidance.
            </p>

            <p className="text-base sm:text-lg text-[#333344] leading-relaxed mb-6 font-normal">
              Under his visionary leadership, the group operates two dedicated verticals: <strong>Emerge India & Overseas</strong> for university admissions and career counseling, and <strong>Kasat Virtual College of Education</strong> for flexible online degrees.
            </p>

            {/* Action Link to Our Businesses */}
            <div>
              <a
                href="#businesses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-[#880650] hover:bg-[#68003C] transition-all shadow-xs"
              >
                <span>Explore Our Businesses</span>
                <span>→</span>
              </a>
            </div>

          </div>

          {/* Column 3: Vision, Mission & Values - enhanced text size & spacing */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col space-y-7 pt-4 lg:pt-0">
            
            {/* Our Vision */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] flex items-center justify-center text-[#880650] flex-shrink-0 mt-0.5">
                <Target className="w-6 h-6 text-[#880650]" />
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#202033] mb-1">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-[#4A4A5A] leading-relaxed">
                  To make quality education accessible to every student and help them build a successful global career.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] flex items-center justify-center text-[#880650] flex-shrink-0 mt-0.5">
                <Rocket className="w-6 h-6 text-[#880650]" />
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#202033] mb-1">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-[#4A4A5A] leading-relaxed">
                  To provide the right guidance, admissions and continuous support for students to achieve their dreams.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FBEAF4] border border-[#F1D3E5] flex items-center justify-center text-[#880650] flex-shrink-0 mt-0.5">
                <Gem className="w-6 h-6 text-[#880650]" />
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#202033] mb-1">
                  Our Values
                </h3>
                <p className="text-sm sm:text-base text-[#4A4A5A] leading-relaxed font-medium">
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
