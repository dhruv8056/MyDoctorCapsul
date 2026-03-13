/**
 * Theme Context
 * Central theme management using React Context
 */

import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { ThemeType, DEFAULT_THEME } from './theme.config';
import {
  getInitialTheme,
  removeThemePreference,
  saveThemePreference,
  setThemeOnDOM,
  subscribeToSystemTheme,
} from './theme.utils';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
  resetTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeType;
  persistPreference?: boolean;
  syncWithSystem?: boolean;
}

/**
 * ThemeProvider Component
 * Manages theme state and provides it to all child components
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
  persistPreference = true,
  syncWithSystem = true,
}) => {
  // Initialize theme state
  const [theme, setThemeState] = useState<ThemeType>(() => {
    // Use provided initial theme
    if (initialTheme) {
      setThemeOnDOM(initialTheme);
      return initialTheme;
    }

    // Try to get initial theme from various sources
    const currentTheme = getInitialTheme();
    setThemeOnDOM(currentTheme);
    return currentTheme;
  });

  // Synchronize theme with DOM on mount and whenever theme changes
  useEffect(() => {
    setThemeOnDOM(theme);
  }, [theme]);

  // Subscribe to system theme changes if enabled
  useEffect(() => {
    if (!syncWithSystem) return;

    let unsubscribe: (() => void) | null = null;

    // Only sync if no stored preference exists
    if (!persistPreference || !localStorage.getItem('mdc-ui-theme')) {
      unsubscribe = subscribeToSystemTheme((systemTheme) => {
        if (persistPreference) {
          // Don't override user preference if they have saved one
          const stored = localStorage.getItem('mdc-ui-theme');
          if (!stored) {
            setThemeState(systemTheme);
          }
        } else {
          setThemeState(systemTheme);
        }
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [syncWithSystem, persistPreference]);

  const setTheme = useCallback(
    (newTheme: ThemeType) => {
      setThemeState(newTheme);

      if (persistPreference) {
        saveThemePreference(newTheme);
      }
    },
    [persistPreference]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  const resetTheme = useCallback(() => {
    const resetThemeTo = DEFAULT_THEME;
    setThemeState(resetThemeTo);

    if (persistPreference) {
      removeThemePreference();
    }
  }, [persistPreference]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    resetTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
