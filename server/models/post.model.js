import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:[true,"userId is required"],
        unique:true
    },
    content:{
        type:String,
        required:[true,'content is required']
    },
    title:{
        type:String,
        required:[true,'title is required']
    },
    
    image:{
        type:String,
        default:"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"
    },
    
    category:{
        type:String,
        required:true
    },
    
    slug:{
        type:String,
        required:[true,'slug is required'],
        unique:true
    }
    


},{timestamps:true})

const Post = mongoose.model('post',postSchema)
export default Post;