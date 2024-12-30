class OrderService {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
        this.orders = [];
    }

    placeOrder(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Order quantity must be greater than 0');
        }

        this.inventoryService.removeItem(itemName, quantity);
        const order = { id: this.orders.length + 1, itemName, quantity };
        this.orders.push(order);
        return order;
    }

    getOrders() {
        return this.orders;
    }
}

module.exports = OrderService;
