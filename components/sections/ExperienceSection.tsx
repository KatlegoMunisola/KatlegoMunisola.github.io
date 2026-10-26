import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES, CERTIFICATIONS, EDUCATION, EXPERIENCES, SKILL_GROUPS } from '../../constants';

export const ExperienceSection = () => (
  <section id="experience" className="border-t border-ink/25 py-16 md:py-24">
    <div className="mb-10">
      <p className="section-kicker mb-3">Work / study / practice <span>03</span></p>
      <h2 className="text-4xl font-black tracking-[-.06em] text-ink md:text-6xl">The work so far<span className="text-accent">.</span></h2>
    </div>

    <div className="experience-list divide-y divide-ink/15 border-y border-ink/20">
      {EXPERIENCES.map((exp, idx) => (
        <motion.article key={`${exp.company}-${exp.role}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * .08 }} className="grid gap-4 py-7 md:grid-cols-[.62fr_1.38fr] md:gap-10">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-accent">{exp.period}</p>
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-ink">{exp.role}<span className="text-accent">.</span></h3>
            <p className="mt-1 text-sm text-muted">{exp.company} <span className="px-1 text-accent">/</span> {exp.location}</p>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {exp.highlights.map((highlight, i) => <li key={i} className="flex gap-2 text-sm leading-6 text-muted"><span className="font-note text-lg leading-5 text-accent">↗</span><span>{highlight}</span></li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags.map(tag => <span key={tag} className="rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-muted">{tag}</span>)}
            </div>
          </div>
        </motion.article>
      ))}
    </div>

    <div className="mt-12 grid gap-4 md:grid-cols-[.62fr_1.38fr] md:gap-10">
      <p className="section-kicker">Education <span>/ 04</span></p>
      <article className="education-card border border-ink/20 bg-paper-deep/55 p-5 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.14em] text-accent">{EDUCATION.period}</p>
            <h3 className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-ink md:text-2xl">{EDUCATION.degree}</h3>
            <p className="mt-2 text-sm text-muted">{EDUCATION.institution} <span className="px-1 text-accent">/</span> {EDUCATION.location}</p>
          </div>
          <span className="degree-mark font-serif" aria-hidden="true">BSc</span>
        </div>
      </article>
    </div>

    <div className="mt-14 grid gap-4 md:grid-cols-[.62fr_1.38fr] md:gap-10">
      <p className="section-kicker">Tools &amp; strengths <span>/ 05</span></p>
      <div className="grid gap-0 border-y border-ink/20 sm:grid-cols-2 sm:gap-x-8">
        {SKILL_GROUPS.map((group, idx) => (
          <div key={group.label} className={`skill-note py-4 ${idx > 1 ? 'border-t border-ink/15' : ''} ${idx === 1 ? 'sm:border-t-0' : ''}`}>
            <h3 className="font-mono text-[10px] uppercase tracking-[.12em] text-accent">{group.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{group.skills}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14 grid gap-4 md:grid-cols-[.62fr_1.38fr] md:gap-10">
      <p className="section-kicker">Learning &amp; community <span>/ 06</span></p>
      <div className="grid gap-8">
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {CERTIFICATIONS.map(cert => (
            <li key={cert.name} className="credential-row flex items-start justify-between gap-3 border-b border-ink/15 pb-3">
              <div>
                <h3 className="text-sm font-bold text-ink">{cert.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted">{cert.issuer}</p>
              </div>
              {cert.date && <span className="shrink-0 font-mono text-[10px] text-accent">{cert.date}</span>}
            </li>
          ))}
        </ul>
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[.12em] text-accent">Activities &amp; societies</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {ACTIVITIES.map(activity => <li key={activity} className="flex gap-2 text-xs leading-5 text-muted"><span className="font-note text-base text-accent">✳</span><span>{activity}</span></li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
