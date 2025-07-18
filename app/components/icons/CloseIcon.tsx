'use client';

import React from 'react';
import { BaseIconProps, defaultIconProps } from './types';

export default function CloseIcon({ 
  size = defaultIconProps.size,
  className = '',
  color = 'currentColor',
  strokeWidth = defaultIconProps.strokeWidth,
  'aria-label': ariaLabel = 'Close',
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
} 