'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: "01", title: "Market Research", description: "Analyzing the landscape to find your winning edge." },
  { id: "02", title: "Competitor Research", description: "Deconstructing the competition to outperform them." },
  { id: "03", title: "Strategy", description: "Formulating a bespoke attack plan for growth." },
  { id: "04", title: "Launch", description: "Executing with precision and monitoring success." }
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepElements = gsap.utils.toArray('.process-step');
      
      stepElements.forEach((step: any, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      // Animated line
      gsap.fromTo('.process-line', 
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto w-full relative">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 text-center">How We Work.</h2>
      
      <div className="relative max-w-3xl mx-auto">
        {/* The trail background */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform md:-translate-x-1/2"></div>
        {/* The active trail */}
        <div className="process-line absolute left-8 md:left-1/2 top-0 w-1 bg-green-500 transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>

        {steps.map((step, i) => (
          <div key={i} className="process-step relative flex items-center mb-24 md:even:flex-row-reverse group">
            <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-black border-4 border-green-500 transform -translate-x-1/2 z-10 
              transition-transform duration-300 group-hover:scale-150"></div>
            
            <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 md:even:pl-16 md:even:pr-0 text-left md:even:text-left md:text-right">
              <span className="text-green-500 font-bold text-xl mb-2 block">{step.id}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-green-400 transition-colors shadow-2xl">
          Get Started Now
        </button>
      </div>
    </section>
  );
}
