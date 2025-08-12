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
const savingAcc = new SavingAccount(1, 10000, userStatus.ACTIVE, 0.1);
savingAcc.showHistory();
savingAcc.withdraw(2000);
savingAcc.deposit(1000);
savingAcc.showHistory();
export {};
//# sourceMappingURL=bai7.js.map