import authMiddleware from '../middlware/authMiddleware.js'
import express from 'express'
const router=express.Router()
import {createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,} from '../controllers/enquiryController.js'


router.post('/',authMiddleware,createEnquiry)
router.get('/',getAllEnquiries)
router.get('/:id',getEnquiryById)
router.put('/:id',authMiddleware,updateEnquiry)
router.delete('/:id',authMiddleware,deleteEnquiry)




export default router