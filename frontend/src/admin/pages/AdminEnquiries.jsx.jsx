import { useEffect, useState } from "react";
import API from "../../services/api";

const STATUSES = [
  "NEW",
  "CONTACTED",
  "FOLLOW_UP",
  "INTERESTED",
  "CONVERTED",
  "CLOSED",
];

const STATUS_COLORS = {
  NEW: "bg-blue-100 text-blue-700",
  CONTACTED: "bg-purple-100 text-purple-700",
  FOLLOW_UP: "bg-yellow-100 text-yellow-700",
  INTERESTED: "bg-indigo-100 text-indigo-700",
  CONVERTED: "bg-green-100 text-green-700",
  CLOSED: "bg-gray-200 text-gray-700",
};

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [editStatus, setEditStatus] = useState("NEW");
  const [editNotes, setEditNotes] = useState("");
  const [saving, setSaving] = useState(false);

  // GET: Fetch all enquiries
  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/enquiries");

      setEnquiries(response.data.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load enquiries."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Open the edit modal
  const openEditModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setEditStatus(enquiry.status || "NEW");
    setEditNotes(enquiry.notes || "");
  };

  // PUT: Update enquiry status and notes
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!selectedEnquiry) return;

    try {
      setSaving(true);
      setError("");

      await API.put(`/enquiries/${selectedEnquiry._id}`, {
        status: editStatus,
        notes: editNotes,
      });

      setSelectedEnquiry(null);
      await fetchEnquiries();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to update enquiry."
      );
    } finally {
      setSaving(false);
    }
  };

  // DELETE: Remove an enquiry
  const handleDelete = async (enquiry) => {
    const confirmed = window.confirm(
      `Delete the enquiry from ${enquiry.name}?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await API.delete(`/enquiries/${enquiry._id}`);

      setEnquiries((previous) =>
        previous.filter((item) => item._id !== enquiry._id)
      );
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to delete enquiry."
      );
    }
  };

  // Search and filter enquiries
  const filteredEnquiries = enquiries.filter((enquiry) => {
    const searchText = search.toLowerCase();

    const matchesSearch = [
      enquiry.name,
      enquiry.email,
      enquiry.phone,
      enquiry.course,
    ].some((value) =>
      String(value || "").toLowerCase().includes(searchText)
    );

    const matchesStatus =
      statusFilter === "ALL" || enquiry.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Enquiry Management
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and manage enquiries submitted by students.
          </p>
        </div>

        <button
          onClick={fetchEnquiries}
          className="rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          Refresh Enquiries
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Search and filter */}
      <div className="grid gap-4 rounded-xl bg-white p-4 shadow-sm sm:grid-cols-2">
        <input
          type="text"
          placeholder="Search name, email, phone or course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        >
          <option value="ALL">All Statuses</option>

          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status.replace("_", " ")}
            </option>
          ))}
        </select>
      </div>

      {/* Enquiries table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading enquiries...
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No enquiries found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-5 py-4">Student</th>
                  <th className="px-5 py-4">Contact</th>
                  <th className="px-5 py-4">Course</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Submitted</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredEnquiries.map((enquiry) => (
                  <tr key={enquiry._id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-gray-800">
                        {enquiry.name}
                      </p>

                      {enquiry.source && (
                        <p className="mt-1 text-xs text-gray-500">
                          Source: {enquiry.source}
                        </p>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      <p>{enquiry.email}</p>
                      <p className="mt-1 text-gray-500">
                        {enquiry.phone || "No phone provided"}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      {enquiry.course || "Not specified"}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          STATUS_COLORS[enquiry.status] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {(enquiry.status || "NEW").replace("_", " ")}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-gray-500">
                      {enquiry.createdAt
                        ? new Date(enquiry.createdAt).toLocaleDateString()
                        : "—"}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => openEditModal(enquiry)}
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          Manage
                        </button>

                        <button
                          onClick={() => handleDelete(enquiry)}
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
        Showing {filteredEnquiries.length} of {enquiries.length} enquiries
      </p>

      {/* Edit modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <form
            onSubmit={handleUpdate}
            className="max-h-[90vh] w-full max-w-lg space-y-5 overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Manage Enquiry
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedEnquiry.name} · {selectedEnquiry.email}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="text-xl text-gray-500 hover:text-gray-800"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Enquiry Status
              </label>

              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                {STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status.replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Admin Notes
              </label>

              <textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                rows={4}
                placeholder="Add follow-up details or conversation notes..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}