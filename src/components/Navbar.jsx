import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import kgocLogo from '../assets/kgoc logo.jpg';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About KGoC', href: '#about', id: 'about' },
    { name: 'Our Businesses', href: '#businesses', id: 'businesses' },
    { name: 'Vision & Mission', href: '#vision-mission', id: 'vision-mission' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border/70 py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-brand-border/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-primary/20 rounded-lg p-1"
            aria-label="Kasat Group of Companies Home"
          >
            <div className="h-12 sm:h-14 flex items-center justify-center">
              <img 
                src={kgocLogo} 
                alt="Kasat Group of Companies (KGoC) Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
            <div className="hidden lg:flex flex-col border-l border-brand-border/80 pl-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Kasat Group
              </span>
              <span className="text-[11px] text-brand-text-secondary leading-tight">
                Corporate Parent
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-brand-primary font-semibold bg-brand-light/60'
                      : 'text-brand-text-secondary hover:text-brand-primary hover:bg-brand-soft'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2.5px] bg-brand-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Enquire Now Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919168718833"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-primary hover:bg-brand-deep active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/919168718833"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="p-2 text-brand-primary hover:bg-brand-light rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-text-secondary hover:text-brand-primary hover:bg-brand-soft focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-primary" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-border/80 shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`px-3.5 py-2.5 text-base rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-brand-light/70 font-semibold border-l-4 border-brand-primary'
                      : 'text-brand-text-secondary hover:text-brand-primary hover:bg-brand-soft'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-brand-border/60">
            <a
              href="https://wa.me/919168718833"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-brand-primary hover:bg-brand-deep active:scale-[0.98] transition-all shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enquire Now (WhatsApp)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-brand-text-secondary mt-2.5">
              Direct Desk: +91 91687 18833
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
