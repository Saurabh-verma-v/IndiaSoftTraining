import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  BookOpen,
  RefreshCw,
  Star,
} from "lucide-react";

import API from "../../services/api";

const emptyForm = {
  title: "",
  slug: "",
  category: "",
  duration: "",
  shortDescription: "",
  description: "",
  image: "",
  features: "",
  technologies: "",
  featured: false,
  isActive: true,
};

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  // Fetch courses and categories
  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const [coursesResponse, categoriesResponse] = await Promise.all([
        API.get("/courses"),
        API.get("/categories"),
      ]);

      const coursesData =
        coursesResponse.data.data ?? coursesResponse.data;

      const categoriesData =
        categoriesResponse.data.data ?? categoriesResponse.data;

      if (!Array.isArray(coursesData)) {
        throw new Error("Unexpected courses API response.");
      }

      if (!Array.isArray(categoriesData)) {
        throw new Error("Unexpected categories API response.");
      }

      setCourses(coursesData);
      setCategories(categoriesData);
    } catch (err) {
      console.error(
        "Fetch course data error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to load courses."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Convert a string to a URL-friendly slug
  const generateSlug = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleTitleChange = (value) => {
    setFormData((previous) => ({
      ...previous,
      title: value,
      slug: editingId ? previous.slug : generateSlug(value),
    }));
  };

  // Convert comma-separated values into arrays
  const stringToArray = (value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  const openAddModal = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setError("");
    setModalOpen(true);
  };

  const openEditModal = (course) => {
    setEditingId(course._id);

    setFormData({
      title: course.title || "",
      slug: course.slug || "",
      category:
        typeof course.category === "object"
          ? course.category?._id || ""
          : course.category || "",
      duration: course.duration || "",
      shortDescription: course.shortDescription || "",
      description: course.description || "",
      image: course.image || "",
      features: Array.isArray(course.features)
        ? course.features.join(", ")
        : "",
      technologies: Array.isArray(course.technologies)
        ? course.technologies.join(", ")
        : "",
      featured: course.featured ?? false,
      isActive: course.isActive ?? true,
    });

    setError("");
    setModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        ...formData,
        features: stringToArray(formData.features),
        technologies: stringToArray(formData.technologies),
      };

      if (editingId) {
        await API.put(`/courses/${editingId}`, payload);
      } else {
        await API.post("/courses", payload);
      }

      setModalOpen(false);
      setFormData(emptyForm);
      setEditingId(null);

      await fetchData();
    } catch (err) {
      console.error(
        "Save course error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Unable to save course. Check the form and try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (course) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${course.title}"?`
    );

    if (!confirmed) return;

    try {
      setDeletingId(course._id);
      setError("");

      await API.delete(`/courses/${course._id}`);

      await fetchData();
    } catch (err) {
      console.error(
        "Delete course error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Unable to delete course."
      );
    } finally {
      setDeletingId(null);
    }
  };

  const getCategoryName = (category) => {
    if (category && typeof category === "object") {
      return category.name || "Unknown category";
    }

    return (
      categories.find((item) => item._id === category)?.name ||
      "Unknown category"
    );
  };

  const filteredCourses = courses.filter((course) =>
    `${course.title || ""} ${course.slug || ""} ${
      course.shortDescription || ""
    } ${getCategoryName(course.category)}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">
      {/* Header */}
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Course Management
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage courses displayed on your website.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
        >
          <Plus size={19} />
          Add Course
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-5 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p>{error}</p>

          <button onClick={() => setError("")} aria-label="Dismiss error">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Course table */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-60"
          >
            <RefreshCw
              size={17}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    Loading courses...
                  </td>
                </tr>
              ) : filteredCourses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    <BookOpen size={32} className="mx-auto mb-3 text-gray-300" />
                    {search
                      ? "No matching courses found."
                      : "No courses found. Add your first course."}
                  </td>
                </tr>
              ) : (
                filteredCourses.map((course) => (
                  <tr key={course._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {course.image ? (
                          <img
                            src={course.image}
                            alt={course.title}
                            className="h-12 w-12 rounded-lg border border-gray-100 object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600">
                            <BookOpen size={22} />
                          </div>
                        )}

                        <div>
                          <p className="font-semibold text-gray-800">
                            {course.title}
                          </p>

                          {course.featured && (
                            <span className="mt-1 inline-flex items-center gap-1 text-xs text-amber-600">
                              <Star size={12} />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {getCategoryName(course.category)}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {course.duration || "—"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          course.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {course.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(course)}
                          title="Edit course"
                          className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(course)}
                          disabled={deletingId === course._id}
                          title="Delete course"
                          className="rounded-lg p-2 text-red-600 hover:bg-red-50 disabled:opacity-50"
                        >
                          {deletingId === course._id ? (
                            <RefreshCw size={18} className="animate-spin" />
                          ) : (
                            <Trash2 size={18} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {!loading && (
          <div className="border-t border-gray-100 px-6 py-4 text-sm text-gray-500">
            Showing {filteredCourses.length} of {courses.length} courses
          </div>
        )}
      </div>

      {/* Add/Edit modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4">
          <div className="my-auto w-full max-w-2xl rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Course" : "Add New Course"}
              </h2>

              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Title */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Course Title *
                  </label>

                  <input
                    required
                    value={formData.title}
                    onChange={(event) => handleTitleChange(event.target.value)}
                    placeholder="e.g. Full Stack Web Development"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Slug *
                  </label>

                  <input
                    required
                    value={formData.slug}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        slug: event.target.value,
                      }))
                    }
                    placeholder="full-stack-web-development"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Category *
                  </label>

                  <select
                    required
                    value={formData.category}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        category: event.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  >
                    <option value="">Select category</option>

                    {categories
                      .filter((category) => category.isActive !== false)
                      .map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                  </select>

                  {categories.length === 0 && (
                    <p className="mt-2 text-xs text-red-600">
                      Create a category before adding a course.
                    </p>
                  )}
                </div>

                {/* Duration */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Duration
                  </label>

                  <input
                    value={formData.duration}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        duration: event.target.value,
                      }))
                    }
                    placeholder="e.g. 6 months"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Course Image URL
                </label>

                <input
                  type="url"
                  value={formData.image}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      image: event.target.value,
                    }))
                  }
                  placeholder="https://example.com/course-image.jpg"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Leave blank if you do not have an image URL yet.
                </p>
              </div>

              {/* Short description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Short Description *
                </label>

                <textarea
                  required
                  rows="2"
                  value={formData.shortDescription}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      shortDescription: event.target.value,
                    }))
                  }
                  placeholder="A brief introduction to the course"
                  className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Full description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Description *
                </label>

                <textarea
                  required
                  rows="4"
                  value={formData.description}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      description: event.target.value,
                    }))
                  }
                  placeholder="Enter the full course description"
                  className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Features */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Features
                </label>

                <textarea
                  rows="2"
                  value={formData.features}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      features: event.target.value,
                    }))
                  }
                  placeholder="Live projects, Mentorship, Certificate"
                  className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Separate each feature with a comma.
                </p>
              </div>

              {/* Technologies */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Technologies
                </label>

                <textarea
                  rows="2"
                  value={formData.technologies}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      technologies: event.target.value,
                    }))
                  }
                  placeholder="React, Node.js, MongoDB"
                  className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Separate each technology with a comma.
                </p>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap gap-6 border-t border-gray-100 pt-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        featured: event.target.checked,
                      }))
                    }
                    className="h-4 w-4 accent-red-600"
                  />
                  Featured course
                </label>

                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        isActive: event.target.checked,
                      }))
                    }
                    className="h-4 w-4 accent-red-600"
                  />
                  Active course
                </label>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-lg border border-gray-200 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving || categories.length === 0}
                  className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Course"
                    : "Create Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;