import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  Layers,
  RefreshCw,
} from "lucide-react";

import API from "../../services/api";

const emptyForm = {
  name: "",
  slug: "",
  description: "",
  isActive: true,
};

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/categories");

      // Supports { success: true, data: [...] }
      const result = response.data.data ?? response.data;

      setCategories(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error(
        "Fetch categories error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message || "Failed to load categories."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Generate slug from category name
  const generateSlug = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleNameChange = (value) => {
    setFormData((previous) => ({
      ...previous,
      name: value,
      slug: editingId ? previous.slug : generateSlug(value),
    }));
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setError("");
    setModalOpen(true);
  };

  const openEditModal = (category) => {
    setEditingId(category._id);

    setFormData({
      name: category.name || "",
      slug: category.slug || "",
      description: category.description || "",
      isActive: category.isActive ?? true,
    });

    setError("");
    setModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      if (editingId) {
        await API.put(`/categories/${editingId}`, formData);
      } else {
        await API.post("/categories", formData);
      }

      setModalOpen(false);
      setFormData(emptyForm);
      setEditingId(null);

      await fetchCategories();
    } catch (err) {
      console.error(
        "Save category error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Unable to save category. Please check your input."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (category) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${category.name}"?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await API.delete(`/categories/${category._id}`);

      await fetchCategories();
    } catch (err) {
      console.error(
        "Delete category error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Unable to delete category."
      );
    }
  };

  const filteredCategories = categories.filter((category) =>
    `${category.name} ${category.slug} ${category.description || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">
      {/* Header */}
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Category Management
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create and manage your training categories.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
        >
          <Plus size={19} />
          Add Category
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-5 flex items-start justify-between gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p>{error}</p>

          <button
            onClick={() => setError("")}
            aria-label="Dismiss error"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Table container */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Search and refresh */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <button
            onClick={fetchCategories}
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

        {/* Categories table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Slug</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    Loading categories...
                  </td>
                </tr>
              ) : filteredCategories.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <Layers
                      size={32}
                      className="mx-auto mb-3 text-gray-300"
                    />

                    {search
                      ? "No matching categories found."
                      : "No categories found. Add your first category."}
                  </td>
                </tr>
              ) : (
                filteredCategories.map((category) => (
                  <tr
                    key={category._id}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-800">
                        {category.name}
                      </p>

                      <p className="mt-1 max-w-xs truncate text-sm text-gray-500">
                        {category.description || "No description"}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {category.slug}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          category.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(category)}
                          title="Edit category"
                          className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(category)}
                          title="Delete category"
                          className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        {!loading && (
          <div className="border-t border-gray-100 px-6 py-4 text-sm text-gray-500">
            Showing {filteredCategories.length} of {categories.length} categories
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4">
          <div className="my-auto w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Category" : "Add New Category"}
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
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category Name *
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => handleNameChange(event.target.value)}
                  placeholder="e.g. Data Science"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Slug *
                </label>

                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      slug: event.target.value,
                    }))
                  }
                  placeholder="e.g. data-science"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      description: event.target.value,
                    }))
                  }
                  placeholder="Brief category description"
                  className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <label className="flex items-center gap-3 text-sm text-gray-700">
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
                Active category
              </label>

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
                  disabled={saving}
                  className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Category"
                    : "Create Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;