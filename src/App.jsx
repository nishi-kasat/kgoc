import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Businesses } from './components/Businesses';
import { StatsBanner } from './components/StatsBanner';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#202033] selection:bg-[#FBEAF4] selection:text-[#880650]">
      {/* Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section with user-specified sunset graduate image */}
        <Hero />

        {/* 2. Our Businesses Section */}
        <Businesses />

        {/* 3. Deep Magenta Stats Ribbon Bar */}
        <StatsBanner />

        {/* 4. Unified About KGoC, Leadership & Vision/Mission (Founder info at single place without purple circle) */}
        <About />

        {/* 5. Contact Us with Phone, WhatsApp & Clickable QR Code */}
        <Contact />
      </main>

      {/* 6. Footer with Sweeping Multi-Striped Magenta Wave */}
      <Footer />
    </div>
  );
}

export default App;
