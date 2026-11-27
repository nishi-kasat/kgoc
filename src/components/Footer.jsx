import React from 'react';
import { ArrowUpRight, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import kgocLogo from '../assets/kgoc logo.jpg';
import { Reveal } from './Reveal';
import { Magnetic } from './Magnetic';
import { WatermarkField } from './WatermarkField';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mesh-dark text-white/70 overflow-hidden">
      <div className="grain-overlay" />
      <WatermarkField light rotate={7} size={72} gap={86} opacityClass="opacity-[0.1]" />

      {/* Pre-footer CTA band */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#F6A6CE] uppercase">
                Ready when you are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 tracking-tight leading-[1.08]">
                Let's build your next chapter.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Magnetic>
                <a
                  href="https://wa.me/919168718833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-[#2B0019] bg-white hover:bg-[#FBEAF4] active:scale-[0.98] transition-all shadow-elevated"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="tel:+919168718833"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white border border-white/25 hover:border-white/50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 91687 18833</span>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Main Footer Grid */}
        <Reveal as="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 py-14 border-b border-white/10" y={14}>

          {/* Column 1: Brand Info & Logo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-4 p-1.5 bg-white rounded-xl inline-block">
              <img
                src={kgocLogo}
                alt="Kasat Group of Companies (KGoC)"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-white/60 max-w-sm mb-4">
              Kasat Group of Companies (KGoC) is a diversified education parent organization dedicated to empowering students through ethical admissions guidance and flexible degree pathways.
            </p>

            <div className="text-xs text-white bg-white/5 p-3 rounded-xl border border-white/10 max-w-sm">
              <p className="font-bold text-[#F6A6CE]">Er. Nandkishor Kasat</p>
              <p className="text-white/60 mt-0.5">Founder, Kasat Group of Companies</p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6A6CE] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About KGoC
                </a>
              </li>
              <li>
                <a href="#businesses" className="hover:text-white transition-colors">
                  Our Businesses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Businesses (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6A6CE] mb-3">
              Our Businesses
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="https://www.emergeio.kasat.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <span className="font-semibold text-white flex items-center justify-between">
                    <span>Kasat's Emerge India & Overseas</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </span>
                  <span className="text-[11px] text-white/50 block mt-0.5">
                    Admissions & consultancy portal
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.kvce.kasat.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <span className="font-semibold text-white flex items-center justify-between">
                    <span>Kasat Virtual College of Education</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </span>
                  <span className="text-[11px] text-white/50 block mt-0.5">
                    Online degrees & programmes
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6A6CE] mb-3">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:+919168718833"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Call +91 91687 18833"
              >
                <Phone className="w-4 h-4 text-[#F6A6CE] flex-shrink-0" />
                <span className="font-bold text-white">+91 91687 18833</span>
              </a>

              <a
                href="https://wa.me/919168718833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#2B0019] font-medium text-xs hover:bg-[#FBEAF4] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </Reveal>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} Kasat Group of Companies (KGoC). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 text-white transition-all flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-semibold text-xs">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
