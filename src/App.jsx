import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Businesses } from './components/Businesses';
import { StatsBanner } from './components/StatsBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#202033] selection:bg-[#FBEAF4] selection:text-[#880650]">
      {/* Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About KGoC, Founder & Vision/Mission/Values */}
        <About />

        {/* 3. Our Businesses Section (Placed after About KGoC) */}
        <Businesses />

        {/* 4. Deep Magenta Stats Ribbon Bar */}
        <StatsBanner />

        {/* 5. Contact Us with Phone, WhatsApp & Clickable QR Code */}
        <Contact />
      </main>

      {/* 6. Footer with Sweeping Multi-Striped Magenta Wave */}
      <Footer />
    </div>
  );
}

export default App;
