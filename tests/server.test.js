const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');

describe('GET /convert integration tests', () => {
    before(() => {
        console.log('Starting Express route integration tests...');
    });

    after(() => {
        console.log('All Express route integration tests completed.');
    });

    it('should return RGB values for a valid hex', async () => {
        const res = await request(app).get('/convert').query({ hex: 'FF5733' });
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    it('should accept a hex with # prefix', async () => {
        const res = await request(app).get('/convert').query({ hex: '#FF5733' });
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    it('should return 400 if hex parameter is missing', async () => {
        const res = await request(app).get('/convert');
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error');
    });

    it('should return 400 for invalid hex characters', async () => {
        const res = await request(app).get('/convert').query({ hex: 'ZZZ' });
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('Invalid hex color characters.');
    });
});