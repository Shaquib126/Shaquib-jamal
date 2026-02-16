
import React, { useState, useRef, useEffect } from 'react';

const Logo3DViewer: React.FC = () => {
  const [rotation, setRotation] = useState({ x: -10, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      setRotation(prev => ({
        x: prev.x - deltaY * 0.4,
        y: prev.y + deltaX * 0.4
      }));
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const transitionStyle = isDragging 
    ? 'transform 100ms linear' 
    : 'transform 1500ms cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <div 
      ref={containerRef}
      className="w-full h-[500px] flex items-center justify-center perspective-[1500px] cursor-grab active:cursor-grabbing bg-[#030303] rounded-2xl border border-zinc-900 overflow-hidden relative group"
      onMouseDown={handleMouseDown}
    >
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div 
        className={`relative ${!isDragging ? 'animate-idle-sway' : ''}`}
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: transitionStyle
        }}
      >
        <div 
          className="absolute inset-0 bg-black/80 blur-[40px] rounded-full pointer-events-none"
          style={{ 
            transform: 'translateZ(-180px) translateY(40px) scale(1.1, 0.4)',
            opacity: 0.6
          }}
        ></div>

        <div className="relative preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ 
                transform: `translateZ(${i * 2}px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <h2 className={`font-syncopate text-4xl md:text-5xl font-bold whitespace-nowrap tracking-tighter transition-colors duration-500 ${
                i === 11 ? 'text-white' : 'text-transparent'
              }`}
              style={{
                WebkitTextStroke: i === 11 ? 'none' : `1px rgba(59, 130, 246, ${0.1 + (i * 0.03)})`,
                textShadow: i === 0 ? '0 0 40px rgba(59, 130, 246, 0.2)' : 'none'
              }}>
                SHAQUIB SHAIKH
              </h2>
            </div>
          ))}

          <div 
            className="relative px-12 py-6 bg-blue-500/5 backdrop-blur-[2px] border border-white/20 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden group/text"
            style={{ 
              transform: 'translateZ(24px)',
              boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.05)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <h2 className="font-syncopate text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tighter relative z-10">
              <span className="opacity-90">SHAQUIB</span>{" "}
              <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">SHAIKH</span>
            </h2>
            <div className="absolute inset-0 border-t border-l border-white/40 rounded-lg pointer-events-none"></div>
          </div>

          <div 
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-syncopate text-[9px] tracking-[0.8em] text-zinc-500 whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ transform: 'translateZ(40px) rotateX(-5deg)' }}
          >
            FACADE ENGINEERING SYSTEMS
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end pointer-events-none">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-[0.3em]">Module: 3D Branding</p>
          <h4 className="text-white font-syncopate text-xs uppercase tracking-tight">Kinetic Glass Architecture</h4>
        </div>
        <div className="bg-zinc-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[8px] text-zinc-400 uppercase tracking-widest font-bold flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Interact to rotate
        </div>
      </div>

      <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-zinc-800"></div>
      <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-zinc-800"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-zinc-800"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-zinc-800"></div>

      <style>{`
        @keyframes idle-sway {
          0%, 100% { transform: rotateX(-10deg) rotateY(25deg); }
          50% { transform: rotateX(-5deg) rotateY(30deg); }
        }
        .animate-idle-sway {
          animation: idle-sway 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Logo3DViewer;
