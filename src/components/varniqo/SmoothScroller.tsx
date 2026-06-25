'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Media query to disable smooth scrolling on touch devices
    let smoother: ScrollSmoother;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        normalizeScroll: false,
        smoothTouch: 0.1
      });

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
