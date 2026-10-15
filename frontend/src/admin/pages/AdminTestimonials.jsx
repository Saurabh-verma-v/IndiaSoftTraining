import { useEffect, useState } from "react";
import API from "../../services/api";

const emptyForm = {
  name: "",
  role: "",
  company: "",
  quote: "",
  avatar: "",
  achievement: "",
  rating: 5,
  isActive: true,
};

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("ALL");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // GET: Fetch testimonials
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/testimonials");

      setTestimonials(response.data.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load testimonials."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Update form fields
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
  const openEditModal = (testimonial) => {
    setEditingId(testimonial._id);

    setForm({
      name: testimonial.name || "",
      role: testimonial.role || "",
      company: testimonial.company || "",
      quote: testimonial.quote || "",
      avatar: testimonial.avatar || "",
      achievement: testimonial.achievement || "",
      rating: testimonial.rating ?? 5,
      isActive: testimonial.isActive ?? true,
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
        ...form,
        rating: Number(form.rating),
      };

      if (editingId) {
        await API.put(`/testimonials/${editingId}`, payload);
      } else {
        await API.post("/testimonials", payload);
      }

      setModalOpen(false);
      setForm({ ...emptyForm });
      setEditingId(null);

      await fetchTestimonials();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to save testimonial."
      );
    } finally {
      setSaving(false);
    }
  };

  // DELETE: Remove testimonial
  const handleDelete = async (testimonial) => {
    const confirmed = window.confirm(
      `Delete the testimonial from ${testimonial.name}?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await API.delete(`/testimonials/${testimonial._id}`);

      setTestimonials((previous) =>
        previous.filter((item) => item._id !== testimonial._id)
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to delete testimonial."
      );
    }
  };

  // Search and filter
  const filteredTestimonials = testimonials.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch = [
      item.name,
      item.role,
      item.company,
      item.quote,
      item.achievement,
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
            Testimonials Management
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage student feedback displayed on your website.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          + Add Testimonial
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
          placeholder="Search name, company, or testimonial..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        />

        <select
          value={visibilityFilter}
          onChange={(e) => setVisibilityFilter(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        >
          <option value="ALL">All Testimonials</option>
          <option value="ACTIVE">Active Only</option>
          <option value="INACTIVE">Inactive Only</option>
        </select>
      </div>

      {/* Testimonials list */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <div className="col-span-full rounded-xl bg-white p-10 text-center text-gray-500">
            Loading testimonials...
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="col-span-full rounded-xl bg-white p-10 text-center text-gray-500">
            No testimonials found.
          </div>
        ) : (
          filteredTestimonials.map((item) => (
            <div
              key={item._id}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      {item.name?.charAt(0)?.toUpperCase() || "?"}
                    </div>
                  )}

                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="truncate text-sm text-gray-500">
                      {item.role}
                      {item.company ? ` · ${item.company}` : ""}
                    </p>
                  </div>
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

              <div className="mt-4 text-amber-500">
                {"★".repeat(
                  Math.max(0, Math.min(5, Number(item.rating) || 0))
                )}
                <span className="ml-2 text-sm text-gray-500">
                  {item.rating}/5
                </span>
              </div>

              <p className="mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-6 text-gray-600">
                “{item.quote}”
              </p>

              {item.achievement && (
                <p className="mt-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
                  <span className="font-semibold">Achievement:</span>{" "}
                  {item.achievement}
                </p>
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
          ))
        )}
      </div>

      <p className="text-sm text-gray-500">
        Showing {filteredTestimonials.length} of {testimonials.length} testimonials
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
                {editingId ? "Edit Testimonial" : "Add Testimonial"}
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
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="Student name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Role / Qualification *
                </label>
                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="e.g. Data Analyst"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="Company name"
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
                  Avatar Image URL
                </label>
                <input
                  name="avatar"
                  type="url"
                  value={form.avatar}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Testimonial *
                </label>
                <textarea
                  name="quote"
                  value={form.quote}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="Student feedback..."
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Achievement
                </label>
                <input
                  name="achievement"
                  value={form.achievement}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  placeholder="e.g. Placed at an IT company"
                />
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
                  Active — display this testimonial publicly
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
                    ? "Update Testimonial"
                    : "Create Testimonial"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}