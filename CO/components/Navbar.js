function Navbar() {
    try {
        const { user, logout, guestProgress } = React.useContext(AuthContext);
        const { theme, toggleTheme } = React.useContext(ThemeContext);
        const [dropdownOpen, setDropdownOpen] = React.useState(false);
        
        const calculateOverallProgress = () => {
            if (user) {
                return calculateTotalProgress(user.progress);
            } else {
                return calculateTotalProgress(guestProgress);
            }
        };

        const overallProgress = calculateOverallProgress();
        
        // Close dropdown when clicking outside
        React.useEffect(() => {
            const handleClickOutside = (event) => {
                if (dropdownOpen && !event.target.closest('[data-name="nav-profile"]')) {
                    setDropdownOpen(false);
                }
            };
            
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, [dropdownOpen]);

        return (
            <nav data-name="navbar" className="bg-theme-secondary shadow-theme">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                        <div className="ml-3 mr-3">
                                <img src="https://github.com/Aryan0116/COA/blob/main/CO/favicon.png?raw=true" alt="Logo" className="h-8 w-8" />
                            </div>
                            <a href="#/" data-name="nav-logo" className="flex items-center">
                                <i className="fas fa-book-open text-blue-600 text-2xl mr-2"></i>
                                <span className="font-bold text-xl text-theme-primary">COMPUTER ORGANIZATION</span>
                            </a>
                            {/* Added Home Button
                            <a 
                                href="/COA/" 
                                data-name="nav-home" 
                                className="ml-6 flex items-center text-theme-primary hover:text-blue-600"
                            >
                                <i className="fas fa-home mr-1"></i>
                                <span className="font-medium">Home</span>
                            </a> */}
                        </div>
                        <div className="flex items-center">
                            <div data-name="nav-progress" className="mr-4">
                                <span className="text-theme-secondary">Overall Progress:</span>
                                <span className="ml-2 font-semibold text-blue-600">{overallProgress}%</span>
                            </div>
                            <ThemeToggle />
                            
                            {/* Added Favicon image */}
                            
                            
                            {user ? (
                                <div className="relative ml-3">
                                    <button 
                                        data-name="nav-profile" 
                                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white overflow-hidden">
                                                {user.avatar ? (
                                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    user.name.charAt(0).toUpperCase()
                                                )}
                                            </div>
                                            <span className="ml-2 text-theme-primary hidden md:block">{user.name}</span>
                                            <i className="fas fa-chevron-down ml-1 text-xs text-theme-secondary"></i>
                                        </div>
                                    </button>
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-theme-secondary rounded-md shadow-lg py-1 z-10 border border-theme">
                                            <a href="#/profile" className="block px-4 py-2 text-sm text-theme-primary hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <i className="fas fa-user mr-2"></i>Profile
                                            </a>
                                            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                                            <button 
                                                onClick={logout}
                                                className="block w-full text-left px-4 py-2 text-sm text-theme-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <i className="fas fa-sign-out-alt mr-2"></i>Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <a href="#/login" className="text-theme-primary hover:text-blue-600 px-3 py-2">
                                        Login
                                    </a>
                                    <a href="#/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                        Register
                                    </a>
                                </div>
                            )}
                            
                            {/* Added Home button to rightmost position */}
                            <a 
                                href="https://www.coahub.in" 
                                data-name="nav-coahub" 
                                className="ml-4 flex items-center bg-green-500 text-white px-3 py-2 rounded-md hover:bg-pink-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-external-link-alt mr-1"></i>
                                <span className="font-medium">COAHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}