/**
 * Theme Index
 * Central export point for all theme-related functionality
 */

export { ThemeProvider, ThemeContext } from './ThemeContext';
export type { ThemeContextType, ThemeProviderProps } from './ThemeContext';

export { useTheme } from './useTheme';

export { getInitialTheme, setThemeOnDOM } from './theme.utils';

export { THEMES, DEFAULT_THEME, THEME_STORAGE_KEY } from './theme.config';
export type { ThemeType, ThemeConfig } from './theme.config';
