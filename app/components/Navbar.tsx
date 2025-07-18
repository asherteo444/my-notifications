'use client';

import React from 'react';
import NotificationCenter from './notifications/NotificationCenter';
import { BellIcon, UserIcon, MenuIcon } from './icons';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-airbnb-gray-200 sticky top-0 z-40" 
         style={{ boxShadow: 'var(--airbnb-shadow-sm)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 airbnb-gradient-coral flex items-center justify-center" 
                   style={{ borderRadius: 'var(--airbnb-radius-sm)' }}>
                <BellIcon 
                  size={20} 
                  className="text-white"
                  aria-hidden={true}
                />
              </div>
              <span className="hidden md:block ml-3 text-xl font-bold text-airbnb-gray-900">My Notifications</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-airbnb-gray-700 hover:text-airbnb-coral font-semibold transition-colors">
              Home
            </a>
            <a href="#" className="text-airbnb-gray-700 hover:text-airbnb-coral font-semibold transition-colors">
              Services
            </a>
            <a href="#" className="text-airbnb-gray-700 hover:text-airbnb-coral font-semibold transition-colors">
              Company
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <NotificationCenter />

            <button className="airbnb-button airbnb-button-icon flex items-center space-x-2">
              <div className="w-8 h-8 bg-airbnb-gray-300 rounded-full flex items-center justify-center">
                <UserIcon 
                  size={20} 
                  className="text-airbnb-gray-600"
                  aria-label="User profile"
                />
              </div>
            </button>

            <button className="airbnb-button airbnb-button-icon md:hidden">
              <MenuIcon 
                size={24} 
                className="text-airbnb-gray-600"
                aria-label="Menu"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 