/**
 * useTheme Hook
 * Custom hook to access theme context
 */

import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

/**
 * Hook to use theme context
 * @throws Error if used outside of ThemeProvider
 * @returns Theme context object with theme state and setters
 *
 * @example
 * const { theme, setTheme, toggleTheme } = useTheme();
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider component');
  }

  return context;
};

export default useTheme;
