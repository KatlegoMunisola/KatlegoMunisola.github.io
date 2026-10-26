import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../constants';

const orderedProjects = [...PROJECTS].sort((a, b) => (a.id === 'bitewise' ? -1 : b.id === 'bitewise' ? 1 : 0));

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>('bitewise');

  return (
    <section id="projects" className="border-t border-ink/15 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker mb-3">Selected work <span>02 / 03</span></p>
          <h2 className="text-4xl font-black tracking-[-.06em] text-ink md:text-6xl">Things I’ve built<span className="text-accent">.</span></h2>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-widest text-muted sm:block">Projects & experiments</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {orderedProjects.map((project, index) => {
          const featured = project.id === 'bitewise';
          const expanded = expandedId === project.id;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .12 }}
              transition={{ duration: .45, delay: Math.min(index * .05, .25) }}
              className={`project-card group relative overflow-hidden rounded-2xl border border-ink/15 p-6 transition-colors hover:border-ink/50 md:p-8 ${featured ? 'md:col-span-2 md:p-10' : ''}`}
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[.24em] text-muted">{featured ? 'Featured project' : `Project / ${String(index).padStart(2, '0')}`}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              </div>
              <div className={featured ? 'grid gap-8 md:grid-cols-[.85fr_1.15fr] md:gap-12' : ''}>
                <div>
                  <h3 className="max-w-2xl text-2xl font-extrabold leading-tight tracking-[-.04em] text-ink md:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map(tag => <span key={tag} className="rounded-full bg-accent-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-ink">{tag}</span>)}
                  </div>
                  {project.star && (
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setExpandedId(expanded ? null : project.id)}
                      className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:text-accent"
                    >
                      {expanded ? 'Close project notes' : 'Read project notes'}
                      <ChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} size={15} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {featured && (
                  <div className="feature-graphic relative flex min-h-52 flex-col justify-between overflow-hidden rounded-xl bg-ink p-6 text-paper md:min-h-64 md:p-8">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-paper/55"><span>BiteWise</span><span>Local first · Offline ready</span></div>
                    <div className="relative z-10">
                      <p className="max-w-sm text-3xl font-black leading-[.95] tracking-[-.06em] md:text-4xl">Know what’s on your plate<span className="text-accent">.</span></p>
                      <p className="mt-3 max-w-sm text-xs leading-5 text-paper/65">Food and symptom tracking, allergen checks, and meal photo estimates in one mobile app.</p>
                    </div>
                    <span className="pointer-events-none absolute -bottom-12 -right-4 h-44 w-44 rounded-full border-[26px] border-accent/90 md:-right-1 md:h-56 md:w-56" />
                  </div>
                )}
              </div>
              <AnimatePresence initial={false}>
                {expanded && project.star && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="mt-8 grid gap-5 border-t border-ink/15 pt-6 md:grid-cols-2">
                      {([
                        ['The challenge', project.star.situation],
                        ['The approach', project.star.action],
                        ['The goal', project.star.task],
                        ['The result', project.star.result]
                      ] as const).map(([label, text]) => (
                        <div key={label}>
                          <h4 className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-accent">{label}</h4>
                          <p className="text-sm leading-6 text-muted">{text}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
