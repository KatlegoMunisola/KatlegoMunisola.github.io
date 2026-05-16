import React from 'react';
import { Shield, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/80 px-6 text-center relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-neon-cyan" />
          <span className="font-mono text-sm text-zinc-300 font-bold tracking-tighter">KM_SYSTEMS &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Engineered for <span className="text-neon-purple font-bold">Resiliency</span>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/KatlegoMunisola" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/katlegomunisola/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#0077b5] hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.8)] transition-all cursor-pointer">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
