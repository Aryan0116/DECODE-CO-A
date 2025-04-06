function Profile() {
    try {
        const { user, updateUserProfile, logout, addToast } = React.useContext(AuthContext);
        const navigate = () => {
            window.location.hash = '#/';
        };
        
        React.useEffect(() => {
            if (!user) {
                navigate();
            }
        }, [user]);
        
        const [formData, setFormData] = React.useState({
            name: user?.name || '',
            email: user?.email || '',
        });
        
        const [avatarPreview, setAvatarPreview] = React.useState(user?.avatar || '');
        const [isEditing, setIsEditing] = React.useState(false);
        const [showAvatarSelector, setShowAvatarSelector] = React.useState(false);
        
        // Calculate user stats
        const calculateStats = () => {
            let completedTopics = 0;
            let totalTopics = 0;
            
            initialSyllabusData.forEach(chapter => {
                totalTopics += chapter.topics.length;
                
                chapter.topics.forEach(topic => {
                    if (user?.progress?.[chapter.id]?.[topic.id] === true) {
                        completedTopics++;
                    }
                });
            });
            
            const completionPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
            
            return {
                completedTopics,
                totalTopics,
                completionPercentage
            };
        };
        
        const stats = calculateStats();
        
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (!formData.name.trim()) {
                addToast('Name cannot be empty', 'error');
                return;
            }
            
            // Update user profile
            const success = updateUserProfile({
                name: formData.name,
                avatar: avatarPreview
            });
            
            if (success) {
                setIsEditing(false);
                setShowAvatarSelector(false);
            }
        };
        
        const handleCancel = () => {
            // Reset form data to current user data
            setFormData({
                name: user?.name || '',
                email: user?.email || ''
            });
            setAvatarPreview(user?.avatar || '');
            setIsEditing(false);
            setShowAvatarSelector(false);
        };
        
        const handleAvatarSelect = (avatarUrl) => {
            setAvatarPreview(avatarUrl);
        };
        
        // Get completed topics
        const getCompletedTopics = () => {
            const completed = [];
            
            initialSyllabusData.forEach(chapter => {
                chapter.topics.forEach(topic => {
                    if (user?.progress?.[chapter.id]?.[topic.id] === true) {
                        completed.push({
                            ...topic,
                            chapterTitle: chapter.title
                        });
                    }
                });
            });
            
            return completed;
        };
        
        const completedTopics = getCompletedTopics();
        
        if (!user) {
            return null; // Will redirect in useEffect
        }
        
        return (
            <div data-name="profile-page" className="min-h-screen bg-theme-primary">
                <Navbar />
                <main className="max-w-4xl mx-auto p-6">
                    <div className="bg-theme-secondary rounded-lg shadow-theme p-6 mb-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                            <div className="mb-4 md:mb-0 md:mr-6">
                                <div className="relative group">
                                    <img 
                                        src={user.avatar} 
                                        alt={user.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
                                    />
                                    {isEditing && (
                                        <button 
                                            onClick={() => setShowAvatarSelector(!showAvatarSelector)}
                                            className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full"
                                        >
                                            <i className="fas fa-camera"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <h1 className="text-2xl font-bold text-theme-primary">{user.name}</h1>
                                    {!isEditing && (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            <i className="fas fa-edit mr-1"></i> Edit Profile
                                        </button>
                                    )}
                                </div>
                                <p className="text-theme-secondary mb-4">{user.email}</p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                        <div className="text-sm text-theme-secondary">Completed Topics</div>
                                        <div className="text-xl font-semibold text-blue-600">{stats.completedTopics}/{stats.totalTopics}</div>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                                        <div className="text-sm text-theme-secondary">Completion Rate</div>
                                        <div className="text-xl font-semibold text-green-600">{stats.completionPercentage}%</div>
                                    </div>
                                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                                        <div className="text-sm text-theme-secondary">Last Login</div>
                                        <div className="text-xl font-semibold text-purple-600">{user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'N/A'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {isEditing && (
                            <form onSubmit={handleSubmit} className="mt-6 border-t border-theme pt-6">
                                <h2 className="text-xl font-semibold text-theme-primary mb-4">Edit Profile</h2>
                                
                                {showAvatarSelector && (
                                    <div className="mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-theme-primary mb-3">Choose Avatar</h3>
                                        <AvatarSelector 
                                            currentAvatar={avatarPreview} 
                                            onSelect={handleAvatarSelect} 
                                        />
                                    </div>
                                )}
                                
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/3 flex flex-col items-center">
                                        <img 
                                            src={avatarPreview}
                                            alt="Avatar Preview"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 mb-3"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowAvatarSelector(!showAvatarSelector)}
                                            className="text-blue-600 hover:text-blue-800 text-sm"
                                        >
                                            {showAvatarSelector ? 'Hide Avatar Options' : 'Change Avatar'}
                                        </button>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block text-theme-secondary mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                                                           focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-theme-primary"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-theme-secondary mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                readOnly
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                                                           bg-gray-100 dark:bg-gray-700 text-theme-secondary cursor-not-allowed"
                                            />
                                            <p className="text-xs text-theme-secondary mt-1">Email cannot be changed</p>
                                        </div>
                                        <div className="flex justify-end gap-3">
                                            <button
                                                type="button"
                                                onClick={handleCancel}
                                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-theme-primary hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                    
                    <div className="bg-theme-secondary rounded-lg shadow-theme p-6">
                        <h2 className="text-xl font-semibold text-theme-primary mb-4">Completed Topics</h2>
                        {completedTopics.length > 0 ? (
                            <div className="space-y-3">
                                {completedTopics.map(topic => (
                                    <div key={topic.id} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                                        <div className="flex-1">
                                            <a href={`#/topic/${topic.id}`} className="font-medium text-theme-primary hover:text-blue-600">
                                                {topic.title}
                                            </a>
                                            <p className="text-sm text-theme-secondary">{topic.chapterTitle}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm text-theme-secondary mr-3">{topic.co}</span>
                                            <i className="fas fa-check-circle text-green-500"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-theme-secondary">
                                <i className="fas fa-book-open text-4xl mb-3"></i>
                                <p>You haven't completed any topics yet.</p>
                                <a href="#/" className="text-blue-600 hover:underline mt-2 inline-block">
                                    Start learning now
                                </a>
                            </div>
                        )}
                    </div>
                </main>
                <ParticlesBackground />
            </div>
        );
    } catch (error) {
        console.error('Profile page error:', error);
        reportError(error);
        return null;
    }
}
