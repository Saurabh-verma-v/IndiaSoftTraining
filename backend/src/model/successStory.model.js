// const mongoose = require("mongoose");
import mongoose from "mongoose";

const successStorySchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },

    image: {
      type: String,
      default: "",
      trim: true,
    },

    course: {
      type: String,
      required: [true, "Course name is required"],
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
      default: 5,
    },

    story: {
      type: String,
      required: [true, "Success story is required"],
      trim: true,
    },

    achievements: {
      type: [String],
      default: [],
    },

    batch: {
      type: String,
      default: "",
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const SuccessStory = mongoose.model("SuccessStory", successStorySchema);
export default SuccessStory