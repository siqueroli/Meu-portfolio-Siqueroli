
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';

const COMMANDS: Record<string, string> = {
  help: 'Available commands: help, whoami, status, clear, contato, admin, idade',
  whoami: 'Security Analyst | Ethical Hacker | React Developer',
  status: 'System Integrity: 100% | Threats Detected: 0',
  admin: 'Guilherme Siqueroli',
  idade: '21 anos',
  contato: 'Redirecting to secure contact channel...',
};

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>(['Welcome to SecOS v2.0. Type "help" for commands.']);
  const [input, setInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      if (cmd === 'clear') {
        setLines([]);
      } else {
        if (cmd === 'contato') {
           window.open('https://linktr.ee/siqueroli', '_blank');
        }
        response = COMMANDS[cmd] || `Command not found: ${cmd}`;
        setLines((prev) => [...prev, `> ${input}`, response]);
      }
      setInput('');
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl shadow-neon-green/10 bg-[#0a0a0a] font-mono text-sm">
      {/* Terminal Header */}
      <div className="bg-neutral-900 px-4 py-2 flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-2 text-neutral-400">
          <TerminalIcon size={14} />
          <span className="text-xs font-bold">bash -- user@portfolio</span>
        </div>
        <div className="flex gap-2">
          <Minus size={14} className="text-neutral-500 hover:text-white cursor-pointer" />
          <Square size={14} className="text-neutral-500 hover:text-white cursor-pointer" />
          <X size={14} className="text-neutral-500 hover:text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={containerRef}
        className="p-4 h-64 overflow-y-auto text-neon-green/90"
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1 break-words">
            {line}
          </div>
        ))}
        <div className="flex items-center">
          <span className="mr-2 text-blue-400">➜</span>
          <span className="mr-2 text-purple-400">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 text-neutral-200 caret-neon-green"
            autoFocus
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};
