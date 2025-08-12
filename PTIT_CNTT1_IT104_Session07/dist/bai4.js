class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID:$ {this.id}. ${this.name}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Subject: ${this.subject} - ${this.name}`);
    }
}
const student = new Student("thanh", 128);
const teacher = new Teacher("viet", "toan");
student.displayInfo();
teacher.displayInfo();
export {};
//# sourceMappingURL=bai4.js.map