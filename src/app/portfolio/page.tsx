'use client';
import Header from "@/components/varniqo/Header";
import Footer from "@/components/varniqo/Footer";
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ["All", "SEO", "Branding", "Web Design", "PPC"];

const projects = [
  { id: 1, title: "Fintech Rebrand", category: "Branding", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "E-Commerce Organic Growth", category: "SEO", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Healthcare Portal", category: "Web Design", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80", span: "md:col-span-1 md:row-span-2" },
  { id: 4, title: "SaaS Lead Gen", category: "PPC", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80", span: "md:col-span-1 md:row-span-1" },
  { id: 5, title: "Luxury Real Estate", category: "Web Design", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80", span: "md:col-span-2 md:row-span-1" },
];

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards on mount and whenever category changes
      gsap.fromTo(".project-card", 
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <>
      <Header />
      <main ref={containerRef} className="min-h-screen pt-32 pb-24">
        {/* Title Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center mb-16 pt-16">
          <h1 className="text-[42px] md:text-[72px] font-extrabold mb-6 font-syne text-white leading-[1.1]">
            Our <span className="text-[#27AE60]">Work</span>
          </h1>
          <p className="text-xl text-[#E8E8E8] max-w-2xl leading-[1.6]">
            Explore our latest case studies and see how we've helped businesses dominate their industries.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`hover-target px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#27AE60] text-white shadow-[0_4px_14px_0_rgba(39,174,96,0.39)]' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Dynamic Grid */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className={`project-card hover-target group relative rounded-3xl overflow-hidden cursor-pointer ${project.span}`}
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1F] via-[#0A2E1F]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#27AE60] font-bold tracking-widest text-sm mb-2 uppercase">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white font-syne mb-2">{project.title}</h3>
                    
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span className="text-white font-semibold">View Case Study</span>
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-white/50 text-xl font-syne">
              No projects found for this category yet.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
