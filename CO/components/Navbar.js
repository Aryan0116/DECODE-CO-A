function Navbar() {
    try {
        const { user, logout, guestProgress } = React.useContext(AuthContext);
        const { theme, toggleTheme } = React.useContext(ThemeContext);
        const [dropdownOpen, setDropdownOpen] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
        
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

        // Close mobile menu when clicking outside
        React.useEffect(() => {
            const handleClickOutside = (event) => {
                if (mobileMenuOpen && !event.target.closest('[data-name="mobile-menu-button"]') && !event.target.closest('[data-name="mobile-menu"]')) {
                    setMobileMenuOpen(false);
                }
            };
            
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, [mobileMenuOpen]);

        // Close mobile menu on resize if screen becomes large
        React.useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth >= 768 && mobileMenuOpen) {
                    setMobileMenuOpen(false);
                }
            };
            
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, [mobileMenuOpen]);

        return (
            <nav data-name="navbar" className="bg-theme-secondary shadow-theme">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        {/* Logo and Title */}
                        <div className="flex items-center">
                            <div className="ml-3 mr-3">
                                <img src="https://github.com/Aryan0116/COA/blob/main/CO/favicon.png?raw=true" alt="Logo" className="h-8 w-8" />
                            </div>
                            <a href="#/" data-name="nav-logo" className="flex items-center">
                                <i className="fas fa-book-open text-blue-600 text-2xl mr-2"></i>
                                <span className="font-bold text-xl text-theme-primary hidden sm:inline">COMPUTER ORGANIZATION</span>
                                <span className="font-bold text-xl text-theme-primary sm:hidden">CO</span>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button 
                                data-name="mobile-menu-button"
                                className="text-theme-primary hover:text-blue-600 p-2"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            <div data-name="nav-progress" className="mr-4">
                                <span className="text-theme-secondary">Overall Progress:</span>
                                <span className="ml-2 font-semibold text-blue-600">{overallProgress}%</span>
                            </div>
                            <ThemeToggle />
                            
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
                                            <span className="ml-2 text-theme-primary">{user.name}</span>
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
                            
                            {/* DECODE CO-A button */}
                            <a 
                                href="https://aryan0116.github.io/DECODE-CO-A/" 
                                data-name="nav-coahub" 
                                className="ml-4 flex items-center bg-green-500 text-white px-3 py-2 rounded-md hover:bg-pink-600 transition-colors"
                            >
                                <i className="fas fa-external-link-alt mr-1"></i>
                                <span className="font-medium">DECODE CO-A</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div 
                        data-name="mobile-menu" 
                        className="md:hidden bg-theme-secondary border-t border-gray-200 dark:border-gray-700 py-3 px-4 shadow-md"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div data-name="nav-progress">
                                <span className="text-theme-secondary">Progress:</span>
                                <span className="ml-2 font-semibold text-blue-600">{overallProgress}%</span>
                            </div>
                            <ThemeToggle />
                        </div>

                        {user ? (
                            <div className="mb-3">
                                <div className="flex items-center mb-2">
                                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white overflow-hidden">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                        ) : (
                                            user.name.charAt(0).toUpperCase()
                                        )}
                                    </div>
                                    <span className="ml-2 text-theme-primary font-medium">{user.name}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <a href="#/profile" className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-theme-primary px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                                        <i className="fas fa-user mr-2"></i>Profile
                                    </a>
                                    <button 
                                        onClick={logout}
                                        className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-theme-primary px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 w-full"
                                    >
                                        <i className="fas fa-sign-out-alt mr-2"></i>Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <a href="#/login" className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-theme-primary px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                                    <i className="fas fa-sign-in-alt mr-2"></i>Login
                                </a>
                                <a href="#/register" className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">
                                    <i className="fas fa-user-plus mr-2"></i>Register
                                </a>
                            </div>
                        )}

                        {/* DECODE CO-A button in mobile menu */}
                        <a 
                            href="https://aryan0116.github.io/DECODE-CO-A/" 
                            data-name="nav-coahub-mobile" 
                            className="flex items-center justify-center bg-green-500 text-white px-3 py-2 rounded-md hover:bg-pink-600 w-full transition-colors"
                        >
                            <i className="fas fa-external-link-alt mr-1"></i>
                            <span className="font-medium">DECODE CO-A</span>
                        </a>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}