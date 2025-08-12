class MenuItem {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    id;
    capacity;
    available;
    constructor(id, capacity, available) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Resevation {
    id;
    customerName;
    tableId;
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    id;
    tableId;
    items = [];
    constructor(id, tableId) {
        this.id = id;
        this.tableId = tableId;
    }
    getTotal() {
        const total = this.items.reduce;
    }
}
export {};
//# sourceMappingURL=bai10.js.map