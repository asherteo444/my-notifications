'use client';

import React from 'react';
import { Notification } from '../../types/notification';
import { formatTimeAgo, truncateText } from '../../utils/time';
import { useNotifications } from '../../contexts/NotificationContext';

interface NotificationItemProps {
  notification: Notification;
}

const typeStyles = {
  info: {
    container: 'bg-blue-50 border-blue-100 hover:bg-blue-100 border-l-4 border-l-blue-400',
    title: 'text-blue-900',
    description: 'text-blue-700'
  },
  success: {
    container: 'bg-emerald-50 border-emerald-100 hover:bg-emerald-100 border-l-4 border-l-emerald-400',
    title: 'text-emerald-900',
    description: 'text-emerald-700'
  },
  warning: {
    container: 'bg-amber-50 border-amber-100 hover:bg-amber-100 border-l-4 border-l-amber-400',
    title: 'text-amber-900',
    description: 'text-amber-700'
  },
  error: {
    container: 'bg-rose-50 border-rose-100 hover:bg-rose-100 border-l-4 border-l-rose-400',
    title: 'text-rose-900',
    description: 'text-rose-700'
  }
};

export default function NotificationItem({ notification }: NotificationItemProps) {
  const { markAsRead } = useNotifications();

  const handleClick = () => {
    if (!notification.isRead) {
      markAsRead(notification.id);
    }
  };

  return (
    <div
      className={`relative p-4 cursor-pointer group airbnb-notification-item ${notification.isRead 
        ? 'bg-airbnb-gray-50 border-airbnb-gray-200 opacity-90 hover:opacity-100' 
        : `${typeStyles[notification.type].container} shadow-sm`
      } animate-airbnb-fade-in`}
      onClick={handleClick}
    >
      {!notification.isRead && (
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full animate-airbnb-pulse" 
             style={{ backgroundColor: 'var(--airbnb-coral)' }} />
      )}

      <div className="flex items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className={`text-sm font-semibold ${notification.isRead ? 'text-airbnb-gray-600' : typeStyles[notification.type].title}`}>
              {truncateText(notification.title, 50)}
            </h4>
            <span className="text-xs text-airbnb-gray-500 ml-2 whitespace-nowrap font-medium">
              {formatTimeAgo(notification.createdAt)}
            </span>
          </div>
          
          <p className={`mt-1 text-sm leading-relaxed ${notification.isRead ? 'text-airbnb-gray-500' : typeStyles[notification.type].description}`}>
            {truncateText(notification.description, 100)}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg pointer-events-none" />
    </div>
  );
} 