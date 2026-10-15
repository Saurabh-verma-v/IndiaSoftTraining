import app from './src/app.js'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
dotenv.config()

app.listen(process.env.port,()=>{
    console.log("server is running...")
})

connectDB()