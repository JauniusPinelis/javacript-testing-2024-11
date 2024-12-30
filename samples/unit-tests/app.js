const express = require('express');
const InventoryService = require('./services/inventoryService');
const OrderService = require('./services/orderService');

const app = express();
app.use(express.json());

// Initialize services
const inventoryService = new InventoryService();
const orderService = new OrderService(inventoryService);

// Routes
app.get('/inventory', (req, res) => {
    res.json(inventoryService.getInventory());
});

app.post('/inventory', (req, res) => {
    const { name, quantity } = req.body;
    try {
        inventoryService.addItem(name, quantity);
        res.status(201).json({ message: 'Item added successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.post('/orders', (req, res) => {
    const { itemName, quantity } = req.body;
    try {
        const order = orderService.placeOrder(itemName, quantity);
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/orders', (req, res) => {
    res.json(orderService.getOrders());
});

module.exports = app;
