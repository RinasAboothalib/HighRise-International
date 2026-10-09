import React from 'react';

// 1. Official Highrise Logo (Matching Uploaded SVG Logo, no sphere icon)
export const HighriseLogo: React.FC<{
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'dark' | 'light';
}> = ({
  className = '',
  size = 32,
  variant = 'dark',
}) => {
  const isLight = variant === 'light';
  const highColor = isLight ? '#FFFFFF' : '#0F172A';
  const riseColor = isLight ? '#38BDF8' : '#0284C7';

  return (
    <div className={`flex items-center ${className}`}>
      {/* Uploaded Highrise SVG Wordmark Logo */}
      <svg
        height={size}
        viewBox="0 0 220 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto max-h-9 w-auto transition-transform duration-200 group-hover:scale-105"
        role="img"
        aria-label="Highrise"
      >
        <g id="highrise-logo">
          {/* 'high' in dark slate or white */}
          <text
            x="0"
            y="40"
            fontFamily="Inter, 'Segoe UI', system-ui, -apple-system, sans-serif"
            fontSize="46"
            fontWeight="900"
            letterSpacing="-1.5px"
            fill={highColor}
          >
            high
          </text>
          {/* 'rise' in brand bright blue */}
          <text
            x="100"
            y="40"
            fontFamily="Inter, 'Segoe UI', system-ui, -apple-system, sans-serif"
            fontSize="46"
            fontWeight="900"
            letterSpacing="-1.5px"
            fill={riseColor}
          >
            rise
          </text>
          {/* Registered trademark symbol ® */}
          <text
            x="195"
            y="20"
            fontFamily="Inter, 'Segoe UI', system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="800"
            fill={riseColor}
          >
            ®
          </text>
        </g>
      </svg>
    </div>
  );
};

// 2. F&B Show Logo (Matching Uploaded Logo: 3D Red & Orange Slice / Green Apple)
export const FBShowLogo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 260 120" className="w-full h-full max-h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* "FOOD &" with orange and apple */}
        <g>
          {/* 'F' */}
          <text x="12" y="52" fill="#E11D48" fontSize="42" fontWeight="900" fontFamily="Inter, sans-serif">F</text>
          
          {/* Orange slice as first 'O' */}
          <g transform="translate(48, 22)">
            <circle cx="18" cy="18" r="17" fill="#EA580C" />
            <circle cx="18" cy="18" r="14" fill="#FDBA74" />
            <circle cx="18" cy="18" r="12" fill="#F97316" />
            {/* Orange segments */}
            <path d="M 18 18 L 18 7 M 18 18 L 27 10 M 18 18 L 28 23 M 18 18 L 20 28 M 18 18 L 10 27 M 18 18 L 7 18 M 18 18 L 10 10" stroke="#FFF" strokeWidth="1.2" />
          </g>

          {/* Green apple/tomato as second 'O' */}
          <g transform="translate(90, 20)">
            {/* Stem/leaf */}
            <path d="M 18 4 Q 22 1 24 5" stroke="#15803D" strokeWidth="2" fill="none" />
            <ellipse cx="23" cy="4" rx="4" ry="2" fill="#22C55E" />
            {/* Body */}
            <circle cx="18" cy="20" r="16" fill="#16A34A" />
            <circle cx="18" cy="20" r="12" fill="#4ADE80" opacity="0.6" />
          </g>

          {/* 'D' */}
          <text x="130" y="52" fill="#E11D48" fontSize="42" fontWeight="900" fontFamily="Inter, sans-serif">D</text>
          {/* '&' */}
          <text x="168" y="48" fill="#E11D48" fontSize="34" fontWeight="900" fontFamily="Inter, sans-serif">&</text>
        </g>

        {/* "BEVERAGE" */}
        <text x="10" y="86" fill="#DC2626" fontSize="32" fontWeight="900" letterSpacing="1" fontFamily="Inter, sans-serif">
          BEVERAGE
        </text>

        {/* "SHOW" */}
        <text x="12" y="112" fill="#64748B" fontSize="22" fontWeight="800" letterSpacing="4" fontFamily="Inter, sans-serif">
          SHOW
        </text>
      </svg>
    </div>
  );
};

// 3. Maldives Living Expo Logo (Matching Uploaded Logo: Blue Modern Typographic)
export const LivingExpoLogo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 280 100" className="w-full h-full max-h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* "Maldives" */}
        <text x="15" y="32" fill="#0284C7" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif">
          Maldives
        </text>

        {/* "LivingExpo" */}
        <g transform="translate(15, 70)">
          <text x="0" y="0" fill="#1D4ED8" fontSize="44" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
            Living<tspan fill="#2563EB">Expo</tspan>
          </text>
        </g>

        {/* "for the finer things in life." tagline */}
        <text x="120" y="88" fill="#475569" fontSize="10" fontStyle="italic" fontWeight="500" fontFamily="Inter, sans-serif">
          for the finer things in life..
        </text>
      </svg>
    </div>
  );
};

