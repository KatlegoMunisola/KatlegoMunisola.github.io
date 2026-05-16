import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CoreDisciplinesSection } from './components/sections/CoreDisciplinesSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-muted-burgundy/20 selection:text-muted-burgundy bg-canvas font-sans text-muted-burgundy">
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <CoreDisciplinesSection />
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
