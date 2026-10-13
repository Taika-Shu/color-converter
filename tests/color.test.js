const { expect } = require('chai');
const { hexToRgb } = require('../src/color');

describe('hexToRgb() unit tests', () => {
    before(() => {
        console.log('Starting hexToRgb unit tests...');
    });

    after(() => {
        console.log('All hexToRgb unit tests completed.');
    });

    it('should convert a full 6-digit hex with # to RGB', () => {
        expect(hexToRgb('#FF5733')).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    it('should convert a full 6-digit hex without # to RGB', () => {
        expect(hexToRgb('FF5733')).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    it('should convert a 3-digit shorthand hex to RGB', () => {
        expect(hexToRgb('#F53')).to.deep.equal({ r: 255, g: 85, b: 51 });
    });

    it('should handle lowercase hex', () => {
        expect(hexToRgb('#ff5733')).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    it('should throw an error for invalid characters', () => {
        expect(() => hexToRgb('ZZZZZZ')).to.throw('Invalid hex color characters.');
    });

    it('should throw an error for wrong length', () => {
        expect(() => hexToRgb('FF57')).to.throw('Invalid hex color length.');
    });

    it('should throw an error if input is not a string', () => {
        expect(() => hexToRgb(123456)).to.throw('Input must be a string.');
    });
});