/**
 * Theme Toggle Component
 * Provides a switch to toggle between light and dark themes
 */

import React from 'react';
import { useTheme } from '@core/theme/useTheme';
import './theme-toggle.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

/**
 * ThemeToggle Component
 * Displays a toggle switch for switching between light and dark themes
 *
 * @example
 * <ThemeToggle />
 */
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Current theme: ${theme} (click to toggle)`}
    >
      <div className="theme-toggle__container">
  {/* Sun icon */}
  <Icon
    icon="solar:sun-bold"
    className="theme-toggle__icon theme-toggle__icon--sun"
  />

  {/* Moon icon */}
  <Icon
    icon="solar:moon-bold"
    className="theme-toggle__icon theme-toggle__icon--moon"
  />

  {/* Toggle slider */}
  <div className="theme-toggle__slider"></div>
</div>
    </button>
  );
};

export default ThemeToggle;
