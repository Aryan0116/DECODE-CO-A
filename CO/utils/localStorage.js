const STORAGE_KEYS = {
    USER: 'syllabus_tracker_user',
    THEME: 'syllabus_tracker_theme',
    USERS: 'syllabus_tracker_users'
};

function saveUser(user) {
    try {
        if (!user) {
            localStorage.removeItem(STORAGE_KEYS.USER);
            return;
        }
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch (error) {
        console.error('Save user error:', error);
        reportError(error);
    }
}

function getUser() {
    try {
        const user = localStorage.getItem(STORAGE_KEYS.USER);
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('Get user error:', error);
        reportError(error);
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
        console.error('Save theme error:', error);
        reportError(error);
    }
}

function getTheme() {
    try {
        return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    } catch (error) {
        console.error('Get theme error:', error);
        reportError(error);
        return 'light';
    }
}

function getAllUsers() {
    try {
        const users = localStorage.getItem(STORAGE_KEYS.USERS);
        return users ? JSON.parse(users) : [];
    } catch (error) {
        console.error('Get all users error:', error);
        reportError(error);
        return [];
    }
}

function saveUserToList(user) {
    try {
        const users = getAllUsers();
        const existingUserIndex = users.findIndex(u => u.id === user.id);
        
        if (existingUserIndex !== -1) {
            users[existingUserIndex] = user;
        } else {
            users.push(user);
        }
        
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    } catch (error) {
        console.error('Save user to list error:', error);
        reportError(error);
    }
}

function updateUserInList(user) {
    try {
        const users = getAllUsers();
        const existingUserIndex = users.findIndex(u => u.id === user.id);
        
        if (existingUserIndex !== -1) {
            users[existingUserIndex] = user;
            localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
        } else {
            saveUserToList(user);
        }
    } catch (error) {
        console.error('Update user in list error:', error);
        reportError(error);
    }
}

function clearAllData() {
    try {
        localStorage.removeItem(STORAGE_KEYS.USER);
        localStorage.removeItem(STORAGE_KEYS.USERS);
        // Keep theme preference
    } catch (error) {
        console.error('Clear data error:', error);
        reportError(error);
    }
}
