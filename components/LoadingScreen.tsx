
import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050505] z-[100] flex flex-col items-center justify-center p-6">
      <div className="mb-12 relative">
        <div className="w-20 h-20 border-2 border-blue-500/20 rounded-sm flex items-center justify-center font-syncopate text-4xl font-bold text-white animate-pulse">
          S
        </div>
        <div className="absolute -inset-4 border border-blue-500/10 rounded-sm animate-[spin_10s_linear_infinite]"></div>
      </div>
      
      <div className="w-full max-w-xs text-center space-y-4">
        <div className="flex justify-between items-end mb-1">
          <p className="font-syncopate text-[9px] tracking-[0.4em] text-blue-500 uppercase">System Initializing</p>
          <p className="font-syncopate text-[9px] text-zinc-600">{progress}%</p>
        </div>
        <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-left opacity-40">
          <p className="text-[7px] uppercase tracking-tighter text-zinc-500">Checking wind loads...</p>
          <p className="text-[7px] uppercase tracking-tighter text-zinc-500">U-Value calculation...</p>
          <p className="text-[7px] uppercase tracking-tighter text-zinc-500">3D asset rendering...</p>
          <p className="text-[7px] uppercase tracking-tighter text-zinc-500">Indian state database...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
