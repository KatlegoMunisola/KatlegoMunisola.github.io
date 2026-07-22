import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, CERTIFICATIONS } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';
import { MagneticButton } from '../ui/MagneticButton';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <SectionHeading number="03">Experience</SectionHeading>

      <div className="space-y-12 max-w-2xl">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-6 border-l border-navy-lightest"
          >
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(92,225,198,0.15)]" />
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
              {exp.period}
            </p>
            <h3 className="text-lg font-bold text-lightest-slate">{exp.role}</h3>
            <p className="text-sm font-sans font-semibold text-slate mt-0.5">
              {exp.company} — {exp.location}
            </p>
            <ul className="space-y-2 mt-4">
              {exp.highlights.map((h, i) => (
                <li key={i} className="text-slate text-sm font-sans flex gap-2">
                  <span className="text-accent">▹</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4 font-mono text-xs text-slate/70">
              {exp.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl">
        <h3 className="text-xs font-mono tracking-widest uppercase text-lightest-slate mb-6">
          Certifications
        </h3>
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ x: 6 }}
              className="flex items-baseline justify-between gap-4 py-2 border-b border-navy-lightest"
            >
              <span className="text-sm font-sans font-semibold text-lightest-slate">{cert.name}</span>
              <span className="font-mono text-xs text-slate shrink-0">{cert.issuer}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <MagneticButton
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 mt-12 px-6 py-3 border border-accent text-accent hover:bg-accent/10 transition-colors duration-300 font-mono text-sm tracking-wide"
      >
        View Full Résumé
      </MagneticButton>
    </section>
  );
};
