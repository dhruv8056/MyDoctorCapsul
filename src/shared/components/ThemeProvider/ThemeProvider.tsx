/**
 * Theme Provider Component Wrapper
 * Making it easy to use across the app
 */

import React, { ReactNode } from 'react';
import { ThemeProvider as CoreThemeProvider, ThemeProviderProps as CoreThemeProviderProps } from '@core/theme/ThemeContext';

export interface ThemeProviderWrapperProps extends Omit<CoreThemeProviderProps, 'children'> {
  children: ReactNode;
}

/**
 * ThemeProviderWrapper Component
 * Convenience wrapper around CoreThemeProvider for easier usage
 *
 * @example
 * <ThemeProviderWrapper persistPreference syncWithSystem>
 *   <App />
 * </ThemeProviderWrapper>
 */
export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
  initialTheme,
  persistPreference = true,
  syncWithSystem = true,
}) => {
  return (
    <CoreThemeProvider
      initialTheme={initialTheme}
      persistPreference={persistPreference}
      syncWithSystem={syncWithSystem}
    >
      {children}
    </CoreThemeProvider>
  );
};

export default ThemeProviderWrapper;
