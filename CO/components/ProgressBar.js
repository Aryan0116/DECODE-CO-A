function ProgressBar({ progress }) {
    try {
        return (
            <div data-name="progress-bar" className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                    className="progress-animation bg-blue-600 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        );
    } catch (error) {
        console.error('ProgressBar component error:', error);
        reportError(error);
        return null;
    }
}
