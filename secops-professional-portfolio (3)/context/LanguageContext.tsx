
import React, { createContext, useContext, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { pt: 'Console', en: 'Console' },
  'nav.career': { pt: 'Carreira', en: 'Career' },
  'nav.skills': { pt: 'Skills', en: 'Skills' },
  'nav.education': { pt: 'Acadêmico', en: 'Education' },
  'nav.certs': { pt: 'Certificados', en: 'Certs' },
  'nav.projects': { pt: 'Projetos', en: 'Projects' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },
  'nav.hire': { pt: 'CONTRATAR', en: 'HIRE ME' },

  // Hero
  'hero.available': { pt: 'Disponível para Projetos', en: 'Available for Projects' },
  'hero.desc': { pt: 'Especialista em Segurança da Informação e Infraestrutura de TI. Foco em proteção de endpoints, firewalls e desenvolvimento seguro.', en: 'Information Security and IT Infrastructure Specialist. Focused on endpoint protection, firewalls, and secure development.' },
  'hero.cta1': { pt: 'Ver Experiência', en: 'View Experience' },
  'hero.cta2': { pt: 'Entrar em Contato', en: 'Get in Touch' },

  // Skills
  'skills.title': { pt: 'Arsenal Técnico', en: 'Technical Arsenal' },
  'skills.offensive': { pt: 'Operações Ofensivas & Análise', en: 'Offensive Ops & Analysis' },
  'skills.defensive': { pt: 'Defesa & Infraestrutura', en: 'Defense & Infrastructure' },
  'skills.stats.projects': { pt: 'Projetos', en: 'Projects' },
  'skills.stats.bugs': { pt: 'Certificações', en: 'Certifications' }, // Changed context based on new data
  'skills.stats.uptime': { pt: 'Anos de Exp.', en: 'Years Exp.' },
  'skills.stats.coffee': { pt: 'Café / Energético', en: 'Coffee / Energy' },

  // Career
  'career.title': { pt: 'Trajetória Profissional', en: 'Professional Trajectory' },

  // Education
  'education.title': { pt: 'Formação Acadêmica', en: 'Academic Background' },
  
  // Certifications
  'certs.title': { pt: 'Licenças & Certificações', en: 'Licenses & Certifications' },
  'certs.achieved': { pt: 'Conquistados', en: 'Achieved' },
  'certs.loading': { pt: 'Em Processo / Futuro', en: 'In Progress / Future' },
  'certs.verify': { pt: 'Verificar Credencial', en: 'Verify Credential' },

  // Projects
  'projects.title': { pt: 'Projetos & Labs', en: 'Projects & Labs' },

  // Contact
  'contact.title': { pt: 'Inicializar Protocolo de Contato', en: 'Initialize Contact Protocol' },
  'contact.desc': { pt: 'Pronto para elevar a maturidade de segurança da sua infraestrutura.', en: 'Ready to elevate the security maturity of your infrastructure.' },
  'contact.btn': { pt: 'Enviar Mensagem', en: 'Send Message' },
  'contact.footer': { pt: 'Segurança é um processo, não um produto.', en: 'Security is a process, not a product.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
