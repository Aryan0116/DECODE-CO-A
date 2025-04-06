function Chapter({ chapter, onToggleChapter, userProgress }) {
    try {
        const { theme } = React.useContext(ThemeContext);
        
        const chapterProgress = userProgress ? userProgress[chapter.id] || {} : {};
        const completedTopics = chapter.topics.filter(topic => 
            chapterProgress[topic.id] === true
        ).length;
        
        const progress = chapter.topics.length > 0 
            ? (completedTopics / chapter.topics.length) * 100 
            : 0;
            
        const isCompleted = progress === 100;
        
        const [localCompleted, setLocalCompleted] = React.useState(isCompleted);
        
        // Update local state when prop changes
        React.useEffect(() => {
            setLocalCompleted(isCompleted);
        }, [isCompleted]);
        
        const handleChapterToggle = () => {
            // Update local state instantly for better UX
            setLocalCompleted(!localCompleted);
            
            // Then update parent state
            onToggleChapter(chapter.id);
        };

        return (
            <div data-name="chapter-card" 
                className={`chapter-card p-6 rounded-lg shadow-theme mb-6 ${
                    localCompleted ? 'bg-green-50 dark:bg-green-900/30' : 'bg-theme-secondary'
                }`}>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-theme-primary">{chapter.title}</h2>
                    <div className="flex items-center">
                        <span className="text-sm text-theme-secondary mr-2">
                            {completedTopics}/{chapter.topics.length} completed
                        </span>
                        <input
                            type="checkbox"
                            checked={localCompleted}
                            onChange={handleChapterToggle}
                            className={`checkbox-animation w-5 h-5 text-blue-600 rounded ${localCompleted ? 'completed' : ''}`}
                        />
                    </div>
                </div>
                <ProgressBar progress={progress} />
                <div className="mt-4 space-y-2">
                    {chapter.topics.map(topic => (
                        <Topic 
                            key={topic.id} 
                            topic={topic} 
                            chapterId={chapter.id}
                            isCompleted={chapterProgress[topic.id] === true}
                            onToggleTopic={onToggleChapter}
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Chapter component error:', error);
        reportError(error);
        return null;
    }
}
