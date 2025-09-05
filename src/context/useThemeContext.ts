import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import type { ThemeCtx } from './themeContext';

export function useThemeContext(): ThemeCtx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
}