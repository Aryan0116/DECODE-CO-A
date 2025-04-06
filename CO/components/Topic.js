function Topic({ topic, chapterId, onToggleTopic, isCompleted }) {
    try {
        const [localCompleted, setLocalCompleted] = React.useState(isCompleted);
        
        // Update local state when prop changes
        React.useEffect(() => {
            setLocalCompleted(isCompleted);
        }, [isCompleted]);
        
        // Function to handle topic toggling independently
        const handleTopicToggle = (e) => {
            e.preventDefault(); // Prevent navigation when clicking the checkbox
            e.stopPropagation(); // Stop event bubbling
            
            // Update local state instantly for better UX
            setLocalCompleted(!localCompleted);
            
            // Then update parent state
            onToggleTopic(chapterId, topic.id);
        };
        
        return (
            <div data-name="topic-item"
                className={`topic-item flex items-center justify-between p-3 rounded-md ${
                    localCompleted ? 'bg-green-50 dark:bg-green-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={localCompleted}
                        onChange={handleTopicToggle}
                        onClick={(e) => e.stopPropagation()}
                        className={`checkbox-animation w-4 h-4 text-blue-600 rounded mr-3 ${localCompleted ? 'completed' : ''}`}
                    />
                    <a href={`#/topic/${topic.id}`} className="text-theme-primary hover:text-blue-600">
                        {topic.title}
                    </a>
                </div>
                <div className="flex items-center">
                    <span className="text-sm text-theme-secondary mr-2">{topic.co}</span>
                    <i className="fas fa-chevron-right text-theme-secondary"></i>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Topic component error:', error);
        reportError(error);
        return null;
    }
}
