import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => (
  <div className="min-h-screen bg-paper text-ink">
    <Sidebar />
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </main>
  </div>
);

export default App;
