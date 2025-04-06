function Home() {
    try {
        const { user, updateProgress, addToast, guestProgress } = React.useContext(AuthContext);
        const { theme } = React.useContext(ThemeContext);
        
        // Function to handle topic toggling
        const handleToggleTopic = (chapterId, topicId) => {
            try {
                // Get the current progress based on user status
                const currentProgress = user ? user.progress[chapterId] || {} : guestProgress[chapterId] || {};
                const isCurrentlyCompleted = currentProgress[topicId] === true;
                
                updateProgress(chapterId, topicId, !isCurrentlyCompleted);
                
                if (!isCurrentlyCompleted) {
                    addToast('Topic marked as completed!', 'success');
                }
                
                // Show warning for guest users
                if (!user && !isCurrentlyCompleted) {
                    addToast('Warning: Your progress will not be saved after you leave the site. Please register or login to save your progress.', 'warning');
                }
            } catch (error) {
                console.error('Toggle topic error:', error);
                reportError(error);
                addToast('Failed to update progress', 'error');
            }
        };
        
        // Function to handle chapter toggling
        const handleToggleChapter = (chapterId) => {
            try {
                updateProgress(chapterId);
                
                // Show warning for guest users
                if (!user) {
                    addToast('Warning: Your progress will not be saved after you leave the site. Please register or login to save your progress.', 'warning');
                }
            } catch (error) {
                console.error('Toggle chapter error:', error);
                reportError(error);
                addToast('Failed to update progress', 'error');
            }
        };
        
        return (
            <div data-name="home-page" className="min-h-screen bg-theme-primary">
                <Navbar />
                <main className="max-w-4xl mx-auto p-6">
                    <div className="mb-8 fade-in">
                        <h1 className="text-3xl font-bold text-theme-primary mb-2">Your Learning Journey</h1>
                        <p className="text-theme-secondary">Track your progress through the syllabus</p>
                        
                        {/* Guest mode warning banner */}
                        {!user && (
                            <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 border-l-4 border-yellow-500 p-4 rounded">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <i className="fas fa-exclamation-triangle text-yellow-600 dark:text-yellow-400"></i>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                            You are in guest mode. Your progress will not be saved after you leave the site.
                                            <a href="#/register" className="font-medium underline text-yellow-700 dark:text-yellow-300 hover:text-yellow-600 ml-1">
                                                Register
                                            </a> or 
                                            <a href="#/login" className="font-medium underline text-yellow-700 dark:text-yellow-300 hover:text-yellow-600 ml-1">
                                                Login
                                            </a> to save your progress.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {initialSyllabusData.map(chapter => (
                        <Chapter
                            key={chapter.id}
                            chapter={chapter}
                            onToggleChapter={handleToggleTopic}
                            userProgress={user ? user.progress : guestProgress}
                        />
                    ))}
                </main>
                <ToastContainer />
                <ParticlesBackground />
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
