class Employee{
    public name:string
    protected company:string;
    private phone:string
    constructor(name:string, company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():void{
        console.log(`${this.company}-${this.name}:${this.phone}`)
    }
}

class Manager extends Employee{
    teamSize:number;
    constructor(name:string,company:string, phone:string,teamSize:number) {
        super(name,company,phone);
        this.teamSize=teamSize
    }
}