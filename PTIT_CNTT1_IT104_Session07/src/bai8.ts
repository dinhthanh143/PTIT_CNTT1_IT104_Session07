enum userStatus{
    ACTIVE = "active",
    BANNED = "banned"
}
class Account {
    public accountNumber:number
    protected balance:number
    protected history:string[] = []
    protected status:userStatus
    constructor(accNum:number,balance:number,status:userStatus) {
        this.accountNumber = accNum
        this.balance = balance
        this.status = status
    }
    deposit(amount:number):void{
        this.balance += amount
        console.log(`nap thanh cong`)
        this.history.unshift(`Nap ${amount} vao tai khoan.`)
    }
    withdraw(amount:number):void{
        if(amount <= this.balance){
            this.balance -= amount
            this.history.unshift(`rut ${amount} tu tai khoan.`)
            console.log(`rut tien thanh cong`)
        }else{
            console.log(`so du khong du`)
        }
    }
    showHistory():void{
        if(this.history.length <=0){
            console.log("==================================");
            console.log(`chua co giao dich nao dc thuc hien`)
            console.log("==================================");
        }else{
            console.log("=== Lịch sử giao dịch ===");
            this.history.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
            console.log("========================");
        }
    }
}

class SavingAccount extends Account{
    interestRate:number
    constructor(accountNumber:number,balance:number,status:userStatus,interestRate:number) {
        super(accountNumber,balance,status);
        this.interestRate = interestRate
    }
    withdraw(amount:number):void{
        if(amount <= this.balance){
            this.balance -= amount
            this.history.unshift(`rut ${amount} tu tai khoan.`)
            console.log(`rut tien thanh cong`)
        }else{
            console.log(`so du khong du`)
        }
    }
}

class CheckingAccount extends Account{
    overdraftLimit:number
    constructor(accountNumber:number,balance:number,status:userStatus,overdraftLimit:number) {
        super(accountNumber,balance,status);
        this.overdraftLimit = overdraftLimit
    }
    withdraw(amount:number):void{
       if(amount > this.balance + this.overdraftLimit){
           console.log(`khong the rut qua gioi han`)
       }else{
           this.balance -= amount
           this.history.unshift(`rut ${amount} tu tai khoan.`)
           console.log(`rut tien thanh cong`)
       }
    }
    showBalance():number{
        return this.balance
    }
}
const checkAcc = new CheckingAccount(1,10000,userStatus.ACTIVE,2000)
checkAcc.showHistory()
checkAcc.withdraw(2000)
checkAcc.deposit(1000)
checkAcc.withdraw(12000)
checkAcc.withdraw(10000)

checkAcc.showHistory()
console.log(checkAcc.showBalance())
