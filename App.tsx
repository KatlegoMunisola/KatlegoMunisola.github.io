import React from 'react';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Sidebar } from './components/layout/Sidebar';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy font-sans text-slate">
      <ScrollProgress />
      <Sidebar />

      <div className="lg:pl-[380px]">
        <main className="px-8 md:px-12 lg:px-24 max-w-3xl">
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
