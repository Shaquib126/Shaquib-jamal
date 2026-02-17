
import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Cyber City Alpha', 
    location: 'Gurugram, Haryana', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000', 
    category: 'Unitized Facade',
    description: 'A cutting-edge commercial hub featuring high-performance unitized curtain walls with solar-control glass to mitigate the extreme heat of Northern India. The system includes integrated LED lighting profiles for a stunning night-time aesthetic.'
  },
  { 
    id: 2, 
    title: 'Marine Drive Pavilion', 
    location: 'Mumbai, Maharashtra', 
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000', 
    category: 'Structural Glazing',
    description: 'Situated on the iconic coast, this project utilizes specialized marine-grade structural glazing to withstand high salinity and wind pressure. The frameless design offers unobstructed views of the Arabian Sea.'
  },
  { 
    id: 3, 
    title: 'IT Corridor Hub', 
    location: 'Hyderabad, Telangana', 
    image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80&w=1000', 
    category: 'Spider Fitting',
    description: 'An architectural marvel showcasing point-fixed spider glazing for a massive four-story atrium. This system provides maximum transparency while maintaining structural integrity against seismic activity.'
  },
  { 
    id: 4, 
    title: 'Tech Park Skyline', 
    location: 'Bangalore, Karnataka', 
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000', 
    category: 'Unitized Facade',
    description: 'Engineered for the Silicon Valley of India, this tech park utilizes double-glazed unitized panels with built-in thermal breaks, significantly reducing the building\'s carbon footprint and cooling costs.'
  },
  { 
    id: 5, 
    title: 'Grand Atrium', 
    location: 'Chennai, Tamil Nadu', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000', 
    category: 'Skylight Systems',
    description: 'A complex vaulted skylight system using laminated safety glass with ceramic frit patterns to optimize natural daylighting while preventing glare in the tropical climate of Chennai.'
  },
  { 
    id: 6, 
    title: 'Emerald Plaza', 
    location: 'Kolkata, West Bengal', 
    image: 'https://images.unsplash.com/photo-1454165833222-d1d7d73ca09f?auto=format&fit=crop&q=80&w=1000', 
    category: 'Structural Glazing',
    description: 'A prestigious business tower in the East, utilizing semi-unitized structural glazing. The project emphasizes acoustic isolation to ensure a quiet, productive environment amidst the bustling city.'
  },
];

const CATEGORIES = ['All', 'Unitized Facade', 'Structural Glazing', 'Spider Fitting', 'Skylight Systems'];

const ProjectShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    if (sectionRef.current) {
      const headerOffset = 80;
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  // Close modal on escape key and body overflow management
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-zinc-950 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="reveal">
            <h2 className="font-syncopate text-4xl md:text-5xl font-bold text-white mb-4 uppercase leading-none tracking-tighter">INDIAN SKYLINES</h2>
            <p className="text-zinc-500 max-w-lg">Transforming major Indian business districts through precision-engineered facade systems.</p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 reveal">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`group relative px-4 md:px-6 py-2 md:py-2.5 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 border rounded-sm overflow-hidden flex items-center gap-2 md:gap-3 ${
                  activeFilter === cat 
                  ? 'border-blue-500 bg-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] scale-105 md:scale-110 z-10' 
                  : 'border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white bg-zinc-900/50 hover:scale-110 hover:shadow-xl active:scale-95'
                }`}
              >
                <span className="relative z-10">{cat.replace(' Systems', '').replace(' Facade', '')}</span>
                
                {activeFilter === cat ? (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                ) : (
                  <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-blue-500/50 transition-colors"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-500">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className={`group relative overflow-hidden aspect-[16/11] cursor-pointer bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.25)] hover:z-10 hover:border-blue-500/50 reveal`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-[1px] bg-blue-500 group-hover:w-12 transition-all duration-500"></div>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold block">{project.category}</span>
                </div>
                <h3 className="font-syncopate text-lg md:text-xl font-bold text-white mb-1 uppercase tracking-tighter shadow-black drop-shadow-lg">{project.title}</h3>
                <p className="text-zinc-400 text-[8px] md:text-[10px] uppercase tracking-widest">{project.location}</p>
              </div>

              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md"></div>
          
          <div 
            className="relative w-full h-full md:h-auto max-w-6xl glass-panel bg-zinc-900 border-zinc-800 md:rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content: Image Section */}
            <div className="w-full lg:w-3/5 h-[40vh] lg:h-auto overflow-hidden relative flex-shrink-0">
              <img 
                src={selectedProject.image} 
                className="w-full h-full object-cover" 
                alt={selectedProject.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Modal Content: Info Section */}
            <div className="w-full lg:w-2/5 p-6 md:p-12 flex flex-col justify-center overflow-y-auto max-h-[60vh] lg:max-h-full">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-2 md:mb-4">
                    <span className="w-6 md:w-8 h-[1px] bg-blue-500"></span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-blue-500 font-black">{selectedProject.category}</span>
                  </div>
                  <h2 className="font-syncopate text-2xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tighter mb-1 md:mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                    {selectedProject.location}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-zinc-800"></div>

                <div className="space-y-4">
                  <h4 className="font-syncopate text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Technical Brief</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                    {selectedProject.description || "Detailed technical specifications and structural analysis for this specific building envelope implementation are available upon request for verified architectural firms."}
                  </p>
                </div>

                <div className="pt-4 md:pt-8">
                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      const contact = document.getElementById('contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative w-full py-4 md:py-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden transition-all hover:bg-blue-700 active:scale-95 shadow-lg hover:shadow-blue-500/20"
                  >
                    <span className="relative z-10">Request Documentation</span>
                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>

              {/* Decorative Tech Specs */}
              <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4 md:gap-8 opacity-20">
                <div>
                  <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Seismic Rating</p>
                  <p className="font-syncopate text-[10px] text-white">Zone IV compliant</p>
                </div>
                <div>
                  <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Wind Load</p>
                  <p className="font-syncopate text-[10px] text-white">4.5 kPa (Peak)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
