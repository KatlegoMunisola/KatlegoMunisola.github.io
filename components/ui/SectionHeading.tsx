import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ number, children, className = 'mb-10' }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <h2 className="flex items-baseline whitespace-nowrap text-2xl md:text-3xl font-bold text-lightest-slate">
      <span className="font-mono text-accent text-base md:text-lg mr-3">{number}.</span>
      {children}
    </h2>
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="hidden sm:block h-px bg-navy-lightest max-w-xs"
    />
  </div>
);
