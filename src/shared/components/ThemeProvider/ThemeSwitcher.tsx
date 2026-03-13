/**
 * Theme Switcher Component
 * Button component to toggle between light and dark themes
 */

import React from 'react';
import { useTheme, THEMES } from '@core/theme';
import styles from './ThemeSwitcher.module.scss';

export interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * ThemeSwitcher Component
 * Renders a button to toggle between themes
 *
 * @param {string} className - Optional CSS class
 * @param {boolean} showLabel - Show theme label (default: false)
 *
 * @example
 * <ThemeSwitcher showLabel />
 */
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();

  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const nextThemeConfig = THEMES[nextTheme];

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeSwitcher} ${className}`}
      title={`Switch to ${nextThemeConfig.label} theme`}
      aria-label={`Switch to ${nextThemeConfig.label} theme`}
    >
      <span className={styles.icon}>{nextThemeConfig.icon}</span>
      {showLabel && <span className={styles.label}>{nextThemeConfig.label}</span>}
    </button>
  );
};

export default ThemeSwitcher;
