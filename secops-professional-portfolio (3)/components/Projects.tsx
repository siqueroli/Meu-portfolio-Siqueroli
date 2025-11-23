import React from 'react';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { Lock, Unlock, AlertTriangle, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projects: Project[] = [
  {
    id: 1,
    title: "Zero-Trust Auth System",
    description: {
        pt: "Implementação de microsserviço de autenticação completo usando JWT e chaves de hardware para cliente fintech. Reduziu tentativas de acesso não autorizado em 99%.",
        en: "Implemented a complete authentication microservice using JWT and hardware keys for a fintech client. Reduced unauthorized access attempts by 99%."
    },
    tech: ["Node.js", "Redis", "OAuth2", "Docker"],
    status: "Secure",
    link: "#"
  },
  {
    id: 2,
    title: "VulnScanner Pro",
    description: {
        pt: "Ferramenta Python automatizada projetada para rastrear SPAs e detectar cabeçalhos CORS mal configurados e vulnerabilidades XSS.",
        en: "Automated Python tool designed to crawl SPAs and detect misconfigured CORS headers and XSS vulnerabilities."
    },
    tech: ["Python", "Selenium", "BeautifulSoup"],
    status: "In Progress",
    link: "#"
  },
  {
    id: 3,
    title: "Legacy API Audit",
    description: {
        pt: "Auditoria de segurança abrangente de uma API REST legada. Identificou e corrigiu 14 pontos críticos de injeção de SQL.",
        en: "Comprehensive security audit of a legacy REST API. Identified and patched 14 critical SQL injection points."
    },
    tech: ["SQLMap", "Burp Suite", "Postgres"],
    status: "Vulnerable", // Representing the initial state of the project
    link: "#"
  }
];

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-neon-green font-mono">04.</span>
            <span>{t('projects.title')}</span>
            <div className="h-px bg-neutral-800 flex-grow ml-4"></div>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 150}>
              <div className="group relative h-full glass-panel rounded-lg p-8 hover:bg-neutral-800/50 transition-all duration-300 hover:-translate-y-2">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                
                {/* Header */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 bg-neutral-900 rounded-full border border-neutral-700 group-hover:border-neon-green/50 transition-colors">
                    {project.status === 'Secure' && <Lock className="text-neon-green" size={20} />}
                    {project.status === 'Vulnerable' && <AlertTriangle className="text-red-500" size={20} />}
                    {project.status === 'In Progress' && <Unlock className="text-yellow-500" size={20} />}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.link} className="text-neutral-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={project.link} className="text-neutral-400 hover:text-neon-green transition-colors">
                        <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                        {project.description[language]}
                    </p>
                </div>

                {/* Footer / Tech Stack */}
                <div className="mt-auto relative z-10">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="text-xs font-mono text-neon-green/80 px-2 py-1 bg-neon-green/10 rounded border border-neon-green/20">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
