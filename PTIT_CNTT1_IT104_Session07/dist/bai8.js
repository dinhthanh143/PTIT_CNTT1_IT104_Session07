var userStatus;
(function (userStatus) {
    userStatus["ACTIVE"] = "active";
    userStatus["BANNED"] = "banned";
})(userStatus || (userStatus = {}));
class Account {
    accountNumber;
    balance;
    history = [];
    status;
    constructor(accNum, balance, status) {
        this.accountNumber = accNum;
        this.balance = balance;
        this.status = status;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`nap thanh cong`);
        this.history.unshift(`Nap ${amount} vao tai khoan.`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.history.unshift(`rut ${amount} tu tai khoan.`);
            console.log(`rut tien thanh cong`);
        }
        else {
            console.log(`so du khong du`);
        }
    }
    showHistory() {
        if (this.history.length <= 0) {
            console.log("==================================");
            console.log(`chua co giao dich nao dc thuc hien`);
            console.log("==================================");
        }
        else {
            console.log("=== Lịch sử giao dịch ===");
            this.history.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
            console.log("========================");
        }
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(accountNumber, balance, status, interestRate) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.history.unshift(`rut ${amount} tu tai khoan.`);
            console.log(`rut tien thanh cong`);
        }
        else {
            console.log(`so du khong du`);
        }
    }
}
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > this.balance + this.overdraftLimit) {
            console.log(`khong the rut qua gioi han`);
        }
        else {
            this.balance -= amount;
            this.history.unshift(`rut ${amount} tu tai khoan.`);
            console.log(`rut tien thanh cong`);
        }
    }
    showBalance() {
        return this.balance;
    }
}
const checkAcc = new CheckingAccount(1, 10000, userStatus.ACTIVE, 2000);
checkAcc.showHistory();
checkAcc.withdraw(2000);
checkAcc.deposit(1000);
checkAcc.withdraw(12000);
checkAcc.withdraw(10000);
checkAcc.showHistory();
console.log(checkAcc.showBalance());
export {};
//# sourceMappingURL=bai8.js.map