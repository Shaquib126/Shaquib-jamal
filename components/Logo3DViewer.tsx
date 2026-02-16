
import React, { useState, useRef, useEffect } from 'react';

const Logo3DViewer: React.FC = () => {
  const [rotation, setRotation] = useState({ x: -10, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const startDragging = (x: number, y: number) => {
    setIsDragging(true);
    lastPos.current = { x, y };
  };

  const onDrag = (x: number, y: number) => {
    if (!isDragging) return;
    const deltaX = x - lastPos.current.x;
    const deltaY = y - lastPos.current.y;
    setRotation(prev => ({
      x: prev.x - deltaY * 0.4,
      y: prev.y + deltaX * 0.4
    }));
    lastPos.current = { x, y };
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => onDrag(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      // Prevent scrolling while interacting with the 3D model
      if (isDragging) e.preventDefault();
      onDrag(e.touches[0].clientX, e.touches[0].clientY);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[350px] md:h-[500px] flex items-center justify-center perspective-[1500px] cursor-grab active:cursor-grabbing bg-slate-100 dark:bg-[#030303] rounded-2xl border border-slate-200 dark:border-zinc-900 overflow-hidden relative group"
      onMouseDown={(e) => startDragging(e.clientX, e.clientY)}
      onTouchStart={(e) => startDragging(e.touches[0].clientX, e.touches[0].clientY)}
    >
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-10 pointer-events-none" style={{ 
        backgroundImage: `linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div 
        className={`relative ${!isDragging ? 'animate-idle-sway' : ''}`}
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: isDragging ? 'none' : 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="relative preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ 
                transform: `translateZ(${i * 2}px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <h2 className={`font-syncopate text-3xl md:text-5xl font-bold whitespace-nowrap tracking-tighter transition-colors duration-500 ${
                i === 7 ? 'text-slate-900 dark:text-white' : 'text-transparent'
              }`}
              style={{
                WebkitTextStroke: i === 7 ? 'none' : `1px rgba(59, 130, 246, ${0.1 + (i * 0.05)})`,
              }}>
                SHAQUIB SHAIKH
              </h2>
            </div>
          ))}

          <div 
            className="relative px-8 py-4 md:px-12 md:py-6 bg-white/40 dark:bg-blue-500/5 backdrop-blur-[2px] border border-blue-500/20 rounded-lg flex items-center justify-center shadow-xl overflow-hidden"
            style={{ 
              transform: 'translateZ(18px)',
            }}
          >
            <h2 className="font-syncopate text-3xl md:text-5xl font-bold text-slate-900 dark:text-white whitespace-nowrap tracking-tighter relative z-10">
              <span className="opacity-90 leading-none">SHAQUIB</span>{" "}
              <span className="text-blue-600 dark:text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">SHAIKH</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end pointer-events-none">
        <div className="space-y-1">
          <p className="text-[8px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-[0.3em]">Module: 3D Studio</p>
          <h4 className="text-slate-800 dark:text-white font-syncopate text-[10px] uppercase tracking-tight">Interactive Branding</h4>
        </div>
        <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-zinc-800 text-[7px] text-slate-600 dark:text-zinc-400 uppercase tracking-widest font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
          Drag to rotate
        </div>
      </div>

      <style>{`
        @keyframes idle-sway {
          0%, 100% { transform: rotateX(-10deg) rotateY(25deg); }
          50% { transform: rotateX(-5deg) rotateY(35deg); }
        }
        .animate-idle-sway {
          animation: idle-sway 10s ease-in-out infinite;
        }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default Logo3DViewer;
