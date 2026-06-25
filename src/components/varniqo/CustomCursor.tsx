'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';

export default function CustomCursor({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cursorRef.current) return;
    
    // QuickTo for 60fps tracking without expensive math
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    
    // Hover logic
    const handleHover = (isHovering: boolean) => {
      gsap.to(cursorRef.current, {
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(39, 174, 96, 0.1)" : "transparent",
        borderColor: isHovering ? "rgba(39, 174, 96, 0.0)" : "rgba(39, 174, 96, 1)",
        duration: 0.3,
      });
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, input, textarea, .hover-target').forEach((el) => {
        el.addEventListener('mouseenter', () => handleHover(true));
        el.addEventListener('mouseleave', () => handleHover(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    // Delay to let React render anchors first
    setTimeout(addHoverListeners, 1000);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll('a, button, input, textarea, .hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', () => handleHover(true));
        el.removeEventListener('mouseleave', () => handleHover(false));
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-green-500 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity hidden md:flex"
      />
      {children}
    </>
  );
}
