/**
 * Theme Configuration
 * Define available themes and their properties
 */

export type ThemeType = 'light' | 'dark';

export interface ThemeConfig {
  name: ThemeType;
  label: string;
  icon: string;
}

export const THEMES: Record<ThemeType, ThemeConfig> = {
  light: {
    name: 'light',
    label: 'Light',
    icon: '☀️',
  },
  dark: {
    name: 'dark',
    label: 'Dark',
    icon: '🌙',
  },
};

// Default theme
export const DEFAULT_THEME: ThemeType = 'light';

// Storage key for persisting theme preference
export const THEME_STORAGE_KEY = 'mdc-ui-theme';
