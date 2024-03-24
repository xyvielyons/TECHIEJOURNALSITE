import Post from '../models/post.model.js'
export const createPost = async(req,res,next)=>{  
   try{
    const newPost = new Post({
        ...req.body
    })
    const savedPost = await newPost.save()

    res.status(201).json({
        status:"success",
        message:savedPost
    })

   }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    console.log(err)
   }
}
export const getPosts = async(req,res,next)=>{
    
}