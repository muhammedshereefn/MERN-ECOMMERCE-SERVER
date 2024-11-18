import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from "helmet"
import connectDB from "./config/connectDB.js"
import userRouter from "./route/user.route.js"

const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

app.get("/",(req,res)=> {
    //server to client
    res.json({
        message : "server is runn 8080"
    })
})

app.use('/api/user',userRouter)

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT, ()=> {
        console.log("SERVER IS RUNNING ON ",PORT);
        
    })
})

