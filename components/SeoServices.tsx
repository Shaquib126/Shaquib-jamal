
import React from 'react';

const SeoServices: React.FC = () => {
  const services = [
    {
      title: "Technical Auditing",
      desc: "Deep structural analysis of site architecture, ensuring Google-bot accessibility and rapid rendering speeds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Keyword Architecture",
      desc: "Strategic mapping of high-intent search terms to build a foundation for sustainable organic traffic growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    },
    {
      title: "Authority Building",
      desc: "Earning high-quality backlinks from architectural and engineering journals to solidify domain integrity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" />
        </svg>
      )
    },
    {
      title: "Performance Metrics",
      desc: "Data-driven insights and transparent reporting on search visibility, CTR, and conversion conversion paths.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="seo" className="py-24 bg-[#080808] border-t border-zinc-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Facade backdrop"
        />
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Digital Engineering</span>
          <h2 className="font-syncopate text-4xl md:text-6xl font-bold text-white mb-8">
            SEARCH <br />
            <span className="text-zinc-500 italic">ARCHITECTURE</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            In the digital skyline, visibility is everything. We apply structural engineering principles to Search Engine Optimization, ensuring your brand stands taller than the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-8 hover:border-blue-500/50 transition-all duration-500 group"
            >
              <div className="mb-6 p-3 inline-block bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="font-syncopate text-sm font-bold text-white mb-4 tracking-wider uppercase">
                {service.title}
              </h4>
              <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-panel p-1 border-none bg-gradient-to-r from-blue-600/20 via-zinc-800 to-blue-600/20">
          <div className="bg-[#080808] p-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-syncopate text-xl text-white mb-2 uppercase">INITIATE TECHNICAL AUDIT</h3>
              <p className="text-zinc-500 text-sm uppercase tracking-widest text-[10px]">Analyze your digital structural integrity in 24 hours.</p>
            </div>
            <button className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all">
              Request Blueprint
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
