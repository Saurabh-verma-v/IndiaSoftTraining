import Enquiry from "../model/enquiry.model.js";


const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    // Save enquiry to database
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      course,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Create enquiry error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit enquiry.",
    });
  }
};


const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error("Get enquiries error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries.",
    });
  }
};


const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Get enquiry error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid enquiry ID.",
    });
  }
};


const updateEnquiry = async (req, res) => {
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

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry updated successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Update enquiry error:", error);

    return res.status(400).json({
      success: false,
      message: "Could not update enquiry. Check the ID and status.",
    });
  }
};


const deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Delete enquiry error:", error);

    return res.status(400).json({
      success: false,
      message: "Invalid enquiry ID.",
    });
  }
};


export {createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
}