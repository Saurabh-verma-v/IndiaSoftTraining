import { useEffect, useState } from "react";
import API from "../../services/api";

const emptyForm = {
  title: "",
  description: "",
  isActive: true,
  order: 0,
};

export default function AdminTrainingServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // GET: Fetch training services
  const fetchServices = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/training-services");

      setServices(response.data.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load training services."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handle form inputs
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
  const openEditModal = (service) => {
    setEditingId(service._id);

    setForm({
      title: service.title || "",
      description: service.description || "",
      isActive: service.isActive ?? true,
      order: service.order ?? 0,
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
        title: form.title.trim(),
        description: form.description.trim(),
        isActive: form.isActive,
        order: Number(form.order),
      };

      if (editingId) {
        await API.put(`/training-services/${editingId}`, payload);
      } else {
        await API.post("/training-services", payload);
      }

      setModalOpen(false);
      setEditingId(null);
      setForm({ ...emptyForm });

      await fetchServices();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to save training service."
      );
    } finally {
      setSaving(false);
    }
  };

  // DELETE: Remove service
  const handleDelete = async (service) => {
    const confirmed = window.confirm(
      `Delete the service "${service.title}"?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await API.delete(`/training-services/${service._id}`);

      setServices((previous) =>
        previous.filter((item) => item._id !== service._id)
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to delete training service."
      );
    }
  };

  // Search and filter
  const filteredServices = services
    .filter((service) => {
      const searchText = search.toLowerCase();

      const matchesSearch = [
        service.title,
        service.description,
      ].some((value) =>
        String(value || "").toLowerCase().includes(searchText)
      );

      const matchesStatus =
        statusFilter === "ALL" ||
        (statusFilter === "ACTIVE" && service.isActive) ||
        (statusFilter === "INACTIVE" && !service.isActive);

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Training Services
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage the training services displayed on your website.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          + Add Service
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
          placeholder="Search service title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        >
          <option value="ALL">All Services</option>
          <option value="ACTIVE">Active Only</option>
          <option value="INACTIVE">Inactive Only</option>
        </select>
      </div>

      {/* Services table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading training services...
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No training services found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-5 py-4">Order</th>
                  <th className="px-5 py-4">Service</th>
                  <th className="px-5 py-4">Description</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredServices.map((service) => (
                  <tr key={service._id} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium text-gray-700">
                      {service.order ?? 0}
                    </td>

                    <td className="px-5 py-4 font-semibold text-gray-800">
                      {service.title}
                    </td>

                    <td className="max-w-sm px-5 py-4 text-gray-600">
                      <p className="line-clamp-2">
                        {service.description}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          service.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {service.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => openEditModal(service)}
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(service)}
                          className="font-medium text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500">
        Showing {filteredServices.length} of {services.length} services
      </p>

      {/* Create / Edit modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
          <form
            onSubmit={handleSubmit}
            className="my-auto max-h-[95vh] w-full max-w-xl space-y-5 overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Service" : "Add Training Service"}
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

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Service Title *
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                placeholder="e.g. College Training"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Description *
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
                placeholder="Describe this training service..."
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Display Order
              </label>

              <input
                type="number"
                name="order"
                value={form.order}
                onChange={handleChange}
                min="0"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5"
              />

              <p className="mt-1 text-xs text-gray-500">
                Lower numbers appear first when sorted by order.
              </p>
            </div>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
                className="h-4 w-4"
              />

              <span className="text-sm font-medium text-gray-700">
                Active — display this service publicly
              </span>
            </label>

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
                    ? "Update Service"
                    : "Create Service"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}