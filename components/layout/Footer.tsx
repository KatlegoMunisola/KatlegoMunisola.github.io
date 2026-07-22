import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

export const Footer = () => {
  return (
    <footer id="contact" className="px-8 md:px-12 lg:px-24 py-24 md:py-32 text-center max-w-3xl mx-auto">

      <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-accent/40 rounded-full text-xs font-mono tracking-widest uppercase text-lightest-slate">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        Available for opportunities
      </span>

      <p className="font-mono text-accent text-sm mb-3">04. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6 tracking-tight">
        Get In Touch
      </h2>

      <p className="font-sans text-slate mb-10 max-w-lg mx-auto leading-relaxed">
        Currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <MagneticButton
        href="mailto:munisolawork@gmail.com"
        className="inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent hover:bg-accent/10 transition-colors duration-300 font-mono text-sm tracking-wide mb-16"
      >
        <Mail className="w-4 h-4" />
        Say Hello
      </MagneticButton>

      <div className="flex justify-center gap-8 mb-8">
        <motion.a
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/KatlegoMunisola"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate hover:text-accent transition-colors"
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/katlegomunisola/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate hover:text-accent transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>
      </div>

      <div className="text-xs font-mono text-slate/60 tracking-widest">
        &copy; {new Date().getFullYear()} Katlego Munisola. All rights reserved.
      </div>

    </footer>
  );
};
