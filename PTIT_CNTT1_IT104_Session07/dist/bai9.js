class Comment {
    id;
    userId;
    content;
    replies = [];
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addReply(reply) {
        this.replies.push(reply);
        console.log(`them phan hoi thanh cong`);
    }
}
class Post {
    id;
    likes = [];
    comments = [];
    userId;
    content;
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        const foundUser = allUsers.find(user => user.id === userId);
        if (foundUser) {
            this.likes.push(foundUser);
        }
        else {
            console.log(`Khong tim thay nguoi dung`);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
        console.log(`Them binh luan thanh cong`);
    }
}
const allPosts = [];
const allUsers = [];
class User {
    id;
    posts = [];
    followers = [];
    constructor(id) {
        this.id = id;
    }
    createPost(content) {
        let id = Math.random() * 10000000;
        const post = new Post(id, this.id, content);
        this.posts.push(post);
        allPosts.push(post);
        console.log(`Dang bai thanh cong`);
    }
    comment(postId, commentContent) {
        const foundPost = allPosts.find(post => post.id === postId);
        if (foundPost) {
            let id = Math.random() * 10000000;
            const comment = new Comment(id, this.id, commentContent);
            foundPost.addComment(comment);
            console.log(`binh luan thanh cong`);
        }
        else {
            console.log(`khong tim thay bai viet`);
        }
    }
    follow(user) {
        this.followers.push(user);
        console.log(`Da theo doi thanh cong`);
    }
    likePost(postId) {
        const foundPost = allPosts.find(post => post.id === postId);
        if (foundPost) {
            foundPost.addLike(this.id);
            console.log(`da thich bai`);
        }
        else {
            console.log(`khong tim thay bai viet`);
        }
    }
    viewFeed() {
        if (this.followers.length <= 0) {
            console.log(`Chua theo doi nguoi dung nao`);
        }
        else {
            console.log(`=== Feed cua User ${this.id} ===`);
            this.followers.forEach(user => {
                if (user.posts.length === 0) {
                    console.log(`User ID:${user.id} chưa có bài đăng nào.`);
                }
                else {
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
export {};
//# sourceMappingURL=bai9.js.map