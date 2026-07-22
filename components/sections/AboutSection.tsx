import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection = () => {
  const focusAreas = [
    'Cybersecurity & ethical hacking',
    'Web application security',
    'Systems & network fundamentals',
    'UI/UX & graphic design'
  ];

  const beyondWork = [
    'Chess (1400 elo, chasing a FIDE rating)',
    'Gaming online with friends',
    'Drawing — chalk & oil pastels, colored pencil',
    'Writing film reviews on Letterboxd',
    'Reading fiction',
    'Skateboarding',
    'Photography',
    'Music'
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <SectionHeading number="01">About</SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="font-sans leading-relaxed mb-4">
          I'm a Computer Science &amp; Software Engineering student with a strong interest in cybersecurity,
          secure systems design, and digital infrastructure — and a secondary passion for graphic design.
        </p>
        <p className="font-sans leading-relaxed">
          My goal is to design systems that are not just functional, but secure, scalable, and intentional.
          I'm currently building cybersecurity lab projects, contributing to open source, and preparing for
          the Security+ / CEH certification pathway.
        </p>

        <h3 className="text-xs font-mono tracking-widest uppercase text-lightest-slate mt-12 mb-4">
          Focus Areas
        </h3>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area, index) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -2 }}
              className="rounded border border-navy-lightest hover:border-accent/60 hover:bg-navy-light px-3 py-1.5 text-xs font-mono text-slate hover:text-accent transition-colors duration-300 cursor-default"
            >
              {area}
            </motion.span>
          ))}
        </div>

        <h3 className="text-xs font-mono tracking-widest uppercase text-lightest-slate mt-10 mb-4">
          Beyond the Code
        </h3>
        <div className="flex flex-wrap gap-2">
          {beyondWork.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="rounded border border-navy-lightest hover:border-accent/60 hover:bg-navy-light px-3 py-1.5 text-xs font-mono text-slate hover:text-accent transition-colors duration-300 cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
