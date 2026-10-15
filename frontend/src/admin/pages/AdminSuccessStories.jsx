import { useEffect, useState } from "react";
import API from "../../services/api";

const emptyForm = {
  studentName: "",
  course: "",
  story: "",
  image: "",
  rating: 5,
  achievements: "",
  batch: "",
  isActive: true,
};

export default function AdminSuccessStories() {
  const [stories, setStories] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("ALL");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // GET: Fetch success stories
  const fetchStories = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/success-stories");

      setStories(response.data.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load success stories."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // Handle form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Open create modal
  const openCreateModal = () => {
    setEditingId(null);
    setForm({ ...emptyForm });
    setError("");
    setModalOpen(true);
  };

  // Open edit modal
  const openEditModal = (item) => {
    setEditingId(item._id);

    setForm({
      studentName: item.studentName || "",
      course: item.course || "",
      story: item.story || "",
      image: item.image || "",
      rating: item.rating ?? 5,
      achievements: Array.isArray(item.achievements)
        ? item.achievements.join(", ")
        : "",
      batch: item.batch || "",
      isActive: item.isActive ?? true,
    });

    setError("");
    setModalOpen(true);
  };

  // POST: Create / PUT: Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        studentName: form.studentName.trim(),
        course: form.course.trim(),
        story: form.story.trim(),
        image: form.image.trim(),
        rating: Number(form.rating),
        achievements: form.achievements
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        batch: form.batch.trim(),
        isActive: form.isActive,
      };

      if (editingId) {
        await API.put(`/success-stories/${editingId}`, payload);
      } else {
        await API.post("/success-stories", payload);
      }

      setModalOpen(false);
      setEditingId(null);
      setForm({ ...emptyForm });

      await fetchStories();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to save success story."
      );
    } finally {
      setSaving(false);
    }
  };

  // DELETE: Remove a story
  const handleDelete = async (item) => {
    const confirmed = window.confirm(
      `Delete the success story from ${item.studentName}?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await API.delete(`/success-stories/${item._id}`);

      setStories((previous) =>
        previous.filter((story) => story._id !== item._id)
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to delete success story."
      );
    }
  };

  // Search and filter
  const filteredStories = stories.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch = [
      item.studentName,
      item.course,
      item.story,
      item.batch,
      ...(Array.isArray(item.achievements)
        ? item.achievements
        : []),
    ].some((value) =>
      String(value || "").toLowerCase().includes(searchText)
    );

    const matchesVisibility =
      visibilityFilter === "ALL" ||
      (visibilityFilter === "ACTIVE" && item.isActive) ||
      (visibilityFilter === "INACTIVE" && !item.isActive);

    return matchesSearch && matchesVisibility;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Success Stories
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage student achievements and success stories.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          + Add Success Story
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Search and filter */}
      <div className="grid gap-4 rounded-xl bg-white p-4 shadow-sm sm:grid-cols-2">
        <input
          type="text"
          placeholder="Search student, course, batch..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        />

        <select
          value={visibilityFilter}
          onChange={(e) => setVisibilityFilter(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        >
          <option value="ALL">All Stories</option>
          <option value="ACTIVE">Active Only</option>
          <option value="INACTIVE">Inactive Only</option>
        </select>
      </div>

      {/* Stories list */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <div className="col-span-full rounded-xl bg-white p-10 text-center text-gray-500">
            Loading success stories...
          </div>
        ) : filteredStories.length === 0 ? (
          <div className="col-span-full rounded-xl bg-white p-10 text-center text-gray-500">
            No success stories found.
          </div>
        ) : (
          filteredStories.map((item) => (
            <div
              key={item._id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.studentName}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="flex h-32 items-center justify-center bg-blue-50 text-4xl font-bold text-blue-300">
                  {item.studentName?.charAt(0)?.toUpperCase() || "?"}
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.studentName}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.course}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="mt-3 text-amber-500">
                  {"★".repeat(
                    Math.max(0, Math.min(5, Number(item.rating) || 0))
                  )}

                  <span className="ml-2 text-sm text-gray-500">
                    {item.rating}/5
                  </span>
                </div>

                <p className="mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-6 text-gray-600">
                  {item.story}
                </p>

                {item.batch && (
                  <p className="mt-3 text-sm text-gray-500">
                    <span className="font-medium">Batch:</span>{" "}
                    {item.batch}
                  </p>
                )}

                {item.achievements?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.achievements.map((achievement, index) => (
                      <span
                        key={`${achievement}-${index}`}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex gap-3 border-t border-gray-100 pt-4">
                  <button
                    onClick={() => openEditModal(item)}
                    className="flex-1 rounded-lg border border-blue-200 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item)}
                    className="flex-1 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="text-sm text-gray-500">
        Showing {filteredStories.length} of {stories.length} success stories
      </p>

      {/* Create / Edit modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
          <form
            onSubmit={handleSubmit}
            className="my-auto max-h-[95vh] w-full max-w-2xl space-y-5 overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Success Story" : "Add Success Story"}
              </h2>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-2xl text-gray-500 hover:text-gray-800"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Student Name *
                </label>

                <input
                  name="studentName"
                  value={form.studentName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="Student name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Course *
                </label>

                <input
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="Course completed"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Batch
                </label>

                <input
                  name="batch"
                  value={form.batch}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="e.g. January 2026"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Rating
                </label>

                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                >
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} / 5
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Student Image URL
                </label>

                <input
                  type="url"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="https://example.com/student.jpg"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Success Story *
                </label>

                <textarea
                  name="story"
                  value={form.story}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="Describe the student's journey and achievements..."
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Achievements
                </label>

                <input
                  name="achievements"
                  value={form.achievements}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="Placed at TCS, Full Stack Developer"
                />

                <p className="mt-1.5 text-xs text-gray-500">
                  Separate multiple achievements with commas.
                </p>
              </div>

              <label className="flex items-center gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={form.isActive}
                  onChange={handleChange}
                  className="h-4 w-4"
                />

                <span className="text-sm font-medium text-gray-700">
                  Active — display this story publicly
                </span>
              </label>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-100 pt-4">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Story"
                    : "Create Story"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}