import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import Admin from '../src/model/admin.model.js'
import bcrypt from 'bcryptjs'

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri)
        console.log("Mongo Db connected")

        const name=process.env.ADMIN_NAME
        const email=process.env.ADMIN_EMAIL
        const password=process.env.ADMIN_PASSWORD

        if (!name || !email || !password) {
            throw new Error(
                "Please configure ADMIN_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD in .env"
            );
        }
        if (password.length < 8) {
            throw new Error("Admin password must be at least 8 characters");
        }
        const existAdmin=await Admin.findOne({email})
        if(existAdmin){
            console.log("An admin with this email already exists.");
            return;
        }
        const hashPassword=await bcrypt.hash(password,10)

        const admin=await Admin.create({
            name,
            email,
            password:hashPassword,
            role:"super_admin",
            isActive:true
        })
        console.log("Admin created successfully!");
        console.log("Admin ID:", admin._id);
        console.log("Admin Email:", admin.email);
    } catch (error) {
        console.error("Admin creation failed:", error.message);
        process.exitCode = 1;
    } finally{
        await mongoose.disconnect()
    }
}

createAdmin()