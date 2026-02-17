
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import GlassConfigurator from './components/GlassConfigurator';
import ProjectShowcase from './components/ProjectShowcase';
import SeoServices from './components/SeoServices';
import SeoGuide from './components/SeoGuide';
import GeminiAssistant from './components/GeminiAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import ContactForm from './components/ContactForm';
import LoadingScreen from './components/LoadingScreen';
import PerformanceStats from './components/PerformanceStats';
import Logo3DViewer from './components/Logo3DViewer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 transition-colors duration-500">
      <Header />
      <Sidebar />
      <PerformanceStats />
      
      <main className="relative lg:pl-24 transition-all duration-500">
        <Hero />
        
        <section id="systems" className="py-20 md:py-32 relative overflow-hidden border-b border-slate-200 dark:border-zinc-900 reveal">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Clear View Detailed Facade Image */}
            <img 
              src="https://images.unsplash.com/photo-1524312644410-b2512ee339e0?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Detailed Crystal Glass Facade"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-12">
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.4em] mb-2">ACP Cladding & Technical Insight</p>
              <h3 className="text-3xl font-syncopate font-bold uppercase tracking-tighter">Advanced Enclosure Systems</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
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
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <span className="font-syncopate text-[10px] text-slate-400 dark:text-zinc-600 font-bold">{item.tag}</span>
                    <div className={`h-[1px] flex-1 ${item.accent} opacity-10 dark:opacity-30 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                  <h3 className="font-syncopate text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 md:mb-6 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xs font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="reveal"><ProjectShowcase /></div>
        
        <div className="reveal"><SeoServices /></div>
        <div className="reveal"><SeoGuide /></div>
        
        <section id="manifesto" className="relative py-32 md:py-48 overflow-hidden reveal">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-30 dark:opacity-50"
              alt="Modern Business District Skyline"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#050505] via-transparent to-slate-50/80 dark:to-[#050505]/80"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="mb-20 max-w-4xl mx-auto">
              <Logo3DViewer />
            </div>
            
            <p className="text-[10px] uppercase tracking-[0.6em] mb-6 text-blue-600 font-black">About Engineering & Architectural Excellence</p>
            <h2 className="font-syncopate text-4xl md:text-7xl font-bold mb-10 uppercase leading-[0.9] tracking-tighter text-slate-900 dark:text-white">
              CRAFTING THE <br/><span className="text-blue-600 dark:text-blue-500">INVISIBLE</span> BORDER
            </h2>
            <p className="text-slate-800 dark:text-zinc-200 text-base md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              Our facades are more than just glass and aluminum; they are high-performance skins that breathe, protect, and redefine the human experience within the modern skyline.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
              <div className="glass-panel px-8 py-4 rounded-sm border-blue-500/30 interactive-shadow bg-white/10">
                <p className="font-syncopate text-sm md:text-lg text-slate-900 dark:text-white">CRYSTAL PRECISION</p>
              </div>
              <div className="glass-panel px-8 py-4 rounded-sm border-blue-500/30 interactive-shadow bg-white/10">
                <p className="font-syncopate text-sm md:text-lg text-slate-900 dark:text-white">EXTREME DURABILITY</p>
              </div>
              <div className="glass-panel px-8 py-4 rounded-sm border-blue-500/30 interactive-shadow bg-white/10">
                <p className="font-syncopate text-sm md:text-lg text-slate-900 dark:text-white">SOLAR EFFICIENCY</p>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal"><GlassConfigurator /></div>
        <div className="reveal"><ContactForm /></div>
      </main>

      <footer className="py-20 md:py-32 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-900 relative transition-colors duration-500 lg:pl-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20 mb-16 md:mb-24">
            <div className="max-w-sm">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-sm flex items-center justify-center font-syncopate text-xl md:text-2xl font-bold text-white shadow-xl">S</div>
                <h1 className="font-syncopate text-lg md:text-xl text-slate-900 dark:text-white tracking-widest leading-none">SHAQUIB SHAIKH</h1>
              </div>
              <p className="text-slate-500 dark:text-zinc-500 text-[10px] md:text-xs leading-loose uppercase tracking-[0.2em]">
                Engineers of transparency. Crafting the global standard for high-performance building envelopes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 md:gap-16 w-full md:w-auto">
              <div className="space-y-4 md:space-y-6">
                <h4 className="font-syncopate text-[9px] md:text-[10px] font-bold text-blue-600 dark:text-blue-500 tracking-[0.3em] uppercase">Engineering</h4>
                <ul className="text-slate-500 dark:text-zinc-600 text-[9px] md:text-[10px] space-y-3 uppercase tracking-[0.2em]">
                  <li><a href="#systems" className="hover:text-blue-600 dark:hover:text-white transition-colors">Calculations</a></li>
                  <li><a href="#configurator" className="hover:text-blue-600 dark:hover:text-white transition-colors">Simulation</a></li>
                  <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">Indian States</a></li>
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h4 className="font-syncopate text-[9px] md:text-[10px] font-bold text-blue-600 dark:text-blue-500 tracking-[0.3em] uppercase">Contact</h4>
                <ul className="text-slate-500 dark:text-zinc-600 text-[9px] md:text-[10px] space-y-3 uppercase tracking-[0.2em]">
                  <li>Inquiry@Shaquib.com</li>
                  <li>+91 88816 50067</li>
                  <li>Bangalore, KA</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 md:pt-12 border-t border-slate-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-slate-400 dark:text-zinc-700 text-[8px] md:text-[9px] uppercase tracking-[0.4em]">© 2024 SHAQUIB SHAIKH FACADE SYSTEMS. OPTIMIZED FOR RENDERING PERFORMANCE.</p>
            <div className="flex gap-6 md:gap-10 text-slate-400 dark:text-zinc-700 text-[8px] md:text-[9px] uppercase tracking-[0.4em]">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">System Protocol</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Technical Privacy</a>
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
