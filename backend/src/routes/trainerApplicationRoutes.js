import authMiddleware from '../middlware/authMiddleware.js'
import express from 'express'
const router=express.Router()
import {createTrainerApplication,
  getAllTrainerApplications,
  getTrainerApplicationById,
  updateTrainerApplication,
  deleteTrainerApplication,} from '../controllers/trainerApplicationController.js'


router.post('/',authMiddleware,createTrainerApplication)
router.get('/',getAllTrainerApplications)
router.get('/:id',getTrainerApplicationById)
router.put('/:id',authMiddleware,updateTrainerApplication)
router.delete('/:id',authMiddleware,deleteTrainerApplication)




export default router