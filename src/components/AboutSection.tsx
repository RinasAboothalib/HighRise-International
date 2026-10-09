import React from 'react';
import { COMPANY_PROFILE } from '../data/highriseData';
import { Target, Compass, Award, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MaskedHeading, EASE_PREMIUM } from './motion/MotionUtils';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="py-20 sm:py-28 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page / Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 text-sky-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_2px_12px_rgba(14,165,233,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)]">
              <span>Corporate Identity & Heritage</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Founded 2007</span>
            </div>
          </ScrollReveal>

          <MaskedHeading as="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Built on Creative Audacity and Rigorous Execution.
          </MaskedHeading>

          <ScrollReveal direction="up" delay={0.25}>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Highrise Pvt Ltd was founded in 2007 in Malé, Republic of Maldives. Over nearly two decades of continuous innovation, we have transformed from a pioneering creative studio into an internationally operating event production, MICE, and publishing enterprise with hubs in the Maldives and Sri Lanka.
            </p>
          </ScrollReveal>
        </div>

        {/* Vision & Mission Grid with Curved Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <ScrollReveal direction="up" delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.28, ease: EASE_PREMIUM } }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-sky-50/50 to-white border border-sky-100 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-6 shadow-sm shadow-sky-600/30">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Our Strategic Mission</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                  Excellence with Commercial Impact
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {COMPANY_PROFILE.mission}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-sky-100 flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Full-Spectrum Quality Assurance Across Every Production</span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal direction="up" delay={0.25}>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.28, ease: EASE_PREMIUM } }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-sky-50/50 to-white border border-sky-100 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-6 shadow-sm shadow-sky-600/30">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Our Enduring Vision</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                  The Gold Standard in South Asian MICE
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {COMPANY_PROFILE.vision}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-sky-100 flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                <Award className="w-4 h-4 text-sky-600" />
                <span>Regional Hospitality & Trade Recognition Pioneer</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Corporate Footprint & Experience Overview */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Operating Footprint</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
                  Operating Hubs in Malé & Colombo
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  With dual operating bases in the Maldives and Sri Lanka, Highrise combines localized cultural mastery with international logistical mobility. We manage cross-border customs, multi-national delegations, and bilateral trade conventions with surgical precision.
                </p>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Headquarters:</strong>
                      <span>CHP #4 Building, 5th Floor, Orchid Magu, Malé, 20183, Maldives</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Regional Liaison Office:</strong>
                      <span>Colombo, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-200 transition-colors">
                  <span className="text-xs font-bold text-sky-600 block mb-1">01. Proprietary Event IPs</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We originate, own, and steer premier national exhibitions including Maldives Living Expo, Vacations Expo, and the F&B Show.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-200 transition-colors">
                  <span className="text-xs font-bold text-sky-600 block mb-1">02. Regional Travel Leadership</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Founders of the South Asian Travel Awards (SATA), endorsed by 15+ national hotel and travel associations across 6 countries.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-200 transition-colors">
                  <span className="text-xs font-bold text-sky-600 block mb-1">03. Cultural Ambassador</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Global producers of "Sounds of Maldives", touring authentic Maldivian music and boduberu across Dubai, Singapore, and KL.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-200 transition-colors">
                  <span className="text-xs font-bold text-sky-600 block mb-1">04. Hospitality Publishing</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Publishers of "The Island Chief" (monthly luxury travel tabloid) and "Floating Asia" (safari yacht and liveaboard media).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
