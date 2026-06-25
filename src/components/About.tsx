'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative bg-[#121212] py-32 px-8 xl:px-32 z-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-400 uppercase mb-8">
            About Me
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white/90 tracking-tight">
            Results-driven digital marketer with hands-on experience in SEO, website design, and client-facing campaigns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-12 text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl"
        >
          <p className="mb-8 font-light">
            Currently specializing in performance marketing to drive measurable business growth. Adept at managing full-cycle digital projects—from foundational SEO audits to executing targeted ad campaigns. 
          </p>
          <p className="font-light">
            Leverages a strong background in customer relations to understand client needs and deliver high-impact digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
