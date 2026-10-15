import Course from '../model/course.model.js'
import Category from '../model/category.model.js'
import mongoose from 'mongoose';



const createCourse = async (req, res) => {
  try {
    const {
      title,
      slug,
      category,
      duration,
      // shortDescription,
      description,
      image,
      features,
      // technologies,
      // featured,
      isActive,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !slug ||
      !category ||
      !duration 
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required course fields",
      });
    }

    // Validate category ID
    if (!mongoose.isValidObjectId(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      });
    }

    // Check whether category exists
    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Check for duplicate slug
    const existingCourse = await Course.findOne({
      slug: slug.trim().toLowerCase(),
    });

    if (existingCourse) {
      return res.status(409).json({
        success: false,
        message: "Course slug already exists",
      });
    }

    // Create course
    const course = await Course.create({
      title,
      slug,
      category,
      duration,
      // shortDescription,
      description,
      image,
      features,
      // technologies,
      // featured,
      isActive,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    console.error("Create course error:", error.message);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Course slug already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to create course",
    });
  }
};


const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error("Get courses error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
    });
  }
};


const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID",
      });
    }

    const course = await Course.findById(id)
      .populate("category", "name slug");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error("Get course error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch course",
    });
  }
};


const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID",
      });
    }

    const allowedFields = [
      "title",
      "slug",
      "category",
      "duration",
      // "shortDescription",
      "description",
      "image",
      "features",
      // "technologies",
      // "featured",
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
        message: "Provide at least one field to update",
      });
    }

    if (updates.category !== undefined) {
      if (!mongoose.isValidObjectId(updates.category)) {
        return res.status(400).json({
          success: false,
          message: "Invalid category ID",
        });
      }

      const categoryExists = await Category.findById(updates.category);

      if (!categoryExists) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
    }

    if (updates.title !== undefined) {
      updates.title = updates.title.trim();
    }

    if (updates.slug !== undefined) {
      updates.slug = updates.slug.trim().toLowerCase();
    }

    const course = await Course.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    }).populate("category", "name slug");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Course slug already exists",
      });
    }

    console.error("Update course error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update course",
    });
  }
};



const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID",
      });
    }

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error("Delete course error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to delete course",
    });
  }
};


export {createCourse,getAllCourses,getCourseById,updateCourse,deleteCourse}