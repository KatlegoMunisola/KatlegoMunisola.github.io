import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => (
  <footer id="contact" className="border-t border-ink/15 py-14 md:py-20">
    <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="section-kicker mb-4">Have a project in mind?</p>
        <h2 className="max-w-3xl text-5xl font-black leading-[.9] tracking-[-.07em] text-ink md:text-7xl">Let’s make<br />something useful<span className="text-accent">.</span></h2>
        <a href="mailto:munisolawork@gmail.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-ink transition-transform hover:-translate-y-1">
          Say hello <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/KatlegoMunisola" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/katlegomunisola/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"><Linkedin size={18} /></a>
        <a href="mailto:munisolawork@gmail.com" aria-label="Email" className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"><Mail size={18} /></a>
      </div>
    </div>
    <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-ink/15 pt-5 font-mono text-[10px] uppercase tracking-[.15em] text-muted">
      <span>© {new Date().getFullYear()} Katlego Munisola</span>
      <a href="#about" className="transition-colors hover:text-accent">Back to top ↑</a>
    </div>
  </footer>
);
