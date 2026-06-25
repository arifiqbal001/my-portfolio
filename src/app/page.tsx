'use client';
import { useRef } from 'react';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import PracticalWork from '@/components/PracticalWork';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative bg-[#121212] selection:bg-emerald-500/30 overflow-x-clip">
      {/* 600vh scrollytelling section */}
      <section ref={containerRef} className="relative h-[600vh] w-full">
        <ScrollyCanvas targetRef={containerRef} />
        <Overlay targetRef={containerRef} />
      </section>

      {/* Subsequent nice clear transition */}
      <div className="h-32 bg-gradient-to-b from-transparent to-[#121212] absolute bottom-full w-full z-10 pointer-events-none" />
      
      <About />
      <PracticalWork />
      <Skills />
      <Contact />
      
      <footer className="py-12 bg-[#0a0a0a] text-center text-white/40 border-t border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm uppercase tracking-widest font-bold mb-4 md:mb-0">
            © {new Date().getFullYear()} Arif Iqbal.
          </p>
          <div className="flex gap-8 text-sm uppercase tracking-widest font-bold">
            <a href="https://linkedin.com/in/arif-iqbal007" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="tel:+917890638631" className="hover:text-white transition-colors duration-300">Phone</a>
            <a href="mailto:arifiqbal415@gmail.com" className="hover:text-white transition-colors duration-300">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
