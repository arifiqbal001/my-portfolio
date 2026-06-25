'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "DriveOn Car Rental",
    category: "Freelance Performance Marketer / Campaign Manager",
    description: "Managed and optimized end-to-end Google and Meta ad campaigns, driving a substantial increase in high-quality leads and maximizing ROI. Utilized A/B testing and data-driven performance metrics to refine targeting strategies, boosting conversion rates and user engagement. Analyzed market trends and consumer behavior to identify growth opportunities, directly contributing to revenue growth.",
    image: "/google_ads_driveon.jpeg"
  },
  {
    title: "Maison Duo",
    category: "Digital Marketing Freelancer (Fashion Boutique)",
    description: "Managed and optimized digital marketing strategies for a fashion boutique, focusing on effective Meta advertising that significantly boosted sales performance. Implemented data-driven approaches to refine the website's user experience, resulting in improved conversion rates and customer satisfaction. Conducted A/B testing to assess the effectiveness of ads and website modifications to enhance purchase metrics.",
    image: "/meta_ads_maison.jpeg"
  },
  {
    title: "Shamim Hair Patch Centre",
    category: "Performance Marketing & Lead Generation",
    description: "Executed a Meta Ads lead campaign that generated 315 qualified leads in one week, optimizing targeting and budgets to achieve a highly efficient ₹12 CPC.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2400"
  },
  {
    title: "Arsalan Salon",
    category: "Local SEO & GMB Optimization",
    description: "Executed a comprehensive Local SEO strategy and optimized the Google Business Profile for a salon. Improved local search visibility and strengthened online presence. Achieved 115 direct profile interactions within three months.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2400"
  },
  {
    title: "Draft and Data",
    category: "Website Development & SEO Strategy",
    description: "Built and launched a complete, mobile-responsive website for a digital marketing agency, establishing a strong brand identity. Implemented core on-page SEO best practices during the build phase to ensure immediate search engine crawlability and indexing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2400"
  }
];

export default function PracticalWork() {
  return (
    <section className="relative bg-[#0a0a0a] py-32 px-8 xl:px-32 z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-24"
        >
           <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
             My Practical <span className="text-gray-500 font-serif italic font-light">Work</span>
           </h2>
        </motion.div>

        {/* Sticky wrapper for overlapping cards with padding below so the user can scroll past the last card nicely */}
        <div className="relative flex flex-col gap-32 pb-64">
          {projects.map((project, index) => {
            // Incremental sticky top height so they stack beautifully like a deck
            const stickyTop = `calc(12vh + ${index * 40}px)`; 

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px", once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                className="sticky shadow-2xl rounded-[2rem] overflow-hidden bg-[#1a1a1a]/80 border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-white/20"
                style={{ top: stickyTop }}
              >
                <div className="flex flex-col lg:flex-row h-auto lg:h-[500px]">
                  <div className="p-10 lg:p-16 flex flex-col justify-center flex-1 order-2 lg:order-1 relative z-10">
                    <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase mb-6">
                      {project.category}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 h-64 lg:h-full relative order-1 lg:order-2 overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
