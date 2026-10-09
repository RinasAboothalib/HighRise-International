import React, { useState, useMemo } from 'react';
import { MANAGEMENT_TEAM, TeamMember } from '../data/highriseData';
import { Mail, CheckCircle2, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ScrollReveal, MaskedHeading, StaggerContainer, StaggerItem, EASE_PREMIUM } from './motion/MotionUtils';

export const TeamSection: React.FC = () => {
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(MANAGEMENT_TEAM.map((m) => m.category)))];
    return cats;
  }, []);

  const filteredMembers = useMemo(() => {
    return MANAGEMENT_TEAM.filter((member) => {
      const matchesCategory = selectedCategory === 'All' || member.category === selectedCategory;
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.specialization.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedMemberId(expandedMemberId === id ? null : id);
  };

  return (
    <div className="py-20 sm:py-28 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-100">
                <span>Executive Leadership & Official Profiles</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span>Highrise International</span>
              </div>
            </ScrollReveal>

            <MaskedHeading as="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              The Leadership Behind South Asia's Premier Experiences.
            </MaskedHeading>
          </div>

          <ScrollReveal direction="left" delay={0.2} className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Official profiles from Highrise International — co-founded by Ismail Hameed and Ismail Shifraz, steering event production, MICE logistics, publications, and regional hospitality diplomacy.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Controls: Categories and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? MANAGEMENT_TEAM.length
                  : MANAGEMENT_TEAM.filter((m) => m.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team or role..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Team Grid with Staggered Entrance and Authentic Profile Photos */}
        {filteredMembers.length > 0 ? (
          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => {
              const isExpanded = expandedMemberId === member.id;
              return (
                <StaggerItem key={member.id}>
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { y: -5, transition: { duration: 0.28, ease: EASE_PREMIUM } }
                    }
                    className="group h-full rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-sky-300 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:bg-white"
                  >
                    <div>
                      {/* Top Row: Authentic Profile Picture + Category Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-white shadow-md shadow-sky-950/10 bg-slate-100 shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center text-sky-700 font-extrabold text-lg">
                              {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                            </div>
                          )}
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                          {member.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {member.name}
                      </h2>

                      <div className="text-xs sm:text-sm font-semibold text-sky-600 mt-1 mb-2">
                        {member.role}
                      </div>

                      <div className="text-xs text-slate-500 font-medium mb-4 pb-4 border-b border-slate-200/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{member.experience}</span>
                      </div>

                      {/* Biography */}
                      <p
                        className={`text-xs sm:text-sm text-slate-600 leading-relaxed font-normal transition-all ${
                          isExpanded ? '' : 'line-clamp-3'
                        }`}
                      >
                        {member.bio}
                      </p>

                      {/* Specializations list with smooth accordion expansion */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                            className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 overflow-hidden"
                          >
                            <span className="text-[11px] font-bold uppercase text-slate-500 block mb-2">
                              Core Specializations:
                            </span>
                            {member.specialization.map((spec, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                                <span>{spec}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Footer with Mailto & Expand Toggle with Curved Elements */}
                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-sky-600 font-medium transition-colors"
                        title={`Send inquiry to ${member.name}`}
                      >
                        <Mail className="w-4 h-4 text-sky-600" />
                        <span className="truncate max-w-[150px] sm:max-w-[170px]">{member.email}</span>
                      </a>

                      <button
                        onClick={() => toggleExpand(member.id)}
                        className="px-3 py-1 rounded-full bg-white hover:bg-sky-50 text-sky-600 font-bold border border-slate-200 hover:border-sky-200 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{isExpanded ? 'Less' : 'Bio'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        ) : (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-slate-600 font-medium text-sm">No team members match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-sky-600 hover:text-sky-700 underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
