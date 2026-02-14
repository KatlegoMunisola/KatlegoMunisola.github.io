
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Terminal as TerminalIcon, 
  Cpu, 
  Lock, 
  ExternalLink, 
  Linkedin, 
  Mail, 
  Download, 
  Github, 
  Award, 
  Zap,
  ChevronRight,
  MapPin,
  Calendar,
  Briefcase,
  Activity,
  Globe,
  Database,
  Search,
  Wifi,
  AlertCircle
} from 'lucide-react';
import { SectionHeader } from './components/SectionHeader';
import { Terminal } from './components/Terminal';
import { PROJECTS, TECHNICAL_SKILLS, EXPERIENCES, CERTIFICATIONS, SOFT_SKILLS } from './constants.tsx';

// --- Sub-components for SOC Dashboard ---

const LogStream = () => {
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
    <div className="font-mono text-[10px] space-y-1 text-zinc-500 overflow-hidden h-full">
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
            className={`flex gap-2 whitespace-nowrap ${log.includes('THREAT') || log.includes('ALERT') ? 'text-red-400/80' : ''}`}
          >
            <span className="opacity-30">[{new Date().toLocaleTimeString()}]</span>
            <span>{log}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const SystemStats = () => (
  <div className="grid grid-cols-2 gap-2 h-full">
    {[
      { label: 'CPU LOAD', value: '14%', icon: Cpu },
      { label: 'NET BAND', value: '1.2 GB/s', icon: Wifi },
      { label: 'DB UPTIME', value: '99.99%', icon: Database },
      { label: 'THREATS', value: '0 BLOCK', icon: Shield }
    ].map(stat => (
      <div key={stat.label} className="bg-black/40 border border-zinc-800 p-2 rounded flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <stat.icon className="w-3 h-3 text-cyan-500/50" />
          <div className="text-[8px] text-zinc-600 font-mono">{stat.label}</div>
        </div>
        <div className="text-sm font-bold text-white font-mono mt-1">{stat.value}</div>
      </div>
    ))}
  </div>
);

const RadarVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black/20 rounded border border-zinc-800/50">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4/5 h-4/5 rounded-full border border-cyan-500/10 relative">
        <div className="absolute inset-0 w-full h-full border border-cyan-500/5 rounded-full scale-75"></div>
        <div className="absolute inset-0 w-full h-full border border-cyan-500/5 rounded-full scale-50"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500/40 to-transparent origin-left -translate-y-1/2"
        />
      </div>
    </div>
    <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-600 uppercase">Scanning: Botswana_Sectors</div>
    {/* Random scan dots */}
    <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
    <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 selection:text-cyan-400 bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-40"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none z-0"></div>
      
      {/* Progress Bar Top */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-zinc-900 z-50">
        <motion.div 
          className="h-full bg-cyan-500 shadow-[0_0_10px_#00f2ff]" 
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
        />
      </div>

      {/* Modern Sleek Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 md:px-12 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <Shield className="w-6 h-6 text-cyan-500 group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full animate-pulse"></div>
              </div>
              <span className="font-mono font-bold text-lg tracking-tighter text-white">KATLEGO<span className="text-cyan-500">.</span>SYS</span>
            </div>
            
            <div className="hidden lg:flex gap-4 px-4 py-1.5 bg-black/40 border border-zinc-800 rounded-full items-center">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">UPTIME: {uptime}s</span>
              </div>
              <div className="w-[1px] h-3 bg-zinc-800"></div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase">SEC_LVL: 4</div>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-cyan-400 transition-colors relative group py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#" 
              className="px-5 py-2 bg-white text-black font-bold rounded-sm hover:bg-cyan-500 transition-all text-[9px]"
            >
              DOWNLOAD_ARCHIVE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - The SOC Dashboard */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-12 gap-4 h-[80vh] min-h-[600px]">
          
          {/* Main Content Area (Identity) - Spans 7 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 bg-zinc-900/20 border border-zinc-800 rounded p-8 md:p-12 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe className="w-64 h-64 text-cyan-500" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded mb-8">
                <TerminalIcon className="w-3 h-3 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">System Identity Verified</span>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tighter">
                CYBERSECURITY <br /> 
                <span className="text-zinc-600">&</span> DEVOPS <br />
                <span className="text-cyan-400 underline decoration-cyan-500/30">ENGINEER</span>
              </h1>
              <p className="text-lg md:text-xl font-mono text-zinc-500 mb-10 max-w-xl">
                I am Katlego Munisola. I design and defend digital architectures with a focus on reliability, automation, and threat intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white transition-all">
                  INITIALIZE EXPLORATION <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-zinc-800 text-zinc-400 font-bold uppercase tracking-widest text-xs hover:text-white hover:border-zinc-400 transition-all">
                  VIEW_GITHUB
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Area (Dashboard Components) - Spans 5 columns */}
          <div className="col-span-12 lg:col-span-5 grid grid-rows-3 gap-4">
            
            {/* Top Row: Threat Logs */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="row-span-2 bg-zinc-900/30 border border-zinc-800 rounded p-4 relative overflow-hidden"
            >
              <LogStream />
              <div className="absolute bottom-0 right-0 p-4 pointer-events-none opacity-20">
                <AlertCircle className="w-16 h-16 text-red-500" />
              </div>
            </motion.div>

            {/* Bottom Row: Divided into Radar and Stats */}
            <div className="row-span-1 grid grid-cols-2 gap-4">
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-full"
               >
                 <RadarVisual />
               </motion.div>
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="h-full"
               >
                 <SystemStats />
               </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-12 hidden xl:block">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-cyan-500' : 'bg-zinc-800'}`}></div>)}
            </div>
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Signal_Strength: Optimal</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-6xl mx-auto relative z-10">
        <SectionHeader id="01" title="Core Profile" subtitle="Professional identity and focus" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            className="md:col-span-2 text-zinc-400 text-lg leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p>
              I am a results-driven Computer Science & Software Engineering student at BIUST, passionate about the intersection of 
              <span className="text-cyan-400 font-bold"> Security Operations</span> and <span className="text-purple-400 font-bold">DevOps Culture</span>. 
              My approach focuses on creating robust, automated systems that prioritize reliability without sacrificing performance.
            </p>
            <p>
              With practical experience in CI/CD pipeline optimization and incident management, I thrive in complex environments where 
              security is not just a feature, but a foundational requirement. I leverage my leadership roles to foster collaborative 
              growth and solve high-stakes technical challenges.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded">
                    <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Location</div>
                    <div className="text-white font-bold flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-500" /> Botswana
                    </div>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded">
                    <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Graduating</div>
                    <div className="text-white font-bold flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-500" /> 2026
                    </div>
                </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Lock className="w-12 h-12 text-cyan-500" />
              </div>
              <h4 className="font-mono text-cyan-500 uppercase text-xs mb-4 tracking-[0.2em]">Soft Skills</h4>
              <ul className="space-y-2">
                {SOFT_SKILLS.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Zap className="w-3 h-3 text-yellow-500" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg">
                <h4 className="font-mono text-purple-500 uppercase text-xs mb-4 tracking-[0.2em]">Leadership Highlights</h4>
                <div className="space-y-3">
                    <div className="text-xs text-zinc-400 border-l border-zinc-800 pl-3 py-1">Class Rep (2020-24)</div>
                    <div className="text-xs text-zinc-400 border-l border-zinc-800 pl-3 py-1">GDSC Vice Lead</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black/40 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeader id="02" title="Technical Arsenal" subtitle="Core competencies and stack" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg group hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex justify-between items-end mb-4">
                  <span className="text-white font-mono font-bold">{skill.name}</span>
                  <span className="text-cyan-500 text-xs font-mono">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">
        <SectionHeader id="03" title="Service History" subtitle="Professional and leadership timeline" />
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative pl-8 border-l-2 border-zinc-800 hover:border-cyan-500/50 transition-colors pb-8"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-cyan-500"></div>
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{exp.role}</h3>
                  <p className="text-cyan-500 font-mono text-sm">{exp.company}</p>
                </div>
                <div className="text-zinc-500 font-mono text-xs text-right">
                  <p>{exp.period}</p>
                  <p className="uppercase tracking-widest">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-zinc-400 text-sm flex gap-3">
                    <span className="text-cyan-500/50 mt-1 flex-shrink-0 font-mono text-[10px]">[OK]</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-black/60">
        <div className="max-w-6xl mx-auto">
          <SectionHeader id="04" title="Strategic Assets" subtitle="Featured security and devops projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 flex flex-col h-full relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-black/40 rounded">
                    <TerminalIcon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-1 rounded border ${
                    project.status === 'operational' ? 'border-green-500/30 text-green-500' : 'border-yellow-500/30 text-yellow-500'
                  } uppercase tracking-widest`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-6 max-w-6xl mx-auto">
        <SectionHeader id="05" title="Accreditations" subtitle="Verified skills and certifications" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-center gap-4 p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Award className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase">{cert.name}</h4>
                <p className="text-zinc-500 text-xs font-mono">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-t from-cyan-900/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader id="06" title="Establish Connection" subtitle="Open secure channel" />
          
          <div className="mt-12 p-8 md:p-12 bg-black/80 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/10 relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tighter uppercase">Ready for deployment.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a 
                href="mailto:munisolawork@gmail.com" 
                className="flex items-center justify-center gap-4 p-6 border border-zinc-800 rounded hover:border-cyan-500 hover:bg-cyan-500/5 transition-all group"
              >
                <Mail className="w-6 h-6 text-cyan-500 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Secure Email</div>
                  <div className="text-white font-bold break-all">munisolawork@gmail.com</div>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/katlegomunisola/" 
                target="_blank" 
                className="flex items-center justify-center gap-4 p-6 border border-zinc-800 rounded hover:border-blue-500 hover:bg-blue-500/5 transition-all group"
              >
                <Linkedin className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Professional Network</div>
                  <div className="text-white font-bold">katlegomunisola</div>
                </div>
              </a>
            </div>

            <div className="font-mono text-xs text-zinc-500 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              ENCRYPTION_ACTIVE: AES-256-GCM
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-500" />
            <span className="font-mono text-sm text-zinc-400 font-bold tracking-tighter">KM_SYSTEMS &copy; 2024</span>
          </div>
          <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
            Built with React + Tailwind + Resiliency
          </div>
          <div className="flex gap-4">
            <Github className="w-4 h-4 text-zinc-600 hover:text-white transition-colors cursor-pointer" />
            <Linkedin className="w-4 h-4 text-zinc-600 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
