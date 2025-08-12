class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp() {
        this.speed += 1;
    }
    slowDown() {
        if (this.speed <= 0) {
            console.log("Khong the giam toc do");
        }
        else {
            this.speed -= 1;
        }
    }
    stop() {
        this.speed = 0;
    }
    showSpeed() {
        return this.speed;
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const bicycle = new Bicycle("godspeed", 12, 27834, 4);
bicycle.speedUp();
console.log(bicycle.showSpeed());
bicycle.slowDown();
console.log(bicycle.showSpeed());
bicycle.stop();
export {};
//# sourceMappingURL=bai2.js.map