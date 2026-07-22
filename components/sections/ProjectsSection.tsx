import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading>SELECTED WORK</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-pale-sage border-sharp flex flex-col group transition-shadow duration-300 hover:shadow-xl"
            >
              <span className="absolute top-0 left-0 h-[3px] w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold mb-3 text-muted-burgundy">
                  {project.title}
                </h3>
                <p className="text-sm font-sans mb-8 text-muted-burgundy/80 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-sans tracking-widest uppercase border border-muted-burgundy/30 group-hover:border-accent/60 hover:bg-accent/15 px-2 py-1 text-muted-burgundy transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>
              </div>

              {/* STAR Case Study accordion */}
              {project.star && (
                <div className="border-t border-muted-burgundy/30 mt-auto">
                  <button 
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="w-full py-4 px-8 flex justify-between items-center text-xs font-sans font-bold tracking-widest uppercase text-muted-burgundy hover:bg-muted-burgundy hover:text-canvas transition-colors"
                  >
                    VIEW CASE STUDY
                    {expandedId === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-muted-burgundy text-canvas"
                      >
                        <div className="p-8 space-y-6 text-sm font-sans">
                          <div className="pl-4 border-l-2 border-accent">
                            <span className="font-bold text-xs uppercase tracking-widest block mb-2 text-accent">Situation</span>
                            <p className="leading-relaxed">{project.star.situation}</p>
                          </div>
                          <div className="pl-4 border-l-2 border-accent">
                            <span className="font-bold text-xs uppercase tracking-widest block mb-2 text-accent">Task</span>
                            <p className="leading-relaxed">{project.star.task}</p>
                          </div>
                          <div className="pl-4 border-l-2 border-accent">
                            <span className="font-bold text-xs uppercase tracking-widest block mb-2 text-accent">Action</span>
                            <p className="leading-relaxed">{project.star.action}</p>
                          </div>
                          <div className="pl-4 border-l-2 border-accent">
                            <span className="font-bold text-xs uppercase tracking-widest block mb-2 text-accent">Result</span>
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

      </div>
    </section>
  );
};
