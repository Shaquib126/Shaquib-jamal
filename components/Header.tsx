
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoRotation, setLogoRotation] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoHover = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -40;
    setLogoRotation({ x, y });
  };

  const resetLogo = () => setLogoRotation({ x: 0, y: 0 });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Vision', id: 'home' },
    { name: 'Systems', id: 'systems' },
    { name: 'Projects', id: 'projects' },
    { name: 'SEO Guide', id: 'visibility-guide' },
    { name: 'Consult', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[70] transition-all duration-500 ${isScrolled || isMenuOpen ? 'py-4 glass-panel shadow-2xl' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group perspective-[500px]" 
            onClick={(e) => scrollToSection(e as any, 'home')}
            onMouseMove={handleLogoHover}
            onMouseLeave={resetLogo}
          >
            <div 
              className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center font-syncopate text-xl font-bold transition-all duration-300 ease-out shadow-lg text-white group-hover:shadow-blue-500/50 group-hover:scale-110"
              style={{ 
                transform: `rotateX(${logoRotation.y}deg) rotateY(${logoRotation.x}deg) translateZ(10px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              S
            </div>
            <div>
              <h1 className="font-syncopate text-lg leading-none tracking-wider group-hover:text-blue-500 transition-colors text-slate-900 dark:text-white">SHAQUIB SHAIKH</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold group-hover:tracking-[0.3em] transition-all">Facade Engineering</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-zinc-400">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)} 
                className="hover:text-blue-500 dark:hover:text-white transition-all relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-blue-500/10 hover:shadow-inner transition-all text-slate-600 dark:text-zinc-400 hover:text-blue-500"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button 
              onClick={() => scrollToSection({ preventDefault: () => {} } as any, 'contact')}
              className="hidden sm:block px-6 py-2 border border-blue-500/50 hover:bg-blue-600 hover:text-white transition-all text-xs uppercase tracking-widest font-bold text-slate-900 dark:text-white shadow-lg hover:shadow-blue-500/40 active:scale-95"
            >
              Inquiry
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[80] hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>
      {/* ... (Mobile menu remains similar but with hover/shadow polish on links) */}
    </>
  );
};

export default Header;
