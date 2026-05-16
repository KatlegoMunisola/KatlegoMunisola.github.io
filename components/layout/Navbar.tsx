import React from 'react';

export const Navbar = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 bg-canvas/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Title & Subtitle */}
        <div className="flex flex-col cursor-pointer" onClick={scrollToTop}>
          <span className="font-serif font-black text-3xl tracking-tight text-muted-burgundy">KATLEGO</span>
          <span className="font-sans text-[10px] uppercase tracking-widest text-muted-burgundy font-medium mt-1">
            SOFTWARE ENGINEERING & DESIGN
          </span>
        </div>

        {/* Right Side: Links */}
        <div className="hidden md:flex gap-10 items-center font-sans text-xs uppercase tracking-widest text-muted-burgundy font-semibold">
          {['Profile', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={scrollTo(item.toLowerCase())}
              className="relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-muted-burgundy transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
