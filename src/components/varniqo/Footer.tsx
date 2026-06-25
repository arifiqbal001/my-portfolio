'use client';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A2E1F] pt-24 pb-8 px-6 lg:px-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-extrabold tracking-tight text-white font-syne">
            VARNIQO<span className="text-[#27AE60]">MEDIA</span>
          </span>
          <p className="text-[#E8E8E8] leading-relaxed">
            Your Growth Partner. We engineer digital experiences that captivate users and convert them into loyal clients.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover-target w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#27AE60] hover:text-white transition-all font-bold">in</a>
            <a href="#" className="hover-target w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#27AE60] hover:text-white transition-all font-bold">X</a>
            <a href="#" className="hover-target w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#27AE60] hover:text-white transition-all font-bold">ig</a>
            <a href="#" className="hover-target w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#27AE60] hover:text-white transition-all font-bold">fb</a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2">Quick Links</h4>
          <Link href="/" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">Home</Link>
          <Link href="/services" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">Services</Link>
          <Link href="/about" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">About</Link>
          <Link href="/portfolio" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">Portfolio</Link>
          <Link href="/contact" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">Contact</Link>
        </div>

        {/* Col 3: Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2">Services</h4>
          <a href="/services" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">SEO Optimization</a>
          <a href="/services" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">Social Media Marketing</a>
          <a href="/services" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">Content Strategy</a>
          <a href="/services" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">PPC Advertising</a>
          <a href="/services" className="hover-target text-[#E8E8E8] hover:text-[#27AE60] transition-colors w-fit">Brand Development</a>
        </div>

        {/* Col 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2">Stay Updated</h4>
          <p className="text-[#E8E8E8] text-sm mb-2">Get the latest digital marketing insights delivered to your inbox.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="hover-target w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#27AE60] transition-colors"
              required 
            />
            <button 
              type="submit" 
              className="hover-target w-full bg-[#27AE60] hover:bg-[#2ECC71] text-white font-bold py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
          <span className="text-white/40 text-xs mt-1">We respect your privacy. No spam.</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} VARNIQO MEDIA. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover-target text-white/50 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover-target text-white/50 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover-target text-white/50 hover:text-white transition-colors">Cookies</a>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="hover-target absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#27AE60] text-white flex items-center justify-center hover:bg-[#2ECC71] hover:-translate-y-2 hover:rotate-360 transition-all duration-500 shadow-lg"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
