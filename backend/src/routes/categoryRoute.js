import authMiddleware from '../middlware/authMiddleware.js';
import express from 'express'
import {createCategory,getAllCategories,getCategoryById,updateCategory,deleteCategory,} from '../controllers/categoryController.js'


const router = express.Router();


router.post('/',authMiddleware,createCategory)
router.get('/',getAllCategories)

router.get('/:id',getCategoryById)
router.put('/:id',authMiddleware,updateCategory)
router.delete('/:id',authMiddleware,deleteCategory)


export default router