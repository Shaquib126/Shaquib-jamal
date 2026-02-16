
import React, { useState, useRef } from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Cyber City Alpha', 
    location: 'Gurugram, Haryana', 
    image: 'https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?auto=format&fit=crop&q=80&w=1000', 
    category: 'Unitized Facade' 
  },
  { 
    id: 2, 
    title: 'Marine Drive Pavilion', 
    location: 'Mumbai, Maharashtra', 
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000', 
    category: 'Structural Glazing' 
  },
  { 
    id: 3, 
    title: 'IT Corridor Hub', 
    location: 'Hyderabad, Telangana', 
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1000', 
    category: 'Spider Fitting' 
  },
  { 
    id: 4, 
    title: 'Tech Park Skyline', 
    location: 'Bangalore, Karnataka', 
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=1000', 
    category: 'Unitized Facade' 
  },
  { 
    id: 5, 
    title: 'Grand Atrium', 
    location: 'Chennai, Tamil Nadu', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000', 
    category: 'Skylight Systems' 
  },
  { 
    id: 6, 
    title: 'Emerald Plaza', 
    location: 'Kolkata, West Bengal', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070', 
    category: 'Structural Glazing' 
  },
];

const CATEGORIES = ['All', 'Unitized Facade', 'Structural Glazing', 'Spider Fitting', 'Skylight Systems'];

const ProjectShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-zinc-950 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="reveal">
            <h2 className="font-syncopate text-4xl md:text-5xl font-bold text-white mb-4 uppercase leading-none tracking-tighter">INDIAN SKYLINES</h2>
            <p className="text-zinc-500 max-w-lg">Transforming major Indian business districts through precision-engineered facade systems.</p>
          </div>
          <div className="flex flex-wrap gap-4 reveal">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all border shadow-lg hover:shadow-blue-500/20 active:scale-95 ${
                  activeFilter === cat 
                  ? 'border-blue-500 bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105' 
                  : 'border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white bg-zinc-900/50 hover:-translate-y-1'
                }`}
              >
                {cat.replace(' Systems', '').replace(' Facade', '')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden aspect-[16/11] cursor-pointer bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hover:z-10 hover:border-blue-500/50 reveal`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform group-hover:-translate-y-4 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-[1px] bg-blue-500 group-hover:w-12 transition-all duration-500"></div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold block">{project.category}</span>
                </div>
                <h3 className="font-syncopate text-xl font-bold text-white mb-1 uppercase tracking-tighter shadow-black drop-shadow-lg">{project.title}</h3>
                <p className="text-zinc-400 text-[10px] uppercase tracking-widest">{project.location}</p>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
