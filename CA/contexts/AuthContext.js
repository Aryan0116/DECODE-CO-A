const AuthContext = React.createContext();

function AuthProvider({ children }) {
    try {
        const [user, setUser] = React.useState(() => getUser());
        const [loading, setLoading] = React.useState(false);
        const [error, setError] = React.useState(null);
        const [toasts, setToasts] = React.useState([]);
        const [guestProgress, setGuestProgress] = React.useState({});
        
        const register = async (userData) => {
            try {
                setLoading(true);
                setError(null);
                
                // In a real app, you'd make an API call here
                // For demo purposes, we'll simulate a successful registration
                const newUser = {
                    id: Date.now().toString(),
                    name: userData.name,
                    email: userData.email,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=random&color=fff`,
                    progress: guestProgress // Transfer any guest progress to the new account
                };
                
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 500));
                
                setUser(newUser);
                saveUser(newUser);
                addToast('Registration successful!', 'success');
                return true;
            } catch (err) {
                setError('Registration failed. Please try again.');
                addToast('Registration failed', 'error');
                return false;
            } finally {
                setLoading(false);
            }
        };
        
        const login = async (credentials) => {
            try {
                setLoading(true);
                setError(null);
                
                // Get existing user if they've registered before
                const existingUsers = getAllUsers();
                const existingUser = existingUsers.find(u => u.email === credentials.email);
                
                let loggedInUser;
                
                if (existingUser) {
                    // Use existing user data
                    loggedInUser = {
                        ...existingUser,
                        lastLogin: new Date().toISOString()
                    };
                } else {
                    // Create new user
                    const username = credentials.email.split('@')[0];
                    loggedInUser = {
                        id: Date.now().toString(),
                        name: username,
                        email: credentials.email,
                        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=random&color=fff`,
                        progress: {
                            ...guestProgress // Merge with any guest progress
                        },
                        lastLogin: new Date().toISOString()
                    };
                    
                    // Add to users list
                    saveUserToList(loggedInUser);
                }
                
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 500));
                
                setUser(loggedInUser);
                saveUser(loggedInUser);
                addToast('Login successful!', 'success');
                return true;
            } catch (err) {
                setError('Invalid email or password');
                addToast('Login failed', 'error');
                return false;
            } finally {
                setLoading(false);
            }
        };
        
        const logout = () => {
            setUser(null);
            saveUser(null);
            addToast('You have been logged out', 'info');
        };
        
        const updateProgress = (chapterId, topicId, isCompleted) => {
            // Handle progress update for logged-in user
            if (user) {
                const updatedProgress = { ...user.progress };
                
                if (!updatedProgress[chapterId]) {
                    updatedProgress[chapterId] = {};
                }
                
                if (topicId) {
                    // Update a specific topic only
                    updatedProgress[chapterId][topicId] = isCompleted;
                } else {
                    // Toggle all topics in the chapter
                    const chapter = initialSyllabusData.find(ch => ch.id === chapterId);
                    if (chapter) {
                        const allTopicsCompleted = chapter.topics.every(
                            topic => updatedProgress[chapterId]?.[topic.id] === true
                        );
                        
                        chapter.topics.forEach(topic => {
                            updatedProgress[chapterId][topic.id] = !allTopicsCompleted;
                        });
                    }
                }
                
                const updatedUser = {
                    ...user,
                    progress: updatedProgress
                };
                
                setUser(updatedUser);
                saveUser(updatedUser);
                
                // Also update in the users list
                updateUserInList(updatedUser);
            } 
            // Handle progress update for guest user
            else {
                const updatedProgress = { ...guestProgress };
                
                if (!updatedProgress[chapterId]) {
                    updatedProgress[chapterId] = {};
                }
                
                if (topicId) {
                    // Update a specific topic only
                    updatedProgress[chapterId][topicId] = isCompleted;
                } else {
                    // Toggle all topics in the chapter
                    const chapter = initialSyllabusData.find(ch => ch.id === chapterId);
                    if (chapter) {
                        const allTopicsCompleted = chapter.topics.every(
                            topic => updatedProgress[chapterId]?.[topic.id] === true
                        );
                        
                        chapter.topics.forEach(topic => {
                            updatedProgress[chapterId][topic.id] = !allTopicsCompleted;
                        });
                    }
                }
                
                setGuestProgress(updatedProgress);
            }
        };
        
        const updateUserProfile = (profileData) => {
            if (!user) return false;
            
            try {
                const updatedUser = {
                    ...user,
                    ...profileData
                };
                
                setUser(updatedUser);
                saveUser(updatedUser);
                updateUserInList(updatedUser);
                addToast('Profile updated successfully!', 'success');
                return true;
            } catch (error) {
                console.error('Update profile error:', error);
                reportError(error);
                addToast('Failed to update profile', 'error');
                return false;
            }
        };
        
        const addToast = (message, type = 'info') => {
            const id = Date.now();
            setToasts(prev => [...prev, { id, message, type }]);
            
            // Auto remove toast after 3 seconds
            setTimeout(() => {
                setToasts(prev => prev.filter(toast => toast.id !== id));
            }, 3000);
        };
        
        const removeToast = (id) => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        };
        
        return (
            <AuthContext.Provider value={{
                user,
                loading,
                error,
                toasts,
                guestProgress,
                register,
                login,
                logout,
                updateProgress,
                updateUserProfile,
                addToast,
                removeToast
            }}>
                {children}
            </AuthContext.Provider>
        );
    } catch (error) {
        console.error('AuthProvider error:', error);
        reportError(error);
        return null;
    }
}
