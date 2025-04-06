function Login() {
    try {
        const { login, loading, user, addToast } = React.useContext(AuthContext);
        const navigate = () => {
            window.location.hash = '#/';
        };
        
        React.useEffect(() => {
            if (user) {
                navigate();
            }
        }, [user]);
        
        const handleLogin = async (credentials) => {
            try {
                const success = await login(credentials);
                if (success) {
                    navigate();
                }
            } catch (error) {
                console.error('Login error:', error);
                reportError(error);
                addToast('Login failed. Please try again.', 'error');
            }
        };
        
        return (
            <div data-name="login-page" className="min-h-screen bg-theme-primary flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="w-full max-w-md slide-in">
                        <AuthForm 
                            type="login" 
                            onSubmit={handleLogin}
                        />
                    </div>
                </div>
                <ParticlesBackground />
            </div>
        );
    } catch (error) {
        console.error('Login page error:', error);
        reportError(error);
        return null;
    }
}
