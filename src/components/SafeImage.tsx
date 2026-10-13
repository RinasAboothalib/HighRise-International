import React, { useState } from 'react';
import { getAssetUrl, getRemoteFallbackUrl } from '../utils/imageUrl';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackInitials?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackInitials,
  ...rest
}) => {
  const [retryStage, setRetryStage] = useState(0);
  const [hasFailedAll, setHasFailedAll] = useState(false);

  // Compute current source based on retry stage
  const getResolvedSrc = () => {
    if (!src) return '';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return src;
    }

    // Stage 0: Local resolved asset path (relative to Vite base)
    if (retryStage === 0) {
      return getAssetUrl(src);
    }

    // Stage 1: Try alternate extension (.png <-> .jpg) locally
    if (retryStage === 1) {
      if (src.endsWith('.png')) {
        return getAssetUrl(src.replace(/\.png$/, '.jpg'));
      }
      if (src.endsWith('.jpg')) {
        return getAssetUrl(src.replace(/\.jpg$/, '.png'));
      }
      // If not png/jpg, skip to stage 2
      return getRemoteFallbackUrl(src);
    }

    // Stage 2: Direct official highriseint.com origin
    if (retryStage === 2) {
      return getRemoteFallbackUrl(src);
    }

    // Stage 3: Remote origin with alternate extension
    if (retryStage === 3) {
      const remote = getRemoteFallbackUrl(src);
      if (remote.endsWith('.png')) return remote.replace(/\.png$/, '.jpg');
      if (remote.endsWith('.jpg')) return remote.replace(/\.jpg$/, '.png');
      return remote;
    }

    return getAssetUrl(src);
  };

  const handleError = () => {
    if (retryStage < 3) {
      setRetryStage((prev) => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  if (hasFailedAll && fallbackInitials) {
    return (
      <div
        className={`bg-gradient-to-br from-sky-100 to-sky-50 text-sky-800 font-extrabold flex items-center justify-center ${className}`}
        aria-label={alt}
      >
        <span>{fallbackInitials}</span>
      </div>
    );
  }

  return (
    <img
      src={getResolvedSrc()}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      {...rest}
    />
  );
};
