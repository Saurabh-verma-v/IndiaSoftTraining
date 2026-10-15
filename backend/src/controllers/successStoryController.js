// const SuccessStory = require("../model/successStory.model");
import SuccessStory from "../model/successStory.model.js";

const createSuccessStory = async (req, res) => {
  try {
    const {
      studentName,
      image,
      course,
      rating,
      story,
      achievements,
      batch,
      isActive,
    } = req.body;

    if (!studentName || !course || !story) {
      return res.status(400).json({
        success: false,
        message: "Student name, course, and story are required.",
      });
    }

    const successStory = await SuccessStory.create({
      studentName,
      image,
      course,
      rating,
      story,
      achievements,
      batch,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Success story created successfully.",
      data: successStory,
    });
  } catch (error) {
    console.error("Create success story error:", error);

    return res.status(400).json({
      success: false,
      message: "Failed to create success story. Please check the submitted data.",
    });
  }
};


const getAllSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find({
      isActive: true,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: successStories.length,
      data: successStories,
    });
  } catch (error) {
    console.error("Get success stories error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch success stories.",
    });
  }
};


const getSuccessStoryById = async (req, res) => {
  try {
    const successStory = await SuccessStory.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!successStory) {
      return res.status(404).json({
        success: false,
        message: "Success story not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: successStory,
    });
  } catch (error) {
    console.error("Get success story error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid success story ID.",
    });
  }
};


const updateSuccessStory = async (req, res) => {
  try {
    const allowedFields = [
      "studentName",
      "image",
      "course",
      "rating",
      "story",
      "achievements",
      "batch",
      "isActive",
    ];

    const updates = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide at least one valid field to update.",
      });
    }

    const successStory = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!successStory) {
      return res.status(404).json({
        success: false,
        message: "Success story not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success story updated successfully.",
      data: successStory,
    });
  } catch (error) {
    console.error("Update success story error:", error);

    return res.status(400).json({
      success: false,
      message: "Failed to update success story. Check the ID and field values.",
    });
  }
};

const deleteSuccessStory = async (req, res) => {
  try {
    const successStory = await SuccessStory.findByIdAndDelete(
      req.params.id
    );

    if (!successStory) {
      return res.status(404).json({
        success: false,
        message: "Success story not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success story deleted successfully.",
    });
  } catch (error) {
    console.error("Delete success story error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid success story ID.",
    });
  }
};

export{
  createSuccessStory,
  getAllSuccessStories,
  getSuccessStoryById,
  updateSuccessStory,
  deleteSuccessStory,
};