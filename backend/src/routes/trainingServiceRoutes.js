import authMiddleware from '../middlware/authMiddleware.js';
import express from 'express'
const router = express.Router();
import {
  createTrainingService,
  getAllTrainingServices,
  getTrainingServiceById,
  updateTrainingService,
  deleteTrainingService,
} from '../controllers/trainingServiceController.js'


router.post("/", authMiddleware,createTrainingService);
router.get("/", getAllTrainingServices);
router.get("/:id", getTrainingServiceById);
router.put("/:id", authMiddleware,updateTrainingService);
router.delete("/:id",authMiddleware, deleteTrainingService);



export default router;