class CustomError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        this.isOperational = true
        this.status = statusCode >=400 && statusCode < 500 ? 'client error':'error'
        Error.captureStackTrace(this,this.contructor)


    }
}
export default CustomError