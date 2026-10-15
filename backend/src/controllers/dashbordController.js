import Course from "../model/course.model.js";
import Category from "../model/category.model.js";
import Enquiry from "../model/enquiry.model.js";
import TrainerApplication from "../model/trainerApplication.model.js";
import Testimonial from "../model/testimonial.model.js";
import SuccessStory from "../model/successStory.model.js";


const getDashboardStats = async (req, res) => {
    try {
        const [
            totalCourses,
            totalCategories,
            totalEnquiries,
            newEnquiries,
            totalTrainerApplications,
            totalTestimonials,
            totalSuccessStories,
        ] = await Promise.all([
            Course.countDocuments(),
            Category.countDocuments(),
            Enquiry.countDocuments(),
            Enquiry.countDocuments({ status: "NEW" }),
            TrainerApplication.countDocuments(),
            Testimonial.countDocuments(),
            SuccessStory.countDocuments(),
        ]);
        res.status(200).json({
            success: true,
            data: {
                totalCourses,
                totalCategories,
                totalEnquiries,
                newEnquiries,
                totalTrainerApplications,
                totalTestimonials,
                totalSuccessStories,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export default getDashboardStats