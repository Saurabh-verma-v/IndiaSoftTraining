import express from 'express'
const router=express.Router()
import { adminLogin } from '../controllers/authController.js'



router.post('/login',adminLogin)


export default router