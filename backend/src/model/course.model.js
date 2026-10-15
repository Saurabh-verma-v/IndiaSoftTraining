import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
    },

    slug: {
      type: String,
      required: [true, "Course slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Course category is required"],
    },

    duration: {
      type: String,
      required: [true, "Course duration is required"],
      trim: true,
    },

    // shortDescription: {
    //   type: String,
    //   required: [true, "Course description is required"],
    //   trim: true,
    // },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    image: {
      type: String,
      default: "",
      trim: true,
    },

    features: {
      type: [String],
      default: [],
    },

    // technologies: {
    //   type: [String],
    //   default: [],
    // },

    // featured: {
    //   type: Boolean,
    //   default: false,
    // },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course=mongoose.model("Course",courseSchema)

export default Course