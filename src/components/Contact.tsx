'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative bg-[#0a0a0a] min-h-screen flex flex-col justify-center py-32 px-8 xl:px-32 z-20 overflow-hidden border-t border-white/5">
      
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-20 drop-shadow-lg"
        >
          Let&apos;s <span className="font-serif italic text-gray-500 font-light drop-shadow-lg">Connect.</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mt-16 max-w-5xl mx-auto">
          <motion.a 
            href="tel:+917890638631"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="group relative flex-1 w-full px-10 py-12 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] hover:border-emerald-500/30 text-left md:text-center"
          >
            <div className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">Phone</div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white transition-colors tracking-tight">+91 78906 38631</div>
          </motion.a>

          <motion.a 
            href="mailto:arifiqbal415@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative flex-1 w-full px-10 py-12 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(96,165,250,0.1)] hover:border-blue-500/30 text-left md:text-center"
          >
            <div className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">Email</div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white transition-colors tracking-tight truncate">arifiqbal415@gmail.com</div>
          </motion.a>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="mt-8 max-w-5xl mx-auto"
        >
          <a 
            href="https://linkedin.com/in/arif-iqbal007" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block w-full px-10 py-12 bg-[#0a66c2]/5 border border-[#0a66c2]/20 rounded-[2rem] hover:bg-[#0a66c2]/10 transition-all duration-300 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(10,102,194,0.1)] hover:border-[#0a66c2]/40 text-left md:text-center"
          >
            <div className="text-[#0a66c2] font-bold tracking-[0.2em] uppercase text-xs mb-4">LinkedIn</div>
            <div className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-light text-white transition-colors tracking-tight truncate">linkedin.com/in/arif-iqbal007</div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
