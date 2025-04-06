function Toast({ toast, onRemove }) {
    try {
        const { id, message, type } = toast;
        
        React.useEffect(() => {
            const timer = setTimeout(() => {
                onRemove(id);
            }, 3000);
            
            return () => clearTimeout(timer);
        }, [id, onRemove]);
        
        const getToastClasses = () => {
            const baseClasses = "toast px-4 py-3 rounded-lg shadow-lg flex items-center justify-between";
            
            switch (type) {
                case 'success':
                    return `${baseClasses} bg-green-500 text-white`;
                case 'error':
                    return `${baseClasses} bg-red-500 text-white`;
                case 'warning':
                    return `${baseClasses} bg-yellow-500 text-white`;
                default:
                    return `${baseClasses} bg-blue-500 text-white`;
            }
        };
        
        const getIcon = () => {
            switch (type) {
                case 'success':
                    return <i className="fas fa-check-circle mr-2"></i>;
                case 'error':
                    return <i className="fas fa-exclamation-circle mr-2"></i>;
                case 'warning':
                    return <i className="fas fa-exclamation-triangle mr-2"></i>;
                default:
                    return <i className="fas fa-info-circle mr-2"></i>;
            }
        };
        
        return (
            <div data-name="toast" className={getToastClasses()}>
                <div className="flex items-center">
                    {getIcon()}
                    <span>{message}</span>
                </div>
                <button 
                    onClick={() => onRemove(id)} 
                    className="ml-4 text-white opacity-75 hover:opacity-100"
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        );
    } catch (error) {
        console.error('Toast component error:', error);
        reportError(error);
        return null;
    }
}

function ToastContainer() {
    try {
        const { toasts, removeToast } = React.useContext(AuthContext);
        
        if (toasts.length === 0) {
            return null;
        }
        
        return (
            <div data-name="toast-container" className="toast-container">
                {toasts.map(toast => (
                    <Toast key={toast.id} toast={toast} onRemove={removeToast} />
                ))}
            </div>
        );
    } catch (error) {
        console.error('ToastContainer error:', error);
        reportError(error);
        return null;
    }
}
