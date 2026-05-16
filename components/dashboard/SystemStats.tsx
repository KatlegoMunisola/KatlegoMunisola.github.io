import React from 'react';
import { Cpu, Wifi, Database, Shield } from 'lucide-react';

export const SystemStats = () => (
  <div className="grid grid-cols-2 gap-2 h-full">
    {[
      { label: 'CPU LOAD', value: '14%', icon: Cpu },
      { label: 'NET BAND', value: '1.2 GB/s', icon: Wifi },
      { label: 'DB UPTIME', value: '99.99%', icon: Database },
      { label: 'THREATS', value: '0 BLOCK', icon: Shield }
    ].map(stat => (
      <div key={stat.label} className="glass-panel p-2 rounded flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
        <div className="flex justify-between items-start">
          <stat.icon className="w-3 h-3 text-neon-cyan/80" />
          <div className="text-[8px] text-zinc-400 font-mono">{stat.label}</div>
        </div>
        <div className="text-sm font-bold text-white font-mono mt-1">{stat.value}</div>
      </div>
    ))}
  </div>
);
