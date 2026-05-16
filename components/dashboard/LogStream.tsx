import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

export const LogStream = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const logPool = useMemo(() => [
    "INBOUND: 192.168.1.104 -> TCP/443 [ESTABLISHED]",
    "THREAT_DETECTED: SQL_INJECTION_ATTEMPT from 45.22.11.9",
    "SYSTEM: CRON_JOB_REPLICATE [SUCCESS]",
    "AUTH: USER_MUNISOLA LOGIN_SUCCESS from BIUST_GW",
    "FIREWALL: DROP packet from 103.4.2.19 [SCANNING]",
    "CI/CD: DEPLOYMENT_v4.2.0 -> PRODUCTION [OK]",
    "KERNEL: ENTROPY_LEVEL_CRITICAL [OPTIMIZING]",
    "VPN: TUNNEL_OPEN [AES-256-GCM]",
    "MONITOR: CPU_TEMP 42C | MEM 4.2GB/16GB",
    "ALERT: ANOMALOUS_TRAFFIC_SPIKE_DETECTION"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [logPool[Math.floor(Math.random() * logPool.length)], ...prev].slice(0, 12));
    }, 1500);
    return () => clearInterval(interval);
  }, [logPool]);

  return (
    <div className="font-mono text-[10px] space-y-1 text-zinc-400 overflow-hidden h-full">
      <div className="flex justify-between items-center mb-2 border-b border-zinc-800 pb-1">
        <span className="text-cyan-500/70 font-bold uppercase tracking-widest text-[8px]">Real-time Threat Stream</span>
        <Activity className="w-3 h-3 text-cyan-500 animate-pulse" />
      </div>
      <AnimatePresence mode="popLayout">
        {logs.map((log, i) => (
          <motion.div 
            key={`${log}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`flex gap-2 whitespace-nowrap ${log.includes('THREAT') || log.includes('ALERT') ? 'text-neon-purple neon-glow-purple font-bold' : ''}`}
          >
            <span className="opacity-30">[{new Date().toLocaleTimeString()}]</span>
            <span>{log}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
