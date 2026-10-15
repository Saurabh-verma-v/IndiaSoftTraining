import authMiddleware from '../middlware/authMiddleware.js'
import express from 'express'
const router=express.Router()
import {createCourse,getAllCourses,getCourseById,updateCourse,deleteCourse} from '../controllers/courseController.js'

router.post('/',authMiddleware,createCourse)
router.get('/',getAllCourses)

router.get('/:id',getCourseById)
router.put('/:id',authMiddleware,updateCourse)
router.delete('/:id',authMiddleware,deleteCourse)



export default router