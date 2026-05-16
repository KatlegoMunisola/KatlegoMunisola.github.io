import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SectionHeader id="06" title="Establish Connection" subtitle="Open secure channel" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 glass-panel border-neon-cyan/30 rounded-lg shadow-2xl shadow-neon-cyan/5 relative overflow-hidden group"
        >
          {/* Scanning line effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-20 -translate-y-[100%] group-hover:animate-[scan_3s_ease-in-out_infinite]"></div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tighter uppercase">Ready for deployment.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:munisolawork@gmail.com" 
              className="flex items-center justify-center gap-4 p-6 glass-card rounded hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all group/btn"
            >
              <Mail className="w-6 h-6 text-neon-cyan group-hover/btn:scale-110 group-hover/btn:rotate-3 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Secure Email</div>
                <div className="text-white font-bold break-all group-hover/btn:text-neon-cyan transition-colors">munisolawork@gmail.com</div>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/katlegomunisola/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-4 p-6 glass-card rounded hover:border-[#0077b5] hover:bg-[#0077b5]/5 transition-all group/btn"
            >
              <Linkedin className="w-6 h-6 text-[#0077b5] group-hover/btn:scale-110 group-hover/btn:-rotate-3 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Professional Network</div>
                <div className="text-white font-bold group-hover/btn:text-[#0077b5] transition-colors">katlegomunisola</div>
              </div>
            </a>
          </div>

          <div className="font-mono text-xs text-zinc-400 flex items-center justify-center gap-2 bg-black/40 py-2 rounded-full w-max mx-auto px-6 border border-white/5">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_8px_#00ff9d]"></span>
            ENCRYPTION_ACTIVE: <span className="text-neon-green font-bold">AES-256-GCM</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </section>
  );
};
