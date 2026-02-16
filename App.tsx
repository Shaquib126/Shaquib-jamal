
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GlassConfigurator from './components/GlassConfigurator';
import ProjectShowcase from './components/ProjectShowcase';
import SeoServices from './components/SeoServices';
import GeminiAssistant from './components/GeminiAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import Logo3DViewer from './components/Logo3DViewer';
import ContactForm from './components/ContactForm';
import LoadingScreen from './components/LoadingScreen';
import PerformanceStats from './components/PerformanceStats';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <PerformanceStats />
      
      <main className="relative">
        <Hero />
        
        <section id="systems" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  tag: '01',
                  title: 'STRUCTURAL SUPERIORITY',
                  desc: 'Engineered for extreme seismic activity and peak wind pressures with ultra-thin profiles.',
                  accent: 'bg-blue-600'
                },
                {
                  tag: '02',
                  title: 'THERMAL EFFICIENCY',
                  desc: 'Advanced triple-silver Low-E coatings delivering industry-leading energy conservation.',
                  accent: 'bg-indigo-600'
                },
                {
                  tag: '03',
                  title: 'ACOUSTIC ISOLATION',
                  desc: 'Multi-laminated acoustic interlayers ensuring peace amidst dense urban soundscapes.',
                  accent: 'bg-cyan-600'
                }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-syncopate text-[10px] text-zinc-600 font-bold">{item.tag}</span>
                    <div className={`h-[1px] flex-1 ${item.accent} opacity-30 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                  <h3 className="font-syncopate text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProjectShowcase />
        <SeoServices />
        <GlassConfigurator />
        <ContactForm />

        <section id="brand-view" className="py-32 relative overflow-hidden bg-white text-black">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.6em] mb-6 text-blue-600 font-black">Identity Matrix</p>
                <h2 className="font-syncopate text-5xl md:text-7xl font-bold mb-10 uppercase leading-[0.9] tracking-tighter">
                  BUILT FOR <br/><span className="text-zinc-300">DEPTH</span>
                </h2>
                <p className="text-zinc-600 text-lg mb-12 leading-relaxed max-w-md">
                  Our identity is a structural manifesto. Every angle, shadow, and refraction is calculated to reflect our commitment to architectural precision.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 border border-zinc-100 bg-zinc-50/50">
                    <p className="text-[9px] uppercase font-bold text-zinc-400 mb-2 tracking-widest">Dimension</p>
                    <p className="font-syncopate text-lg">AXONOMETRIC</p>
                  </div>
                  <div className="p-6 border border-zinc-100 bg-zinc-50/50">
                    <p className="text-[9px] uppercase font-bold text-zinc-400 mb-2 tracking-widest">Stability</p>
                    <p className="font-syncopate text-lg">REINFORCED</p>
                  </div>
                </div>
              </div>
              
              <div className="relative p-4 bg-zinc-50 rounded-3xl border border-zinc-100 shadow-2xl">
                <Logo3DViewer />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-32 bg-black border-t border-zinc-900 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
            <div className="max-w-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-sm flex items-center justify-center font-syncopate text-2xl font-bold text-white shadow-xl">S</div>
                <h1 className="font-syncopate text-xl text-white tracking-widest">SHAQUIB SHAIKH</h1>
              </div>
              <p className="text-zinc-500 text-xs leading-loose uppercase tracking-[0.2em]">
                Engineers of transparency. Crafting the global standard for high-performance building envelopes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div className="space-y-6">
                <h4 className="font-syncopate text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase">Engineering</h4>
                <ul className="text-zinc-600 text-[10px] space-y-3 uppercase tracking-[0.2em]">
                  <li><a href="#systems" className="hover:text-white transition-colors">Calculations</a></li>
                  <li><a href="#configurator" className="hover:text-white transition-colors">Simulation</a></li>
                  <li><a href="#projects" className="hover:text-white transition-colors">Indian States</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-syncopate text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase">Contact</h4>
                <ul className="text-zinc-600 text-[10px] space-y-3 uppercase tracking-[0.2em]">
                  <li>Inquiry@Shaquib.com</li>
                  <li>+91 88816 50067</li>
                  <li>Bangalore, KA</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-zinc-700 text-[9px] uppercase tracking-[0.4em]">© 2024 SHAQUIB SHAIKH FACADE SYSTEMS. OPTIMIZED FOR 3D RENDERING.</p>
            <div className="flex gap-10 text-zinc-700 text-[9px] uppercase tracking-[0.4em]">
              <a href="#" className="hover:text-white transition-colors">System Protocol</a>
              <a href="#" className="hover:text-white transition-colors">Technical Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <GeminiAssistant />
    </div>
  );
};

export default App;
