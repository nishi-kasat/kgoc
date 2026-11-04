import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Businesses } from './components/Businesses';
import { StatsBanner } from './components/StatsBanner';
import { About } from './components/About';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#202033] selection:bg-[#FBEAF4] selection:text-[#880650]">
      {/* Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section matching mockup */}
        <Hero />

        {/* 2. Our Businesses Section matching mockup */}
        <Businesses />

        {/* 3. Deep Magenta Stats Ribbon Bar matching mockup */}
        <StatsBanner />

        {/* 4. About KGoC + Vision/Mission/Values (3-Column Layout matching mockup) */}
        <About />

        {/* 5. Group Leadership Profile */}
        <Leadership />

        {/* 6. Contact Us with WhatsApp QR Code */}
        <Contact />
      </main>

      {/* 7. Footer with Sweeping Multi-Striped Magenta Wave */}
      <Footer />
    </div>
  );
}

export default App;
