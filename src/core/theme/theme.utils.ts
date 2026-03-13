/**
 * Utility functions for theme management
 */

import { ThemeType } from './theme.config';
import { THEME_STORAGE_KEY } from './theme.config';

/**
 * Get the current theme from DOM
 */
export const getCurrentTheme = (): ThemeType => {
  if (typeof document === 'undefined') return 'light';

  const theme = document.documentElement.getAttribute('data-theme') as ThemeType | null;
  return theme || 'light';
};

/**
 * Set theme on DOM
 */
export const setThemeOnDOM = (theme: ThemeType): void => {
  if (typeof document === 'undefined') return;

  document.documentElement.setAttribute('data-theme', theme);

  // Also add to body for additional styling options
  document.body.setAttribute('data-theme', theme);

  // Update meta theme-color (useful for mobile browsers)
  const metaTheme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', theme === 'dark' ? '#111827' : '#ffffff');
  }
};

/**
 * Get stored theme preference from localStorage
 */
export const getStoredTheme = (): ThemeType | null => {
  if (typeof localStorage === 'undefined') return null;

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return (stored as ThemeType) || null;
};

/**
 * Save theme preference to localStorage
 */
export const saveThemePreference = (theme: ThemeType): void => {
  if (typeof localStorage === 'undefined') return;

  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

/**
 * Remove theme preference from localStorage
 */
export const removeThemePreference = (): void => {
  if (typeof localStorage === 'undefined') return;

  localStorage.removeItem(THEME_STORAGE_KEY);
};

/**
 * Detect system theme preference
 * Uses prefers-color-scheme media query
 */
export const getSystemTheme = (): ThemeType => {
  if (typeof window === 'undefined') return 'light';

  // Check if system prefers dark mode
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

/**
 * Get initial theme based on priority:
 * 1. User's stored preference
 * 2. System preference
 * 3. Default theme
 */
export const getInitialTheme = (): ThemeType => {
  // Check if user has saved preference
  const stored = getStoredTheme();
  if (stored) {
    return stored;
  }

  // Fall back to system preference
  return getSystemTheme();
};

/**
 * Listen for system theme changes
 */
export const subscribeToSystemTheme = (callback: (theme: ThemeType) => void): (() => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
    const newTheme = e.matches ? 'dark' : 'light';
    callback(newTheme);
  };

  // Use addEventListener if available (modern browsers)
  if (darkModeQuery.addEventListener) {
    darkModeQuery.addEventListener('change', handleChange);

    // Return unsubscribe function
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }

  // Fallback for older browsers
  darkModeQuery.addListener(handleChange);
  return () => darkModeQuery.removeListener(handleChange);
};
