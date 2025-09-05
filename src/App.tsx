import { useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import Counter from './components/Counter';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  const reduxMode = useAppSelector(s => s.theme.mode);

  // Set global class on <html> based on Redux theme
  useEffect(() => {
    const el = document.documentElement;
    el.classList.remove('theme-light', 'theme-dark');
    el.classList.add(reduxMode === 'dark' ? 'theme-dark' : 'theme-light');
  }, [reduxMode]);

  return (
    <div className="container">
      <h2>React + Redux Toolkit | State Management Playground</h2>
      <p>Redux theme is global. Context theme is scoped to its card for side-by-side comparison.</p>
      <div className="grid">
        <Counter />
        <ThemeSwitcher />
      </div>
    </div>
  );
}