import React, { useState, useMemo } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/highriseData';
import { Search, ArrowUpRight, MapPin, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ScrollReveal, MaskedHeading, EASE_PREMIUM } from './motion/MotionUtils';

interface PortfolioSectionProps {
  onInquireProject: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    'All',
    'Expos & Trade Shows',
    'Conferences & MICE',
    'Gala & Awards',
    'Music & Cultural'
  ];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesCategory =
        selectedCategory === 'All' || proj.category === selectedCategory;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-20 sm:py-28 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-100">
                <span>Historical Archive & Benchmark Works</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span>18-Year Proven Record</span>
              </div>
            </ScrollReveal>

            <MaskedHeading as="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Curated Event Portfolio & Landmark Productions.
            </MaskedHeading>
          </div>

          <ScrollReveal direction="left" delay={0.2} className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              From the South Asian Travel Awards to the premier Maldives Living Expo and global music tours, explore Highrise’s hallmark productions.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Controls & Search Bar with Curved Corners */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Segmented Category Filter Tabs with Motion Springs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? PORTFOLIO_PROJECTS.length
                  : PORTFOLIO_PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive ? 'text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolioFilterPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-sky-600 rounded-full -z-10 shadow-sm shadow-sky-600/30"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search with Curved Corners */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects, venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors"
            />
          </div>
        </div>

        {/* Project Grid with Motion Layout Transitions */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center rounded-3xl border border-slate-200 bg-slate-50">
            <p className="text-slate-600 text-sm mb-4">
              No projects matched your selected filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-sky-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const isFirstFeatured = index === 0 && selectedCategory === 'All';
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { y: -6, transition: { duration: 0.28, ease: EASE_PREMIUM } }
                    }
                    className={`group flex flex-col justify-between rounded-3xl bg-white border border-slate-200 hover:border-sky-300 transition-shadow duration-300 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-sky-500/10 ${
                      isFirstFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                  >
                    {/* Thumbnail Container with Image Zoom on Hover */}
                    <div
                      className={`relative overflow-hidden bg-slate-100 cursor-pointer ${
                        isFirstFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                      onClick={() => setActiveModalProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Metadata overlays with Curved Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-100 bg-slate-900/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                          {project.year}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="line-clamp-1 text-slate-200 font-medium flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{project.venue}</span>
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 text-sky-300 font-bold group-hover:translate-x-1 transition-transform">
                          <span>Inspect</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                      <div>
                        {/* Unboxed metadata line */}
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                          <span>Client: {project.client}</span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span>{project.location}</span>
                        </div>

                        <h2
                          onClick={() => setActiveModalProject(project)}
                          className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer mb-2"
                        >
                          {project.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                          {project.summary}
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-sky-600 hover:text-sky-800 font-bold inline-flex items-center gap-1.5 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Case Study</span>
                        </button>

                        <button
                          onClick={() => onInquireProject(project.title)}
                          className="text-slate-500 hover:text-slate-900 font-medium transition-colors"
                        >
                          Inquire Format →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={onInquireProject}
      />
    </div>
  );
};
