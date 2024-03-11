// utils/themeManager.ts

/**
 * Apply the selected theme by adding the appropriate class to the root element.
 * @param {string} theme - The theme to apply, e.g., 'dark' or 'light'.
 */
export function applyTheme(theme: 'dark' | 'light'): void {
    const root = document.documentElement;

    if (theme === 'dark') {
        root.classList.add('theme-dark');
        root.classList.remove('theme-light');
    } else {
        root.classList.add('theme-light');
        root.classList.remove('theme-dark');
    }
}
