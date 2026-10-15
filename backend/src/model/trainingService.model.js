// const mongoose = require("mongoose");
import mongoose from "mongoose";

const trainingServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Training service title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Training service description is required"],
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const TrainingService = mongoose.model("TrainingService", trainingServiceSchema);
export default TrainingService