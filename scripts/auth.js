// src/scripts/auth.js

const registerUser = (username, email, password) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Ensure users is an array
    if (!Array.isArray(users)) {
        users = [];
    }

    // Check if the user already exists
    if (users.find(user => user.email === email)) {
        alert('User already exists!');
        return false;
    }

    // Add the new user
    users.push({ username, email, password, learningPath: [] });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
};

const loginUser = (email, password) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Ensure users is an array
    if (!Array.isArray(users)) {
        users = [];
    }

    // Find the user by email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Save the current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    } else {
        alert('Invalid email or password!');
        return false;
    }
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
};

const logoutUser = () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
};
