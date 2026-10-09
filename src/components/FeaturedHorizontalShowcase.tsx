import React, { useRef, useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/highriseData';
import { ArrowLeft, ArrowRight, ArrowUpRight, Eye, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE_PREMIUM, MaskedHeading, ScrollReveal } from './motion/MotionUtils';

interface FeaturedHorizontalShowcaseProps {
  onSelectProject: (project: PortfolioProject) => void;
  onExploreAll: () => void;
}

export const FeaturedHorizontalShowcase: React.FC<FeaturedHorizontalShowcaseProps> = ({
  onSelectProject,
  onExploreAll,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollByAmount = (amount: number) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 text-sky-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_2px_12px_rgba(14,165,233,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)]">
                <span>Curated Event Showcase</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span>Landmark Productions</span>
              </div>
            </ScrollReveal>

            <MaskedHeading as="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Landmark Productions Across South Asia.
            </MaskedHeading>
          </div>

          <div className="flex items-center gap-3">
            {/* Scroll Navigation Arrows */}
            <button
              onClick={() => scrollByAmount(-380)}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-slate-700 transition-colors shadow-xs"
              aria-label="Previous projects"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByAmount(380)}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-slate-700 transition-colors shadow-xs"
              aria-label="Next projects"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreAll}
              className="ml-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors hidden sm:inline-flex"
            >
              Full Archive ({PORTFOLIO_PROJECTS.length}) →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Track with Momentum & Smooth Cards */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
        style={{ scrollPaddingLeft: '24px' }}
      >
        {PORTFOLIO_PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.id}
            whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.28, ease: EASE_PREMIUM } }}
            onClick={() => onSelectProject(proj)}
            className="group shrink-0 w-[300px] sm:w-[380px] md:w-[440px] rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-sky-500/10 transition-shadow duration-300 flex flex-col justify-between snap-start cursor-pointer"
          >
            {/* Image Container with Zoom Reveal */}
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  {proj.category}
                </span>
                <span className="text-[11px] font-semibold text-slate-200 bg-slate-900/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                  {proj.year}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-xs text-white flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-200 truncate">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{proj.venue}</span>
                </span>
                <span className="text-sky-300 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-1">
                  Client: {proj.client}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                  {proj.summary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-sky-600">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                </span>
                <span className="text-slate-400 font-normal">#{idx + 1} of {PORTFOLIO_PROJECTS.length}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
