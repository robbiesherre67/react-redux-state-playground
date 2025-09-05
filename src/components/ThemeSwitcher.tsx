import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleTheme } from '../features/theme/themeSlice';
import { useThemeContext } from '../context/useThemeContext';

export default function ThemeSwitcher() {
  const reduxMode = useAppSelector(s => s.theme.mode);
  const dispatch = useAppDispatch();

  const { mode: ctxMode, toggle: ctxToggle } = useThemeContext();

  console.log('Redux theme block render');
  console.log('Context theme block render');

  return (
    <div className="grid">
      {/* Global Redux theme */}
      <div className="card">
        <h3>Redux Theme (global): {reduxMode}</h3>
        <button onClick={() => dispatch(toggleTheme())}>Toggle (Redux)</button>
        <p>Applies to the whole page by toggling a class on &lt;html&gt;.</p>
      </div>

      {/* Scoped Context theme */}
      <div className={`card ${ctxMode === 'dark' ? 'theme-dark' : 'theme-light'}`}>
        <h3>Context Theme (scoped): {ctxMode}</h3>
        <button onClick={ctxToggle}>Toggle (Context)</button>
        <p>This card uses its own theme class so it won’t affect the page.</p>
      </div>
    </div>
  );
}
