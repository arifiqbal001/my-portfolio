'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
  {
    category: "SEO",
    items: ["On-Page SEO", "Off-Page SEO", "Local SEO", "Keyword Research", "Google Business Profile Optimization"]
  },
  {
    category: "Performance Marketing",
    items: ["Meta Ads", "Lead Generation Campaigns", "Audience Targeting", "Campaign Optimization"]
  },
  {
    category: "Website & Landing Pages",
    items: ["WordPress", "Elementor", "Conversion Optimization"]
  },
  {
    category: "Email & Automation",
    items: ["Email Marketing Campaigns", "Marketing Automation Tools"]
  },
  {
    category: "Content & Design",
    items: ["Social Media Strategy", "Graphic Design (Canva)", "Basic Video Editing"]
  },
  {
    category: "Tools",
    items: ["Google Search Console", "Meta Business Manager", "WordPress", "Canva"]
  }
];

export default function Skills() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Height 300vh allows scrolling while sticky
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Slide left horizontally by up to 55% to reliably expose the final 3 cards.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#121212] z-20">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-8 xl:px-32">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-16 shrink-0">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 font-serif italic pr-4">Skills</span>
        </h2>
        
        {/* We have 6 cards tightly packed via w-max */}
        <motion.div style={{ x }} className="flex gap-8 w-max">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[45vw] lg:w-[28vw] xl:w-[25vw] flex-shrink-0 bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-2xl rounded-3xl p-10 hover:bg-white/15 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/20 pb-6 uppercase tracking-wider">{skill.category}</h3>
              <ul className="flex flex-col gap-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-lg md:text-xl flex items-start gap-4 leading-relaxed font-normal">
                    <span className="w-2 h-2 mt-2.5 rounded-full shrink-0 bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
