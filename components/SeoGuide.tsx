
import React from 'react';

const SeoGuide: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Google Search Console",
      hindi: "Sabse pehle Search Console mein site register karein.",
      action: "Register Now",
      details: "Search Console (google.com/webmasters) par jayein aur apna domain verify karein. Isse Google ko signal milta hai ki aapki site live hai."
    },
    {
      step: "02",
      title: "Sitemap Submission",
      hindi: "Sitemap file submit karna bahut zaroori hai.",
      action: "Submit Sitemap",
      details: "Humne sitemap.xml file generate kar di hai. Ise Search Console ke 'Sitemaps' section mein submit karein taaki Google saare pages dhoondh sake."
    },
    {
      step: "03",
      title: "Google Business Profile",
      hindi: "Local customers ke liye Maps par list hona chahiye.",
      action: "Claim Profile",
      details: "Google Business par 'Shaquib Shaikh Facade Systems' ke naam se profile banayein. Isse 'Facade Engineering Bangalore' jaise searches mein aap top par aayenge."
    },
    {
      step: "04",
      title: "Backlink Architecture",
      hindi: "Aapki site ka link dusri sites par hona chahiye.",
      action: "Build Authority",
      details: "Architectural blogs aur engineering news sites par apne projects share karein. Jitne zyada quality links honge, Google aapko utna upar dikhayega."
    }
  ];

  return (
    <section id="visibility-guide" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale" 
          alt="Facade backdrop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20 reveal">
          <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">SEO Masterclass</span>
          <h2 className="font-syncopate text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
            INDEXING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">BLUEPRINT</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Aapki website ko Google Search ke pehle page par laane ke liye ye technical roadmap follow karna hoga. Humne code-level SEO complete kar diya hai, ab ye steps follow karein:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="group glass-panel p-8 md:p-10 border border-zinc-900 bg-zinc-900/40 hover:border-blue-500/50 transition-all duration-500 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-syncopate text-4xl font-bold text-zinc-800 group-hover:text-blue-500/20 transition-colors">{item.step}</span>
                <span className="px-4 py-1.5 bg-blue-600/10 text-blue-500 text-[9px] font-black uppercase tracking-widest border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.action}
                </span>
              </div>
              
              <h3 className="font-syncopate text-lg font-bold text-white mb-2 uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">{item.hindi}</p>
              
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 glass-panel bg-blue-600/5 border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
          <div className="max-w-xl">
            <h4 className="font-syncopate text-xl text-white mb-4 uppercase">Ready for Deployment?</h4>
            <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-widest">
              Humne aapke code mein robots.txt aur sitemap.xml add kar diya hai. Ise apne server par upload karte hi indexing process shuru ho jayegi.
            </p>
          </div>
          <button className="whitespace-nowrap px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-blue-500/40">
            Download SEO Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoGuide;
