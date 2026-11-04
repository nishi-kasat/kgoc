import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import kgocLogo from '../assets/kgoc logo.jpg';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [businessDropdown, setBusinessDropdown] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About KGoC', href: '#about', id: 'about' },
    { 
      name: 'Our Businesses', 
      href: '#businesses', 
      id: 'businesses', 
      hasDropdown: true,
      items: [
        { label: 'Emerge India & Overseas', href: 'https://emergeio.vercel.app/', isExternal: true },
        { label: 'Kasat Virtual College (KVCE)', href: 'https://kvce.vercel.app/', isExternal: true },
      ]
    },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'businesses', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setBusinessDropdown(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled 
          ? 'shadow-sm border-b border-[#F1D3E5]/80 py-2.5' 
          : 'border-b border-[#F1D3E5]/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="Kasat Group of Companies Home"
          >
            <img 
              src={kgocLogo} 
              alt="Kasat Group of Companies Logo" 
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Center Navigation Links: Home | About KGoC | Our Businesses | Contact */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.id} 
                    className="relative"
                    onMouseEnter={() => setBusinessDropdown(true)}
                    onMouseLeave={() => setBusinessDropdown(false)}
                  >
                    <a
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors py-2 relative ${
                        isActive
                          ? 'text-[#880650] font-bold'
                          : 'text-[#202033] hover:text-[#880650]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#880650] rounded-full" />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {businessDropdown && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-card border border-[#F1D3E5] py-2 mt-1 z-50 animate-fadeIn">
                        <a
                          href="#businesses"
                          className="block px-4 py-2 text-xs font-semibold text-[#880650] hover:bg-[#FBEAF4]"
                        >
                          Overview in Parent Portal
                        </a>
                        <div className="h-px bg-slate-100 my-1" />
                        {link.items.map((sub, i) => (
                          <a
                            key={i}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-xs text-[#202033] hover:text-[#880650] hover:bg-[#FBEAF4]"
                          >
                            {sub.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-2 relative ${
                    isActive
                      ? 'text-[#880650] font-bold'
                      : 'text-[#202033] hover:text-[#880650]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#880650] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Enquire Now Pill Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="https://wa.me/919168718833"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#880650]/40"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire Now</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202033] hover:text-[#880650] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#880650]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F1D3E5] px-4 pt-3 pb-6">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-3 py-2 text-base font-medium text-[#202033] hover:text-[#880650] rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/919168718833"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-base font-semibold text-white bg-[#880650] shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire Now</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
