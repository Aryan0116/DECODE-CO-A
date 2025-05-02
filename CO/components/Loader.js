const Loader = () => {
    const [visible, setVisible] = React.useState(true);
    
    React.useEffect(() => {
        // Animate CPU cores with delay
        document.querySelectorAll('.cpu-core').forEach((core, index) => {
            core.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Create binary streams
        const createBinaryStream = () => {
            const container = document.querySelector('.loader-container');
            if (!container) return;
            
            const stream = document.createElement('div');
            stream.className = 'binary-stream';
            stream.style.left = `${Math.random() * 100}%`;
            stream.style.top = `${Math.random() * 100}%`;
            stream.innerText = Math.random().toString(2).substr(2, 8);
            container.appendChild(stream);
            
            setTimeout(() => {
                if (stream && stream.parentNode) {
                    stream.remove();
                }
            }, 2000);
        };
        
        const streamInterval = setInterval(createBinaryStream, 200);
        
        // Hide loader after 2.5 seconds
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2500);
        
        return () => {
            clearTimeout(timer);
            clearInterval(streamInterval);
        };
    }, []);
    
    if (!visible) return null;
    
    return (
        <div className="loader-container">
            <div className="digital-lines"></div>
            <div className="digital-lines" style={{ width: '180px', height: '180px', animationDirection: 'reverse' }}></div>
            <div className="flex flex-col items-center justify-center">
                <div className="cpu-grid">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="cpu-core"></div>
                    ))}
                </div>
                <div className="logo-text text-4xl font-bold mb-2">DECODE</div>
                <div className="logo-text text-2xl font-medium">COMPUTER ORGANIZATION</div>
                <div className="mt-6 text-blue-300 text-sm animate-pulse">Loading knowledge base...</div>
            </div>
        </div>
    );
};