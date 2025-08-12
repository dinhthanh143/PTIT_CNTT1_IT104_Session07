class Vehicle{
    protected name:string;
    protected speed:number
    protected id:number;
    constructor(name:string, speed:number, id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp():void{
        this.speed += 1
    }
    slowDown():void{
        if(this.speed <= 0){
            console.log("Khong the giam toc do")
        }else{
            this.speed -= 1
        }
    }
    stop():void{
        this.speed  = 0
    }
    showSpeed(): number {
        return this.speed;
    }
}

class Bicycle extends Vehicle{
    private gear:number
    constructor(name:string, speed:number, id:number,gear:number) {
        super(name, speed, id);
        this.gear = gear;
    }
}

const bicycle = new Bicycle("godspeed",12,27834,4)
bicycle.speedUp();
console.log(bicycle.showSpeed());
bicycle.slowDown();
console.log(bicycle.showSpeed());
bicycle.stop()

