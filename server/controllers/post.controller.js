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



export const getPosts = async(req,res,next)=>{
    try{
        const posts = await Post.find()
        const error = new CustomError('error',400)
        return next(error)
        res.status(201).json({
            status:"success",
            message:posts
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
        console.log(err)
    }
    
}