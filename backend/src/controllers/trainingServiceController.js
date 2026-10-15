// const TrainingService = require("../model/trainingService.model");
import TrainingService from "../model/trainingService.model.js";


const createTrainingService = async (req, res) => {
  try {
    const { title, description, isActive, order } = req.body;

    const trainingService = await TrainingService.create({
      title,
      description,
      isActive,
      order,
    });

    res.status(201).json({
      success: true,
      message: "Training service created successfully",
      data: trainingService,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllTrainingServices = async (req, res) => {
  try {
    const trainingServices = await TrainingService.find().sort({
      order: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: trainingServices.length,
      data: trainingServices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTrainingServiceById = async (req, res) => {
  try {
    const trainingService = await TrainingService.findById(req.params.id);

    if (!trainingService) {
      return res.status(404).json({
        success: false,
        message: "Training service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: trainingService,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTrainingService = async (req, res) => {
  try {
    const { title, description, isActive, order } = req.body;

    const trainingService = await TrainingService.findByIdAndUpdate(
      req.params.id,
      { title, description, isActive, order },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!trainingService) {
      return res.status(404).json({
        success: false,
        message: "Training service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Training service updated successfully",
      data: trainingService,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTrainingService = async (req, res) => {
  try {
    const trainingService = await TrainingService.findByIdAndDelete(
      req.params.id
    );

    if (!trainingService) {
      return res.status(404).json({
        success: false,
        message: "Training service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Training service deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  createTrainingService,
  getAllTrainingServices,
  getTrainingServiceById,
  updateTrainingService,
  deleteTrainingService,
};