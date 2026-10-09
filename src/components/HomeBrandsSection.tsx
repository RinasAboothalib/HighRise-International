import React, { useState } from 'react';
import { BRANDS_AND_PUBLICATIONS, BrandItem } from '../data/highriseData';
import {
  FBShowLogo,
  LivingExpoLogo,
  VacationsExpoLogo,
  SoundsOfMaldivesLogo,
  IslandChiefLogo,
  FloatingAsiaLogo,
  SataLogo,
} from './BrandLogos';
import { BrandModal } from './BrandModal';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MaskedHeading, StaggerContainer, StaggerItem, EASE_PREMIUM } from './motion/MotionUtils';

interface HomeBrandsSectionProps {
  onInquireBrand: (brandName: string) => void;
}

export const HomeBrandsSection: React.FC<HomeBrandsSectionProps> = ({ onInquireBrand }) => {
  const [activeBrandModal, setActiveBrandModal] = useState<BrandItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const renderBrandLogo = (id: string) => {
    switch (id) {
      case 'fb-show':
        return <FBShowLogo className="h-20" />;
      case 'living-expo':
        return <LivingExpoLogo className="h-18" />;
      case 'vacations-expo':
        return <VacationsExpoLogo className="h-18" />;
      case 'sounds-of-maldives':
        return <SoundsOfMaldivesLogo className="h-22" />;
      case 'the-island-chief':
        return <IslandChiefLogo className="h-16" />;
      case 'floating-asia':
        return <FloatingAsiaLogo className="h-16" />;
      case 'sata':
        return <SataLogo className="h-16" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-sky-50/60 to-white border-t border-sky-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header with Masked Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">

            <MaskedHeading as="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Flagship Exhibitions, Cultural Icons & Publications.
            </MaskedHeading>
          </div>

          <ScrollReveal direction="left" delay={0.25} className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Beyond managing events for clients, Highrise originates, owns, and produces South Asia’s benchmark trade shows, awards platforms, and industry publications.
            </p>
          </ScrollReveal>
        </div>

        {/* Brand Grid with Staggered Entrance and Smooth Hover Physics */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS_AND_PUBLICATIONS.map((brand) => (
            <StaggerItem key={brand.id}>
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        scale: 1.015,
                        transition: { duration: 0.3, ease: EASE_PREMIUM },
                      }
                }
                className="group h-full rounded-3xl bg-white border border-sky-100 hover:border-sky-300 p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div>
                  {/* Logo Display Box with Curved Edges */}
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-b from-slate-50 to-sky-50/40 border border-slate-100 flex items-center justify-center p-4 mb-6 group-hover:scale-[1.03] transition-transform duration-300">
                    {renderBrandLogo(brand.id)}
                  </div>

                  {/* Brand Category & Frequency */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-3">
                    <span className="text-sky-700 font-semibold bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      {brand.type}
                    </span>
                    <span>Est. {brand.established}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {brand.name}
                  </h3>

                  <p className="text-xs font-semibold text-sky-600 mb-3">
                    {brand.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {brand.summary}
                  </p>
                </div>

                <div>
                  {/* Cadence Info */}
                  <div className="py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-xs text-slate-700 flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Cadence:</span>
                    <span className="font-semibold text-slate-900">{brand.frequency}</span>
                  </div>

                  {/* Card Action Controls */}
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <button
                      onClick={() => setActiveBrandModal(brand)}
                      className="text-sky-600 hover:text-sky-800 font-bold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onInquireBrand(brand.name)}
                      className="px-4 py-1.5 rounded-full text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
                    >
                      Partner →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Brand Inspection Modal */}
      <BrandModal
        brand={activeBrandModal}
        onClose={() => setActiveBrandModal(null)}
        onInquire={onInquireBrand}
      />
    </section>
  );
};
