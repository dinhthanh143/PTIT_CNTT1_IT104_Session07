class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    logout() {
        if (this.isLogin) {
            console.log(`Dang xuat thanh cong`);
            this.isLogin = false;
        }
    }
}
var userStatus;
(function (userStatus) {
    userStatus["ACTIVE"] = "active";
    userStatus["BANNED"] = "banned";
})(userStatus || (userStatus = {}));
class userAcc extends Account {
    status;
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Dang nhap thanh cong`);
        }
        else if (this.status === "banned") {
            console.log(`Tai khoan da bi khoa`);
        }
    }
}
const allUsers = [
    new userAcc(12, "abc", "18274haasd", true, "user", userStatus.ACTIVE),
    new userAcc(42, "doraemon", "vnuycs12", false, "user", userStatus.ACTIVE)
];
class adminAcc extends Account {
    banUser(id) {
        const foundIndex = allUsers.find(user => user.id === id);
        if (foundIndex) {
            foundIndex.status = userStatus.BANNED;
            console.log(`Khoa thanh cong`);
        }
        else {
            console.log(`khong tim thay nguoi dung voi id nay`);
        }
    }
}
const admin = new adminAcc(0, "admin", "adminreal", true, "admin");
console.log(allUsers);
admin.banUser(42);
console.log(allUsers);
export {};
//# sourceMappingURL=bai6.js.map