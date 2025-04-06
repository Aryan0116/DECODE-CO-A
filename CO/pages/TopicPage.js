function TopicPage() {
    try {
        const { user, updateProgress, guestProgress, addToast } = React.useContext(AuthContext);
        const [topic, setTopic] = React.useState(null);
        const [chapterId, setChapterId] = React.useState(null);
        const [isCompleted, setIsCompleted] = React.useState(false);
        const [nextTopic, setNextTopic] = React.useState(null);
        const [prevTopic, setPrevTopic] = React.useState(null);
        
        React.useEffect(() => {
            const topicId = window.location.hash.split('/')[2];
            
            // Find the topic, chapter, and adjacent topics
            const findTopicAndNavigationInfo = () => {
                let foundTopic = null;
                let foundChapterId = null;
                let foundPrevTopic = null;
                let foundNextTopic = null;
                
                // Flatten all topics for easier navigation
                const allTopics = [];
                initialSyllabusData.forEach(chapter => {
                    chapter.topics.forEach(topic => {
                        allTopics.push({
                            ...topic,
                            chapterId: chapter.id
                        });
                    });
                });
                
                // Find current topic index
                const currentTopicIndex = allTopics.findIndex(t => t.id === topicId);
                
                if (currentTopicIndex !== -1) {
                    foundTopic = allTopics[currentTopicIndex];
                    foundChapterId = foundTopic.chapterId;
                    
                    // Find previous and next topics
                    if (currentTopicIndex > 0) {
                        foundPrevTopic = allTopics[currentTopicIndex - 1];
                    }
                    
                    if (currentTopicIndex < allTopics.length - 1) {
                        foundNextTopic = allTopics[currentTopicIndex + 1];
                    }
                }
                
                setTopic(foundTopic);
                setChapterId(foundChapterId);
                setPrevTopic(foundPrevTopic);
                setNextTopic(foundNextTopic);
            };
            
            findTopicAndNavigationInfo();
        }, [window.location.hash]);
        
        React.useEffect(() => {
            if (chapterId && topic) {
                // Get progress from user or guest progress
                const progress = user ? user.progress : guestProgress;
                const topicProgress = progress[chapterId]?.[topic.id];
                setIsCompleted(topicProgress === true);
            }
        }, [user, guestProgress, chapterId, topic]);
        
        const handleToggleComplete = () => {
            if (chapterId && topic) {
                updateProgress(chapterId, topic.id, !isCompleted);
                setIsCompleted(!isCompleted);
                
                // Show warning for guest users
                if (!user && !isCompleted) {
                    addToast('Warning: Your progress will not be saved after you leave the site. Please register or login to save your progress.', 'warning');
                }
            }
        };
        
        if (!topic) {
            return (
                <div data-name="topic-page-loading" className="min-h-screen bg-theme-primary">
                    <Navbar />
                    <div className="flex justify-center items-center h-64">
                        <div className="text-theme-primary">Loading...</div>
                    </div>
                    <ParticlesBackground />
                </div>
            );
        }
        
        return (
            <div data-name="topic-page" className="min-h-screen bg-theme-primary">
                <Navbar />
                <div className="py-6">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center mb-6">
                            <a href="#/" className="text-blue-600 hover:text-blue-800 flex items-center">
                                <i className="fas fa-arrow-left mr-2"></i>
                                Back to syllabus
                            </a>
                        </div>
                        
                        {/* Guest mode warning banner */}
                        {!user && (
                            <div className="mb-6 bg-yellow-100 dark:bg-yellow-800 border-l-4 border-yellow-500 p-4 rounded">
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
                        
                        <TopicDetail 
                            topic={topic} 
                            isCompleted={isCompleted}
                            onToggleComplete={handleToggleComplete}
                            nextTopic={nextTopic}
                            prevTopic={prevTopic}
                        />
                    </div>
                </div>
                <ToastContainer />
                <ParticlesBackground />
            </div>
        );
    } catch (error) {
        console.error('TopicPage error:', error);
        reportError(error);
        return null;
    }
}
