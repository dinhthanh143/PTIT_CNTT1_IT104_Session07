class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log(`Woof woof`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log(`meo meo`);
    }
}
const dog = new Dog("micky");
const cat = new Cat("mimi");
dog.printName();
dog.makeNoise();
cat.printName();
cat.makeNoise();
export {};
//# sourceMappingURL=bai3.js.map