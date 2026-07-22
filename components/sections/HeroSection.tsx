import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      id="profile"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-primary-sage overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/25 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-canvas/40 blur-3xl animate-blob-delay" />
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-muted-burgundy/10 blur-3xl animate-blob-delay-2" />
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column (Typography & Bio) */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-muted-burgundy mb-8 leading-tight">
            Hello, I'm Katlego.
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-burgundy leading-relaxed max-w-xl">
            A Computer Science & Software Engineering student building full-stack systems through a security lens — with a secondary passion for graphic design. I build resilient digital infrastructure with a user-centric eye, balancing technical complexity with elegant execution.
          </p>
          <MagneticButton
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 border-sharp text-muted-burgundy hover:bg-deep-burgundy hover:text-canvas hover:border-deep-burgundy hover:shadow-[0_0_30px_-6px_var(--accent)] transition-colors duration-300 font-sans text-sm font-bold tracking-widest uppercase w-fit"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </MagneticButton>
        </motion.div>

        {/* Right Column (Profile Image Container) */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end items-center order-1 md:order-2"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-sharp bg-canvas shadow-lg ring-4 ring-accent/20">
             <img
               src="/profile.jpg"
               alt="Katlego Munisola"
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
