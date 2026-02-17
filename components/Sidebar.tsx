
import React, { useState, useEffect } from 'react';

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Glass Facade Contractor in Bengaluru', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1' },
    { id: 'projects', label: 'Structural Glazing Services', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
    { id: 'systems', label: 'ACP Cladding Work', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { id: 'configurator', label: 'Toughened Glass Work', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
    { id: 'manifesto', label: 'About Engineering', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'contact', label: 'Contact Us', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-20 md:w-24 z-[65] hidden lg:flex flex-col items-center py-32 border-r border-slate-200 dark:border-zinc-900 bg-white/50 dark:bg-black/80 backdrop-blur-2xl group/sidebar transition-all hover:w-72">
      <div className="flex flex-col gap-8 w-full items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative flex items-center w-full px-6 group/item"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 shrink-0 border ${
              activeSection === item.id 
                ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)] scale-110' 
                : 'text-slate-400 dark:text-zinc-600 border-transparent hover:border-zinc-800 hover:text-blue-500'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
            </div>
            
            <span className={`ml-4 text-[10px] uppercase tracking-[0.25em] font-bold whitespace-nowrap opacity-0 transition-all duration-300 group-hover/sidebar:opacity-100 ${
              activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-zinc-400'
            }`}>
              {item.label}
            </span>

            {activeSection === item.id && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-[3px] bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,1)] rounded-l-full"></div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-auto pb-10 flex flex-col items-center gap-6">
         <div className="w-[1px] h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
         <p className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.8em] text-zinc-500 dark:text-zinc-700 font-black">
           SINCE 2024
         </p>
      </div>
    </div>
  );
};

export default Sidebar;
