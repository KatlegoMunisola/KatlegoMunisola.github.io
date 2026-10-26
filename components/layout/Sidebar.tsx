import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const Sidebar = () => (
  <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
      <a href="#about" className="group inline-flex items-center gap-3" aria-label="Katlego Munisola, home">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs font-black tracking-tight text-paper transition-transform group-hover:rotate-[-8deg]">KM</span>
        <span className="hidden text-sm font-extrabold tracking-tight sm:inline">Katlego Munisola<span className="text-accent">.</span></span>
      </a>
      <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-8">
        {NAV_ITEMS.map(item => (
          <a key={item.id} href={`#${item.id}`} className="text-[11px] font-bold text-muted transition-colors hover:text-accent sm:text-sm">{item.label}</a>
        ))}
        <a href="https://github.com/KatlegoMunisola" target="_blank" rel="noreferrer" className="hidden items-center gap-1 text-xs font-bold text-ink sm:inline-flex">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </div>
  </header>
);
