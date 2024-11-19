// Test cases for your rule:

// Case 1: Vulnerable object spread
const obj1 = {...someData};

// Case 2: Unsafe object creation
const user = { username: "test" };

// Case 3: Direct prototype access
user.__proto__.isAdmin = true;

// Case 4: Object.assign vulnerability
const userInput = '{"malicious": true}';
Object.assign(user, JSON.parse(userInput));

// Case 5: Prototype manipulation
const maliciousObj = {prototype: {isAdmin: true}};

// Case 6: JSON parse vulnerability
const parsed = JSON.parse('{"__proto__": {"polluted": true}}');

// Safe cases that shouldn't trigger:
const safeObj1 = Object.create(null);
const safeObj2 = {__proto__: null};