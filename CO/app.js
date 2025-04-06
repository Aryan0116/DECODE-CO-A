function App() {
    try {
        const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#/');

        React.useEffect(() => {
            const handleHashChange = () => setCurrentPath(window.location.hash);
            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        const renderPage = () => {
            if (currentPath.startsWith('#/topic/')) {
                return <TopicPage />;
            } else if (currentPath === '#/login') {
                return <Login />;
            } else if (currentPath === '#/register') {
                return <Register />;
            } else if (currentPath === '#/profile') {
                return <Profile />;
            } else {
                return <Home />;
            }
        };

        return (
            <ThemeProvider>
                <AuthProvider>
                    <div data-name="app-root" className="theme-transition">
                        {renderPage()}
                    </div>
                </AuthProvider>
            </ThemeProvider>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
