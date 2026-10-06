const { add, subtract, multiply, divide } = require('./src/mylib');

console.log('--- Arithmetic Operations ---');
console.log('Addition: 5 + 3 =', add(5, 3));
console.log('Subtraction: 10 - 4 =', subtract(10, 4));
console.log('Multiplication: 6 * 7 =', multiply(6, 7));
console.log('Division: 20 / 5 =', divide(20, 5));

// Test zero division error handling
try {
    divide(10, 0);
} catch (error) {
    console.log('Error caught:', error.message);
}