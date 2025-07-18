'use client';

import React, { useEffect, useRef } from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import NotificationItem from './NotificationItem';
import { CloseIcon, BellIcon } from '../icons';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationDropdown({ isOpen, onClose }: NotificationDropdownProps) {
  const { notifications, unreadCount, markAllAsRead, clearAllNotifications } = useNotifications();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:relative md:inset-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" />
      
      <div
        ref={dropdownRef}
        className="fixed top-0 right-0 h-full w-full bg-white flex flex-col md:absolute md:top-full md:right-0 md:h-auto md:w-96 md:mt-3 md:airbnb-card md:border-0 transform transition-all duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) animate-airbnb-slide-in-right md:animate-airbnb-scale-in md:rounded-lg"
        style={{ 
          boxShadow: 'var(--airbnb-shadow-xl)'
        }}
      >
        <div className="flex items-center justify-between p-5 border-b border-airbnb-gray-200 bg-airbnb-gray-50 md:rounded-t-lg">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-bold text-airbnb-gray-900">Notifications</h3>
            {unreadCount > 0 && (
              <span className="airbnb-badge px-2 py-1 text-xs min-w-[24px] h-6 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="airbnb-button airbnb-button-ghost airbnb-button-sm text-airbnb-coral hover:text-airbnb-coral-dark"
              >
                Mark all read
              </button>
            )}
            
            <button
              onClick={onClose}
              className="airbnb-button airbnb-button-icon"
              aria-label="Close notifications"
              style={{ width: '32px', height: '32px' }}
            >
              <CloseIcon 
                size={20} 
                className="text-airbnb-gray-500"
                aria-label="Close notifications"
              />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto md:max-h-80">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-airbnb-gray-500">
              <BellIcon 
                size={64} 
                className="mx-auto mb-4 text-airbnb-gray-200"
                strokeWidth={1.5}
                aria-hidden={true}
              />
              <p className="text-base font-semibold text-airbnb-gray-300 mb-2">No notifications yet</p>
              <p className="text-sm text-airbnb-gray-300">You're all caught up!</p>
            </div>
          ) : (
            <div className="p-3 space-y-2">
              {notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className="animate-airbnb-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <NotificationItem
                    notification={notification}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div className="p-4 border-t border-airbnb-gray-200 bg-airbnb-gray-50 md:rounded-b-lg">
            <div className="flex items-center justify-between">
              <button
                onClick={clearAllNotifications}
                className="airbnb-button airbnb-button-ghost airbnb-button-sm text-airbnb-gray-600 hover:text-airbnb-gray-800"
              >
                Clear all
              </button>
              <span className="text-xs text-airbnb-gray-500 font-medium">
                {notifications.length} notification{notifications.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 