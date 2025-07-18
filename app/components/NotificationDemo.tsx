'use client';

import React from 'react';
import { useNotifications } from '../contexts/NotificationContext';

const generateRandomNumber = () => Math.floor(Math.random() * 9000) + 1000;

export default function NotificationDemo() {
  const { addNotification } = useNotifications();



  const createNotificationByType = (type: 'info' | 'success' | 'warning' | 'error') => {
    const randomNumber = generateRandomNumber();
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
    
    const notification = {
      title: `${typeCapitalized} Notification #${randomNumber}`,
      description: `you have new ${type} notification`,
      type: type,
    };
    
    addNotification(notification);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={() => createNotificationByType('info')}
          className="airbnb-button airbnb-button-secondary bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 font-semibold"
        >
          Info
        </button>
        <button
          onClick={() => createNotificationByType('success')}
          className="airbnb-button airbnb-button-secondary bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 font-semibold"
        >
          Success
        </button>
        <button
          onClick={() => createNotificationByType('warning')}
          className="airbnb-button airbnb-button-secondary bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 font-semibold"
        >
          Warning
        </button>
        <button
          onClick={() => createNotificationByType('error')}
          className="airbnb-button airbnb-button-secondary bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 font-semibold"
        >
          Error
        </button>
      </div>
    </div>
  );
} 