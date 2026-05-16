import React from 'react';
import { motion } from 'framer-motion';

export const RadarVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden glass-panel rounded">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4/5 h-4/5 rounded-full border border-neon-green/20 relative">
        <div className="absolute inset-0 w-full h-full border border-neon-green/10 rounded-full scale-75"></div>
        <div className="absolute inset-0 w-full h-full border border-neon-green/10 rounded-full scale-50"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-neon-green to-transparent origin-left -translate-y-1/2 border-glow-green shadow-[0_0_10px_#00ff9d]"
        />
      </div>
    </div>
    <div className="absolute top-2 left-2 text-[8px] font-mono text-neon-green/80 uppercase">Scanning: Botswana_Sectors</div>
    {/* Random scan dots */}
    <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-ping shadow-[0_0_8px_#00f2ff]"></div>
    <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-neon-purple rounded-full animate-ping shadow-[0_0_8px_#bc13fe]"></div>
  </div>
);
