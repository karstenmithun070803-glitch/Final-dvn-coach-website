import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { WHATSAPP_LINK } from '../constants';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onInquiryClick: () => void;
}

export default function Navbar({ onInquiryClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const INSTAGRAM_URL = "https://www.instagram.com/dvn_coach?igsh=N2N2dHg0aDNlYnpk";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Models', href: '#models' },
    { name: 'About', href: '#about' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: INSTAGRAM_URL, external: true },
  ];

  return (
    <>
      {/* Backdrop Blur for Mobile Menu - Viewport Locked */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-[12px] z-[998] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
          isScrolled 
            ? 'bg-black/95 backdrop-blur-[40px] border-b border-white/5 shadow-2xl' 
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent'
        )}
      >
        <div className="max-w-[1700px] mx-auto w-full h-[100px] md:h-[110px] px-4 md:px-10 flex items-center justify-between">
          {/* Section 1: Brand Identity - Tight & Prioritized */}
          <div className="flex-none flex items-center pr-2 md:pr-8">
            <BrandLogo />
          </div>

          {/* Section 2: Navigation Hub (Center Hub) - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 items-center justify-center px-4 group/nav">
            <div className="flex items-center gap-x-6 lg:gap-x-8 xl:gap-x-12 transition-all duration-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center gap-1.5 text-[10px] lg:text-[11px] font-bold text-white/70 hover:text-white transition-all uppercase tracking-[0.25em] whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-amber-burnt shadow-[0_0_10px_rgba(255,179,0,0.6)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Section 3: Authority & Action (Right Wing) */}
          <div className="flex-none flex items-center justify-end">
            <div className="flex items-center gap-2 md:gap-5">
              {/* Scaled Accreditation Logos - Desktop Only */}
              <div className="hidden md:flex items-center">
                <img 
                  src="https://res.cloudinary.com/dxufff4iw/image/upload/v1776743550/Screenshot_2026-04-21_at_9.03.44_AM_n3q2vo.png" 
                  alt="TUV NABCB" 
                  className="h-8 lg:h-9 w-auto object-contain brightness-110 hover:brightness-125 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Contact Button - Desktop Only */}
              <button
                onClick={onInquiryClick}
                className="hidden md:flex bg-amber-burnt h-9 px-6 rounded-lg text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:bg-amber-500 hover:shadow-[0_0_15px_rgba(255,179,0,0.3)] items-center gap-2 whitespace-nowrap amber-glow"
              >
                <MessageSquare size={13} className="shrink-0" />
                <span>Contact Us</span>
              </button>

              {/* Mobile Menu Toggle - Forced Visibility */}
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-amber-burnt transition-all active:scale-95 bg-white/5 rounded-lg border border-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-carbon-matte/98 backdrop-blur-2xl border-b border-white/5 p-8 md:hidden flex flex-col gap-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-[1001]"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between text-base font-bold text-white/70 hover:text-amber-burnt transition-all uppercase tracking-[0.2em]"
                >
                  {link.name}
                  {link.external && <ExternalLink size={16} />}
                </a>
              ))}
              
              {/* Mobile Mobile Contact Action */}
              <div className="mt-4 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onInquiryClick();
                  }}
                  className="w-full bg-amber-burnt py-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-amber-burnt/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
                >
                  <MessageSquare size={18} />
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
