import React, { useState } from 'react';

/**
 * Image resolution and multi-tier fallback helper.
 * Guarantees images load regardless of deployment base URL, subdirectories, or hosting environment.
 */

// Deployment base URL provided by Vite (e.g. './' or '/subpath/' or '/')
export const getAssetUrl = (path: string | undefined): string => {
  if (!path) return '';
  // If already absolute HTTP/HTTPS or data URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const rawBase = import.meta.env.BASE_URL || '/';

  // If base is relative or empty
  if (rawBase === './' || rawBase === '') {
    return `./${cleanPath}`;
  }

  const cleanBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  return `${cleanBase}${cleanPath}`;
};

/**
 * Returns remote fallback URL on the official highriseint.com origin
 */
export const getRemoteFallbackUrl = (path: string | undefined): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://highriseint.com${clean}`;
};

/**
 * Reusable image error handler for native <img> elements
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  originalPath?: string
) => {
  const target = e.currentTarget;
  const currentSrc = target.src;
  const stage = parseInt(target.getAttribute('data-retry-stage') || '0', 10);

  if (stage === 0) {
    target.setAttribute('data-retry-stage', '1');
    // If local path was .png try .jpg or vice-versa
    if (currentSrc.endsWith('.png')) {
      target.src = currentSrc.replace(/\.png$/, '.jpg');
      return;
    } else if (currentSrc.endsWith('.jpg')) {
      target.src = currentSrc.replace(/\.jpg$/, '.png');
      return;
    }
  }

  if (stage <= 1) {
    target.setAttribute('data-retry-stage', '2');
    const path = originalPath || target.getAttribute('data-original-src');
    if (path && !path.startsWith('http')) {
      target.src = getRemoteFallbackUrl(path);
      return;
    }
  }

  // Prevent infinite loop
  target.setAttribute('data-retry-stage', '3');
};
