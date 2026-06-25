'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import { ArrowDown } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Small delay to wait for preloader to finish its slide up (approx 2s total from boot)
      const tl = gsap.timeline({ delay: 2.5 });

      // Split Text Animation
      if (headlineRef.current) {
        const split = new SplitText(headlineRef.current, { type: "chars,words", charsClass: "hero-char" });
        tl.fromTo(split.chars, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: "power3.out" }
        );
      }

      tl.from(".hero-sub", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-cta", { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.4")
        .from(".scroll-indicator", { opacity: 0, y: -20, duration: 1 }, "-=0.2");
        
      // Scroll indicator bounce
      gsap.to(".scroll-indicator-icon", {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.5
      });

      // Scroll out indicator
      gsap.to(".scroll-indicator", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "300px top",
          scrub: 1
        },
        opacity: 0,
        y: 50
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center px-6 lg:px-12 max-w-7xl mx-auto w-full pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full z-10 relative">
        <div className="flex flex-col justify-center max-w-2xl">
          <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-[72px] font-extrabold text-[#FFFFFF] leading-[1.1] mb-6 tracking-tight font-syne">
            Transform Your <span className="text-[#27AE60]">Digital Presence</span>
          </h1>
          <p className="hero-sub text-lg md:text-[18px] text-[#E8E8E8] mb-10 max-w-md leading-[1.6]">
            Data-Driven Marketing Solutions That Deliver Results. SEO, Performance Marketing, and striking Web Design for agencies that demand perfection.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="hero-cta px-8 py-4 bg-[#27AE60] hover:bg-[#2ECC71] text-white font-semibold rounded-full shadow-[0_4px_14px_0_rgba(39,174,96,0.39)] hover:shadow-[0_6px_20px_rgba(39,174,96,0.23)] hover:-translate-y-1 transition-all duration-300 w-fit">
              Get Started
            </button>
            <button className="hero-cta px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 w-fit">
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-[0.2em] font-bold uppercase">Scroll</span>
        <div className="scroll-indicator-icon w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#27AE60] rounded-full" />
        </div>
      </div>
    </section>
  );
}
