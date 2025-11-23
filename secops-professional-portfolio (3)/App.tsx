
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Career } from './components/Career';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="bg-[#050505] text-neutral-200 min-h-screen selection:bg-neon-green selection:text-black font-sans relative">
        <Navbar />
        <main>
          <Hero />
          <Career />
          <Education />
          <Certifications />
          <Skills />
          <Projects />
        </main>
        <Contact />

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-neutral-900 border border-neon-green/30 text-neon-green rounded hover:bg-neon-green hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(0,255,65,0.2)] z-50 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </LanguageProvider>
  );
}

export default App;
