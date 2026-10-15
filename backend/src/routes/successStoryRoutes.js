import authMiddleware from '../middlware/authMiddleware.js';
import express from 'express'

import{
  createSuccessStory,
  getAllSuccessStories,
  getSuccessStoryById,
  updateSuccessStory,
  deleteSuccessStory,
} from '../controllers/successStoryController.js';

const router = express.Router();

// Public routes: Read active success stories
router.get("/", getAllSuccessStories);
router.get("/:id", getSuccessStoryById);

// Admin routes: Manage success stories
router.post("/", authMiddleware,createSuccessStory);
router.put("/:id", authMiddleware,updateSuccessStory);
router.delete("/:id", authMiddleware,deleteSuccessStory);

export default router