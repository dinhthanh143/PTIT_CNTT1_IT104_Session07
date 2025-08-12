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
        if(this.status === "active"){
            this.isLogin = true
            console.log(`Dang nhap thanh cong`)
        }else if(this.status === "banned"){
            console.log(`Tai khoan da bi khoa`)
        }
    }
}
const allUsers:userAcc[] = [
    new userAcc(12,"abc","18274haasd",true,"user",userStatus.ACTIVE),
    new userAcc(42,"doraemon","vnuycs12",false,"user",userStatus.ACTIVE)
]
class adminAcc extends Account{
    banUser(id:number):void{
        const foundIndex = allUsers.find(user=>user.id === id)
        if(foundIndex){
            foundIndex.status = userStatus.BANNED
            console.log(`Khoa thanh cong`)
        }else{
            console.log(`khong tim thay nguoi dung voi id nay`)
        }
    }
}
const admin = new adminAcc(0,"admin","adminreal",true,"admin")
console.log(allUsers)
admin.banUser(42)
console.log(allUsers)