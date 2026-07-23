import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const Sidebar = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = NAV_ITEMS
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-[380px] lg:h-screen flex flex-col justify-between px-8 md:px-12 lg:px-16 py-12 lg:py-24">
      <div>
        <a href="#" onClick={scrollToTop} className="inline-block group">
          <h1 className="font-serif text-3xl font-black text-lightest-slate group-hover:text-accent transition-colors duration-300">
            Katlego Munisola
          </h1>
        </a>
        <h2 className="text-base font-sans font-semibold text-lightest-slate mt-2">
          CS &amp; SE Student — Secure Systems
        </h2>
        <p className="mt-4 text-slate font-sans text-sm leading-relaxed max-w-xs">
          I build resilient digital infrastructure through a security lens, with a secondary passion for graphic design.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page">
          <ul className="space-y-5">
            {NAV_ITEMS.map((item, index) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={scrollTo(item.id)}
                    className="group flex items-center gap-3"
                  >
                    <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${isActive ? 'text-accent' : 'text-slate/50'}`}>
                      0{index + 1}
                    </span>
                    <span className={`text-xs font-sans font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-lightest-slate' : 'text-slate/50'} group-hover:text-lightest-slate`}>
                      {item.label}
                    </span>
                    <span className={`h-px bg-lightest-slate transition-all duration-300 ${isActive ? 'w-8' : 'w-0 group-hover:w-8'}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex gap-4 mt-12 lg:mt-0 -ml-2.5">
        <a href="https://github.com/KatlegoMunisola" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 text-slate hover:text-accent hover:-translate-y-1 transition-all duration-300">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/katlegomunisola/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 text-slate hover:text-accent hover:-translate-y-1 transition-all duration-300">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:munisolawork@gmail.com" aria-label="Email" className="p-2.5 text-slate hover:text-accent hover:-translate-y-1 transition-all duration-300">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};
