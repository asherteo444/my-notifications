'use client';

import React from 'react';
import { BaseIconProps, defaultIconProps } from './types';

export default function UserIcon({ 
  size = defaultIconProps.size,
  className = '',
  color = 'currentColor',
  strokeWidth = defaultIconProps.strokeWidth,
  'aria-label': ariaLabel = 'User profile',
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
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
} 