
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

  return (
    <section id="configurator" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h3 className="font-syncopate text-3xl font-bold mb-12 self-start tracking-tighter">SYSTEM VISUALIZER</h3>
            <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
              <div 
                className="w-80 h-96 relative preserve-3d transition-transform duration-1000 ease-out"
                style={{ transform: `rotateY(${rotation}deg) rotateX(10deg)` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 40 - 20;
                  setRotation(x + 25);
                }}
              >
                <div 
                  className="absolute inset-0 glass-panel shadow-[0_0_50px_rgba(0,100,255,0.2)] transition-colors duration-500" 
                  style={{ backgroundColor: selected.color }}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent)]"></div>
                </div>
                <div className="absolute right-0 top-0 w-4 h-full bg-zinc-800 origin-right transform rotateY(90deg)"></div>
                <div className="absolute left-0 bottom-0 h-4 w-full bg-zinc-700 origin-bottom transform rotateX(90deg)"></div>
              </div>
              <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl opacity-50"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-3 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {SPECS.map(spec => (
                <button 
                  key={spec.id}
                  onClick={() => setSelected(spec)}
                  className={`w-full p-5 text-left transition-all duration-300 border ${selected.id === spec.id ? 'border-blue-500 bg-blue-500/10' : 'border-zinc-800 hover:border-zinc-700'}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-syncopate text-sm tracking-widest">{spec.name}</span>
                    <span className={`w-2 h-2 rounded-full ${selected.id === spec.id ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-zinc-700'}`}></span>
                  </div>
                </button>
              ))}
            </div>

            <div className="glass-panel p-8">
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">U-Value</p>
                  <p className="text-2xl font-syncopate text-white">{selected.uValue}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">SHGC</p>
                  <p className="text-2xl font-syncopate text-white">{selected.shgc}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">VLT</p>
                  <p className="text-2xl font-syncopate text-white">{selected.vlt}%</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed border-t border-zinc-800 pt-6">
                {selected.description}
              </p>
              <button className="mt-8 w-full py-4 border border-zinc-700 hover:border-blue-500 text-[10px] uppercase tracking-[0.3em] font-bold transition-all">
                Download Technical Data Sheet
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
};

export default GlassConfigurator;
