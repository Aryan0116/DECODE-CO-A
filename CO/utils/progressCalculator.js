function calculateChapterProgress(chapterProgress, topicsCount) {
    try {
        if (!chapterProgress) return 0;
        
        const completedTopics = Object.values(chapterProgress).filter(completed => completed === true).length;
        return topicsCount > 0 ? Math.round((completedTopics / topicsCount) * 100) : 0;
    } catch (error) {
        console.error('Calculate chapter progress error:', error);
        reportError(error);
        return 0;
    }
}

function calculateTotalProgress(userProgress) {
    try {
        if (!userProgress) return 0;
        
        let totalTopics = 0;
        let completedTopics = 0;
        
        // Get syllabus data
        const syllabusData = initialSyllabusData;
        
        syllabusData.forEach(chapter => {
            const chapterTopics = chapter.topics.length;
            totalTopics += chapterTopics;
            
            const chapterProgress = userProgress[chapter.id] || {};
            
            chapter.topics.forEach(topic => {
                if (chapterProgress[topic.id] === true) {
                    completedTopics++;
                }
            });
        });
        
        return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    } catch (error) {
        console.error('Calculate total progress error:', error);
        reportError(error);
        return 0;
    }
}
