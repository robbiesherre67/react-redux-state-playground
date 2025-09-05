import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeContext } from './themeContext';
import type { Theme } from './themeContext';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<Theme>('light');
  const toggle = () => setMode(m => (m === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}