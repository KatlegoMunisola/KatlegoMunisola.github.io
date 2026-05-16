import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

const RESEARCH_PAPERS = [
  {
    title: 'The Anatomy of Rogue Access Points in Urban Hubs',
    date: 'March 2024',
    type: 'Security Advisory',
    abstract: 'An in-depth analysis of MITM attack vectors over open networks in Gaborone, highlighting common misconfigurations in enterprise access points.',
    link: '#'
  },
  {
    title: 'Automating CIS Compliance: A DevOps Approach',
    date: 'January 2024',
    type: 'Technical Write-up',
    abstract: 'Exploring the intersection of infrastructure-as-code and security baselines to achieve 100% automated CIS benchmark compliance on RHEL 8.',
    link: '#'
  }
];

export const ResearchSection = () => {
  return (
    <section id="research" className="py-32 px-6 bg-black/80 relative scroll-mt-20 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader id="05" title="Security Advisories & Research" subtitle="Industry analysis and technical write-ups" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <motion.article 
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-panel p-8 rounded-lg group hover:bg-zinc-900/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-black/40 rounded">
                    <FileText className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest block">{paper.type}</span>
                    <span className="text-xs font-mono text-zinc-400">{paper.date}</span>
                  </div>
                </div>
                <a href={paper.link} className="p-2 hover:bg-white/5 rounded-full transition-colors group/link">
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover/link:text-white" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{paper.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {paper.abstract}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
