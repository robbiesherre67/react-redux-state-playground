import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

type Theme = 'light' | 'dark';
type ThemeCtx = { mode: Theme; toggle: () => void };

const ThemeContext = createContext<ThemeCtx | null>(null);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<Theme>('light');
  const toggle = () => setMode(m => (m === 'light' ? 'dark' : 'light'));
  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
};