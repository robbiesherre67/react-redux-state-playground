import { createContext } from 'react';

export type Theme = 'light' | 'dark';
export type ThemeCtx = { mode: Theme; toggle: () => void };

export const ThemeContext = createContext<ThemeCtx | null>(null);