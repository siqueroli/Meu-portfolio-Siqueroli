
import React from 'react';
import { Education as EduType } from '../types';
import { Reveal } from './Reveal';
import { GraduationCap, Code, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const academic: EduType[] = [
  { 
    id: 1, 
    title: { pt: "Ciência da Computação", en: "Computer Science" }, 
    institution: "Estácio", 
    period: "2022 - 2026", 
    type: "Degree",
    description: {
        pt: "Mergulho em lógica de programação e princípios de desenvolvimento. Projetos práticos em Python, C++, HTML, CSS e PHP.",
        en: "Deep dive into programming logic and development principles. Practical projects in Python, C++, HTML, CSS, and PHP."
    }
  },
  { 
    id: 2, 
    title: { pt: "Técnico em Eletrônica", en: "Electronics Technician" }, 
    institution: "ETEC Bento Quirino", 
    period: "2020 - 2021", 
    type: "Technical",
    description: {
        pt: "Desenvolvimento de projetos IoT com Arduino e Raspberry Pi. Criação de software de controle de estoque e automação em C++.",
        en: "IoT project development with Arduino and Raspberry Pi. Creation of inventory control software and automation in C++."
    }
  },
  { 
    id: 3, 
    title: { pt: "Técnico em Desenvolvimento de Sistemas", en: "Systems Development Technician" }, 
    institution: "NovoTec", 
    period: "2018 - 2021", 
    type: "Technical",
    description: {
        pt: "Fundamentos de programação, bancos de dados (MySQL) e desenvolvimento web.",
        en: "Programming fundamentals, databases (MySQL), and web development."
    }
  }
];

export const Education: React.FC = () => {
  const { t, language } = useLanguage();

  const getIcon = (item: EduType) => {
    if (item.type === 'Degree') return <GraduationCap size={24} />;
    // Check if it's the Electronics course
    if (item.title.pt.includes('Eletrônica')) return <Cpu size={24} />;
    return <Code size={24} />;
  };

  return (
    <section id="education" className="py-24 relative bg-neutral-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="text-neon-green font-mono">02.</span>
                <span>{t('education.title')}</span>
                <div className="h-px bg-neutral-800 flex-grow ml-4"></div>
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academic.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 100}>
                    <div className="h-full glass-panel p-6 rounded-xl flex flex-col gap-4 group hover:bg-neutral-800/40 transition-all hover:-translate-y-1 border border-neutral-800 hover:border-neon-blue/30">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 group-hover:border-neon-blue/50 group-hover:text-neon-blue text-neutral-500 transition-colors">
                                {getIcon(item)}
                            </div>
                            <span className="text-xs font-mono text-neon-blue px-2 py-1 bg-neon-blue/5 rounded border border-neon-blue/10">
                                {item.period}
                            </span>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors mb-1">
                                {item.title[language]}
                            </h3>
                            <p className="text-neutral-400 font-medium text-sm mb-4">
                                {item.institution}
                            </p>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                {item.description[language]}
                            </p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};
