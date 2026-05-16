import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const Navbar = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress Bar Top */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-zinc-900 z-50">
        <motion.div 
          className="h-full bg-neon-cyan shadow-[0_0_10px_#00f2ff]" 
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false }}
        />
      </div>

      {/* Modern Sleek Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 md:px-12 backdrop-blur-xl bg-black/50 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <Shield className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-neon-cyan/30 blur-lg rounded-full animate-pulse group-hover:bg-neon-cyan/50 transition-colors"></div>
              </div>
              <span className="font-mono font-bold text-lg tracking-tighter text-white">KATLEGO<span className="text-neon-cyan">.</span>SYS</span>
            </a>
            
            <div className="hidden lg:flex gap-4 px-4 py-1.5 glass-card rounded-full items-center">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_5px_#00ff9d]"></span>
                <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-tighter font-bold">UPTIME: {uptime}s</span>
              </div>
              <div className="w-[1px] h-3 bg-zinc-700"></div>
              <div className="text-[10px] font-mono text-neon-purple uppercase font-bold">SEC_LVL: 4</div>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
            {['About', 'Skills', 'Experience', 'Projects', 'Research', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={scrollTo(item.toLowerCase())}
                className="hover:text-neon-cyan hover:neon-glow-cyan transition-all relative group py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-cyan shadow-[0_0_5px_#00f2ff] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-5 py-2 bg-white text-black font-black rounded-sm hover:bg-neon-cyan hover:shadow-[0_0_15px_rgba(0,242,255,0.5)] transition-all text-[9px] uppercase tracking-widest"
            >
              DOWNLOAD_ARCHIVE
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
