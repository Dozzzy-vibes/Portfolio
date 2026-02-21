'use client';

import React, { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

// Tiny external store for theme so we avoid setState-in-effect
let currentTheme: Theme = 'dark';
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
    listeners.add(cb);
    return () => listeners.delete(cb);
}

function getSnapshot(): Theme {
    return currentTheme;
}

function getServerSnapshot(): Theme {
    return 'dark';
}

function setThemeValue(next: Theme) {
    currentTheme = next;
    listeners.forEach((cb) => cb());
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    // Read from localStorage once on mount — no setState needed
    useEffect(() => {
        const saved = localStorage.getItem('portfolio-theme') as Theme | null;
        if (saved && saved !== currentTheme) {
            setThemeValue(saved);
        }
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }, []);

    // Sync DOM class + persist whenever theme changes
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setThemeValue(currentTheme === 'dark' ? 'light' : 'dark');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
