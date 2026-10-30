import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'theme';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const attr = document.documentElement.getAttribute('data-theme') as Theme | null;
    if (attr === 'light' || attr === 'dark') return attr;
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // ignore security/storage errors
  }
  return 'dark';
}

function updateThemeColorMeta(theme: Theme) {
  if (typeof document === 'undefined') return;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'light' ? '#F8FAFC' : '#0B0D12');
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Sync with DOM and listen to storage events from other tabs
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeColorMeta(theme);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        const newTheme = e.newValue as Theme;
        setThemeState(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeColorMeta(newTheme);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);

    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('theme-transition');
      document.documentElement.setAttribute('data-theme', nextTheme);
      updateThemeColorMeta(nextTheme);

      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 250);
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // ignore storage access errors
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
