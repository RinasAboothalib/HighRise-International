import React, { useRef } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { EASE_PREMIUM, AnimatedCounter } from './motion/MotionUtils';

interface HeroProps {
  onNavigate: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ['0%', '8%']);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 min-h-[92vh] flex flex-col justify-between"
    >
      {/* Decorative ambient glass light orbs with subtle parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : bgY }}
        className="absolute top-10 left-1/4 -translate-x-1/2 w-[700px] h-[480px] bg-gradient-to-tr from-sky-200/45 via-cyan-100/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : bgY }}
        className="absolute top-24 right-6 w-[560px] h-[440px] bg-gradient-to-bl from-blue-200/30 via-sky-100/30 to-indigo-50/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 my-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column with Staggered Entrance */}
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : textOpacity,
              y: shouldReduceMotion ? 0 : textY,
            }}
            className="lg:col-span-7"
          >
            {/* 1. Kicker / Trust Glass Pill Reveal */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 text-sky-900 text-xs font-semibold mb-6 shadow-[0_4px_20px_rgba(14,165,233,0.1),inset_0_1px_1px_rgba(255,255,255,0.95)]"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
              <span>Established 2007 · Malé, Maldives & Colombo, Sri Lanka</span>
            </motion.div>

            {/* 2. Headline with Masked Upward Reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{ duration: 0.85, delay: 0.22, ease: EASE_PREMIUM }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Architects of Premier Events, Exhibitions & Cultural Legacies.
              </motion.h1>
            </div>

            {/* 3. Supporting Description Fade In */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE_PREMIUM }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8"
            >
              For over 18 years, Highrise has engineered landmark property expos, national tourism conventions, regional hospitality summits across South Asia, and world-stage music showcases.
            </motion.p>

            {/* 4. Action CTAs with Staggered Entrance */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58, ease: EASE_PREMIUM }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-full transition-colors shadow-md shadow-sky-600/25 active:scale-95"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-sky-600 bg-white/70 backdrop-blur-xl hover:bg-white/90 border border-white/80 rounded-full transition-all shadow-[0_4px_16px_rgba(15,23,42,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] active:scale-95"
              >
                <span>Our Services</span>
              </motion.button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors py-2 px-3"
              >
                <span>Inquire for Events →</span>
              </button>
            </motion.div>

            {/* 5. Trust Badges in Glass Container */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              className="pt-6 border-t border-slate-200/60"
            >
              <div className="inline-flex flex-wrap items-center gap-4 sm:gap-6 px-4 py-2.5 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(15,23,42,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>250+ Major Productions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>45+ National & Regional Expos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>8 International Capitals</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Feature with Clipping Mask & Smooth Zoom Out Settling */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.96, y: 30 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.35, ease: EASE_PREMIUM }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-sky-100 shadow-2xl shadow-sky-950/10 bg-white aspect-[4/3] sm:aspect-[16/11]">
              <motion.img
                initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, delay: 0.35, ease: EASE_PREMIUM }}
                src="/images/hero_highrise_gala_1791518771053.jpg"
                alt="Highrise International Grand Gala Stage Production"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Floating Stage Spotlight Glass Tag */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: EASE_PREMIUM }}
                className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.15),inset_0_1px_1px_rgba(255,255,255,0.95)] flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Gala & Award Summits
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    South Asian Travel Awards (SATA)
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-600 hover:text-white text-sky-700 font-semibold text-xs transition-colors border border-sky-400/20 backdrop-blur-sm"
                >
                  View
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quantitative Proof Strip with Frosted Glass Metric Cards */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE_PREMIUM }}
          className="mt-16 pt-10 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_rgba(15,23,42,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col hover:bg-white/85 hover:border-sky-300 hover:shadow-[0_12px_36px_rgba(8,124,255,0.12),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight tabular-nums">
                <AnimatedCounter to={18} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Years of Industry Leadership
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_rgba(15,23,42,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col hover:bg-white/85 hover:border-sky-300 hover:shadow-[0_12px_36px_rgba(8,124,255,0.12),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight tabular-nums">
                <AnimatedCounter to={250} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Major Productions Executed
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_rgba(15,23,42,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col hover:bg-white/85 hover:border-sky-300 hover:shadow-[0_12px_36px_rgba(8,124,255,0.12),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight tabular-nums">
                <AnimatedCounter to={45} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Exhibition Editions Delivered
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_rgba(15,23,42,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col hover:bg-white/85 hover:border-sky-300 hover:shadow-[0_12px_36px_rgba(8,124,255,0.12),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight tabular-nums">
                <AnimatedCounter to={8} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                International Capitals Hosted
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator with Floating Bounce Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="w-full flex justify-center pt-8 pb-2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-400"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 text-sky-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};
