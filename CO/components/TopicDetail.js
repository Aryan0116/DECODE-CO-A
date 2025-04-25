function TopicDetail({ topic, isCompleted, onToggleComplete, nextTopic, prevTopic }) {
    try {
        const [localCompleted, setLocalCompleted] = React.useState(isCompleted);
        
        // Update local state when prop changes
        React.useEffect(() => {
            setLocalCompleted(isCompleted);
        }, [isCompleted]);
        
        const handleToggle = () => {
            // Update local state instantly for better UX
            setLocalCompleted(!localCompleted);
            
            // Then update parent state
            onToggleComplete();
        };
        const renderMedia = () => {
        const mediaElements = [];
        let mediaIndex = 0;

        if (topic.image) {
            if (Array.isArray(topic.image)) {
                topic.image.forEach(img => {
                    mediaElements.push(
                        <div key={`image-${mediaIndex}`} className="mb-6">
                            <img src={img.url} alt={img.alt} className="rounded-lg shadow-md" />
                        </div>
                    );
                    mediaIndex++;
                });
            } else {
                mediaElements.push(
                    <div key={`image-${mediaIndex}`} className="mb-6">
                        <img src={topic.image.url} alt={topic.image.alt} className="rounded-lg shadow-md" />
                    </div>
                );
                mediaIndex++;
            }
        }

        if (topic.video) {
            const videos = Array.isArray(topic.video) ? topic.video : [topic.video]; // Ensure videos is always an array
            videos.forEach(vid => {
                mediaElements.push(
                    <div key={`video-${mediaIndex}`} className="mt-6">
                        <h3 className="text-lg font-semibold mb-2 text-theme-primary">Watch Video</h3>
                        <video controls width="100%" className="rounded-lg shadow-md">
                            <source src={vid.url} type={`video/${vid.type}`} />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                );
                mediaIndex++;
            });
        }

        if (topic.youtube) {
            if(Array.isArray(topic.youtube)){
                topic.youtube.forEach(yt => {
                    mediaElements.push(
                        <div key={`youtube-${mediaIndex}`} className="mt-6">
                            <h3 className="text-lg font-semibold mb-2 text-theme-primary">Watch on YouTube</h3>
                            <div className="relative w-full" style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/$${new URL(yt.url).searchParams.get("v")}`}
                                    title={yt.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                                ></iframe>
                            </div>
                        </div>
                    )
                    mediaIndex++;
                })
            } else {
                mediaElements.push(
                    <div key={`youtube-${mediaIndex}`} className="mt-6">
                        <h3 className="text-lg font-semibold mb-2 text-theme-primary">Watch on YouTube</h3>
                        <div className="relative w-full" style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}>
                            <iframe
                                src={`https://www.youtube.com/embed/$${new URL(topic.youtube.url).searchParams.get("v")}`}
                                title={topic.youtube.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                            ></iframe>
                        </div>
                    </div>
                );
                mediaIndex++;
            }
        }

        return mediaElements;
    };
        return (
            <div data-name="topic-detail" className="max-w-3xl mx-auto p-6">
                <div className="bg-theme-secondary rounded-lg shadow-theme p-6">
                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold text-theme-primary">{topic.title}</h1>
                        <div className="flex items-center">
                            <span className="mr-2 text-theme-secondary">Mark as completed</span>
                            <input
                                type="checkbox"
                                checked={isCompleted}
                                onChange={onToggleComplete}
                                className={`checkbox-animation w-5 h-5 text-blue-600 rounded ${isCompleted ? 'completed' : ''}`}
                            />
                        </div>
                    </div>

                    {/* co*/}
                    <div className="flex items-center mb-6">
                        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                            {topic.co}
                        </span>
                    </div>

                    {/* Image (if available) */}
                    {topic.image && (
                        <div className="mb-6">
                            <img src={topic.image.url} alt={topic.image.alt} className="rounded-lg shadow-md" />
                        </div>
                    )}

                    {/* Description */}
                    <div className="prose max-w-none dark:prose-invert">
                        <p className="text-theme-secondary mb-4">{topic.description}</p>

                        {/* Learning Objectives */}
                        <h2 className="text-xl font-semibold mb-3 text-theme-primary">Learning Objectives</h2>
                        <ul className="list-disc pl-5 mb-6">
                            {topic.objectives.map((objective, index) => (
                                <li key={index} className="text-theme-secondary mb-2">{objective}</li>
                            ))}
                        </ul>

                        {/* Key Points */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2 text-theme-primary">Key Points</h3>
                            <ul className="space-y-2">
                                {topic.keyPoints.map((point, index) => (
                                    <li key={index} className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span className="text-theme-secondary">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* YouTube youtube (if available) */}
                        {topic.video && (
    <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-theme-primary">Watch Video</h3>
        <video
            controls
            width="100%"
            className="rounded-lg shadow-md"
        >
            <source src={topic.video.url} type={`video/${topic.video.type}`} />
            Your browser does not support the video tag.
        </video>
    </div>
)}

{topic.youtube && (
    <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-theme-primary">Watch on YouTube</h3>
        <div className="relative w-full" style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}>
            <iframe
                src={`https://www.youtube.com/embed/${new URL(topic.youtube.url).searchParams.get("v")}`}
                title={topic.youtube.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            ></iframe>
        </div>
    </div>
)}



                        {/* Table (if available) */}
                        {topic.table && typeof topic.table === "object" && (() => {
  // Check if it's a single table (has headers and rows directly)
  const isSingleTable = Array.isArray(topic.table.headers) && Array.isArray(topic.table.rows);

  // Check if it's multiple tables
  const multipleTables = !isSingleTable && Object.keys(topic.table).length > 1;

  if (isSingleTable) {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-theme-primary">
          {topic.table.title || "Comparison Table"}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                {topic.table.headers.map((header, index) => (
                  <th key={index} className="border p-2 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topic.table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (multipleTables) {
    return Object.entries(topic.table).map(([key, table], index) => (
      <div key={key} className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-theme-primary">
          {table.title || `Table ${index + 1}`}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                {table.headers.map((header, headerIndex) => (
                  <th key={headerIndex} className="border p-2 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ));
  }

  return null; // No valid table data
})()}

                        {/* Additional Resources (if available) */}
                        {topic.additionalResources && (
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2 text-theme-primary">Additional Resources</h3>
                                <ul className="space-y-2">
                                    {topic.additionalResources.map((resource, index) => (
                                        <li key={index} className="flex items-start">
                                            <i className="fas fa-external-link-alt text-blue-500 mt-1 mr-2"></i>
                                            <a href={resource.url} target="_blank" rel="noopener noreferrer" 
                                               className="text-blue-600 hover:underline">
                                                {resource.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    {/* Navigation buttons */}
                    <div className="mt-8 flex justify-between">
                        {prevTopic ? (
                            <a 
                                href={`#/topic/${prevTopic.id}`}
                                className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-theme-primary rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                <i className="fas fa-arrow-left mr-2"></i>
                                Previous: {prevTopic.title.length > 20 ? prevTopic.title.substring(0, 20) + '...' : prevTopic.title}
                            </a>
                        ) : (
                            <div></div> // Empty div for spacing
                        )}
                        
                        {nextTopic ? (
                            <a 
                                href={`#/topic/${nextTopic.id}`}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ml-auto"
                            >
                                Next: {nextTopic.title.length > 20 ? nextTopic.title.substring(0, 20) + '...' : nextTopic.title}
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        ) : (
                            <div></div> // Empty div for spacing
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('TopicDetail component error:', error);
        reportError(error);
        return null;
    }
}