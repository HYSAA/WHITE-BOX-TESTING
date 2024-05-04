function login(username, password) {
    // Logic for login
    if (username === 'admin' && password === 'password') {
        return true;
    } else {
        return false;
    }
}

module.exports = login;
