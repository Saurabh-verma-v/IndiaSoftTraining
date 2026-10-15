import mongoose from "mongoose";

const settingSchema = new mongoose.Schema(
  {
    instituteName: {
      type: String,
      required: [true, "Institute name is required"],
      trim: true,
    },

    logo: {
      type: String,
      default: "",
      trim: true,
    },

    favicon: {
      type: String,
      default: "",
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    alternatePhone: {
      type: String,
      default: "",
      trim: true,
    },

    address: {
      type: String,
      default: "",
      trim: true,
    },

    socialLinks: {
      linkedin: {
        type: String,
        default: "",
        trim: true,
      },
      facebook: {
        type: String,
        default: "",
        trim: true,
      },
      instagram: {
        type: String,
        default: "",
        trim: true,
      },
      youtube: {
        type: String,
        default: "",
        trim: true,
      },
    },

    footerDescription: {
      type: String,
      default: "",
      trim: true,
    },

    copyrightText: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Setting = mongoose.model("Setting", settingSchema);
export default Setting