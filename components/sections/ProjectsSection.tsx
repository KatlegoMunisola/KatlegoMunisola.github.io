import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <SectionHeading number="02">Projects</SectionHeading>

      <div className="divide-y divide-navy-lightest">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            className="group py-8 -mx-6 px-6 rounded transition-colors duration-300 hover:bg-navy-light"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono text-xs text-accent shrink-0">0{index + 1}</span>
              <h3 className="text-lg font-bold text-lightest-slate group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            <p className="font-sans text-sm leading-relaxed mb-4 max-w-xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 font-mono text-xs text-slate">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {project.star && (
              <div>
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-slate hover:text-accent transition-colors"
                >
                  View Case Study
                  {expandedId === project.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 space-y-5 text-sm font-sans max-w-xl">
                        <div className="pl-4 border-l-2 border-accent">
                          <span className="font-mono font-semibold text-xs uppercase tracking-widest block mb-1.5 text-accent">Situation</span>
                          <p className="leading-relaxed">{project.star.situation}</p>
                        </div>
                        <div className="pl-4 border-l-2 border-accent">
                          <span className="font-mono font-semibold text-xs uppercase tracking-widest block mb-1.5 text-accent">Task</span>
                          <p className="leading-relaxed">{project.star.task}</p>
                        </div>
                        <div className="pl-4 border-l-2 border-accent">
                          <span className="font-mono font-semibold text-xs uppercase tracking-widest block mb-1.5 text-accent">Action</span>
                          <p className="leading-relaxed">{project.star.action}</p>
                        </div>
                        <div className="pl-4 border-l-2 border-accent">
                          <span className="font-mono font-semibold text-xs uppercase tracking-widest block mb-1.5 text-accent">Result</span>
                          <p className="leading-relaxed">{project.star.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
