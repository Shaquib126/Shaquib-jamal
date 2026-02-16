
import React, { useState } from 'react';
import { GlassSpec } from '../types';

const SPECS: GlassSpec[] = [
  { 
    id: 'low-e', 
    name: 'UltraClear Low-E', 
    uValue: 1.1, 
    shgc: 0.28, 
    vlt: 72, 
    color: 'rgba(200, 230, 255, 0.3)', 
    description: 'Superior thermal insulation for extreme climates with high clarity.' 
  },
  { 
    id: 'tinted', 
    name: 'Nightshade Gray', 
    uValue: 1.4, 
    shgc: 0.18, 
    vlt: 45, 
    color: 'rgba(50, 50, 60, 0.6)', 
    description: 'Optimal glare control and heat rejection for modern skyscrapers.' 
  },
  { 
    id: 'high-trans', 
    name: 'Diamante Optic', 
    uValue: 1.5, 
    shgc: 0.45, 
    vlt: 91, 
    color: 'rgba(255, 255, 255, 0.1)', 
    description: 'Maximum visible light transmission for minimalist structural facades.' 
  },
  { 
    id: 'solar-bronze', 
    name: 'SolarControl Bronze', 
    uValue: 1.3, 
    shgc: 0.22, 
    vlt: 35, 
    color: 'rgba(139, 69, 19, 0.4)', 
    description: 'Aesthetically warm hue combined with extreme solar energy rejection.' 
  },
  { 
    id: 'acoustic-pro', 
    name: 'Acoustic Pro Laminated', 
    uValue: 1.2, 
    shgc: 0.35, 
    vlt: 82, 
    color: 'rgba(230, 245, 255, 0.2)', 
    description: 'Multi-layer lamination designed for peak decibel reduction in urban centers.' 
  },
  { 
    id: 'obsidian', 
    name: 'Obsidian Reflective', 
    uValue: 1.6, 
    shgc: 0.15, 
    vlt: 12, 
    color: 'rgba(20, 20, 25, 0.85)', 
    description: 'High-privacy reflective coating with the lowest thermal gain in our collection.' 
  },
];

const GlassConfigurator: React.FC = () => {
  const [selected, setSelected] = useState<GlassSpec>(SPECS[0]);
  const [rotation, setRotation] = useState(25);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 40 - 20;
    setRotation(x + 25);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 40 - 20;
    setRotation(x + 25);
  };

  return (
    <section id="configurator" className="py-20 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-transparent reveal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h3 className="font-syncopate text-2xl md:text-3xl font-bold mb-8 md:mb-12 self-start tracking-tighter text-slate-900 dark:text-white leading-none">SYSTEM VISUALIZER</h3>
            
            <div className="relative w-full aspect-square max-w-[450px] flex items-center justify-center p-4 group">
              <div 
                className="w-full h-full max-w-[280px] max-h-[350px] relative preserve-3d transition-transform duration-700 ease-out cursor-pointer"
                style={{ transform: `rotateY(${rotation}deg) rotateX(10deg)` }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* Glass Pane */}
                <div 
                  className="absolute inset-0 glass-panel shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-700 rounded-lg overflow-hidden group-hover:shadow-[0_0_80px_rgba(59,130,246,0.3)] group-hover:scale-105" 
                  style={{ backgroundColor: selected.color }}
                >
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent)]"></div>
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] animate-[shine_3s_infinite]"></div>
                </div>
                {/* Edges */}
                <div className="absolute right-0 top-0 w-3 h-full bg-slate-300 dark:bg-zinc-800 origin-right transform rotateY(90deg) shadow-inner"></div>
                <div className="absolute left-0 bottom-0 h-3 w-full bg-slate-400 dark:bg-zinc-700 origin-bottom transform rotateX(90deg) shadow-inner"></div>
              </div>
              
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar p-1">
              {SPECS.map(spec => (
                <button 
                  key={spec.id}
                  onClick={() => setSelected(spec)}
                  className={`p-4 text-left transition-all duration-300 border rounded-sm group interactive-shadow ${
                    selected.id === spec.id 
                    ? 'border-blue-500 bg-blue-500/10 shadow-[0_10px_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20' 
                    : 'border-slate-200 dark:border-zinc-800 hover:border-blue-500/50 bg-white/50 dark:bg-transparent'
                  }`}
                >
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-syncopate text-[9px] md:text-[10px] tracking-widest text-slate-800 dark:text-zinc-300 leading-tight uppercase group-hover:text-blue-500">{spec.name}</span>
                    <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300 ${selected.id === spec.id ? 'bg-blue-500 scale-125' : 'bg-slate-300 dark:bg-zinc-700'}`}></span>
                  </div>
                </button>
              ))}
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-24 h-24 fill-blue-500"><path d="M0 0h100v100H0z"/></svg>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8 text-center md:text-left relative z-10">
                <div>
                  <p className="text-[9px] text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1 font-bold">U-Value</p>
                  <p className="text-xl md:text-2xl font-syncopate text-slate-900 dark:text-white transition-all hover:text-blue-500">{selected.uValue}</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1 font-bold">SHGC</p>
                  <p className="text-xl md:text-2xl font-syncopate text-slate-900 dark:text-white transition-all hover:text-blue-500">{selected.shgc}</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1 font-bold">VLT</p>
                  <p className="text-xl md:text-2xl font-syncopate text-slate-900 dark:text-white transition-all hover:text-blue-500">{selected.vlt}%</p>
                </div>
              </div>
              <p className="text-slate-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-slate-200 dark:border-zinc-800 pt-6 relative z-10">
                {selected.description}
              </p>
              <button className="mt-8 w-full py-4 bg-slate-900 dark:bg-transparent border border-slate-800 dark:border-zinc-700 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 text-white dark:text-zinc-400 text-[9px] uppercase tracking-[0.3em] font-bold transition-all shadow-lg active:scale-95 relative z-10">
                Download Technical Datasheet
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default GlassConfigurator;
