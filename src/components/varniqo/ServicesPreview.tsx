'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Market Research", desc: "Deep analytics to understand your audience.", color: "bg-[#0a2016]" },
  { title: "SEO Strategy", desc: "Dominate search engine rankings.", color: "bg-[#0d2a1d]" },
  { title: "UI/UX Design", desc: "Premium, conversion-focused design.", color: "bg-[#113a28]" },
  { title: "Web Development", desc: "High-performance websites.", color: "bg-[#164a33]" }
];

export default function ServicesPreview() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.service-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top top+=${100 + i * 40}`,
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 max-w-5xl mx-auto w-full relative">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white">Our Services.</h2>
      </div>
      <div className="relative pb-32">
        {services.map((service, i) => (
          <div 
            key={i} 
            className={`service-card w-full h-80 rounded-3xl p-10 mb-8 border border-white/5 shadow-2xl backdrop-blur-md ${service.color} flex flex-col justify-center`}
            style={{ zIndex: i + 1 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-lg text-white/70 max-w-xl">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
