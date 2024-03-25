import Post from '../models/post.model.js'
import CustomError from '../utils/CustomError.js'
const asyncErrorHandler = (func) => {
    return (req,res,next)=>{
        func(req,res,next).catch(err => next(err))

    }

    
}

export const createPost =asyncErrorHandler(async(req,res,next)=>{  

    const newPost = new Post({
        ...req.body
    })
    const savedPost = await newPost.save()

    res.status(201).json({
        status:"success",
        message:savedPost
    })

   
})



export const getPosts = asyncErrorHandler(async(req,res,next)=>{
  
        const posts = await Post.find()
        
        res.status(200).json({
            status:"success",
            message:posts
        })

   
    
})

export const deletePosts = asyncErrorHandler(async(req,res,next)=>{
    const findPost = await Post.findById(req.params.postId)
    if(!findPost) return next(new CustomError(`post not found`,404))
    const posts = await Post.findByIdAndDelete(req.params.postId)
    res.status(200).json({
        status:"success",
        message:"Post successfully deleted"

        
    })

})