import React, { useState } from 'react';
import { BRANDS_AND_PUBLICATIONS, BrandItem } from '../data/highriseData';
import { BrandModal } from './BrandModal';
import { ArrowUpRight, BookOpen, Calendar, Award, Music2, Globe, Building } from 'lucide-react';

interface BrandsSectionProps {
  onInquireBrand: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onInquireBrand }) => {
  const [activeBrandModal, setActiveBrandModal] = useState<BrandItem | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Flagship Event':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'Trade Exhibition':
        return <Building className="w-4 h-4 text-amber-400" />;
      case 'Publication & Media':
        return <BookOpen className="w-4 h-4 text-amber-400" />;
      case 'Cultural Platform':
        return <Music2 className="w-4 h-4 text-amber-400" />;
      default:
        return <Globe className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="brands" className="py-24 sm:py-32 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>Proprietary Intellectual Properties</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Events & Media Assets</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              Flagship Brands, Exhibitions & Regional Publications.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
            Beyond managing events for our clients, Highrise originates and operates industry-defining trade exhibitions, regional award institutions, and monthly publications.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BRANDS_AND_PUBLICATIONS.map((brand) => (
            <div
              key={brand.id}
              className="group rounded-lg bg-white/[0.02] border border-white/10 hover:border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div>
                {/* Unboxed Metadata & Icon */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    {getTypeIcon(brand.type)}
                    <span>{brand.type}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    Est. {brand.established}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {brand.name}
                </h3>

                <p className="text-xs text-amber-400 font-medium mb-3">
                  {brand.tagline}
                </p>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6">
                  {brand.summary}
                </p>
              </div>

              <div>
                {/* Stats Pill / Separators */}
                <div className="py-3 px-3.5 rounded bg-black/40 border border-white/5 mb-6 text-xs text-neutral-300 flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-[11px]">Cadence:</span>
                  <span className="font-medium text-white">{brand.frequency}</span>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs">
                  <button
                    onClick={() => setActiveBrandModal(brand)}
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Brand Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onInquireBrand(brand.name)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Partner →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
