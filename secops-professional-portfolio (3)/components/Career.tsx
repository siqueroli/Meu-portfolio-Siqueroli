
import React from 'react';
import { Experience } from '../types';
import { Reveal } from './Reveal';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const experiences: Experience[] = [
  {
    id: 1,
    role: { pt: "Assistente de Suporte de TI", en: "IT Support Assistant" },
    company: "Asten",
    period: { pt: "Nov 2024 - Presente", en: "Nov 2024 - Present" },
    location: "Valinhos, SP",
    description: { 
        pt: "Responsável pela administração da infraestrutura de TI e segurança. Foco principal na gestão de endpoints (Kaspersky Cloud), configuração de Firewalls e VPNs para segurança de perímetro. Atuação na sustentação de servidores Windows e Linux (Proxmox), garantindo integridade e disponibilidade. Gerenciamento da arquitetura de rede (Unifi, QoS) e monitoramento ativo de data center e backups.",
        en: "Responsible for IT infrastructure and security administration. Main focus on endpoint management (Kaspersky Cloud), Firewall and VPN configuration for perimeter security. Maintenance of Windows and Linux servers (Proxmox), ensuring integrity and availability. Network architecture management (Unifi, QoS) and active monitoring of data center and backups."
    },
    skills: ["Kaspersky Cloud", "Firewall", "VPN", "Proxmox", "Linux", "Unifi", "Data Center"]
  },
  {
    id: 2,
    role: { pt: "Estágio em Infraestrutura | DEDiC", en: "Infrastructure Intern | DEDiC" },
    company: "UNICAMP",
    period: { pt: "Abr 2024 - Out 2024", en: "Apr 2024 - Oct 2024" },
    location: "Campinas, SP",
    description: {
        pt: "Papel híbrido unindo infraestrutura de TI e desenvolvimento web. Responsável pela manutenção da infraestrutura física/lógica (servidores, switches, cabeamento) e administração de redes e VPNs. Colaboração ativa no desenvolvimento backend e frontend (Python, Java, JavaScript).",
        en: "Hybrid role combining IT infrastructure and web development. Responsible for physical/logical infrastructure maintenance (servers, switches, cabling) and network/VPN administration. Active collaboration in backend and frontend development (Python, Java, JavaScript)."
    },
    skills: ["Infraestrutura", "Python", "Java", "Networking", "Fullstack"]
  },
  {
    id: 3,
    role: { pt: "Estágio em Suporte e Infraestrutura", en: "Support & Infrastructure Intern" },
    company: "JM Informática",
    period: { pt: "Set 2023 - Abr 2024", en: "Sep 2023 - Apr 2024" },
    location: "Campinas, SP",
    description: {
        pt: "Aprofundamento em suporte técnico e infraestrutura. Atuação direta no reparo e manutenção de hardware com foco em integridade e performance. Atendimento técnico in-loco, implementando infraestruturas de rede e solução de problemas complexos em clientes.",
        en: "Deepening knowledge in technical support and infrastructure. Direct involvement in hardware repair and maintenance focusing on integrity and performance. On-site technical support, implementing network infrastructures and troubleshooting complex client issues."
    },
    skills: ["Hardware", "Customer Support", "Troubleshooting", "Network Implementation"]
  }
];

export const Career: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="career" className="py-24 relative">
       <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="text-neon-green font-mono">01.</span>
            <span>{t('career.title')}</span>
            <div className="h-px bg-neutral-800 flex-grow ml-4"></div>
          </h2>
        </Reveal>

        <div className="relative border-l border-neutral-800 ml-4 md:ml-0 space-y-12">
            {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative pl-8 md:pl-8">
                    {/* Timeline Dot - Moved outside Reveal to prevent clipping and ensure correct positioning */}
                    <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-neon-green shadow-[0_0_10px_rgba(0,255,65,0.8)] z-10"></div>
                    
                    {/* Pulsing effect - Active for the first item (Current role) */}
                    {idx === 0 && (
                        <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-neon-green animate-ping z-0"></div>
                    )}
                    
                    <Reveal delay={idx * 200} width="100%">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                            {/* Time & Location */}
                            <div className="md:w-1/4 flex-shrink-0">
                                <div className="flex items-center gap-2 text-neon-green font-mono text-xs mb-1">
                                    <Calendar size={12} />
                                    {exp.period[language]}
                                </div>
                                <div className="flex items-center gap-2 text-neutral-500 text-xs mb-2">
                                    <MapPin size={12} />
                                    {exp.location}
                                </div>
                                <h4 className="text-lg font-bold text-white leading-tight">{exp.company}</h4>
                            </div>

                            {/* Content Card */}
                            <div className="md:w-3/4 glass-panel p-6 rounded-lg border-l-2 border-l-neutral-700 hover:border-l-neon-green transition-all group">
                                <div className="flex items-center gap-2 mb-3 text-white font-bold text-lg">
                                    <Briefcase size={18} className="text-neon-green" />
                                    {exp.role[language]}
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                    {exp.description[language]}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="text-[10px] font-mono px-2 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 group-hover:border-neon-green/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
       </div>
    </section>
  );
};
