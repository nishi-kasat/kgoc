import React from 'react';
import { CheckCircle2, Award, Compass, School } from 'lucide-react';
import founderPhoto from '../assets/Nandkishor Kasat.jpg';
import { StripeAccents } from './DecorativeLines';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      {/* Decorative stripe in background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">
            About Kasat Group of Companies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-brand-text-primary tracking-tight max-w-3xl leading-tight">
            Building Opportunities Through Education
          </h2>
          <div className="mt-4">
            <StripeAccents className="items-center" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photograph with Elegant Magenta Accent Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Magenta Decorative Backdrop Accent */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-light rounded-3xl transform -rotate-3 scale-[1.02] opacity-80" 
                aria-hidden="true" 
              />
              
              {/* Photo Card Container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-card border border-brand-border/70 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-light/30">
                  <img
                    src={founderPhoto}
                    alt="Er. Nandkishor Kasat - Founder, Kasat Group of Companies"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                  {/* Subtle inner gradient shadow at bottom for caption contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Founder Nameplate on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-bold tracking-tight drop-shadow-sm">
                      Er. Nandkishor Kasat
                    </p>
                    <p className="text-xs text-brand-light font-medium tracking-wide">
                      Founder, Kasat Group of Companies
                    </p>
                  </div>
                </div>

                {/* Subtitle Card Under Photo */}
                <div className="mt-4 px-2 pb-1 flex items-center justify-between text-xs text-brand-text-secondary">
                  <span className="font-semibold text-brand-deep">Kasat Group Leadership</span>
                  <span className="flex items-center gap-1.5 text-brand-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Dedicated Educationist
                  </span>
                </div>
              </div>

              {/* Decorative Corner Stripes */}
              <div className="absolute -bottom-3 -right-3 w-16 h-12 bg-white rounded-xl shadow-md border border-brand-border p-2 hidden sm:flex flex-col justify-around">
                <div className="h-1 w-full bg-brand-primary rounded" />
                <div className="h-1 w-3/4 bg-brand-secondary rounded" />
                <div className="h-1 w-1/2 bg-brand-primary rounded" />
              </div>

            </div>
          </div>

          {/* Right Column: About Content & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-6 text-brand-text-secondary text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-brand-text-primary text-xl leading-snug">
                Kasat Group of Companies (KGoC) is a diversified organization focused on education, career guidance, admissions and learning opportunities. Through its associated businesses, the group aims to help students explore educational pathways in India and abroad.
              </p>

              <p>
                Founded under the leadership of <strong>Er. Nandkishor Kasat</strong>, the group acts as a guiding umbrella organization, ensuring ethical standards, student-first counseling, and forward-looking academic opportunities.
              </p>

              <p>
                By bringing together comprehensive admissions counseling and flexible online college education, KGoC bridges the gap between students' aspirations and accredited, high-quality institutions across India and internationally.
              </p>
            </div>

            {/* Core Focus Blocks */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-brand-soft/70 border border-brand-border/60">
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand-primary mb-2.5">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-brand-text-primary mb-1">
                  Advisory & Global Admissions
                </h3>
                <p className="text-xs text-brand-text-secondary">
                  Structured career counseling and admissions assistance for renowned colleges in India and overseas through Emerge India & Overseas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-soft/70 border border-brand-border/60">
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand-primary mb-2.5">
                  <School className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-brand-text-primary mb-1">
                  Flexible Online Learning
                </h3>
                <p className="text-xs text-brand-text-secondary">
                  Accessible, recognized degree and virtual education pathways designed for modern learners via Kasat Virtual College of Education.
                </p>
              </div>
            </div>

            {/* Founder Quote Block */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-brand-light/70 via-brand-soft to-white border-l-4 border-brand-primary">
              <p className="text-sm italic text-brand-text-primary font-medium">
                "Our single-minded purpose at Kasat Group is to make genuine, high-quality education and career possibilities reachable for every aspiring learner."
              </p>
              <div className="mt-2 text-xs font-bold text-brand-deep">
                — Er. Nandkishor Kasat, <span className="font-normal text-brand-text-secondary">Founder</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
