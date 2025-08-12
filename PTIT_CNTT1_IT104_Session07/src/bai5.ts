class Account{
    id: number
    userName: string
    password: string
    isLogin: boolean
    role: string
    constructor(id:number, userName:string,password:string,isLogin:boolean,role:string) {
        this.id = id
        this.userName = userName
        this.password = password
        this.isLogin = isLogin
        this.role   = role
    }
    logout():void{
        if(this.isLogin){
            console.log(`Dang xuat thanh cong`)
            this.isLogin = false
        }
    }
}
enum userStatus{
    ACTIVE = "active",
    BANNED = "banned"
}
class userAcc extends Account{
    status:userStatus
    constructor(id:number, userName:string,password:string,isLogin:boolean,role:string,status:userStatus) {
        super(id,userName,password,isLogin,role)
        this.status = status
    }
    login():void{
        if(this.status === userStatus.ACTIVE){
            this.isLogin = true
            console.log(`Dang nhap thanh cong`)
        }else if(this.status === userStatus.BANNED){
            console.log(`Tai khoan da bi khoa`)
        }
    }
}
const user = new userAcc(12,"abc","18274haasd",true,"user",userStatus.ACTIVE)
user.login()
user.logout()