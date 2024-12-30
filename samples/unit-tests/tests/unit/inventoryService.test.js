const InventoryService = require('../../services/inventoryService');

describe('InventoryService', () => {
    let inventoryService;

    beforeEach(() => {
        inventoryService = new InventoryService();
    });

    it('should add an item to inventory', () => {
        inventoryService.addItem('Apple', 10);
        expect(inventoryService.getInventory()).toEqual({ Apple: 10 });
    });

    it('should throw an error when adding zero or negative quantity', () => {
        expect(() => inventoryService.addItem('Banana', 0)).toThrow('Quantity must be greater than 0');
    });

    it('should remove an item from inventory', () => {
        inventoryService.addItem('Apple', 10);
        inventoryService.removeItem('Apple', 5);
        expect(inventoryService.getInventory()).toEqual({ Apple: 5 });
    });

    it('should throw an error when removing more than available', () => {
        inventoryService.addItem('Apple', 5);
        expect(() => inventoryService.removeItem('Apple', 10)).toThrow('Not enough inventory');
    });
});
