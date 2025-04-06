function AuthForm({ type, onSubmit }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            password: ''
        });
        
        const [error, setError] = React.useState('');
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            setError('');
            
            // Simple validation
            if (type === 'register' && !formData.name.trim()) {
                setError('Name is required');
                return;
            }
            
            if (!formData.email.trim()) {
                setError('Email is required');
                return;
            }
            
            if (!formData.password.trim()) {
                setError('Password is required');
                return;
            }
            
            if (formData.password.length < 6) {
                setError('Password must be at least 6 characters');
                return;
            }
            
            onSubmit(formData);
        };
        
        return (
            <div data-name="auth-form" className="auth-form max-w-md w-full mx-auto p-8 rounded-lg shadow-theme">
                <h2 className="text-2xl font-bold text-center mb-6 text-theme-primary">
                    {type === 'login' ? 'Login to Your Account' : 'Create an Account'}
                </h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    {type === 'register' && (
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-theme-secondary mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                                           focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-theme-primary"
                                placeholder="Your name"
                            />
                        </div>
                    )}
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-theme-secondary mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-theme-primary"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-theme-secondary mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-theme-primary"
                            placeholder="********"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        {type === 'login' ? 'Login' : 'Register'}
                    </button>
                </form>
                
                <p className="mt-4 text-center text-theme-secondary">
                    {type === 'login' ? (
                        <>
                            Don't have an account? <a href="#/register" className="text-blue-600 hover:underline">Register</a>
                        </>
                    ) : (
                        <>
                            Already have an account? <a href="#/login" className="text-blue-600 hover:underline">Login</a>
                        </>
                    )}
                </p>
            </div>
        );
    } catch (error) {
        console.error('AuthForm component error:', error);
        reportError(error);
        return null;
    }
}
