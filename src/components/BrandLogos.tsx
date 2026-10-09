import React from 'react';

// 1. Official Highrise Logo (Authentic Vector Wordmark)
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
  const highColor = isLight ? '#FFFFFF' : '#111827';
  const riseColor = isLight ? '#38BDF8' : '#00ADEF';

  return (
    <div className={`flex items-center ${className}`}>
      {/* Official Highrise Authentic Vector Logo */}
      <svg
        height={size}
        viewBox="0 0 1200 408"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto max-h-9 w-auto transition-transform duration-200 group-hover:scale-105"
        role="img"
        aria-label="Highrise"
      >
        <g transform="translate(0, 408) scale(0.1, -0.1)">
          <g fill={highColor} id="high-wordmark">
            <path d="M56 4057 c-3 -13 -17 -29 -31 -35 -25 -12 -25 -12 -25 -931 l0 -919 71 -12 c124 -21 170 -2 182 78 8 50 75 191 113 239 103 131 210 209 394 289 81 36 90 37 225 42 179 6 248 -6 356 -61 108 -54 187 -116 270 -208 113 -128 159 -210 159 -286 0 -53 19 -81 66 -99 90 -34 184 -3 184 62 0 47 -42 200 -64 234 -12 19 -28 50 -34 68 -6 19 -24 49 -39 67 -155 186 -171 201 -312 294 -20 13 -49 34 -64 47 -15 13 -47 29 -70 35 -23 6 -66 22 -95 36 -113 53 -361 69 -539 34 -160 -32 -320 -110 -420 -207 -42 -41 -90 -61 -112 -47 -14 9 -16 69 -21 604 -5 593 -5 594 -27 634 -13 22 -23 45 -23 52 0 9 -20 13 -69 13 -64 0 -69 -2 -75 -23z" />
            <path d="M2386 4054 c-4 -15 -18 -43 -32 -63 -13 -19 -24 -45 -24 -56 0 -38 39 -86 87 -107 78 -34 138 -4 163 81 7 25 3 46 -18 101 -27 70 -27 70 -98 70 -69 0 -72 -1 -78 -26z" />
            <path d="M5285 4053 c-4 -16 -13 -43 -21 -61 -12 -28 -14 -169 -14 -916 0 -884 0 -884 31 -910 17 -14 42 -29 56 -32 35 -9 98 12 134 44 26 23 32 38 40 102 11 80 12 82 76 186 61 99 202 213 327 266 153 64 180 70 341 70 161 0 193 -6 320 -60 87 -36 159 -88 244 -173 87 -87 129 -140 145 -186 7 -21 23 -56 35 -78 11 -22 21 -55 21 -73 0 -51 46 -92 103 -92 64 0 103 10 126 32 26 24 27 58 1 108 -11 21 -29 74 -41 117 -12 43 -31 92 -44 108 -12 17 -32 49 -44 73 -28 56 -221 250 -286 288 -27 16 -72 43 -99 61 -26 18 -54 33 -61 33 -7 0 -37 11 -68 25 -87 40 -217 65 -345 65 -134 0 -289 -23 -345 -51 -22 -12 -58 -27 -80 -35 -53 -19 -146 -79 -213 -136 -57 -50 -100 -62 -123 -34 -9 11 -12 162 -10 588 1 574 1 574 -25 612 -14 22 -26 49 -26 62 0 23 -3 24 -75 24 -73 0 -75 0 -80 -27z" />
            <path d="M2380 3012 c-40 -40 -40 -40 -40 -422 0 -382 0 -382 31 -411 50 -47 136 -51 175 -7 18 19 19 46 22 392 2 239 -1 384 -7 407 -15 49 -42 70 -95 76 -43 5 -48 3 -86 -35z" />
            <path d="M3753 3020 c-34 -5 -74 -15 -90 -24 -16 -8 -59 -24 -97 -36 -64 -21 -119 -52 -216 -122 -68 -49 -209 -197 -236 -248 -14 -25 -36 -60 -49 -78 -13 -18 -30 -54 -39 -80 -8 -26 -26 -74 -40 -107 -31 -74 -34 -135 -6 -160 29 -26 102 -31 155 -11 54 21 53 20 66 92 22 117 189 345 294 401 17 9 44 26 60 39 17 13 76 42 130 65 96 40 105 42 230 47 141 5 174 -1 317 -56 115 -44 271 -169 361 -287 38 -51 72 -120 109 -225 25 -73 47 -90 113 -90 109 0 154 43 121 118 -9 20 -27 75 -41 122 -14 47 -38 103 -54 125 -15 22 -35 54 -44 70 -19 37 -185 207 -252 258 -75 58 -178 115 -242 136 -32 11 -78 27 -102 36 -53 19 -348 29 -448 15z" />
            <path d="M4760 1917 c-34 -12 -37 -17 -81 -142 -28 -79 -60 -147 -80 -174 -96 -126 -279 -271 -390 -310 -67 -23 -258 -35 -385 -23 -112 11 -124 14 -208 58 -82 43 -246 165 -246 183 0 5 -18 29 -40 54 -22 25 -47 61 -55 81 -8 19 -25 50 -38 70 -14 19 -27 58 -31 86 -5 35 -15 60 -35 82 -24 27 -36 32 -89 36 -58 4 -63 3 -92 -26 -38 -39 -40 -92 -4 -177 14 -33 34 -85 46 -115 11 -30 31 -66 43 -80 13 -14 32 -44 43 -66 26 -52 183 -211 258 -261 111 -74 217 -124 319 -150 98 -24 399 -25 505 -1 131 29 285 111 388 206 56 51 108 56 128 12 7 -17 8 -91 4 -225 -6 -191 -7 -203 -34 -260 -15 -33 -34 -79 -41 -103 -37 -119 -198 -298 -333 -369 -43 -23 -104 -48 -136 -57 -63 -16 -96 -41 -119 -88 -13 -27 -12 -36 7 -94 21 -64 21 -64 129 -64 83 0 107 3 107 13 0 22 32 46 97 71 88 34 167 92 258 189 93 98 119 132 159 201 51 91 54 99 93 241 38 140 38 140 41 635 2 531 2 533 -48 556 -41 19 -103 23 -140 11z" />
            <path d="M5310 1913 c-56 -29 -59 -47 -59 -431 -1 -368 2 -392 50 -426 30 -20 98 -21 127 -1 12 9 33 35 46 58 25 42 25 42 25 367 0 322 0 325 -24 365 -12 22 -31 48 -41 57 -30 26 -84 31 -124 11z" />
            <path d="M48 1897 c-48 -21 -48 -21 -48 -417 0 -396 0 -396 53 -418 89 -37 154 -25 182 33 22 48 23 721 0 765 -33 63 -99 76 -187 37z" />
            <path d="M1842 1897 c-49 -52 -52 -74 -52 -417 0 -321 0 -321 25 -370 14 -27 34 -54 44 -60 26 -13 87 -13 113 1 44 24 48 56 48 429 0 373 -4 405 -48 429 -37 20 -106 13 -130 -12z" />
            <path d="M2402 1906 c-13 -7 -32 -26 -43 -42 -18 -27 -19 -50 -19 -377 0 -377 1 -382 56 -426 29 -23 79 -27 118 -10 53 25 56 47 56 423 0 372 -3 396 -51 430 -28 19 -85 20 -117 2z" />
          </g>
          <g fill={riseColor} id="rise-wordmark">
            <path d="M8726 4027 c-39 -107 -22 -175 49 -203 41 -15 45 -15 87 4 25 11 55 30 66 43 30 32 29 92 -2 133 -13 17 -26 41 -30 54 -7 20 -13 22 -79 22 -72 0 -72 0 -91 -53z" />
            <path d="M11508 3045 c-77 -13 -86 -16 -190 -74 -112 -63 -221 -214 -259 -361 -13 -53 -11 -190 5 -245 21 -77 62 -167 88 -195 35 -38 98 -123 98 -132 0 -4 -27 -39 -60 -77 -38 -44 -74 -100 -97 -153 -37 -81 -38 -86 -38 -203 0 -116 1 -124 38 -216 32 -81 48 -106 111 -175 60 -64 90 -87 159 -122 77 -40 93 -44 179 -49 109 -7 143 5 177 60 30 49 26 71 -21 120 -42 43 -45 44 -119 50 -90 6 -118 19 -179 80 -103 102 -122 140 -122 242 0 122 76 238 202 305 13 7 57 16 98 21 83 9 114 25 142 72 29 47 25 81 -13 123 -31 34 -39 37 -109 44 -50 5 -88 14 -110 28 -18 12 -49 30 -69 41 -20 11 -51 42 -68 68 -17 26 -37 57 -46 69 -23 31 -34 110 -25 176 10 67 43 121 123 200 52 50 94 68 165 68 23 0 57 6 76 14 38 16 96 82 96 110 0 34 -40 84 -84 105 -48 24 -44 24 -148 6z" />
            <path d="M8260 3031 c-36 -9 -81 -27 -100 -38 -19 -11 -51 -26 -71 -32 -46 -15 -202 -147 -278 -235 -99 -116 -131 -157 -131 -170 0 -6 -16 -36 -35 -66 -19 -30 -37 -70 -40 -90 -4 -19 -13 -67 -22 -107 -8 -39 -13 -82 -9 -96 9 -36 66 -60 128 -55 62 6 101 34 110 79 26 128 34 155 55 183 12 17 33 51 47 76 66 118 271 278 405 316 67 19 124 56 140 90 34 75 -9 153 -89 160 -25 2 -74 -5 -110 -15z" />
            <path d="M8745 3028 c-14 -13 -30 -41 -35 -63 -14 -61 -12 -722 3 -765 17 -49 74 -77 126 -62 20 7 50 25 66 42 30 31 30 31 30 398 0 338 -1 370 -19 402 -26 50 -55 70 -103 70 -29 0 -50 -7 -68 -22z" />
            <path d="M10655 3005 c-33 -15 -80 -33 -105 -42 -40 -14 -132 -71 -240 -149 -76 -54 -195 -195 -261 -306 -40 -68 -89 -225 -89 -285 0 -46 47 -83 106 -83 89 0 124 39 163 178 14 50 34 90 74 143 83 113 225 236 309 269 129 51 196 89 217 123 31 50 27 90 -11 132 -45 48 -85 53 -163 20z" />
            <path d="M10031 1920 c-59 -14 -89 -55 -106 -145 -10 -48 -24 -90 -39 -109 -13 -17 -31 -47 -41 -66 -22 -43 -93 -122 -154 -172 -82 -65 -208 -138 -262 -149 -40 -9 -64 -22 -98 -55 -43 -40 -46 -46 -46 -94 0 -44 4 -55 28 -76 33 -28 93 -32 172 -10 61 17 212 96 293 153 63 45 222 196 222 212 0 5 15 28 34 50 19 23 40 58 47 79 6 20 25 55 40 77 33 47 48 107 49 193 0 76 -9 96 -51 111 -36 12 -40 12 -88 1z" />
            <path d="M7077 1899 c-45 -35 -49 -68 -45 -439 3 -310 5 -348 21 -371 50 -74 159 -62 202 21 22 43 22 697 0 740 -35 69 -123 93 -178 49z" />
            <path d="M7617 1902 c-9 -9 -25 -38 -36 -62 -19 -42 -21 -65 -21 -360 0 -312 0 -316 24 -367 27 -57 48 -73 98 -73 48 0 79 20 105 65 22 39 23 46 23 373 0 333 0 333 -26 378 -14 24 -34 49 -44 54 -31 17 -105 12 -123 -8z" />
            <path d="M8745 1895 c-14 -13 -25 -37 -26 -52 0 -15 -1 -184 -1 -375 -1 -249 3 -356 11 -376 14 -33 47 -52 92 -52 44 0 66 15 90 61 20 39 21 56 20 380 0 321 -1 340 -21 378 -24 48 -45 61 -100 61 -30 0 -47 -6 -65 -25z" />
          </g>
          <g fill={riseColor} id="registered-trademark">
            <path d="M11810 3314 c-78 -66 -79 -158 -1 -213 37 -26 71 -27 104 -1 14 12 40 25 57 31 28 10 30 14 30 65 0 32 -4 54 -11 54 -6 0 -30 20 -55 45 -51 53 -78 57 -124 19z" />
          </g>
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
