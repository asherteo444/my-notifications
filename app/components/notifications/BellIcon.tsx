'use client';

import React from 'react';
import { BellIcon as BellIconSVG } from '../icons';

interface BellIconProps {
  unreadCount: number;
  isOpen: boolean;
  className?: string;
}

export default function BellIcon({ unreadCount, isOpen, className = '' }: BellIconProps) {
  return (
    <div className={`relative ${className}`}>
      <BellIconSVG
        size={24}
        className={`transition-all duration-200 ${
          isOpen 
            ? 'text-airbnb-coral scale-110' 
            : 'text-airbnb-gray-600 hover:text-airbnb-coral'
        }`}
        aria-label="Notifications"
        aria-hidden={false}
      />
    </div>
  );
} 