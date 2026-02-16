
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };
    // Only track mouse if not on a touch device
    if (!window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener('mousemove', handleMove);
    }
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToLogoView = () => {
    const element = document.getElementById('brand-view');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden perspective-[1000px]">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-110"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover opacity-[0.05] dark:opacity-20"
          alt="Modern Architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 dark:from-black/90 via-transparent to-slate-50 dark:to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-black via-transparent to-slate-50 dark:to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6 md:mb-8 px-4 py-2 border border-blue-500/20 bg-blue-500/5 backdrop-blur-md rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-600 dark:text-blue-400 text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-black">Precise Structural Engineering</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-syncopate font-bold mb-6 md:mb-10 leading-[0.9] tracking-tighter text-slate-900 dark:text-white">
          STRUCTURAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 drop-shadow-2xl">ARTISTRY</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-zinc-500 text-sm md:text-xl font-light mb-12 md:mb-16 leading-relaxed tracking-tight px-4">
          Redefining the boundaries of transparency. We craft high-performance glass envelopes that elevate the architectural skylines of modern India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <button className="w-full sm:w-auto relative group px-10 md:px-12 py-5 md:py-6 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl overflow-hidden">
            <span className="relative z-10">Launch Portfolio</span>
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </button>
          <button 
            onClick={scrollToLogoView}
            className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 glass-panel font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:border-blue-500 transition-all flex items-center justify-center gap-4 group text-slate-800 dark:text-white"
          >
            <span className="opacity-70 group-hover:opacity-100">360° View</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:rotate-180 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-3 md:py-4 border-t border-slate-200 dark:border-zinc-900 bg-slate-100/40 dark:bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-10 md:gap-20 animate-[marquee_40s_linear_infinite]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-10 md:gap-20 items-center">
              <p className="text-[8px] md:text-[10px] text-slate-400 dark:text-zinc-600 uppercase tracking-[0.5em] font-bold">SHAQUIB SHAIKH • HIGH PERFORMANCE ENVELOPES • GLASS SYSTEM v2.5 • INDIAN SKYLINES • PRECISION ENGINEERING</p>
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
