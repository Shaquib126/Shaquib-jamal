
import React from 'react';

const SeoGuide: React.FC = () => {
  const roadmap = [
    {
      step: "01",
      title: "Index Verification",
      action: "Search Console",
      details: "Apni website ko Google Search Console mein register karein. Sitemap file submit karne se Google aapke saare glass facade pages ko turant crawl karega."
    },
    {
      step: "02",
      title: "Local Authority",
      action: "Google Maps",
      details: "Shaquib Shaikh Facade Systems ko 'Google My Business' par list karein. Isse local architectural projects ke liye aapka rank top par aayega."
    },
    {
      step: "03",
      title: "Schema Integration",
      action: "Technical SEO",
      details: "Humne code mein JSON-LD architectural schema add kiya hai. Isse Google ko aapke systems (U-Value, SHGC) ki technical jaankari milti hai."
    },
    {
      step: "04",
      title: "Content Dominance",
      action: "Keywords",
      details: "Targeted keywords jaise 'Unitized Facade Bangalore' ya 'Glass engineering India' ka use karke organic search visibility badhayein."
    }
  ];

  return (
    <section id="visibility-guide" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale" 
          alt="Architectural Pattern"
        />
        <div className="absolute inset-0 bg-zinc-950/80"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 reveal">
            <h2 className="font-syncopate text-4xl font-bold text-white mb-8 tracking-tighter leading-tight">
              GOOGLE <br />
              <span className="text-blue-500">RANKING</span> <br />
              PROTOCOL
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 uppercase tracking-widest">
              Apni website ko Google Search me laane ke liye ye steps follow karein. Humne structural SEO ko aapke code base mein inject kar diya hai.
            </p>
            <div className="p-6 glass-panel border-blue-500/20 bg-blue-500/5 interactive-shadow">
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] mb-4">Indexing Status</p>
              <p className="text-zinc-400 text-xs leading-loose italic">
                "Google visibility ke liye hum sitemap.xml aur robots.txt ko optimize kar rahe hain taaki architectural firms aapko turant dhoondh sakein."
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmap.map((item, idx) => (
              <div key={idx} className="group p-8 border border-zinc-900 bg-zinc-900/50 hover:border-blue-500/30 transition-all duration-500 glass-panel reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="flex justify-between items-start mb-10">
                  <span className="font-syncopate text-3xl font-bold text-zinc-800 group-hover:text-blue-500 transition-colors">
                    {item.step}
                  </span>
                  <div className="px-3 py-1 bg-zinc-800 text-[8px] text-zinc-400 font-bold uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.action}
                  </div>
                </div>
                <h4 className="font-syncopate text-sm font-bold text-white mb-4 uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoGuide;
