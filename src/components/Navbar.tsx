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
            ? 'bg-[#F5FAFE]/95 backdrop-blur-md border-b border-[#DCECFB] shadow-xs py-3'
            : 'bg-[#F5FAFE]/90 backdrop-blur-sm py-4 border-b border-[#DCECFB]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Uploaded Official SVG Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl py-1"
            aria-label="Highrise International Homepage"
          >
            <HighriseLogo size={28} variant="dark" />
          </button>

          {/* Zone 2: Refined translucent pill nav with soft blue active state and navy text */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium bg-white/85 backdrop-blur-md p-1.5 rounded-full border border-[#DCECFB] shadow-xs">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-all duration-200 ${
                    isActive
                      ? 'text-[#172554] font-semibold'
                      : 'text-[#475569] hover:text-[#087CFF] hover:bg-[#EBF4FE]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#DCEEFF] rounded-full -z-10 shadow-xs"
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
                boxShadow: '0 4px 10px rgba(0, 132, 255, 0.22)',
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-[#FFFFFF] rounded-[999px] border-none transition-all whitespace-nowrap shrink-0 hover:opacity-95"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#475569] hover:text-[#087CFF] hover:bg-[#EBF4FE] rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with matching color system */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: EASE_PREMIUM }}
            className="fixed inset-0 z-40 lg:hidden bg-[#F5FAFE]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between border-b border-[#DCECFB] shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-[#087CFF] font-semibold px-2">Navigation Menu</span>
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left text-lg font-semibold tracking-tight py-3 px-4 rounded-2xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#DCEEFF] text-[#172554] shadow-xs'
                        : 'text-[#475569] hover:bg-[#EBF4FE] hover:text-[#087CFF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#087CFF]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#DCECFB] flex flex-col gap-4">
              <div className="text-xs text-slate-500">
                <p className="font-semibold text-slate-800">CHP #4 Building, 5th Floor, Orchid Magu</p>
                <p>Malé, Republic of Maldives · +960 330 6606</p>
              </div>
              <button
                onClick={() => handleLinkClick('contact')}
                style={{
                  background: 'linear-gradient(110deg, #00B8F0 0%, #087CFF 55%, #165DFF 100%)',
                  boxShadow: '0 4px 10px rgba(0, 132, 255, 0.22)',
                }}
                className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[#FFFFFF] rounded-[999px] border-none transition-all hover:opacity-95"
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
