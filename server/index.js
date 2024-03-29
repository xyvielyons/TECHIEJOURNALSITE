import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import xss from 'xss-clean'
import postRoutes from './routes/post.route.js'
import { globalErrorHandler } from "./controllers/errorController.js"
import CustomError from "./utils/CustomError.js"
dotenv.config()
const app = express()

process.on('uncaughtException',(err)=>{
    console.log(err.message)
    console.log("Unhandled exception occured! shutting down")
   
        process.exit(1);
   
    
})

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors({origin:["http://localhost:3000"]}))//cross origin 
app.use(cookieParser())
app.use(helmet())
app.use(xss())

const PORT = process.env.PORT
mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>console.log(`db connectio successful server running at port: ${PORT}`)))

app.use("/api/post",postRoutes)
app.all('*',(req,res,next)=>{
    const err = new CustomError(`cant find ${req.originalUrl} on the server`,404)
    next(err)

})
app.use(globalErrorHandler)
