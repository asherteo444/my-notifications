'use client';

import React, { useState } from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import BellIcon from './BellIcon';
import NotificationDropdown from './NotificationDropdown';

interface NotificationCenterProps {
  className?: string;
}

export default function NotificationCenter({ className = '' }: NotificationCenterProps) {
  const { unreadCount } = useNotifications();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleDropdown}
        className="airbnb-button airbnb-button-icon animate-airbnb-bounce"
        aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{ 
          animationDelay: unreadCount > 0 ? '0s' : '1s',
          animationDuration: unreadCount > 0 ? '0.4s' : '0s'
        }}
      >
        <BellIcon 
          unreadCount={unreadCount} 
          isOpen={isOpen} 
          className="transition-transform duration-200"
        />
      </button>

      {unreadCount > 0 && (
        <div className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 airbnb-badge flex items-center justify-center animate-airbnb-pulse z-20">
          <span className="text-white text-xs font-bold leading-none">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        </div>
      )}

      {unreadCount > 0 && !isOpen && (
        <div className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 rounded-full animate-ping opacity-30 z-10" 
             style={{ backgroundColor: 'var(--airbnb-coral)' }} />
      )}

      <NotificationDropdown 
        isOpen={isOpen} 
        onClose={closeDropdown}
      />
    </div>
  );
} 