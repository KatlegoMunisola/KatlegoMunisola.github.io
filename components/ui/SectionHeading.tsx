import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = 'mb-16' }) => (
  <div className={className}>
    <h2 className="text-4xl font-serif font-bold text-muted-burgundy mb-4">{children}</h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 48 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-px bg-accent"
    />
  </div>
);
