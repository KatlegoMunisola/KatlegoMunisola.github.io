import React from 'react';
import { motion } from 'framer-motion';

export const CoreDisciplinesSection = () => {
  const disciplines = [
    {
      title: "SYSTEM ARCHITECTURE",
      focus: "Full-stack applications, scalable backend structures, API optimization",
      description: "Designing and developing robust, scalable backend infrastructures and full-stack applications. Focusing on optimized API performance and modular system components that ensure long-term maintainability."
    },
    {
      title: "CYBERSECURITY",
      focus: "Network exploitation, security auditing, proactive defense",
      description: "Executing comprehensive penetration testing and network auditing. Identifying vulnerabilities before they are exploited and implementing proactive defense mechanisms to harden enterprise infrastructures."
    },
    {
      title: "GRAPHIC DESIGN",
      focus: "Tech agency aesthetics, layout design, visual typography",
      description: "Creating premium, human-centric visual experiences. Specializing in minimalist layouts, stark whitespace, sharp borders, and high-contrast typography to build compelling brand narratives."
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-muted-burgundy mb-4">CORE DISCIPLINES</h2>
          <div className="w-12 h-px bg-muted-burgundy"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline, index) => (
            <motion.div 
              key={discipline.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pale-sage p-10 border-sharp flex flex-col h-full"
            >
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
