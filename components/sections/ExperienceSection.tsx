import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../SectionHeader';
import { EXPERIENCES } from '../../constants';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeader id="03" title="Service History" subtitle="Professional and leadership timeline" />
      
      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div 
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="relative pl-8 border-l-2 border-zinc-800 hover:border-neon-cyan transition-colors pb-8 group"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-neon-cyan group-hover:shadow-[0_0_10px_#00f2ff] transition-all"></div>
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                <p className="text-neon-purple font-mono text-sm font-bold mt-1">{exp.company}</p>
              </div>
              <div className="text-zinc-400 font-mono text-xs text-right mt-2 sm:mt-0">
                <p className="font-bold text-zinc-400">{exp.period}</p>
                <p className="uppercase tracking-widest mt-1">{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-3 mt-6">
              {exp.highlights.map((h, i) => (
                <li key={i} className="text-zinc-300 text-sm flex gap-3 items-start">
                  <span className="text-neon-green mt-0.5 flex-shrink-0 font-mono text-[10px] font-bold">[OK]</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
