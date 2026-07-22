import React from 'react';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CoreDisciplinesSection } from './components/sections/CoreDisciplinesSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas font-sans text-muted-burgundy">
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CoreDisciplinesSection />
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
