import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="profile" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-primary-sage">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column (Typography & Bio) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-muted-burgundy mb-8 leading-tight">
            Hello, I'm Katlego.
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-burgundy leading-relaxed max-w-xl">
            A full-stack software engineer with a core focus on secure system architecture and a professional passion for graphic design. I build resilient digital infrastructure with a user-centric eye, balancing technical complexity with elegant execution.
          </p>
        </motion.div>

        {/* Right Column (Profile Image Container) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end items-center order-1 md:order-2"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-sharp bg-canvas shadow-lg flex items-center justify-center">
             <span className="text-muted-burgundy font-sans text-sm tracking-widest uppercase">Profile_Image</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
