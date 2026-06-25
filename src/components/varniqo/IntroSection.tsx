'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger text
      gsap.from(".intro-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Counters
      const counters = gsap.utils.toArray<HTMLElement>('.stat-counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || "0");
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          onUpdate: function() {
            counter.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toString();
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 max-w-7xl mx-auto w-full min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-4xl mb-24">
        <h2 className="intro-text text-4xl md:text-[56px] font-bold mb-8 text-white leading-tight font-syne">
          Why <span className="text-[#27AE60]">VARNIQO MEDIA</span>?
        </h2>
        <p className="intro-text text-xl text-[#E8E8E8] mb-6 leading-[1.6]">
          We combine data-driven strategy with unparalleled aesthetics. Our approach ensures your brand doesn't just exist—it dominates.
        </p>
        <p className="intro-text text-xl text-[#E8E8E8] leading-[1.6]">
          We engineer digital experiences that captivate users and convert them into loyal clients, pushing the boundaries of what is possible on the responsive web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
        <div className="intro-text flex flex-col gap-2">
          <span className="text-5xl md:text-6xl font-extrabold text-[#27AE60] font-syne"><span className="stat-counter" data-target="500">0</span>+</span>
          <span className="text-lg text-white/80 uppercase tracking-widest font-semibold">Projects Delivered</span>
        </div>
        <div className="intro-text flex flex-col gap-2">
          <span className="text-5xl md:text-6xl font-extrabold text-[#27AE60] font-syne"><span className="stat-counter" data-target="98">0</span>%</span>
          <span className="text-lg text-white/80 uppercase tracking-widest font-semibold">Client Satisfaction</span>
        </div>
        <div className="intro-text flex flex-col gap-2">
          <span className="text-5xl md:text-6xl font-extrabold text-[#27AE60] font-syne"><span className="stat-counter" data-target="10">0</span>+</span>
          <span className="text-lg text-white/80 uppercase tracking-widest font-semibold">Years Experience</span>
        </div>
      </div>
    </section>
  );
}
