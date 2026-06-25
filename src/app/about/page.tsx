'use client';
import Header from "@/components/varniqo/Header";
import Footer from "@/components/varniqo/Footer";
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { Target, Heart, Zap, ShieldCheck } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelinePoints = [
  { year: "2015", title: "The Inception", desc: "VARNIQO MEDIA was founded with a mission to bring data-driven marketing to ambitious startups." },
  { year: "2018", title: "Going Global", desc: "Expanded our operations across three continents, servicing enterprise clients." },
  { year: "2020", title: "Digital Award", desc: "Recognized as 'Best Precision Marketing Agency' by Web Excellence Awards." },
  { year: "2024", title: "The Future", desc: "Pioneering AI-driven Web3 marketing and hyper-interactive brand experiences." }
];

const values = [
  { icon: <Target size={32} />, title: "Results-Driven", desc: "We don't care about vanity metrics. We care about growth, revenue, and ROI." },
  { icon: <Heart size={32} />, title: "Client-First", desc: "Your success is our success. We build authentic partnerships, not just vendor lists." },
  { icon: <Zap size={32} />, title: "Innovation", desc: "Constantly pushing the boundaries of what's possible with modern web technologies." },
  { icon: <ShieldCheck size={32} />, title: "Transparency", desc: "Total visibility into our strategies, execution, and performance reporting." },
];

const team = [
  { name: "Arif Iqbal", role: "Founder & CEO", img: "https://i.pravatar.cc/400?img=11" },
  { name: "Sarah Chen", role: "Head of Growth", img: "https://i.pravatar.cc/400?img=5" },
  { name: "Marcus Reed", role: "Lead UI/UX", img: "https://i.pravatar.cc/400?img=8" },
  { name: "Elena Varg", role: "SEO Specialist", img: "https://i.pravatar.cc/400?img=9" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline reveal
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".our-story",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });

      // Values reveal
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".core-values",
          start: "top 75%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(1.2)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main ref={containerRef} className="min-h-screen pt-32 pb-24">
        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mb-32 pt-16">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[42px] md:text-[64px] font-extrabold mb-6 font-syne text-white leading-[1.1]">
              We Are <br/><span className="text-[#27AE60]">VARNIQO MEDIA</span>
            </h1>
            <p className="text-xl text-[#E8E8E8] leading-[1.6] mb-8 border-l-4 border-[#27AE60] pl-6">
              Our mission is to engineer digital experiences that captivate users and convert them into loyal clients, pushing the boundaries of what is possible on the web.
            </p>
          </div>
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2E1F] to-[#27AE60]/30 mix-blend-overlay z-10" />
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team collaborating" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="our-story px-6 lg:px-12 max-w-5xl mx-auto mb-32 relative">
          <h2 className="text-4xl md:text-[56px] font-bold text-center text-white font-syne mb-24">Our Story</h2>
          <div className="absolute left-6 md:left-1/2 top-[150px] bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />
          <div className="space-y-24">
            {timelinePoints.map((point, i) => (
              <div key={i} className={`timeline-item relative flex items-center md:items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#27AE60] -translate-x-[7px] md:-translate-x-1/2 shadow-[0_0_15px_rgba(39,174,96,0.5)] z-10" />
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left ${i % 2 === 0 ? 'md:text-left md:pl-16' : 'md:text-right'}`}>
                  <span className="text-5xl font-extrabold text-[#27AE60]/20 font-syne absolute top-[-30px] opacity-50 select-none">{point.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 font-syne relative z-10">{point.year} - {point.title}</h3>
                  <p className="text-[#E8E8E8] relative z-10">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="core-values bg-[#0D3B2A] py-32 border-y border-white/5 mb-32">
          <div className="px-6 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-[56px] font-bold text-center text-white font-syne mb-16">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div key={i} className="value-card bg-[#0A2E1F] border border-white/10 rounded-2xl p-8 hover-target flex flex-col items-center text-center hover:border-[#27AE60]/50 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#27AE60]/10 flex items-center justify-center text-[#27AE60] mb-6">
                    {v.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 font-syne">{v.title}</h4>
                  <p className="text-white/70 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-[56px] font-bold text-white font-syne mb-16">Meet The Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="hover-target group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white font-syne">{member.name}</h4>
                  <p className="text-[#27AE60] font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
