// Vulnerable code pattern
const userInput = '{"proto": {"malicious": true}}';
$.extend(true, {}, JSON.parse(userInput));

// Example 1
$.extend(true, {}, JSON.parse(userInput));

// Example 2 
const data = JSON.parse(request.body);
$.extend(true, config, data);

// Example 3
let userConfig = {};
$.extend(true, userConfig, JSON.parse(localStorage.getItem('settings')));

// Vulnerable code that should be caught
function mergeUserSettings(userInput) {
    let obj = {};
    for (let key in JSON.parse(userInput)) {
      obj[key] = JSON.parse(userInput)[key];
    }
    return obj;
  }
  function merge(target, source) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object') {
        target[key] = merge(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }
  
  // Exploitation
  merge({}, JSON.parse('{"__proto__": {"polluted": true}}'));
  
  // Usage
  mergeUserSettings('{"__proto__": {"isAdmin": true}}');
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
    document.getElementById('output').textContent = userInput;
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