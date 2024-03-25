import CustomError from "./CustomError.js"
export const verify = (req,res,next)=>{
    const getSecretAuthentiacationKey = process.env.SECRETKEY
    const clientToken = req.headers.authorization
    if(!clientToken){
       return next(new CustomError(`Token not found`,404))

    }
    let token = clientToken.split(" ")[1]
    if(token !== getSecretAuthentiacationKey){
        return next(new CustomError(`Authentication token does not match Access Denied`,401))

    }

    next()
   


}
