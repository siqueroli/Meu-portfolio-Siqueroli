
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, Terminal, Cpu, FolderGit2, Activity, GraduationCap, Globe, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar + buffer
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home', icon: Terminal },
    { name: t('nav.career'), href: '#career', icon: Activity },
    { name: t('nav.education'), href: '#education', icon: GraduationCap },
    { name: t('nav.certs'), href: '#certifications', icon: Award },
    { name: t('nav.projects'), href: '#projects', icon: FolderGit2 },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <ShieldCheck className="text-neon-green w-8 h-8 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-neon-green/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter text-white">
            SEC<span className="text-neon-green">.OPS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neon-green transition-colors uppercase tracking-wider cursor-pointer"
            >
              <link.icon size={16} />
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded border border-neutral-700 text-neutral-400 hover:text-white hover:border-neon-green transition-all text-xs font-mono ml-2"
          >
            <Globe size={14} />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <a
             href="https://linktr.ee/siqueroli" target="_blank" rel="noopener noreferrer"
             className="px-5 py-2 text-sm font-bold bg-neon-green text-black rounded hover:bg-white hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] transition-all duration-300"
          >
            {t('nav.hire')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-2 py-1 rounded border border-neutral-700 text-neutral-400 hover:text-white text-xs font-mono"
          >
            {language.toUpperCase()}
          </button>
          <button
            className="text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center gap-3 text-neutral-300 hover:text-neon-green py-3 border-b border-neutral-800/50"
            >
              <link.icon size={18} />
              {link.name}
            </a>
          ))}
          <a 
            href="https://linktr.ee/siqueroli" target="_blank" rel="noopener noreferrer"
            className="mt-2 text-center py-3 bg-neon-green text-black font-bold rounded"
            onClick={() => setIsMobileOpen(false)}
          >
            {t('nav.hire')}
          </a>
        </div>
      )}
    </nav>
  );
};
