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
    console.log(req.query)
        const startIndex = parseInt(req.query.startIndex) || 0
        const limit = parseInt(req.query.limit) || 9
        const sortDirection = req.query.order == "asc" ? 1 : -1    

        const posts = await Post.find({
            ...(req.query.userId && {userId:req.query.userId}),
            ...(req.query.title && {content:req.query.title}),
            ...(req.query.id && {_id:req.query.id}),
            ...(req.query.category && {category:req.query.category}),
            ...(req.query.searchTerm && {
                $or:[
                    {title:{$regex:req.query.searchTerm,$options:"i"}},
                    {content:{$regex:req.query.searchTerm,$options:"i"}}

                ],
            })
            
        }).sort({updatedAt:sortDirection}).skip(startIndex).limit(limit)
        
        res.status(200).json({
            status:"success",
            length:posts.length,
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