import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-soft-neutral py-24 px-6 text-center border-t border-muted-burgundy/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <h2 className="text-5xl font-serif font-bold text-muted-burgundy mb-8 tracking-tight">
          GET IN TOUCH
        </h2>
        
        <p className="text-lg font-sans text-muted-burgundy/80 mb-12 max-w-lg">
          Currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:contact@katlego.tech" 
          className="inline-flex items-center gap-3 px-8 py-4 border-sharp text-muted-burgundy hover:bg-muted-burgundy hover:text-soft-neutral transition-colors duration-300 font-sans text-sm font-bold tracking-widest uppercase mb-16"
        >
          <Mail className="w-5 h-5" />
          Send Email
        </a>

        <div className="flex gap-8 mb-8">
          <a href="https://github.com/KatlegoMunisola" target="_blank" rel="noreferrer" className="text-muted-burgundy/70 hover:text-muted-burgundy transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/katlegomunisola/" target="_blank" rel="noreferrer" className="text-muted-burgundy/70 hover:text-muted-burgundy transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-xs font-sans text-muted-burgundy/60 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Katlego Munisola. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};
