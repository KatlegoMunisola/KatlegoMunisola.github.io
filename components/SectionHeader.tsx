
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle }) => {
  return (
    <div className="mb-12 relative">
      <div className="flex items-center gap-4 mb-2">
        <span className="font-mono text-cyan-500 text-sm font-bold tracking-[0.3em]">[{id}]</span>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">{title}</h2>
      {subtitle && <p className="text-zinc-500 mt-2 font-mono uppercase tracking-widest text-xs md:text-sm">{subtitle}</p>}
    </div>
  );
};
