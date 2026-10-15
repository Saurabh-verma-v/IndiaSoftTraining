import authMiddleware from '../middlware/authMiddleware.js'
import express from 'express'
const router=express.Router()
import {createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,} from '../controllers/enquiryController.js'


router.post('/',createEnquiry)
router.get('/',authMiddleware,getAllEnquiries)
router.get('/:id',authMiddleware,getEnquiryById)
router.put('/:id',authMiddleware,updateEnquiry)
router.delete('/:id',authMiddleware,deleteEnquiry)




export default router