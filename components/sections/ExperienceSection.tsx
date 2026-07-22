import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, CERTIFICATIONS } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading>EXPERIENCE & CREDENTIALS</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-muted-burgundy mb-8">Professional History</h3>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-6 border-l border-muted-burgundy/30"
                >
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]" />
                  <div className="mb-4">
                    <h4 className="text-xl font-serif font-bold text-muted-burgundy">{exp.role}</h4>
                    <p className="text-sm font-sans font-semibold text-muted-burgundy/80 mt-1">{exp.company}</p>
                    <p className="text-xs font-sans tracking-widest uppercase text-muted-burgundy/60 mt-2">
                      {exp.period} | {exp.location}
                    </p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-muted-burgundy/80 text-sm font-sans flex gap-2">
                        <span className="text-muted-burgundy/50">-</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-muted-burgundy mb-8">Certifications</h3>
            <div className="grid grid-cols-1 gap-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div 
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="bg-pale-sage p-6 border border-muted-burgundy border-l-4 border-l-transparent hover:border-l-accent transition-colors duration-300"
                >
                  <h4 className="text-lg font-serif font-bold text-muted-burgundy mb-2">{cert.name}</h4>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-burgundy/70 font-semibold">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
