import authMiddleware from '../middlware/authMiddleware.js'
import express from 'express'
const router=express.Router()
import {createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,} from '../controllers/testimonialController.js'

router.post('/',authMiddleware,createTestimonial)
router.get('/',getAllTestimonials)
router.get('/:id',getTestimonialById)
router.put('/:id',authMiddleware,updateTestimonial)
router.delete('/:id',authMiddleware,deleteTestimonial)



export default router