
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoRotation, setLogoRotation] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    { name: 'Visualizer', id: 'configurator' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[70] transition-all duration-300 ${isScrolled || isMenuOpen ? 'py-4 glass-panel' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group perspective-[500px]" 
            onClick={(e) => scrollToSection(e as any, 'home')}
            onMouseMove={handleLogoHover}
            onMouseLeave={resetLogo}
          >
            <div 
              className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center font-syncopate text-xl font-bold transition-transform duration-200 ease-out shadow-lg"
              style={{ 
                transform: `rotateX(${logoRotation.y}deg) rotateY(${logoRotation.x}deg) translateZ(10px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              S
            </div>
            <div>
              <h1 className="font-syncopate text-lg leading-none tracking-wider group-hover:text-blue-500 transition-colors">SHAQUIB SHAIKH</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">Glass Facade Systems</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-zinc-400">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)} 
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                const aiButton = document.querySelector('[class*="fixed bottom-8 right-8"] button') as HTMLButtonElement;
                if (aiButton) aiButton.click();
              }}
              className="hidden sm:block px-6 py-2 border border-blue-500/50 hover:bg-blue-600 transition-all text-xs uppercase tracking-widest font-bold"
            >
              Consult AI
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[80]"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[65] transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative h-full flex flex-col items-center justify-center space-y-8 p-6">
          {navLinks.map((link, idx) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`font-syncopate text-2xl font-bold uppercase tracking-tighter transition-all duration-500 transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="text-zinc-700 mr-4 text-sm font-bold">{idx + 1}.</span>
              <span className="hover:text-blue-500">{link.name}</span>
            </a>
          ))}
          
          <div className={`pt-12 transform transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                const aiButton = document.querySelector('[class*="fixed bottom-8 right-8"] button') as HTMLButtonElement;
                if (aiButton) aiButton.click();
              }}
              className="px-10 py-4 bg-blue-600 text-white font-syncopate text-xs font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              LAUNCH AI CONSULTANT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
