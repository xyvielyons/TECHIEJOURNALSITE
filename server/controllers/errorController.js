const devErrors = (res,error) =>{
    res.status(error.statusCode).send({
        success:false, 
        error: error,
        status:error.statusCode,
        message:error.message,
        stacktrace:error.stack
        
    });
}

const prodErrors = (res,error)=>{
    if(error.isOperational){
        res.status(err.statusCode).json({
            status:error.statusCode,
            message:error.message
        })
    }else{
        res.status(500).json({//errors created by mongoose
            status:"error",
            message:"Something went wrong please try again later"
        })
    }
   
}






export const globalErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500
    error.status = error.status || "error"
    if(process.env.NODE_ENV === 'development'){
        devErrors(res,error)
    }else if(process.env.NODE_ENV === 'production'){
       prodErrors(res,error)
    }
    
}