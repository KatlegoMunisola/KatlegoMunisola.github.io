import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { CERTIFICATIONS } from '../../constants';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 px-6 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeader id="05" title="Accreditations" subtitle="Verified skills and certifications" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div 
            key={cert.name} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 p-6 glass-card rounded-lg"
          >
            <div className="p-3 bg-neon-cyan/10 rounded-full border border-neon-cyan/20">
              <Award className="w-6 h-6 text-neon-cyan" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase leading-tight">{cert.name}</h4>
              <p className="text-zinc-400 text-xs font-mono mt-1">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
