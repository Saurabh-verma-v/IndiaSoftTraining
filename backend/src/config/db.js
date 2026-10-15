import mongoose from 'mongoose'

function connectDB(){
    mongoose.connect(process.env.mongo_uri)
   .then(()=>{
        console.log("Db connected successfully")
    })
    .catch((error)=>{
        console.log("connection faild,,",error)
    })
}

export default connectDB