const request = require('supertest');
const app = require('../../app');

describe('Express API Integration Tests', () => {
    it('should add an item to inventory and place an order', async () => {
        // Add inventory
        await request(app).post('/inventory').send({ name: 'Apple', quantity: 10 });

        // Place order
        const orderResponse = await request(app)
            .post('/orders')
            .send({ itemName: 'Apple', quantity: 5 });
        expect(orderResponse.statusCode).toBe(201);
        expect(orderResponse.body).toEqual({ id: 1, itemName: 'Apple', quantity: 5 });

        // Check inventory
        const inventoryResponse = await request(app).get('/inventory');
        expect(inventoryResponse.body).toEqual({ Apple: 5 });
    });

    it('should return an error for insufficient inventory', async () => {
        await request(app).post('/inventory').send({ name: 'Banana', quantity: 5 });

        const res = await request(app).post('/orders').send({ itemName: 'Banana', quantity: 10 });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Not enough inventory' });
    });
});
