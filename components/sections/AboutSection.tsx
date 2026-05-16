import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Lock, Zap } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { SOFT_SKILLS } from '../../constants';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto relative z-10 scroll-mt-20">
      <SectionHeader id="01" title="Core Profile" subtitle="Professional identity and focus" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div 
          className="md:col-span-2 text-zinc-400 text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-xl font-bold text-white mb-6">
            I am a Computer Science & Software Engineering student at BIUST, passionate about the intersection of 
            <span className="text-neon-cyan neon-glow-cyan"> Security Operations</span> and <span className="text-neon-purple neon-glow-purple">DevOps Culture</span>.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="text-xl">⚡</span>
              <div>
                <strong className="text-white">Zero-Downtime Deployments:</strong>
                <p className="text-sm mt-1">Orchestrating resilient CI/CD pipelines to ensure seamless updates and maximum availability.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-xl">🛡️</span>
              <div>
                <strong className="text-white">Proactive Threat Mitigation:</strong>
                <p className="text-sm mt-1">Implementing CIS benchmarks and conducting network audits to secure infrastructure.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-xl">🤝</span>
              <div>
                <strong className="text-white">Technical Leadership:</strong>
                <p className="text-sm mt-1">Driving cross-functional development and fostering collaborative growth as GDSC Vice Lead.</p>
              </div>
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 rounded">
                  <div className="text-xs font-mono text-zinc-400 uppercase mb-1">Location</div>
                  <div className="text-white font-bold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-neon-cyan" /> Botswana
                  </div>
              </div>
              <div className="glass-card p-4 rounded">
                  <div className="text-xs font-mono text-zinc-400 uppercase mb-1">Graduating</div>
                  <div className="text-white font-bold flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-neon-green" /> 2026
                  </div>
              </div>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="glass-panel p-6 rounded-lg relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lock className="w-16 h-16 text-neon-cyan" />
            </div>
            <h4 className="font-mono text-neon-cyan uppercase text-xs mb-4 tracking-[0.2em] font-bold">Soft Skills</h4>
            <ul className="space-y-3">
              {SOFT_SKILLS.map((skill, idx) => (
                <motion.li 
                  key={skill} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-sm text-zinc-300 font-medium"
                >
                  <Zap className="w-4 h-4 text-neon-purple" /> {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-6 rounded-lg">
              <h4 className="font-mono text-neon-purple uppercase text-xs mb-4 tracking-[0.2em] font-bold">Leadership Highlights</h4>
              <div className="space-y-4">
                  <div className="text-sm text-white font-medium border-l-2 border-neon-purple pl-4 py-1">Class Rep (2020-24)</div>
                  <div className="text-sm text-white font-medium border-l-2 border-neon-cyan pl-4 py-1">GDSC Vice Lead</div>
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
