import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-neon-cyan/30 selection:text-neon-cyan bg-[#050505] font-sans">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-40"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#050505] pointer-events-none z-0"></div>
      
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
