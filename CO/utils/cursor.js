function initCustomCursor() {
    try {
        const cursor = document.getElementById('custom-cursor');
        
        if (!cursor || window.innerWidth < 768) {
            return;
        }
        
        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            if (!cursor.classList.contains('active')) {
                cursor.classList.add('active');
            }
        };
        
        const handleMouseDown = () => {
            cursor.classList.add('click');
            setTimeout(() => {
                cursor.classList.remove('click');
            }, 300);
        };
        
        const handleMouseUp = () => {
            cursor.classList.remove('click');
        };
        
        const addHoverEffect = (e) => {
            if (e.target.tagName === 'A' || 
                e.target.tagName === 'BUTTON' || 
                e.target.closest('a') || 
                e.target.closest('button')) {
                cursor.classList.add('hover');
            }
        };
        
        const removeHoverEffect = () => {
            cursor.classList.remove('hover');
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', addHoverEffect);
        document.addEventListener('mouseout', removeHoverEffect);
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', addHoverEffect);
            document.removeEventListener('mouseout', removeHoverEffect);
        };
    } catch (error) {
        console.error('Custom cursor error:', error);
        reportError(error);
    }
}

document.addEventListener('DOMContentLoaded', initCustomCursor);
