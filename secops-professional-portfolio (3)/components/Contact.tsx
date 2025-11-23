
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-black border-t border-neutral-900 py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.03)_0%,transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal width="100%">
          <h2 className="text-4xl font-bold text-white mb-6">{t('contact.title')}</h2>
          <p className="text-neutral-400 mb-12 text-lg">
            {t('contact.desc')}
          </p>

          <a 
            href="mailto:siqueroli05@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-neon-green text-neon-green font-mono text-lg rounded hover:bg-neon-green hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]"
          >
            <Mail />
            {t('contact.btn')}
          </a>

          <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="text-neutral-500 text-sm font-mono">
                © {new Date().getFullYear()} SecOps Portfolio. {t('contact.footer')}
             </div>
             
             <div className="flex gap-6">
                <a 
                    href="https://github.com/siqueroli" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-neutral-500 hover:text-white hover:scale-110 transition-all"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/guilherme-siqueroli/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-neutral-500 hover:text-white hover:scale-110 transition-all"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>
             </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
