
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    if (!window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener('mousemove', handleMove);
    }
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-[1000px]">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-110"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover opacity-10 dark:opacity-40"
          alt="Architectural Glass Facade"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 dark:from-[#050505]/95 via-transparent to-slate-50 dark:to-[#050505]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-[#050505] via-transparent to-slate-50 dark:to-[#050505]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6 md:mb-10 px-5 py-2 border border-blue-500/20 bg-blue-500/5 backdrop-blur-md rounded-full reveal interactive-shadow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-600 dark:text-blue-400 text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black">Structure Artistry & Engineering</span>
        </div>
        
        <h2 className="text-5xl sm:text-7xl md:text-9xl font-syncopate font-bold mb-8 md:mb-12 leading-[0.85] tracking-tighter text-slate-900 dark:text-white reveal">
          GLASS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 drop-shadow-[0_10px_40px_rgba(37,99,235,0.4)]">FACADE</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-zinc-400 text-base md:text-xl font-light mb-12 md:mb-16 leading-relaxed tracking-tight px-4 reveal">
          Engineering the transparency of future skylines. We deliver high-performance building envelopes that define modern Indian architecture through precision and structural mastery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 reveal">
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto relative group px-12 py-6 bg-blue-600 text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-blue-700 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.5)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </button>
          <a 
            href="#projects"
            className="w-full sm:w-auto px-12 py-6 glass-panel font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all flex items-center justify-center gap-4 group text-slate-800 dark:text-white interactive-shadow"
          >
            <span className="opacity-70 group-hover:opacity-100">View Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-3 md:py-4 border-t border-slate-200 dark:border-zinc-900 bg-slate-100/40 dark:bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-10 md:gap-20 animate-[marquee_50s_linear_infinite]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-10 md:gap-20 items-center">
              <p className="text-[8px] md:text-[10px] text-slate-400 dark:text-zinc-600 uppercase tracking-[0.5em] font-bold">STRUCTURAL ARTISTRY • UNITIZED SYSTEMS • SKYLIGHTS • CURTAIN WALLS • PRECISION ENGINEERING • INDIAN SKYLINES</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
