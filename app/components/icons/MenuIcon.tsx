'use client';

import React from 'react';
import { BaseIconProps, defaultIconProps } from './types';

export default function MenuIcon({ 
  size = defaultIconProps.size,
  className = '',
  color = 'currentColor',
  strokeWidth = defaultIconProps.strokeWidth,
  'aria-label': ariaLabel = 'Menu',
  'aria-hidden': ariaHidden = false,
}: BaseIconProps) {
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      className={className}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
} 