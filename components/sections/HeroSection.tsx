import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Terminal as TerminalIcon, ChevronRight, AlertCircle } from 'lucide-react';
import { LogStream } from '../dashboard/LogStream';
import { RadarVisual } from '../dashboard/RadarVisual';
import { SystemStats } from '../dashboard/SystemStats';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-12 gap-6 h-[80vh] min-h-[600px]">
        
        {/* Main Content Area (Identity) - Spans 7 columns */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-7 glass-panel p-8 md:p-12 relative overflow-hidden flex flex-col justify-center shadow-[0_0_30px_rgba(0,242,255,0.05)]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Globe className="w-64 h-64 text-neon-cyan" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded mb-8 shadow-[0_0_10px_rgba(0,242,255,0.1)]">
              <TerminalIcon className="w-3 h-3 text-neon-cyan" />
              <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-[0.3em] font-bold">Botswana Node Verified</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              SECURING DIGITAL <br /> 
              <span className="text-zinc-400">FRONTIERS &</span> <br />
              <span className="text-neon-purple neon-glow-purple underline decoration-neon-purple/30">ARCHITECTING</span> SYSTEMS.
            </h1>
            <p className="text-lg md:text-xl font-mono text-zinc-300 mb-10 max-w-xl">
              I am <span className="text-white font-bold">Katlego Munisola</span>, a Cybersecurity & DevOps Engineer. I help enterprises and startups build resilient infrastructure and defend against evolving threats.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-neon-cyan text-black font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white hover:shadow-[0_0_20px_#00f2ff] transition-all duration-300"
              >
                INITIALIZE EXPLORATION <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://github.com/KatlegoMunisola" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 border border-zinc-600 text-zinc-300 font-bold uppercase tracking-widest text-xs hover:text-white hover:border-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(188,19,254,0.2)] transition-all duration-300 inline-flex items-center justify-center"
              >
                VIEW_GITHUB
              </a>
            </div>
          </div>
        </motion.div>

        {/* Sidebar Area (Dashboard Components) - Spans 5 columns */}
        <div className="col-span-12 lg:col-span-5 grid grid-rows-3 gap-6">
          
          {/* Top Row: Threat Logs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="row-span-2 glass-panel p-4 relative overflow-hidden"
          >
            <LogStream />
            <div className="absolute bottom-0 right-0 p-4 pointer-events-none opacity-10">
              <AlertCircle className="w-16 h-16 text-neon-purple" />
            </div>
          </motion.div>

          {/* Bottom Row: Divided into Radar and Stats */}
          <div className="row-span-1 grid grid-cols-2 gap-6">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-full"
             >
               <RadarVisual />
             </motion.div>
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="h-full"
             >
               <SystemStats />
             </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-12 hidden xl:block">
        <div className="flex gap-4 items-center">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-neon-green shadow-[0_0_5px_#00ff9d]' : 'bg-zinc-800'}`}></div>)}
          </div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Signal_Strength: Optimal</span>
        </div>
      </div>
    </section>
  );
};
