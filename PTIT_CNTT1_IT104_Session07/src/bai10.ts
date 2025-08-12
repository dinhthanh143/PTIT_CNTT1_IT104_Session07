class MenuItem{
    id:number
    name:string
    price:number
    constructor(id:number,
    name:string,
    price:number) {
        this.id = id
        this.name = name
        this.price = price
    }

}

class Table{
    id:number
    capacity:number
    available:boolean
    constructor( id:number,
    capacity:number,
    available:boolean) {
        this.id = id
        this.capacity = capacity
        this.available = available
    }


}

class Resevation{
    id:number
    customerName:string
    tableId:number
    constructor(id:number,
    customerName:string,
    tableId:number) {
        this.id = id
        this.customerName = customerName
        this.tableId = tableId
    }
}

class Order{
    id:number
    tableId:number
    items:MenuItem[] = []
    constructor( id:number,
    tableId:number) {
        this.id = id
        this.tableId = tableId
    }

    getTotal():void{
        const total = this.items.reduce
    }
}