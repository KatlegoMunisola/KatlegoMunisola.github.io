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
    <section id="about" className="relative py-24 px-6 md:px-12 bg-canvas overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary-sage/30 blur-3xl animate-blob-delay" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading className="mb-8">ABOUT</SectionHeading>
          <p className="text-lg font-sans text-muted-burgundy leading-relaxed mb-6">
            I'm a Computer Science & Software Engineering student with a strong interest in cybersecurity,
            secure systems design, and digital infrastructure — and a secondary passion for graphic design.
          </p>
          <p className="text-lg font-sans text-muted-burgundy leading-relaxed">
            My goal is to design systems that are not just functional, but secure, scalable, and intentional.
            I'm currently building cybersecurity lab projects, contributing to open source, and preparing for
            the Security+ / CEH certification pathway.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="text-xs font-sans tracking-widest uppercase text-muted-burgundy/70 font-semibold mb-6">
            Focus Areas
          </h3>
          <ul className="space-y-4">
            {focusAreas.map((area, index) => (
              <motion.li
                key={area}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 6 }}
                className="bg-pale-sage border border-muted-burgundy border-l-4 border-l-transparent hover:border-l-accent px-6 py-4 text-muted-burgundy font-sans text-sm transition-colors duration-300 cursor-default"
              >
                {area}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-2"
        >
          <h3 className="text-xs font-sans tracking-widest uppercase text-muted-burgundy/70 font-semibold mb-6">
            Beyond the Code
          </h3>
          <div className="flex flex-wrap gap-3">
            {beyondWork.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="rounded-full border border-muted-burgundy/30 hover:border-accent hover:bg-accent/10 px-5 py-2 text-muted-burgundy font-sans text-sm transition-colors duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
