function Register() {
    try {
        const { register, loading, user } = React.useContext(AuthContext);
        const navigate = () => {
            window.location.hash = '#/';
        };
        
        React.useEffect(() => {
            if (user) {
                navigate();
            }
        }, [user]);
        
        const handleRegister = async (userData) => {
            const success = await register(userData);
            if (success) {
                navigate();
            }
        };
        
        return (
            <div data-name="register-page" className="min-h-screen bg-theme-primary flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="w-full max-w-md slide-in">
                        <AuthForm 
                            type="register" 
                            onSubmit={handleRegister}
                        />
                    </div>
                </div>
                <ParticlesBackground />
            </div>
        );
    } catch (error) {
        console.error('Register page error:', error);
        reportError(error);
        return null;
    }
}
