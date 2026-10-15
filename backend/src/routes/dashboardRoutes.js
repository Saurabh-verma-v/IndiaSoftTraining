import authMiddleware from '../middlware/authMiddleware.js';
import express from 'express'
const router = express.Router();
import getDashboardStats from '../controllers/dashbordController.js'



// Get admin dashboard statistics
router.get("/",authMiddleware, getDashboardStats);


export default router