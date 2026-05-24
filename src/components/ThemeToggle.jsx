import './ThemeToggle.css';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={`theme-toggle__track ${isDark ? '' : 'theme-toggle__track--light'}`}>
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
}
