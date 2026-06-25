'use client';
import Header from "@/components/varniqo/Header";
import Footer from "@/components/varniqo/Footer";
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { Search, Share2, PenTool, Layout, TrendingUp, BarChart } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { id: "01", icon: <Search size={32} />, title: "SEO Optimization", desc: "Dominate search rankings with data-backed keyword strategies and technical audits.", features: ["Keyword Research", "On-Page SEO", "Link Building"] },
  { id: "02", icon: <Share2 size={32} />, title: "Social Media", desc: "Build a massive organic following and run highly profitable ad campaigns.", features: ["Content Calendar", "Community Management", "Paid Social"] },
  { id: "03", icon: <PenTool size={32} />, title: "Content Strategy", desc: "Compelling copywriting and visual assets that convert visitors to buyers.", features: ["Copywriting", "Video Production", "Blog Management"] },
  { id: "04", icon: <Layout size={32} />, title: "Web Design", desc: "Premium, ultra-fast websites designed for maximum conversion rates.", features: ["UI/UX Design", "Next.js Development", "Conversion Optimization"] },
  { id: "05", icon: <TrendingUp size={32} />, title: "PPC Advertising", desc: "High-ROI paid search campaigns on Google, Bing, and major ad networks.", features: ["Search Ads", "Display/Retargeting", "A/B Testing"] },
  { id: "06", icon: <BarChart size={32} />, title: "Brand Development", desc: "Crafting a unique brand identity that resonates with your target audience.", features: ["Brand Identity", "Market Positioning", "Competitor Analysis"] },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main ref={containerRef} className="min-h-screen pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center mb-32">
          <h1 className="text-[42px] md:text-[72px] font-extrabold mb-6 font-syne text-white leading-tight">
            Services That <span className="text-[#27AE60]">Drive Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E8E8E8] max-w-2xl leading-[1.6]">
            We provide end-to-end digital solutions tailored to scale your business aggressively.
          </p>
        </section>

        {/* Service Cards Grid */}
        <section className="services-grid px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((svc) => (
            <div key={svc.id} className="service-card hover-target group bg-[#0D3B2A] border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#27AE60] mb-6 group-hover:scale-110 group-hover:bg-[#27AE60] group-hover:text-white transition-all duration-300">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-syne">{svc.title}</h3>
              <p className="text-[#E8E8E8] mb-6 line-clamp-3">{svc.desc}</p>
              <ul className="space-y-2 mb-8 border-t border-white/10 pt-6">
                {svc.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-white/70 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#27AE60] before:rounded-full before:mr-3">
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="text-[#27AE60] font-bold group-hover:text-white transition-colors flex items-center gap-2">
                Get Started <span>&rarr;</span>
              </button>
            </div>
          ))}
        </section>

        {/* Pricing / Packages */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-[56px] font-bold text-white font-syne mb-16">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-[#0D3B2A] border border-white/10 rounded-2xl p-8 flex flex-col text-left">
              <h4 className="text-xl font-bold text-white mb-2">Starter</h4>
              <div className="text-4xl font-extrabold text-[#27AE60] mb-6">$999<span className="text-lg text-white/50 font-medium">/mo</span></div>
              <p className="text-white/70 mb-8 border-b border-white/10 pb-8">Perfect for small businesses looking to establish a digital presence.</p>
              <button className="w-full py-4 rounded-full border-2 border-[#27AE60] text-[#27AE60] font-bold hover:bg-[#27AE60] hover:text-white transition-colors mb-8 mt-auto">Choose Plan</button>
            </div>
            {/* Professional */}
            <div className="bg-[#1A4D2E] border-2 border-[#27AE60] rounded-2xl p-8 flex flex-col text-left relative transform md:-translate-y-4 shadow-[0_20px_40px_rgba(39,174,96,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#27AE60] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">RECOMMENDED</div>
              <h4 className="text-xl font-bold text-white mb-2">Professional</h4>
              <div className="text-4xl font-extrabold text-[#27AE60] mb-6">$2,499<span className="text-lg text-white/50 font-medium">/mo</span></div>
              <p className="text-white/70 mb-8 border-b border-[#27AE60]/20 pb-8">Aggressive growth strategy for scaling companies.</p>
              <button className="w-full py-4 rounded-full bg-[#27AE60] text-white font-bold hover:bg-[#2ECC71] transition-colors mb-8 mt-auto shadow-[0_4px_14px_0_rgba(39,174,96,0.39)]">Choose Plan</button>
            </div>
            {/* Enterprise */}
            <div className="bg-[#0D3B2A] border border-white/10 rounded-2xl p-8 flex flex-col text-left">
              <h4 className="text-xl font-bold text-white mb-2">Enterprise</h4>
              <div className="text-4xl font-extrabold text-[#27AE60] mb-6">Custom</div>
              <p className="text-white/70 mb-8 border-b border-white/10 pb-8">Bespoke solutions for large organizations and specific needs.</p>
              <button className="w-full py-4 rounded-full border-2 border-[#27AE60] text-[#27AE60] font-bold hover:bg-[#27AE60] hover:text-white transition-colors mb-8 mt-auto">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
