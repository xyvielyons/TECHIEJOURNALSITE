import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import xss from 'xss-clean'
import postRoutes from './routes/post.route.js'

dotenv.config()
const app = express()

process.on('uncaughtException',(err)=>{
    console.log(err.message)
    console.log("Unhandled exception occured! shutting down")
   
        process.exit(1);
   
    
})

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors({credentials:true,origin:["http://localhost:3000","https://www.google.com"]}))//cross origin 
app.use(cookieParser())
app.use(helmet())
app.use(xss())

const PORT = process.env.PORT
mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>console.log(`db connectio successful server running at port: ${PORT}`)))

app.use("/api/post",postRoutes)

