class InventoryService {
    constructor() {
        this.inventory = {};
    }

    addItem(name, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than 0');
        }
        this.inventory[name] = (this.inventory[name] || 0) + quantity;
    }

    removeItem(name, quantity) {
        if (!this.inventory[name] || this.inventory[name] < quantity) {
            throw new Error('Not enough inventory');
        }
        this.inventory[name] -= quantity;
    }

    getInventory() {
        return this.inventory;
    }
}

module.exports = InventoryService;
