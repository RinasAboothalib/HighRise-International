import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HighriseLogo } from './BrandLogos';
import { motion, AnimatePresence } from 'motion/react';
import { EASE_PREMIUM } from './motion/MotionUtils';

interface NavbarProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_30px_rgba(15,23,42,0.06)] py-3'
            : 'bg-white/50 backdrop-blur-lg border-b border-white/40 shadow-[0_2px_20px_rgba(15,23,42,0.02)] py-4'
        }`}
      >
        {/* Specular glass highlight lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8 relative z-10">
          {/* Zone 1: Uploaded Official SVG Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl py-1 px-2.5 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm border border-transparent hover:border-white/60"
            aria-label="Highrise International Homepage"
          >
            <HighriseLogo size={28} variant="dark" />
          </button>

          {/* Zone 2: Refined glassmorphic capsule nav bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-sm font-medium bg-white/60 backdrop-blur-xl p-1.5 rounded-full border border-white/80 shadow-[0_8px_32px_rgba(0,124,255,0.07),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-slate-900/5">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-all duration-200 ${
                    isActive
                      ? 'text-[#0c4a6e] font-semibold'
                      : 'text-slate-600 hover:text-[#087CFF] hover:bg-white/70'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/15 to-blue-500/15 backdrop-blur-md rounded-full -z-10 border border-sky-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(8,124,255,0.12)]"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleLinkClick('contact')}
              style={{
                background: 'linear-gradient(110deg, #00B8F0 0%, #087CFF 55%, #165DFF 100%)',
                boxShadow: '0 4px 14px rgba(0, 132, 255, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-[#FFFFFF] rounded-[999px] border border-white/20 transition-all whitespace-nowrap shrink-0 hover:opacity-95"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#087CFF] bg-white/50 backdrop-blur-md hover:bg-white/80 border border-white/60 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shadow-xs"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with matching glass effect */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: EASE_PREMIUM }}
            className="fixed inset-0 z-40 lg:hidden bg-white/80 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between border-b border-white/60 shadow-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

            <div className="flex flex-col gap-3 relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#087CFF] font-semibold px-2">Navigation Menu</span>
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left text-lg font-semibold tracking-tight py-3 px-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500/15 to-blue-500/15 backdrop-blur-md text-[#0c4a6e] border-sky-300/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)]'
                        : 'bg-white/50 backdrop-blur-md text-slate-700 hover:bg-white/80 hover:text-[#087CFF] border-white/70 shadow-xs'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#087CFF] shadow-xs" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/60 flex flex-col gap-4 relative z-10">
              <div className="text-xs text-slate-600 bg-white/50 backdrop-blur-md p-3 rounded-2xl border border-white/70">
                <p className="font-semibold text-slate-900">CHP #4 Building, 5th Floor, Orchid Magu</p>
                <p className="mt-0.5">Malé, Republic of Maldives · +960 330 6606</p>
              </div>
              <button
                onClick={() => handleLinkClick('contact')}
                style={{
                  background: 'linear-gradient(110deg, #00B8F0 0%, #087CFF 55%, #165DFF 100%)',
                  boxShadow: '0 4px 14px rgba(0, 132, 255, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
                }}
                className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[#FFFFFF] rounded-[999px] border border-white/20 transition-all hover:opacity-95"
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
