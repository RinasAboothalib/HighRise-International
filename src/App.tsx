/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeBrandsSection } from './components/HomeBrandsSection';
import { FeaturedHorizontalShowcase } from './components/FeaturedHorizontalShowcase';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PortfolioProject } from './data/highriseData';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { EASE_PREMIUM } from './components/motion/MotionUtils';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [contactInitialInterest, setContactInitialInterest] = useState<string>('Event Management');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioProject | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Smooth scroll to top on page change
  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setContactInitialInterest(serviceTitle);
    handlePageChange('contact');
  };

  const handleInquireProjectOrBrand = (title: string) => {
    setContactInitialInterest(title);
    handlePageChange('contact');
  };

  const handleInspectProject = (project: PortfolioProject) => {
    setSelectedCaseStudy(project);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-800">
      {/* Top Bar Navigation with Uploaded Spherical Logo & 6 specific page headers */}
      <Navbar activePage={activePage} onNavigate={handlePageChange} />

      {/* Main Content Area with Fluid Page Transition Flow */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.42, ease: EASE_PREMIUM }}
            className="w-full"
          >
            {/* 1. HOME PAGE */}
            {activePage === 'home' && (
              <div>
                {/* Hero Banner with Cinematic Entrance & Parallax */}
                <Hero onNavigate={handlePageChange} />

                {/* Brands inside Homepage with Original Uploaded Logos */}
                <HomeBrandsSection onInquireBrand={handleInquireProjectOrBrand} />

                {/* Horizontal Scroll Showcase for Landmark Projects */}
                <FeaturedHorizontalShowcase
                  onSelectProject={handleInspectProject}
                  onExploreAll={() => handlePageChange('portfolio')}
                />

                {/* Homepage Collaboration Call to Action */}
                <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-700 text-white relative overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="max-w-2xl">
                      <span className="text-xs font-bold uppercase tracking-widest text-sky-200 block mb-2">
                        Ready to Collaborate?
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Planning a Regional Summit, Property Expo or Gala?
                      </h2>
                      <p className="text-sm sm:text-base text-sky-100 mt-2 font-normal leading-relaxed">
                        Highrise provides turnkey event management, scenic stage design, and international delegate coordination with 18+ years of proven authority.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handlePageChange('services')}
                        className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Review Services
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handlePageChange('contact')}
                        className="px-6 py-3.5 rounded-full bg-white text-sky-700 hover:bg-sky-50 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-black/10"
                      >
                        Inquire Directly
                      </motion.button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* 2. ABOUT PAGE (Separated under About nav header) */}
            {activePage === 'about' && (
              <div className="pt-24">
                <AboutSection />
              </div>
            )}

            {/* 3. SERVICES PAGE (Separated under Services nav header) */}
            {activePage === 'services' && (
              <div className="pt-24">
                <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />
              </div>
            )}

            {/* 4. PORTFOLIO PAGE (Separated under Portfolio nav header) */}
            {activePage === 'portfolio' && (
              <div className="pt-24">
                <PortfolioSection onInquireProject={handleInquireProjectOrBrand} />
              </div>
            )}

            {/* 5. TEAM / LEADERSHIP PAGE (Separated under Leadership nav header) */}
            {activePage === 'team' && (
              <div className="pt-24">
                <TeamSection />
              </div>
            )}

            {/* 6. CONTACT PAGE (Separated under Contact nav header) */}
            {activePage === 'contact' && (
              <div className="pt-24">
                <ContactSection initialInterest={contactInitialInterest} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Case Study Modal from Homepage or elsewhere */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInquire={handleInquireProjectOrBrand}
      />

      {/* Footer */}
      <Footer onNavigate={handlePageChange} />
    </div>
  );
}
