'use client';
import Header from "@/components/varniqo/Header";
import Footer from "@/components/varniqo/Footer";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap-trial';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split layout animation
      gsap.from(".contact-left", {
        x: -50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
      });
      gsap.from(".contact-right", {
        x: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.4
      });
      
      // Stagger form fields
      gsap.from(".form-group", {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.6
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <>
      <Header />
      <main ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-16">
          <h1 className="text-[42px] md:text-[64px] font-extrabold mb-6 font-syne text-white leading-[1.1]">
            Let's <span className="text-[#27AE60]">Talk</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E8E8E8] max-w-2xl mx-auto leading-[1.6]">
            Ready to scale your business? Drop us a line and let's discuss how we can engineer your digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Left Form */}
          <div className="contact-left bg-[#0D3B2A] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-[#27AE60]/20 text-[#27AE60] flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 font-syne">Message Sent!</h3>
                <p className="text-[#E8E8E8]">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="form-group grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input type="text" id="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#27AE60] peer" placeholder=" " value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                    <label htmlFor="name" className="absolute left-4 top-4 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0D3B2A] peer-focus:px-2 peer-focus:text-[#27AE60] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0D3B2A] peer-[:not(:placeholder-shown)]:px-2">First Name *</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="company" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#27AE60] peer" placeholder=" " value={formState.company} onChange={e => setFormState({...formState, company: e.target.value})} />
                    <label htmlFor="company" className="absolute left-4 top-4 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0D3B2A] peer-focus:px-2 peer-focus:text-[#27AE60] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0D3B2A] peer-[:not(:placeholder-shown)]:px-2">Company Name</label>
                  </div>
                </div>
                
                <div className="form-group relative group">
                  <input type="email" id="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#27AE60] peer" placeholder=" " value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                  <label htmlFor="email" className="absolute left-4 top-4 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0D3B2A] peer-focus:px-2 peer-focus:text-[#27AE60] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0D3B2A] peer-[:not(:placeholder-shown)]:px-2">Email Address *</label>
                </div>

                <div className="form-group relative group">
                  <textarea id="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#27AE60] peer resize-none" placeholder=" " value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} />
                  <label htmlFor="message" className="absolute left-4 top-4 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0D3B2A] peer-focus:px-2 peer-focus:text-[#27AE60] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0D3B2A] peer-[:not(:placeholder-shown)]:px-2">How can we help you? *</label>
                </div>

                <button type="submit" className="form-group mt-4 px-8 py-4 bg-[#27AE60] hover:bg-[#2ECC71] text-white font-bold rounded-xl shadow-[0_4px_14px_0_rgba(39,174,96,0.39)] hover:shadow-[0_6px_20px_rgba(39,174,96,0.23)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Info */}
          <div className="contact-right flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-8 font-syne">Contact Details</h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#27AE60]/10 text-[#27AE60] flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Email Us</span>
                  <a href="mailto:hello@varniqomedia.com" className="hover-target text-xl text-white hover:text-[#27AE60] transition-colors">hello@varniqomedia.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#27AE60]/10 text-[#27AE60] flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Call Us</span>
                  <a href="tel:+18005550199" className="hover-target text-xl text-white hover:text-[#27AE60] transition-colors">+1 (800) 555-0199</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#27AE60]/10 text-[#27AE60] flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Visit Us</span>
                  <p className="text-xl text-white leading-relaxed max-w-[250px]">
                    100 Innovation Drive,<br/>San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-48 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group cursor-pointer hover-target">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map Location" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1F] to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white font-medium">
                <MapPin size={16} className="text-[#27AE60]" /> View on Google Maps
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
