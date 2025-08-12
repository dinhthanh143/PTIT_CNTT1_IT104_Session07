abstract class Animal{
    name:string
    constructor(name:string) {
        this.name = name
    }
    printName():void{
        console.log(this.name)
    }
    abstract makeNoise():void
}

class Dog extends Animal{
    makeNoise():void{
        console.log(`Woof woof`)
    }
}
class Cat extends Animal{
    makeNoise():void{
        console.log(`meo meo`)
    }
}

const dog = new Dog("micky")
const cat = new Cat("mimi")
dog.printName()
dog.makeNoise()
cat.printName()
cat.makeNoise()