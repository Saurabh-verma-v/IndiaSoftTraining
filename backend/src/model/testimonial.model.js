// const mongoose = require("mongoose");
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },

    role: {
      type: String,
      required: [true, "Student qualification or role is required"],
      trim: true,
    },

    company: {
      type: String,
      default: "",
      trim: true,
    },

    avatar: {
      type: String,
      default: "",
      trim: true,
    },

    quote: {
      type: String,
      required: [true, "Testimonial text is required"],
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
      default: 5,
    },

    achievement: {
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


const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial