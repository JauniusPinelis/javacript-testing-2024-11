const OrderService = require('../../services/orderService');
const InventoryService = require('../../services/inventoryService');
jest.mock('../../services/inventoryService');

describe('OrderService', () => {
    let orderService;
    let mockInventoryService;

    beforeEach(() => {
        mockInventoryService = new InventoryService();
        mockInventoryService.removeItem = jest.fn();
        orderService = new OrderService(mockInventoryService);
    });

    it('should place an order and reduce inventory', () => {
        mockInventoryService.removeItem.mockImplementation(() => {});
        const order = orderService.placeOrder('Apple', 5);
        expect(order).toEqual({ id: 1, itemName: 'Apple', quantity: 5 });
        expect(mockInventoryService.removeItem).toHaveBeenCalledWith('Apple', 5);
    });

    it('should throw an error for invalid order quantity', () => {
        expect(() => orderService.placeOrder('Apple', 0)).toThrow('Order quantity must be greater than 0');
    });

    it('should throw an error if inventory is insufficient', () => {
        mockInventoryService.removeItem.mockImplementation(() => {
            throw new Error('Not enough inventory');
        });
        expect(() => orderService.placeOrder('Apple', 10)).toThrow('Not enough inventory');
    });
});
