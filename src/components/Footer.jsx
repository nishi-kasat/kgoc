import React from 'react';
import { ArrowUpRight, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import kgocLogo from '../assets/kgoc logo.jpg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-soft border-t border-brand-border/80 pt-16 pb-12 text-brand-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-border/60">
          
          {/* Column 1: Brand Info & Logo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="h-14 flex items-center mb-5 bg-white px-3 py-1.5 rounded-xl border border-brand-border/50 shadow-2xs">
              <img
                src={kgocLogo}
                alt="Kasat Group of Companies (KGoC)"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-brand-text-secondary max-w-sm mb-6">
              Kasat Group of Companies (KGoC) is a diversified education parent organization dedicated to empowering students through ethical admissions guidance and flexible degree pathways.
            </p>

            {/* Founder Note */}
            <div className="text-xs text-brand-text-secondary/90 bg-white/80 p-3 rounded-xl border border-brand-border/50 max-w-sm">
              <p className="font-semibold text-brand-deep">Led by Er. Nandkishor Kasat</p>
              <p className="mt-0.5">Founder, Kasat Group of Companies</p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deep mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-brand-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-primary transition-colors">
                  About KGoC
                </a>
              </li>
              <li>
                <a href="#businesses" className="hover:text-brand-primary transition-colors">
                  Our Businesses
                </a>
              </li>
              <li>
                <a href="#vision-mission" className="hover:text-brand-primary transition-colors">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-brand-primary transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Businesses (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deep mb-4">
              Our Businesses
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://emergeio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-2.5 rounded-xl bg-white/70 hover:bg-white border border-brand-border/60 transition-all shadow-2xs"
                >
                  <span className="font-semibold text-brand-text-primary group-hover:text-brand-primary flex items-center justify-between">
                    <span>Emerge India & Overseas</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-xs text-brand-text-secondary mt-0.5">
                    Admissions & consultancy portal
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://kvce.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-2.5 rounded-xl bg-white/70 hover:bg-white border border-brand-border/60 transition-all shadow-2xs"
                >
                  <span className="font-semibold text-brand-text-primary group-hover:text-brand-primary flex items-center justify-between">
                    <span>Kasat Virtual College</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-xs text-brand-text-secondary mt-0.5">
                    Online degree programs & courses
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deep mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919168718833"
                className="flex items-center gap-2 hover:text-brand-primary transition-colors"
                aria-label="Call +91 91687 18833"
              >
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="font-semibold">+91 91687 18833</span>
              </a>

              <a
                href="https://wa.me/919168718833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-light text-brand-deep font-semibold text-xs hover:bg-brand-primary hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-brand-primary" />
                <span>WhatsApp Desk</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-text-secondary">
          <p>
            © {currentYear} Kasat Group of Companies (KGoC). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Parent corporate website for Emerge India & Overseas and KVCE</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-brand-border/70 hover:bg-brand-light text-brand-primary transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-xs font-semibold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
