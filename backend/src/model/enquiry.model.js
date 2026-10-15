import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
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

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    course: {
      type: String,
      default: "",
      trim: true,
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "NEW",
        "CONTACTED",
        "FOLLOW_UP",
        "INTERESTED",
        "CONVERTED",
        "CLOSED",
      ],
      default: "NEW",
    },

    source: {
      type: String,
      default: "website",
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Enquiry=mongoose.model("Enquiry",enquirySchema)
export default Enquiry