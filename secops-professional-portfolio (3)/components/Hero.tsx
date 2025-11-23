
import React, { useState, useEffect } from 'react';
import { Terminal } from './Terminal';
import { ArrowDown, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const { t, language } = useLanguage();
  
  // Dynamic typing text based on language
  const fullText = language === 'pt' 
    ? "PROTEGENDO A INFRAESTRUTURA DIGITAL" 
    : "SECURING DIGITAL INFRASTRUCTURE";

  useEffect(() => {
    setText(''); // Reset text when language changes
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [fullText, language]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        {/* Scanline */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-20 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            {t('hero.available')}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
             {language === 'pt' ? 'Analista' : 'Analyst'} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">
                SecOps
            </span>
          </h1>

          <div className="h-8 mb-6 font-mono text-neon-blue font-bold text-lg flex items-center gap-2">
             <ShieldAlert size={20} />
             <span>&gt; {text}<span className="animate-blink">_</span></span>
          </div>

          <p className="text-neutral-400 max-w-lg text-lg mb-8 leading-relaxed">
            {t('hero.desc')}
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Link to Curriculum PDF - Assumes 'curriculo.pdf' exists in public folder */}
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-neon-green transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              {t('hero.cta1')}
            </a>
            {/* Link to Linktree */}
            <a href="https://linktr.ee/siqueroli" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-neutral-700 text-white font-bold rounded hover:border-neon-green hover:text-neon-green transition-colors bg-neutral-900/50 backdrop-blur">
              {t('hero.cta2')}
            </a>
          </div>
        </div>

        {/* Interactive Terminal */}
        <div className="order-1 lg:order-2">
            <Terminal />
        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#career" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-neon-green transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};
