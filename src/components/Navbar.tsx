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
            ? 'bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
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

          {/* Zone 2: Clean single-line nav links with vibrant blue selection matching website color */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700 bg-sky-50/90 p-1.5 rounded-full border border-sky-200/80 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-white font-bold' : 'text-slate-600 hover:text-sky-700 hover:bg-sky-100/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 rounded-full -z-10 shadow-md shadow-sky-500/35"
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-full transition-all shadow-md shadow-sky-500/25 whitespace-nowrap shrink-0"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: EASE_PREMIUM }}
            className="fixed inset-0 z-40 lg:hidden bg-white/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between border-b border-sky-100 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-sky-600 font-semibold px-2">Navigation Menu</span>
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left text-lg font-bold tracking-tight py-3 px-4 rounded-2xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                        : 'text-slate-800 hover:bg-sky-50 hover:text-sky-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
              <div className="text-xs text-slate-500">
                <p className="font-semibold text-slate-800">CHP #4 Building, 5th Floor, Orchid Magu</p>
                <p>Malé, Republic of Maldives · +960 330 6606</p>
              </div>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors shadow-sm"
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
