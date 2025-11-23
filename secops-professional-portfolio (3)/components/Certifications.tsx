
import React from 'react';
import { Certification } from '../types';
import { Reveal } from './Reveal';
import { Award, Lock, CheckCircle, Loader2, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const achievedCerts: Certification[] = [
  { 
    id: 1, 
    name: "Network Technician Career Path", 
    issuer: "Cisco", 
    date: "Oct 2025", 
    status: "completed",
    skills: ["IPv4/IPv6", "Cisco Nexus", "Ethernet", "Wireless Access"],
    link: "#" 
  },
  { 
    id: 2, 
    name: "Cyber Threat Management", 
    issuer: "Cisco", 
    date: "Sep 2025", 
    status: "completed",
    skills: ["Cryptography", "SIEM", "Incident Mgmt", "OWASP"],
    link: "#"
  },
  { 
    id: 3, 
    name: "Introduction to Cybersecurity", 
    issuer: "Cisco", 
    date: "Sep 2025", 
    status: "completed",
    skills: ["InfoSec", "Security Governance"],
    link: "#"
  }
];

const futureCerts: Certification[] = [
  { 
    id: 4, 
    name: "CCNA Security", 
    issuer: "Cisco", 
    date: "TBD", 
    status: "planned",
    skills: ["Network Security", "Routing & Switching"]
  },
  { 
    id: 5, 
    name: "Security+", 
    issuer: "CompTIA", 
    date: "TBD", 
    status: "planned",
    skills: ["Risk Management", "Cryptography", "Identity Mgmt"]
  }
];

export const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="text-neon-green font-mono">03.</span>
                <span>{t('certs.title')}</span>
                <div className="h-px bg-neutral-800 flex-grow ml-4"></div>
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* ACHIEVED COLUMN */}
            <div className="lg:col-span-2 space-y-6">
                <Reveal>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <CheckCircle className="text-neon-green" size={20} />
                        {t('certs.achieved')}
                    </h3>
                </Reveal>

                {achievedCerts.map((cert, idx) => (
                    <Reveal key={cert.id} delay={idx * 100} width="100%">
                        <div className="glass-panel p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center md:items-start border border-neutral-800 hover:border-neon-green/50 transition-all group relative overflow-hidden">
                            {/* Success Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="p-4 bg-neutral-900 rounded-full border border-neutral-700 group-hover:text-neon-green group-hover:border-neon-green transition-all flex-shrink-0">
                                <Award size={32} />
                            </div>

                            <div className="flex-grow text-center md:text-left z-10">
                                <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">{cert.name}</h4>
                                    <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                                        {cert.date}
                                    </span>
                                </div>
                                <p className="text-neutral-400 font-medium mb-3">{cert.issuer}</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                                    {cert.skills?.map(s => (
                                        <span key={s} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-neutral-800 rounded text-neutral-300">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 text-xs text-neon-green hover:underline font-mono">
                                    <FileText size={12} />
                                    {t('certs.verify')}
                                </a>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* FUTURE / LOADING COLUMN */}
            <div className="space-y-6">
                <Reveal delay={300}>
                    <h3 className="text-xl font-bold text-neutral-400 mb-6 flex items-center gap-2">
                        <Loader2 className="animate-spin text-neon-blue" size={20} />
                        {t('certs.loading')}
                    </h3>
                </Reveal>

                {futureCerts.map((cert, idx) => (
                    <Reveal key={cert.id} delay={400 + (idx * 100)} width="100%">
                        <div className="bg-neutral-900/50 border border-dashed border-neutral-800 p-6 rounded-lg relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                            {/* Scanline effect for "Processing" */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,136,255,0.05)_50%,transparent_100%)] bg-[length:200%_200%] animate-scanline pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-3 opacity-50">
                                <Lock size={20} />
                                <span className="text-xs font-mono uppercase tracking-widest">LOCKED // TARGET</span>
                            </div>
                            
                            <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                            <p className="text-neon-blue font-medium text-sm mb-4">{cert.issuer}</p>
                            
                            <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-3">
                                <div className="w-1/3 h-full bg-neon-blue animate-pulse"></div>
                            </div>
                            <p className="text-xs text-neutral-500 font-mono text-right">Processing...</p>
                        </div>
                    </Reveal>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};
