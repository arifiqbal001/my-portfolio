'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A2E1F]/70 backdrop-blur-[20px] saturate-180 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="hover-target flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white font-syne">
              VARNIQO<span className="text-[#27AE60]">MEDIA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`hover-target relative text-sm font-semibold tracking-wide py-2 transition-colors ${
                    isActive ? 'text-[#27AE60]' : 'text-white/80 hover:text-white'
                  } group`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#27AE60] transform origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
            <Link 
              href="/contact" 
              className="hover-target ml-4 px-6 py-2.5 bg-[#27AE60] hover:bg-[#2ECC71] text-white font-semibold rounded-full shadow-[0_4px_14px_0_rgba(39,174,96,0.39)] hover:shadow-[0_6px_20px_rgba(39,174,96,0.23)] hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="hover-target md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[990] bg-[#0A2E1F] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold font-syne text-white hover:text-[#27AE60] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
