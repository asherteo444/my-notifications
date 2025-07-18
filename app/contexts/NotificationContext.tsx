'use client';

import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';
import { Notification, NotificationContextType } from '../types/notification';
import { generateId } from '../utils/time';

interface NotificationState {
  notifications: Notification[];
}

type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'createdAt' | 'isRead'> }
  | { type: 'MARK_AS_READ'; payload: string }
  | { type: 'MARK_ALL_AS_READ' }
  | { type: 'CLEAR_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_ALL_NOTIFICATIONS' };

const initialState: NotificationState = {
  notifications: [],
};

function notificationReducer(state: NotificationState, action: NotificationAction): NotificationState {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          {
            ...action.payload,
            id: generateId(),
            createdAt: new Date(),
            isRead: false,
          },
          ...state.notifications,
        ],
      };
    
    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload
            ? { ...notification, isRead: true }
            : notification
        ),
      };
    
    case 'MARK_ALL_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification => ({
          ...notification,
          isRead: true,
        })),
      };
    
    case 'CLEAR_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.id !== action.payload),
      };
    
    case 'CLEAR_ALL_NOTIFICATIONS':
      return {
        ...state,
        notifications: [],
      };
    
    default:
      return state;
  }
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'>) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  }, []);

  const markAsRead = useCallback((id: string) => {
    dispatch({ type: 'MARK_AS_READ', payload: id });
  }, []);

  const markAllAsRead = useCallback(() => {
    dispatch({ type: 'MARK_ALL_AS_READ' });
  }, []);

  const clearNotification = useCallback((id: string) => {
    dispatch({ type: 'CLEAR_NOTIFICATION', payload: id });
  }, []);

  const clearAllNotifications = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL_NOTIFICATIONS' });
  }, []);

  const unreadCount = useMemo(() => {
    return state.notifications.filter(notification => !notification.isRead).length;
  }, [state.notifications]);

  const value = useMemo(() => ({
    notifications: state.notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearNotification,
    clearAllNotifications,
  }), [
    state.notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearNotification,
    clearAllNotifications,
  ]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
} 