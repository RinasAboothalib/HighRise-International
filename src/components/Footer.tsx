import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { HighriseLogo } from './BrandLogos';

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Wordmark & Overview */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <HighriseLogo size={30} variant="light" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Highrise Pvt Ltd is the Maldives’ premier event management, MICE production, and hospitality publishing powerhouse. Architecting high-impact trade exhibitions and cultural icons across South Asia since 2007.
            </p>

            <div className="pt-2 text-xs text-sky-400 font-semibold">
              Malé, Republic of Maldives · Colombo, Sri Lanka
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Home & Brand Logos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-sky-400 transition-colors"
                >
                  About & Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Seven Core Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Executive Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Verification & Contact Coordinates */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <span className="font-bold uppercase tracking-widest text-white block">
              Headquarters
            </span>
            <div className="space-y-2 text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200">Highrise Pvt Ltd</strong><br />
                CHP #4 Building, 5th Floor, Orchid Magu<br />
                Malé, 20183, Republic of Maldives
              </p>
              <p>
                Telephone:{' '}
                <a href="tel:+9603306606" className="text-slate-200 hover:text-white underline">
                  +960 330 6606
                </a>
              </p>
              <p>
                Official Dispatch:{' '}
                <a href="mailto:dosm@highriseint.com" className="text-sky-400 hover:underline">
                  dosm@highriseint.com
                </a>
              </p>
              <p>Web: www.highriseint.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Curved Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Highrise Pvt Ltd. All rights reserved. Registered in the Republic of Maldives.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
