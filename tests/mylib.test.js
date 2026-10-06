const { expect } = require('chai');
const { add, subtract, multiply, divide } = require('../src/mylib');

describe('mylib arithmetic operations', () => {
    // Runs once before all tests
    before(() => {
        console.log('Starting mylib tests...');
    });

    // Runs once after all tests
    after(() => {
        console.log('All mylib tests completed.');
    });

    describe('add()', () => {
        it('should return the sum of two positive numbers', () => {
            expect(add(2, 3)).to.equal(5);
        });

        it('should handle negative numbers', () => {
            expect(add(-2, 3)).to.equal(1);
        });
    });

    describe('subtract()', () => {
        it('should return the difference of two numbers', () => {
            expect(subtract(10, 4)).to.equal(6);
        });
    });

    describe('multiply()', () => {
        it('should return the product of two numbers', () => {
            expect(multiply(6, 7)).to.equal(42);
        });
    });

    describe('divide()', () => {
        it('should return the quotient of two numbers', () => {
            expect(divide(20, 5)).to.equal(4);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => divide(10, 0)).to.throw('Division by zero is not allowed.');
        });
    });
});