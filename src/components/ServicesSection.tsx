import React, { useState } from 'react';
import { SERVICES } from '../data/highriseData';
import { CheckCircle2, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ScrollReveal, MaskedHeading, EASE_PREMIUM } from './motion/MotionUtils';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const shouldReduceMotion = useReducedMotion();

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="py-20 sm:py-28 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 text-sky-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_2px_12px_rgba(14,165,233,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)]">
                <span>Full-Spectrum Capabilities</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span>End-to-End Delivery</span>
              </div>
            </ScrollReveal>

            <MaskedHeading as="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Seven Specialized Disciplines. One Flawless Production Standard.
            </MaskedHeading>
          </div>

          <ScrollReveal direction="left" delay={0.2} className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              From strategic concept formulation and scenic 3D engineering to bilateral VIP protocol and international broadcast management.
            </p>
          </ScrollReveal>
        </div>

        {/* Studio View (Master-Detail with Service Selector and Deep Discipline Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Selector with Image Thumbnails */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`group text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-sky-50 border-sky-300 text-slate-900 shadow-md shadow-sky-500/10'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 overflow-hidden">
                    {/* Image Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-xs bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/15" />
                      <span className="absolute bottom-1 left-1.5 font-mono text-[10px] font-bold text-white drop-shadow-sm">
                        {service.number}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h2
                        className={`text-base font-bold tracking-tight truncate transition-colors ${
                          isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                        }`}
                      >
                        {service.title}
                      </h2>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 ml-2 transition-transform duration-200 shrink-0 ${
                      isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Service Detail View with Hero AI Visual Banner */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-9 sticky top-28 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
              >
                {/* Top Bar with Number and Standards Badge */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200/90 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-black text-sky-600">
                      {activeService.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Core Discipline
                    </span>
                  </div>
                  <div className="text-xs text-sky-700 font-semibold bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200">
                    Highrise Production Standard
                  </div>
                </div>

                {/* High-Resolution Hero Visual Showcase for Active Service */}
                {activeService.image && (
                  <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-7 border border-slate-200 shadow-sm group">
                    <motion.img
                      key={activeService.image}
                      initial={{ scale: 1.04, opacity: 0.85 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.45, ease: EASE_PREMIUM }}
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <div className="text-white">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-300 block mb-1">
                          Discipline In Action
                        </span>
                        <h3 className="text-xl font-extrabold text-white drop-shadow-sm">
                          {activeService.title}
                        </h3>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
                        <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                        <span>Turnkey Execution</span>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                    {activeService.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                    {activeService.fullDesc}
                  </p>

                  {/* Capabilities List */}
                  <div className="mb-8">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-4">
                      Core Execution Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeService.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables & Impact */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Key Deliverables
                      </span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-700 font-medium">
                        {activeService.deliverables.map((deliv, idx) => (
                          <span key={idx} className="flex items-center gap-1.5">
                            <span>{deliv}</span>
                            {idx < activeService.deliverables.length - 1 && (
                              <span aria-hidden="true" className="text-slate-300">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-sky-700 font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                      <span>{activeService.impactMetric}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        if (onSelectServiceForInquiry) {
                          onSelectServiceForInquiry(activeService.title);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-full transition-all shadow-md shadow-sky-600/25 active:scale-95"
                    >
                      <span>Inquire for {activeService.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.button>
                    <span className="text-xs text-slate-500 font-medium">
                      Turnkey Commercial Proposal
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
