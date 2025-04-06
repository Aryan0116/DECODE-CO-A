function ThemeToggle() {
    try {
        const { theme, toggleTheme } = React.useContext(ThemeContext);
        
        return (
            <button 
                data-name="theme-toggle" 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-3"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <i className="fas fa-sun text-yellow-400"></i>
                ) : (
                    <i className="fas fa-moon text-gray-600"></i>
                )}
            </button>
        );
    } catch (error) {
        console.error('ThemeToggle component error:', error);
        reportError(error);
        return null;
    }
}
