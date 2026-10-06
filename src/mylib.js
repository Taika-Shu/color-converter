/**
 * Adds two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference a - b.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides a by b.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor (must not be zero).
 * @returns {number} The quotient a / b.
 * @throws {Error} If b is zero.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

module.exports = { add, subtract, multiply, divide };