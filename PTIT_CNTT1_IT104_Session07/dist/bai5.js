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
        if (this.status === userStatus.ACTIVE) {
            this.isLogin = true;
            console.log(`Dang nhap thanh cong`);
        }
        else if (this.status === userStatus.BANNED) {
            console.log(`Tai khoan da bi khoa`);
        }
    }
}
const user = new userAcc(12, "abc", "18274haasd", true, "user", userStatus.ACTIVE);
user.login();
user.logout();
export {};
//# sourceMappingURL=bai5.js.map