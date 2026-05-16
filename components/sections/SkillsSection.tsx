import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../SectionHeader';
import { Shield, Cloud, Code, Database, Terminal, Cpu } from 'lucide-react';

export const SkillsSection = () => {
  const categories = [
    {
      title: 'Offensive Security',
      icon: <Shield className="w-6 h-6 text-neon-cyan" />,
      skills: ['Nmap', 'Wireshark', 'Burp Suite', 'Aircrack-ng', 'Metasploit'],
      color: 'neon-cyan'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6 text-neon-purple" />,
      skills: ['CI/CD Pipelines', 'Linux Admin', 'Docker', 'Bash Automation', 'AWS/Azure'],
      color: 'neon-purple'
    },
    {
      title: 'Full-Stack Engineering',
      icon: <Code className="w-6 h-6 text-neon-green" />,
      skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'C#'],
      color: 'neon-green'
    },
    {
      title: 'Systems & Architecture',
      icon: <Cpu className="w-6 h-6 text-yellow-500" />,
      skills: ['Secure Systems Design', 'Microservices', 'REST APIs', 'Network Topologies'],
      color: 'yellow-500'
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-black/60 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-neon-cyan/5 to-black/0 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader id="02" title="Technical Arsenal" subtitle="Core competencies and stack" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 rounded-xl flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-black/40 border border-white/5 rounded-lg group-hover:border-${category.color}/30 transition-colors`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-xs font-mono font-bold bg-zinc-900/50 border border-zinc-800 text-zinc-300 rounded hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
