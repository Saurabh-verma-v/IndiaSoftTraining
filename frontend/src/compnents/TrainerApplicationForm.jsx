import React, { useState } from "react";

const TrainerApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    qualification: "",
    course: "",
    experience: "",
    availability: "",
    technicalSkills: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Trainer Regestration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* Highest Qualification */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Highest Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Eg: B.Tech, MCA, MBA"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* Course You Can Train */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course You Can Train <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              required
            >
              <option value="">Select course</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="cloud-computing">Cloud Computing</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="cybersecurity">Other</option>
            </select>
          </div>

          {/* Experience */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience <span className="text-red-500">*</span>
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              required
            >
              <option value="">Select</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div> */}

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability <span className="text-red-500">*</span>
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              required
            >
              <option value="">Select</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="weekends">Weekends Only</option>
              <option value="evenings">Evenings</option>
            </select>
          </div>

          {/* Technical Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technical Skills <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="technicalSkills"
              value={formData.technicalSkills}
              onChange={handleChange}
              placeholder="Eg: Python, Django, SQL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* Upload Resume */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                required
              />
              <span className="text-sm text-gray-500">No file chosen</span>
            </div>
          </div> */}

          {/* Message / About Yourself */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message / About Yourself <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Brief about your teaching & industry experience"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-y"
              required
            />
          </div>

          {/* Captcha Verification */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Captcha Verification <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border border-gray-300">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-700">I'm not a robot</span>
              <div className="ml-auto flex items-center space-x-1">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                <span className="text-xs text-gray-500 font-mono">reCAPTCHA</span>
              </div>
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainerApplicationForm;