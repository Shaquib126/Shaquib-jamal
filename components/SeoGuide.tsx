
import React from 'react';

const SeoGuide: React.FC = () => {
  const roadmap = [
    {
      step: "01",
      title: "Index Verification",
      action: "Google Search Console",
      details: "Submit your Netlify URL to Google Search Console to ensure every glass system page is indexed within 24 hours."
    },
    {
      step: "02",
      title: "Local Authority",
      action: "Google Business Profile",
      details: "List 'Shaquib Shaikh Glass Systems' in Bangalore/Mumbai to appear in the 'Local Map Pack' for architecture queries."
    },
    {
      step: "03",
      title: "Semantic Schema",
      action: "JSON-LD Markup",
      details: "Adding structured data for 'LocalBusiness' and 'Product' (Glass Facades) helps Google show rich snippets like star ratings."
    },
    {
      step: "04",
      title: "Content Engineering",
      action: "Target Keywords",
      details: "Focus on technical long-tail terms like 'U-Value optimized glass Chennai' or 'Unitized curtain wall engineering India'."
    }
  ];

  return (
    <section id="visibility-guide" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-syncopate text-4xl font-bold text-white mb-8 tracking-tighter leading-tight">
              DIGITAL <br />
              <span className="text-blue-500">VISIBILITY</span> <br />
              BLUEPRINT
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 uppercase tracking-widest">
              A comprehensive guide to ensuring your architectural portfolio dominates global and local search ecosystems.
            </p>
            <div className="p-6 glass-panel border-blue-500/20 bg-blue-500/5">
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] mb-4">Pro Tip</p>
              <p className="text-zinc-400 text-xs leading-loose italic">
                "High-performance facades deserve high-performance search rankings. Structural integrity begins with technical SEO."
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmap.map((item, idx) => (
              <div key={idx} className="group p-8 border border-zinc-900 bg-zinc-900/50 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex justify-between items-start mb-10">
                  <span className="font-syncopate text-3xl font-bold text-zinc-800 group-hover:text-blue-500/20 transition-colors">
                    {item.step}
                  </span>
                  <div className="px-3 py-1 bg-zinc-800 text-[8px] text-zinc-400 font-bold uppercase tracking-widest">
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
