import TrainerApplication from "../model/trainerApplication.model.js";


const createTrainerApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobile,
      qualification,
      course,
      availability,
      technicalSkills,
      message,
    } = req.body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !mobile ||
      !qualification ||
      !course ||
      !availability ||
      !technicalSkills ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    // Save application to MongoDB
    const application = await TrainerApplication.create({
      fullName,
      email,
      mobile,
      qualification,
      course,
      availability,
      technicalSkills,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Trainer application submitted successfully.",
      data: application,
    });
  } catch (error) {
    console.error("Create trainer application error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit trainer application.",
    });
  }
};


const getAllTrainerApplications = async (req, res) => {
  try {
    const applications = await TrainerApplication.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    console.error("Get trainer applications error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch trainer applications.",
    });
  }
};


const getTrainerApplicationById = async (req, res) => {
  try {
    const application = await TrainerApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Trainer application not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error("Get trainer application error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid application ID.",
    });
  }
};


const updateTrainerApplication = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const updates = {};

    if (status !== undefined) updates.status = status;
    if (notes !== undefined) updates.notes = notes;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide a status or notes to update.",
      });
    }

    const application = await TrainerApplication.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Trainer application not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Trainer application updated successfully.",
      data: application,
    });
  } catch (error) {
    console.error("Update trainer application error:", error);

    return res.status(400).json({
      success: false,
      message: "Could not update application. Check the ID and status.",
    });
  }
};


const deleteTrainerApplication = async (req, res) => {
  try {
    const application = await TrainerApplication.findByIdAndDelete(
      req.params.id
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Trainer application not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Trainer application deleted successfully.",
    });
  } catch (error) {
    console.error("Delete trainer application error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid application ID.",
    });
  }
};

export {
  createTrainerApplication,
  getAllTrainerApplications,
  getTrainerApplicationById,
  updateTrainerApplication,
  deleteTrainerApplication,
};