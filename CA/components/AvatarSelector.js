function AvatarSelector({ currentAvatar, onSelect }) {
    try {
        const [selectedAvatar, setSelectedAvatar] = React.useState(currentAvatar || '');
        const [customName, setCustomName] = React.useState('');
        const [activeTab, setActiveTab] = React.useState('predefined');
        
        // Predefined avatar options
        const avatarOptions = [
            { id: 1, url: "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" },
            { id: 2, url: "https://ui-avatars.com/api/?name=Student&background=4CAF50&color=fff" },
            { id: 3, url: "https://ui-avatars.com/api/?name=Learner&background=FF5722&color=fff" },
            { id: 4, url: "https://ui-avatars.com/api/?name=Scholar&background=9C27B0&color=fff" },
            { id: 5, url: "https://ui-avatars.com/api/?name=Teacher&background=FFC107&color=fff" },
            { id: 6, url: "https://ui-avatars.com/api/?name=Pro&background=E91E63&color=fff" },
        ];
        
        // Random color generator for custom avatars
        const getRandomColor = () => {
            const colors = ['0D8ABC', '4CAF50', 'FF5722', '9C27B0', 'FFC107', 'E91E63', '3F51B5', '795548'];
            return colors[Math.floor(Math.random() * colors.length)];
        };
        
        const generateCustomAvatar = () => {
            if (!customName.trim()) return;
            
            const color = getRandomColor();
            const newAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(customName)}&background=${color}&color=fff`;
            setSelectedAvatar(newAvatar);
            onSelect(newAvatar);
        };
        
        const handleAvatarSelect = (avatarUrl) => {
            setSelectedAvatar(avatarUrl);
            onSelect(avatarUrl);
        };
        
        React.useEffect(() => {
            // Reset to current avatar when component mounts or when current avatar changes
            setSelectedAvatar(currentAvatar || '');
        }, [currentAvatar]);
        
        return (
            <div data-name="avatar-selector" className="w-full">
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                    <button
                        className={`py-2 px-4 ${activeTab === 'predefined' 
                            ? 'border-b-2 border-blue-500 text-blue-600' 
                            : 'text-theme-secondary hover:text-blue-500'}`}
                        onClick={() => setActiveTab('predefined')}
                    >
                        Predefined Avatars
                    </button>
                    <button
                        className={`py-2 px-4 ${activeTab === 'custom' 
                            ? 'border-b-2 border-blue-500 text-blue-600' 
                            : 'text-theme-secondary hover:text-blue-500'}`}
                        onClick={() => setActiveTab('custom')}
                    >
                        Custom Avatar
                    </button>
                </div>
                
                {activeTab === 'predefined' ? (
                    <div className="grid grid-cols-3 gap-4">
                        {avatarOptions.map((avatar) => (
                            <div 
                                key={avatar.id}
                                className={`relative cursor-pointer rounded-lg p-2 ${
                                    selectedAvatar === avatar.url ? 'bg-blue-100 dark:bg-blue-900/30' : ''
                                }`}
                                onClick={() => handleAvatarSelect(avatar.url)}
                            >
                                <img 
                                    src={avatar.url} 
                                    alt={`Avatar option ${avatar.id}`}
                                    className="w-full h-20 object-cover rounded-full"
                                />
                                {selectedAvatar === avatar.url && (
                                    <div className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-1">
                                        <i className="fas fa-check text-xs"></i>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="custom-name" className="block text-theme-secondary mb-2">
                                Enter text for avatar (initials, name, etc.)
                            </label>
                            <input
                                type="text"
                                id="custom-name"
                                value={customName}
                                onChange={(e) => setCustomName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                                         focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-theme-primary"
                                placeholder="Your name or initials"
                            />
                        </div>
                        <button
                            onClick={generateCustomAvatar}
                            disabled={!customName.trim()}
                            className={`px-4 py-2 rounded-md ${
                                customName.trim() 
                                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                            }`}
                        >
                            Generate Avatar
                        </button>
                        
                        {selectedAvatar && activeTab === 'custom' && (
                            <div className="mt-4 flex justify-center">
                                <div className="relative">
                                    <img 
                                        src={selectedAvatar} 
                                        alt="Custom avatar preview"
                                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('AvatarSelector component error:', error);
        reportError(error);
        return null;
    }
}
