import React from 'react';
import { ArrowUpRight, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import kgocLogo from '../assets/kgoc logo.jpg';
import { BottomWaveStripes } from './DecorativeLines';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#F1D3E5]/60 pt-14 pb-0 text-[#626273] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-[#F1D3E5]/70">
          
          {/* Column 1: Brand Info & Logo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <img
                src={kgocLogo}
                alt="Kasat Group of Companies (KGoC)"
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#626273] max-w-sm mb-4">
              Kasat Group of Companies (KGoC) is a diversified education parent organization dedicated to empowering students through ethical admissions guidance and flexible degree pathways.
            </p>

            <div className="text-xs text-[#202033] bg-[#FFF9FC] p-3 rounded-xl border border-[#F1D3E5] max-w-sm">
              <p className="font-bold text-[#880650]">Er. Nandkishor Kasat</p>
              <p className="text-[#626273] mt-0.5">Founder, Kasat Group of Companies</p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#880650] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#880650] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#880650] transition-colors">
                  About KGoC
                </a>
              </li>
              <li>
                <a href="#businesses" className="hover:text-[#880650] transition-colors">
                  Our Businesses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#880650] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Businesses (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#880650] mb-3">
              Our Businesses
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="https://emergeio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2.5 rounded-xl bg-[#FFF9FC] hover:bg-[#FBEAF4] border border-[#F1D3E5] transition-all"
                >
                  <span className="font-semibold text-[#202033] group-hover:text-[#880650] flex items-center justify-between">
                    <span>Emerge India & Overseas</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </span>
                  <span className="text-[11px] text-[#626273] block mt-0.5">
                    Admissions & consultancy portal
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://kvce.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2.5 rounded-xl bg-[#FFF9FC] hover:bg-[#FBEAF4] border border-[#F1D3E5] transition-all"
                >
                  <span className="font-semibold text-[#202033] group-hover:text-[#880650] flex items-center justify-between">
                    <span>Kasat Virtual College</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </span>
                  <span className="text-[11px] text-[#626273] block mt-0.5">
                    Online degrees & programmes
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#880650] mb-3">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:+919168718833"
                className="flex items-center gap-2 hover:text-[#880650] transition-colors"
                aria-label="Call +91 91687 18833"
              >
                <Phone className="w-4 h-4 text-[#880650] flex-shrink-0" />
                <span className="font-bold text-[#202033]">+91 91687 18833</span>
              </a>

              <a
                href="https://wa.me/919168718833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#880650] text-white font-medium text-xs hover:bg-[#68003C] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Desk</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#626273]">
          <p>
            © {currentYear} Kasat Group of Companies (KGoC). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#FFF9FC] border border-[#F1D3E5] hover:bg-[#FBEAF4] text-[#880650] transition-all flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-semibold text-xs">Top</span>
          </button>
        </div>

      </div>

      {/* Sweeping multi-striped magenta wave pattern across bottom as in mockup */}
      <BottomWaveStripes />
    </footer>
  );
};
