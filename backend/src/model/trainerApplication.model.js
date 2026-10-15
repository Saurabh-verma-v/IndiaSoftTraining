// const mongoose = require("mongoose");
import mongoose from "mongoose";

const trainerApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email address is required"],
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
    },

    qualification: {
      type: String,
      required: [true, "Highest qualification is required"],
      trim: true,
    },

    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
    },

    availability: {
      type: String,
      required: [true, "Availability is required"],
      trim: true,
    },

    technicalSkills: {
      type: String,
      required: [true, "Technical skills are required"],
      trim: true,
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },

    status: {
      type: String,
      enum: ["NEW", "REVIEWING", "SHORTLISTED", "ACCEPTED", "REJECTED"],
      default: "NEW",
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);


const TrainerApplication=mongoose.model(
  "TrainerApplication",
  trainerApplicationSchema
);

export default TrainerApplication