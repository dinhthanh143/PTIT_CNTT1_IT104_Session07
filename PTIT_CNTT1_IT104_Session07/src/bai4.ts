abstract class Person{
    name:string
    constructor(name:string) {
        this.name = name
    }
    displayInfo():void{
        console.log(this.name)
    }
        
}
class Student extends Person{
    id:number
    constructor(name:string,id:number) {
        super(name);
        this.id = id
    }
    displayInfo():void {
        console.log(`ID:${this.id}. ${this.name}`)
    }
}
class Teacher extends Person{
    subject:string
    constructor(name:string,subject:string) {
        super(name);
        this.subject = subject
    }
    displayInfo():void {
        console.log(`Subject: ${this.subject} - ${this.name}`)
    }
}

const student = new Student("thanh",128)
const teacher = new Teacher("viet","toan")
student.displayInfo()

teacher.displayInfo()
