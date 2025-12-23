import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return {
        theme,
        toggle: () => setTheme(t => (t === "dark" ? "light" : "dark")),
    };
}
