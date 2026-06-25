'use client';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap-trial';

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Hide preloader sequence
        const tl = gsap.timeline();
        tl.to(logoRef.current, { scale: 1.1, opacity: 0, duration: 0.6, ease: "power2.in" })
          .to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: () => {
              if (containerRef.current) containerRef.current.style.display = 'none';
            }
          }, "-=0.2");
      }
      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#0A2E1F] flex flex-col items-center justify-center origin-top"
    >
      <h1 ref={logoRef} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8 font-syne drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        VARNIQO<span className="text-[#27AE60]">MEDIA</span>
      </h1>
      
      {/* Progress Bar & Counter */}
      <div className="w-64 max-w-[80%] flex flex-col items-center gap-3">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#27AE60] transition-all duration-200 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-white/60 text-sm font-semibold tracking-widest">{progress}%</span>
      </div>
    </div>
  );
}
