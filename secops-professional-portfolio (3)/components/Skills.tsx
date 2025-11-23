
import React from 'react';
import { Skill } from '../types';
import { Reveal } from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const skills: Skill[] = [
  { name: "Penetration Testing (Web/Infra)", level: 95, category: "Offensive" },
  { name: "Burp Suite Pro / OWASP ZAP", level: 90, category: "Offensive" },
  { name: "Python for Security (Exploits)", level: 85, category: "Tools" },
  { name: "SIEM & Log Analysis", level: 80, category: "Defensive" },
  { name: "Cloud Security (AWS/Azure)", level: 75, category: "Defensive" },
  { name: "Linux Hardening", level: 88, category: "Defensive" },
];

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative bg-neutral-900/50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-neon-green font-mono">02.</span>
            <span>{t('skills.title')}</span>
            <div className="h-px bg-neutral-800 flex-grow ml-4"></div>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Offensive */}
          <div>
            <Reveal delay={200}>
              <h3 className="text-xl font-mono text-neon-blue mb-6">{t('skills.offensive')}</h3>
              <div className="space-y-6">
                {skills.slice(0, 3).map((skill, idx) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-neon-green opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-green to-emerald-600 transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Defensive */}
          <div>
             <Reveal delay={400}>
              <h3 className="text-xl font-mono text-neon-pink mb-6">{t('skills.defensive')}</h3>
              <div className="space-y-6">
                {skills.slice(3, 6).map((skill, idx) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-neon-pink opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-pink to-purple-600 transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(255,0,119,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
