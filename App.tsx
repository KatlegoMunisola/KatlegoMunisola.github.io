import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/layout/Footer';
import { ThemeWipe } from './components/ui/ThemeWipe';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem('katlego-portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('katlego-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (isWiping) return;
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme);
      return;
    }
    setIsWiping(true);
    window.setTimeout(() => setTheme(nextTheme), 900);
    window.setTimeout(() => setIsWiping(false), 1840);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-6xl px-6 md:px-10">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </main>
      {isWiping && <ThemeWipe />}
    </div>
  );
};

export default App;