// 4. Vacations Expo Logo (Matching Uploaded Logo: 3D Blue Block Lettering)
export const VacationsExpoLogo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 290 100" className="w-full h-full max-h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vacationsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="60%" stopColor="#0369A1" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>

        {/* 3D Depth Shadow */}
        <text x="14" y="48" fill="#0C4A6E" fontSize="38" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">
          VACATIONS
        </text>
        <text x="94" y="88" fill="#0C4A6E" fontSize="38" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">
          EXPO
        </text>

        {/* Main Foreground Text */}
        <text x="12" y="46" fill="url(#vacationsGrad)" fontSize="38" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">
          VACATIONS
        </text>
        <text x="92" y="86" fill="url(#vacationsGrad)" fontSize="38" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">
          EXPO
        </text>
      </svg>
    </div>
  );
};

// 5. Sounds of Maldives Logo (Matching Uploaded Logo: Lime acoustic badge & Boduberu silhouette)
export const SoundsOfMaldivesLogo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 160 160" className="w-full h-full max-h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circular background badge */}
        <circle cx="80" cy="80" r="76" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

        {/* Lime sound splash */}
        <path
          d="M 45 65 Q 40 40 70 42 Q 95 35 110 50 Q 120 70 115 95 Q 95 115 65 110 Q 40 100 45 65 Z"
          fill="#84CC16"
          opacity="0.85"
        />

        {/* Palm tree silhouette */}
        <g transform="translate(85, 38) scale(0.6)">
          <path d="M 12 25 Q 14 10 12 0" stroke="#4D7C0F" strokeWidth="2.5" fill="none" />
          <path d="M 12 2 Q 4 -4 0 2" stroke="#4D7C0F" strokeWidth="2" fill="none" />
          <path d="M 12 2 Q 22 -6 24 2" stroke="#4D7C0F" strokeWidth="2" fill="none" />
          <path d="M 12 2 Q 10 -8 12 -8" stroke="#4D7C0F" strokeWidth="2" fill="none" />
        </g>

        {/* Speaker / Woofer cone */}
        <circle cx="82" cy="82" r="34" fill="#18181B" />
        <circle cx="82" cy="82" r="30" stroke="#84CC16" strokeWidth="1" fill="none" />
        <circle cx="82" cy="82" r="22" fill="#84CC16" />
        <circle cx="82" cy="82" r="10" fill="#18181B" />
        <circle cx="82" cy="82" r="6" fill="#84CC16" />

        {/* Script text "Sounds of Maldives" */}
        <text
          x="80"
          y="132"
          fill="#4D7C0F"
          fontSize="11"
          fontWeight="700"
          fontStyle="italic"
          fontFamily="cursive, Inter"
          textAnchor="middle"
        >
          Sounds of Maldives
        </text>
      </svg>
    </div>
  );
};

// 6. The Island Chief Logo (Matching Uploaded Logo: Ornate Serif / Blackletter)
export const IslandChiefLogo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 290 80" className="w-full h-full max-h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text
          x="145"
          y="54"
          fill="#1E293B"
          fontSize="34"
          fontWeight="900"
          fontFamily="'Playfair Display', Georgia, serif"
          letterSpacing="0.8"
          textAnchor="middle"
        >
          The islandchief
        </text>
      </svg>
    </div>
  );
};

// 7. Floating Asia Logo (Matching Uploaded Logo: Clean type with bright blue .com)
export const FloatingAsiaLogo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 280 80" className="w-full h-full max-h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* "Floatingasia" */}
        <text x="15" y="52" fill="#1E293B" fontSize="36" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.5">
          floatingasia
        </text>

        {/* ".com" with brush script style */}
        <text
          x="200"
          y="66"
          fill="#0284C7"
          fontSize="30"
          fontWeight="900"
          fontStyle="italic"
          fontFamily="Inter, sans-serif"
        >
          .com
        </text>
      </svg>
    </div>
  );
};

// 8. South Asian Travel Awards (SATA) Emblem
export const SataLogo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 240 80" className="w-full h-full max-h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Golden Globe Emblem */}
        <circle cx="38" cy="40" r="24" fill="#0284C7" opacity="0.1" stroke="#0284C7" strokeWidth="2" />
        <path d="M 38 16 Q 48 40 38 64 M 38 16 Q 28 40 38 64 M 14 40 L 62 40" stroke="#0284C7" strokeWidth="1.5" />
        <circle cx="38" cy="40" r="7" fill="#0EA5E9" />

        <text x="74" y="38" fill="#0F172A" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif">
          SATA
        </text>
        <text x="74" y="54" fill="#0284C7" fontSize="10" fontWeight="700" letterSpacing="1.5" fontFamily="Inter, sans-serif">
          SOUTH ASIAN TRAVEL AWARDS
        </text>
      </svg>
    </div>
  );
};
