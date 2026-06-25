import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Global E-Com Scaling",
    category: "Performance Marketing",
    description: "Scaled ROAS by 3.5x over 6 months through data-driven ad placements and conversion rate optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  },
  {
    title: "SaaS SEO Dominance",
    category: "SEO Strategy",
    description: "Achieved #1 ranking for highly competitive industry keywords, increasing organic traffic by 400%.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2676"
  },
  {
    title: "Fintech Re-design",
    category: "Web Design",
    description: "Completely overhauled the user experience resulting in a 45% increase in user signups.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-32 px-8 xl:px-32 relative z-20">
      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-6xl md:text-8xl font-bold mb-20 tracking-tight">
          Selected <span className="text-gray-500 font-serif italic font-light">Work</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(255,255,255,0.07)]"
            >
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <div className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
