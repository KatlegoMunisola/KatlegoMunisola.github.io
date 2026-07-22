import React from 'react';
import { motion } from 'framer-motion';
import { Server, ShieldCheck, PenTool } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const CoreDisciplinesSection = () => {
  const disciplines = [
    {
      icon: Server,
      title: "SYSTEM ARCHITECTURE",
      focus: "Full-stack applications, scalable backend structures, API optimization",
      description: "Designing and developing robust, scalable backend infrastructures and full-stack applications. Focusing on optimized API performance and modular system components that ensure long-term maintainability."
    },
    {
      icon: ShieldCheck,
      title: "CYBERSECURITY",
      focus: "Network exploitation, security auditing, proactive defense",
      description: "Executing comprehensive penetration testing and network auditing. Identifying vulnerabilities before they are exploited and implementing proactive defense mechanisms to harden enterprise infrastructures."
    },
    {
      icon: PenTool,
      title: "GRAPHIC DESIGN",
      focus: "Tech agency aesthetics, layout design, visual typography",
      description: "Creating premium, human-centric visual experiences. Specializing in minimalist layouts, stark whitespace, sharp borders, and high-contrast typography to build compelling brand narratives."
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading>CORE DISCIPLINES</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-pale-sage p-10 border-sharp flex flex-col h-full group overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              <span className="absolute top-0 left-0 h-[3px] w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <discipline.icon className="w-7 h-7 text-muted-burgundy group-hover:text-accent transition-colors duration-300 mb-5" />
              <h3 className="text-xl font-serif font-bold text-muted-burgundy mb-4 tracking-wide">
                {discipline.title}
              </h3>
              <p className="text-xs font-sans tracking-widest uppercase text-muted-burgundy/70 mb-6 font-semibold">
                {discipline.focus}
              </p>
              <p className="text-sm font-sans text-muted-burgundy/90 leading-relaxed mt-auto">
                {discipline.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
