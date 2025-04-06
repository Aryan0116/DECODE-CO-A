const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
    try {
        const [theme, setTheme] = React.useState(() => getTheme());
        
        React.useEffect(() => {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            saveTheme(theme);
        }, [theme]);
        
        const toggleTheme = () => {
            setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
        };
        
        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        );
    } catch (error) {
        console.error('ThemeProvider error:', error);
        reportError(error);
        return null;
    }
}
