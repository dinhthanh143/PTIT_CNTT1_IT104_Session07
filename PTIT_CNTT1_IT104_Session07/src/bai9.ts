class Comment{
    id:number
    userId:number
    content:string
    replies:Comment[] = []
    constructor(id:number,userId:number,content:string) {
        this.id = id
        this.userId = userId
        this.content = content
    }
    addReply(reply:Comment):void{
        this.replies.push(reply)
        console.log(`them phan hoi thanh cong`)
    }
}
class Post{
    id:number
    likes:User[] = []
    comments:Comment[] = []
    userId:number
    content:string
    constructor(id:number,userId:number,content:string) {
        this.id = id
        this.userId = userId
        this.content = content
    }
    addLike(userId:number):void{
        const foundUser = allUsers.find(user=>user.id === userId)
        if(foundUser){
            this.likes.push(foundUser)
        }else{
            console.log(`Khong tim thay nguoi dung`)
        }
    }

    addComment(comment:Comment):void{
        this.comments.push(comment)
        console.log(`Them binh luan thanh cong`)
    }
}
const allPosts:Post[] = []
const allUsers:User[]= []
class User{
    id:number
    posts:Post[] = []
    followers:User[] = []
    constructor(id:number) {
        this.id = id
    }

    createPost(content:string):void{
        let id = Math.random()*10000000
        const post = new Post(id,this.id,content)
        this.posts.push(post)
        allPosts.push(post)
        console.log(`Dang bai thanh cong`)
    }

    comment(postId:number, commentContent:string){
        const foundPost = allPosts.find(post=>post.id === postId)
        if(foundPost){
                let id = Math.random()*10000000
                const comment = new Comment(id,this.id,commentContent)
                foundPost.addComment(comment)
                console.log(`binh luan thanh cong`)
        }else{
            console.log(`khong tim thay bai viet`)
        }
    }

    follow(user:User):void{
        this.followers.push(user)
        console.log(`Da theo doi thanh cong`)
    }

    likePost(postId:number):void{
        const foundPost:Post|undefined = allPosts.find(post=>post.id === postId)
        if(foundPost){
            foundPost.addLike(this.id)
            console.log(`da thich bai`)
        }else{
            console.log(`khong tim thay bai viet`)
        }
    }

    viewFeed():void{
        if(this.followers.length <= 0){
            console.log(`Chua theo doi nguoi dung nao`)
        }else{
            console.log(`=== Feed cua User ${this.id} ===`);
            this.followers.forEach(user => {

                if (user.posts.length === 0) {
                    console.log(`User ID:${user.id} chưa có bài đăng nào.`);
                } else {
                    user.posts.forEach(post => {
                        console.log(`------------------------------`);
                        console.log(`Bài đăng ID: ${post.id}`);
                        console.log(`Nội dung: ${post.content}`);
                        console.log(`Likes: ${post.likes}`);
                        console.log(`Số bình luận: ${post.comments.length}`);
                    });
                }
            });
            console.log(`===============================`);
        }
    }
}