import Category from "../model/category.model.js";

// @desc   Create a new category
// @route  POST /api/v1/categories
const createCategory = async (req, res) => {
  try {
    const { name, slug, description } = req.body;

    if (!name || !slug) {
      return res.status(400).json({
        success: false,
        message: "Category name and slug are required",
      });
    }

    const existingCategory = await Category.findOne({
      $or: [
        { name: name.trim() },
        { slug: slug.trim().toLowerCase() },
      ],
    });

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category name or slug already exists",
      });
    }

    const category = await Category.create({
      name: name.trim(),
      slug: slug.trim().toLowerCase(),
      description,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Create category error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create category",
    });
  }
};

// @desc   Get all categories
// @route  GET /api/v1/categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error("Get categories error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
};

// @desc   Get a single category
// @route  GET /api/v1/categories/:id
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      });
    }

    console.error("Get category error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch category",
    });
  }
};

// @desc   Update a category
// @route  PATCH /api/v1/categories/:id
const updateCategory = async (req, res) => {
  try {
    const { name, slug, description, isActive } = req.body;

    const updates = {};

    if (name !== undefined) updates.name = name.trim();
    if (slug !== undefined) updates.slug = slug.trim().toLowerCase();
    if (description !== undefined) updates.description = description;
    if (isActive !== undefined) updates.isActive = isActive;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide at least one field to update",
      });
    }

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Category name or slug already exists",
      });
    }

    console.error("Update category error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update category",
    });
  }
};

// @desc   Delete a category
// @route  DELETE /api/v1/categories/:id
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      });
    }

    console.error("Delete category error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to delete category",
    });
  }
};


export { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };


