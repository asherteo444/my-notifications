'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, DisplayIcon } from './icons';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getIconAndLabel = () => {
    if (theme === 'system') {
      return {
        icon: <DisplayIcon size={20} className="text-current" />,
        label: 'System',
        ariaLabel: 'Switch to light theme'
      };
    } else if (theme === 'light') {
      return {
        icon: <SunIcon size={20} className="text-current" />,
        label: 'Light',
        ariaLabel: 'Switch to dark theme'
      };
    } else {
      return {
        icon: <MoonIcon size={20} className="text-current" />,
        label: 'Dark',
        ariaLabel: 'Switch to system theme'
      };
    }
  };

  const { icon, ariaLabel } = getIconAndLabel();

  return (
    <button
      onClick={toggleTheme}
      className="airbnb-button airbnb-button-icon relative overflow-hidden group"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <div className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12">
        {icon}
      </div>
      
      <div className="absolute inset-0 rounded-full bg-current opacity-0 scale-75 group-hover:opacity-10 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none" />
    </button>
  );
};

export default ThemeToggle; 