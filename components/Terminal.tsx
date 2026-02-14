
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  lines: string[];
  title?: string;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ lines, title = "root@katlego:~", className = "" }) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setVisibleLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [lines]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`bg-black/80 border border-cyan-500/30 rounded-lg overflow-hidden font-mono text-xs md:text-sm border-glow-cyan ${className}`}
    >
      <div className="bg-zinc-900 px-4 py-2 border-b border-cyan-500/30 flex justify-between items-center">
        <span className="text-cyan-400 font-bold tracking-wider">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      <div className="p-4 space-y-2 min-h-[120px]">
        {visibleLines.map((line, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2"
          >
            <span className="text-green-500 select-none">›</span>
            <span className="text-zinc-300">{line}</span>
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-cyan-500 inline-block ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
};
