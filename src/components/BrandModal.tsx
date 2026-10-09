import React from 'react';
import { BrandItem } from '../data/highriseData';
import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import {
  FBShowLogo,
  LivingExpoLogo,
  VacationsExpoLogo,
  SoundsOfMaldivesLogo,
  IslandChiefLogo,
  FloatingAsiaLogo,
  SataLogo
} from './BrandLogos';

interface BrandModalProps {
  brand: BrandItem | null;
  onClose: () => void;
  onInquire: (brandName: string) => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({ brand, onClose, onInquire }) => {
  if (!brand) return null;

  const renderLogo = () => {
    switch (brand.id) {
      case 'fb-show':
        return <FBShowLogo className="h-20" />;
      case 'living-expo':
        return <LivingExpoLogo className="h-18" />;
      case 'vacations-expo':
        return <VacationsExpoLogo className="h-18" />;
      case 'sounds-of-maldives':
        return <SoundsOfMaldivesLogo className="h-24" />;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Highrise Proprietary Asset</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-sky-600 font-bold">{brand.type}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Close brand modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Logo Spotlight Box with Curved Corners */}
          <div className="w-full py-6 px-4 rounded-2xl bg-gradient-to-b from-slate-50 to-sky-50/30 border border-slate-100 flex items-center justify-center">
            {renderLogo()}
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <span>Established {brand.established}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Cadence: {brand.frequency}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              {brand.name}
            </h2>
            <p className="text-sm font-semibold text-sky-600">
              {brand.tagline}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-1">
            <span className="text-xs font-bold uppercase text-sky-800 tracking-wider">
              Primary Target Audience
            </span>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              {brand.audience}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-2">
              Brand Profile & Editorial Background
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {brand.fullDescription}
            </p>
          </div>

          {/* Key Achievements & Impact Metrics */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs uppercase font-bold tracking-widest text-sky-700 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Key Benchmarks & Footprint</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {brand.keyStats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions with Curved Buttons */}
        <div className="px-6 sm:px-8 py-5 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-medium">
            Official Partnerships & Exhibitor Bookings
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {brand.websiteUrl && (
              <a
                href={brand.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 rounded-full border border-slate-200 hover:bg-white transition-colors w-full sm:w-auto"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => {
                onInquire(brand.name);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-full transition-colors w-full sm:w-auto text-center shadow-sm shadow-sky-600/20"
            >
              Partner with {brand.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
