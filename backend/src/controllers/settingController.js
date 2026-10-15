// const Setting = require("../model/setting.model");
import Setting from '../model/setting.model.js'


const getSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    // Create default settings if none exist
    if (!settings) {
      settings = await Setting.create({
        instituteName: "IndiaSoftTraining",
      });
    }

    res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const updateSettings = async (req, res) => {
  try {
    const allowedFields = [
      "instituteName",
      "logo",
      "favicon",
      "email",
      "phone",
      "alternatePhone",
      "address",
      "socialLinks",
      "footerDescription",
      "copyrightText",
    ];

    const updates = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    let settings = await Setting.findOne();

    if (!settings) {
      if (!updates.instituteName) {
        return res.status(400).json({
          success: false,
          message: "Institute name is required when creating settings",
        });
      }

      settings = await Setting.create(updates);
    } else {
      settings = await Setting.findByIdAndUpdate(
        settings._id,
        { $set: updates },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      message: "Website settings updated successfully",
      data: settings,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export{
  getSettings,
  updateSettings,
};