
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
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToLogoView = () => {
    const element = document.getElementById('brand-view');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-[1000px]">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-75 ease-out scale-110"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover opacity-30"
          alt="Modern Architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"
        style={{ transform: `translate3d(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px, 0)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full"
        style={{ transform: `translate3d(${mousePos.x * -2}px, ${mousePos.y * -2}px, 0)` }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-blue-500/20 bg-blue-500/5 backdrop-blur-md rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-400 text-[9px] uppercase tracking-[0.4em] font-black">Precise Structural Engineering</span>
        </div>
        
        <h2 className="text-6xl md:text-9xl font-syncopate font-bold mb-10 leading-[0.85] tracking-tighter">
          STRUCTURAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 drop-shadow-2xl">ARTISTRY</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl font-light mb-16 leading-relaxed tracking-tight">
          Redefining the boundaries of transparency. We craft high-performance glass envelopes that elevate the architectural skylines of modern India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="relative group px-12 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
            <span className="relative z-10">Launch Portfolio</span>
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </button>
          <button 
            onClick={scrollToLogoView}
            className="px-12 py-6 glass-panel font-bold uppercase tracking-[0.3em] text-xs hover:border-blue-500 transition-all flex items-center gap-4 group hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <span className="opacity-70 group-hover:opacity-100">360° Viewing Mode</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:rotate-180 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-4 border-t border-zinc-900 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-20 animate-[marquee_30s_linear_infinite]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-bold">SHAQUIB SHAIKH • HIGH PERFORMANCE ENVELOPES • GLASS SYSTEM v2.5 • INDIAN SKYLINES • PRECISION ENGINEERING</p>
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
