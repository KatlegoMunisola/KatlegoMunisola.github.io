import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { PROJECTS } from '../../constants';

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-black/40 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader id="04" title="Strategic Assets" subtitle="Featured security and devops case studies" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-lg flex flex-col h-full relative group overflow-hidden border-zinc-800 hover:border-neon-purple/50"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 shadow-[0_0_10px_#bc13fe]"></div>
              
              <div className="p-8 pb-4">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-black/60 rounded border border-white/5 group-hover:border-neon-purple/30 transition-colors">
                    <TerminalIcon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-1 rounded border font-bold ${
                    project.status === 'operational' 
                      ? 'border-neon-green/30 text-neon-green bg-neon-green/5' 
                      : 'border-yellow-500/30 text-yellow-500 bg-yellow-500/5'
                  } uppercase tracking-widest`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-neon-purple transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono bg-black/50 border border-white/10 text-zinc-300 px-3 py-1.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.star && (
                <div className="mt-auto border-t border-white/5">
                  <button 
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="w-full py-4 px-8 flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                  >
                    View Case Study (STAR)
                    {expandedId === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-black/40"
                      >
                        <div className="p-8 pt-4 space-y-4 text-sm">
                          <div>
                            <span className="text-neon-cyan font-bold text-xs uppercase tracking-widest block mb-1">Situation</span>
                            <p className="text-zinc-300 leading-relaxed">{project.star.situation}</p>
                          </div>
                          <div>
                            <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest block mb-1">Task</span>
                            <p className="text-zinc-300 leading-relaxed">{project.star.task}</p>
                          </div>
                          <div>
                            <span className="text-neon-purple font-bold text-xs uppercase tracking-widest block mb-1">Action</span>
                            <p className="text-zinc-300 leading-relaxed">{project.star.action}</p>
                          </div>
                          <div>
                            <span className="text-neon-green font-bold text-xs uppercase tracking-widest block mb-1">Result</span>
                            <p className="text-zinc-300 leading-relaxed">{project.star.result}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
