import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '../ui/button';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full w-9 h-9 border border-gray-300 dark:border-gray-700 bg-background text-foreground hover:bg-accent transition-colors"
            title="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400 transition-all" />
            ) : (
                <Moon className="h-4 w-4 text-slate-700 dark:text-slate-200 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeToggle;
