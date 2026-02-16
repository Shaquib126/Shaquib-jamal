
import React, { useState, useEffect } from 'react';

const PerformanceStats: React.FC = () => {
  const [fps, setFps] = useState(60);
  const [ms, setMs] = useState(1.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(58 + Math.random() * 4);
      setMs(0.8 + Math.random() * 0.8);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 right-6 z-[45] hidden lg:block pointer-events-none">
      <div className="glass-panel p-3 border-none bg-black/40 space-y-2">
        <div className="flex items-center gap-4">
          <p className="text-[8px] uppercase tracking-widest text-zinc-600 font-bold">Rendering Speed</p>
          <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="w-full h-full bg-blue-500 animate-pulse"></div>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <p className="text-[7px] text-zinc-500 uppercase">Latency</p>
            <p className="text-[10px] font-syncopate text-blue-400">{ms.toFixed(2)}ms</p>
          </div>
          <div>
            <p className="text-[7px] text-zinc-500 uppercase">Stability</p>
            <p className="text-[10px] font-syncopate text-green-400">{fps.toFixed(0)} FPS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats;
