import authMiddleware from '../middlware/authMiddleware.js';
import express from 'express'
const router = express.Router();
import {
  getSettings,
  updateSettings,
} from '../controllers/settingController.js'



router.get("/",authMiddleware, getSettings);
router.put("/",authMiddleware, updateSettings);

export default router;