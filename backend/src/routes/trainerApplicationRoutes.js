import authMiddleware from '../middlware/authMiddleware.js'
import express from 'express'
const router=express.Router()
import {createTrainerApplication,
  getAllTrainerApplications,
  getTrainerApplicationById,
  updateTrainerApplication,
  deleteTrainerApplication,} from '../controllers/trainerApplicationController.js'


router.post('/',createTrainerApplication)
router.get('/',authMiddleware,getAllTrainerApplications)
router.get('/:id',authMiddleware,getTrainerApplicationById)
router.put('/:id',authMiddleware,updateTrainerApplication)
router.delete('/:id',authMiddleware,deleteTrainerApplication)




export default router