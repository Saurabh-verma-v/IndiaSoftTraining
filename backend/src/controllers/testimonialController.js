// const Testimonial = require("../model/testimonial.model");
import Testimonial from "../model/testimonial.model.js";


const createTestimonial = async (req, res) => {
  try {
    const {
      name,
      role,
      company,
      avatar,
      quote,
      rating,
      achievement,
      isActive,
    } = req.body;

    if (!name || !role || !quote) {
      return res.status(400).json({
        success: false,
        message: "Name, role, and testimonial text are required.",
      });
    }

    const testimonial = await Testimonial.create({
      name,
      role,
      company,
      avatar,
      quote,
      rating,
      achievement,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Testimonial created successfully.",
      data: testimonial,
    });
  } catch (error) {
    console.error("Create testimonial error:", error);

    return res.status(400).json({
      success: false,
      message: "Failed to create testimonial. Please check the provided data.",
    });
  }
};


const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    console.error("Get testimonials error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials.",
    });
  }
};


const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error("Get testimonial error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid testimonial ID.",
    });
  }
};


const updateTestimonial = async (req, res) => {
  try {
    const allowedFields = [
      "name",
      "role",
      "company",
      "avatar",
      "quote",
      "rating",
      "achievement",
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

    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Testimonial updated successfully.",
      data: testimonial,
    });
  } catch (error) {
    console.error("Update testimonial error:", error);

    return res.status(400).json({
      success: false,
      message: "Failed to update testimonial. Check the ID and field values.",
    });
  }
};


const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully.",
    });
  } catch (error) {
    console.error("Delete testimonial error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid testimonial ID.",
    });
  }
};

export{
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};