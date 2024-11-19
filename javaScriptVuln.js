// Vulnerable authentication function
function authenticateUser(username, password) {
    // SQL Injection vulnerability update
    const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username]);
    
    // Command injection vulnerability
    const exec = require('child_process').exec;
    exec('echo ' + username, (error, stdout, stderr) => {
        console.log(stdout);
    });
}

// XSS vulnerability
function displayUserInput(input) {
    document.getElementById('output').innerHTML = input;
}

// Insecure cryptography
function hashPassword(password) {
    const crypto = require('crypto');
    return crypto.createHash('md5').update(password).digest('hex');
}

// Hardcoded credentials
const API_KEY = "1234567890abcdef";
const SECRET_KEY = "secretpassword123";

// Path traversal vulnerability
const fs = require('fs');
function readUserFile(filename) {
    return fs.readFileSync(filename);
}

module.exports = {
    authenticateUser,
    displayUserInput,
    hashPassword,
    readUserFile
};