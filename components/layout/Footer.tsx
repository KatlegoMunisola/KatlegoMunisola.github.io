import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-soft-neutral py-24 px-6 text-center border-t border-muted-burgundy/20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-accent/10 blur-3xl animate-blob-delay-2" />
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center">

        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-accent/50 rounded-full text-xs font-sans font-bold tracking-widest uppercase text-muted-burgundy">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for opportunities
        </span>

        <h2 className="text-5xl font-serif font-bold text-muted-burgundy mb-8 tracking-tight">
          GET IN TOUCH
        </h2>

        <p className="text-lg font-sans text-muted-burgundy/80 mb-12 max-w-lg">
          Currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <MagneticButton
          href="mailto:munisolawork@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 border-sharp text-muted-burgundy hover:bg-deep-burgundy hover:text-canvas hover:border-deep-burgundy hover:shadow-[0_0_30px_-6px_var(--accent)] transition-colors duration-300 font-sans text-sm font-bold tracking-widest uppercase mb-16"
        >
          <Mail className="w-5 h-5" />
          Send Email
        </MagneticButton>

        <div className="flex gap-8 mb-8">
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/KatlegoMunisola"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-burgundy/70 hover:text-accent transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/katlegomunisola/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-burgundy/70 hover:text-accent transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </div>

        <div className="text-xs font-sans text-muted-burgundy/60 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Katlego Munisola. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};
