import Admin from '../model/admin.model.js'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'



export const adminLogin=async(req,res)=>{
    try {
        const{email,password}=req.body

        // validate email
        if(!validator.isEmail(email)){
            return res.status(400).json({
                message:"Inavlid Email"
            })
        }
        // validate inputs
        if(!email||!password){
            return res.status(400).json({
                message:"Eamil and Passwrod Required"
            })
        }
        const admin=await Admin.findOne({email}).select("+password")
        if(!admin){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password"
            })
        }
        // Check account status
        if (!admin.isActive) {
            return res.status(403).json({
                success: false,
                message: "Your account has been deactivated",
            });
        }
        // compare passsword
        const isPasswordValid=bcrypt.compare(password,admin.password)
        if(!isPasswordValid){
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            })
        }

        // Ensure JWT_SECRET exists
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not configured");
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: admin._id.toString(),
                role: admin.role,
            },
            process.env.JWT_SECRET
        );

        return res.status(201).json({
            success:true,
            message:"login Successfully",
            token,
            admin:{
                id:admin.id,
                name:admin.name,
                email:admin.email,
                role:admin.role
            }
        })
    } catch (error) {
        console.error("Admin login error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
