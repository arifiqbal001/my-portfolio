'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap-trial';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !wrapperRef.current) return;
    
    const ctx = gsap.context(() => {
      // Out transition overlay
      gsap.fromTo(overlayRef.current,
        { x: "-100%" },
        { 
          x: "100%", 
          duration: 0.8, 
          ease: "power3.inOut" 
        }
      );

      // In transition content fade
      gsap.fromTo(wrapperRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[5000] pointer-events-none bg-green-500 transform -translate-x-full" 
      />
      <div ref={wrapperRef}>
        {children}
      </div>
    </>
  );
}
