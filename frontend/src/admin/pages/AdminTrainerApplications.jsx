import { useEffect, useState } from "react";
import API from "../../services/api";

const STATUSES = [
  "NEW",
  "REVIEWING",
  "SHORTLISTED",
  "ACCEPTED",
  "REJECTED",
];

const STATUS_COLORS = {
  NEW: "bg-blue-100 text-blue-700",
  REVIEWING: "bg-yellow-100 text-yellow-700",
  SHORTLISTED: "bg-purple-100 text-purple-700",
  ACCEPTED: "bg-green-100 text-green-700",
  REJECTED: "bg-red-100 text-red-700",
};

export default function AdminTrainerApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [editStatus, setEditStatus] = useState("NEW");
  const [editNotes, setEditNotes] = useState("");
  const [saving, setSaving] = useState(false);

  // GET: Fetch all trainer applications
  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/trainer-applications");

      setApplications(response.data.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load trainer applications."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Open application details and edit form
  const openEditModal = (application) => {
    setSelectedApplication(application);
    setEditStatus(application.status || "NEW");
    setEditNotes(application.notes || "");
  };

  // PUT: Update status and admin notes
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!selectedApplication) return;

    try {
      setSaving(true);
      setError("");

      await API.put(
        `/trainer-applications/${selectedApplication._id}`,
        {
          status: editStatus,
          notes: editNotes,
        }
      );

      setSelectedApplication(null);
      await fetchApplications();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to update application."
      );
    } finally {
      setSaving(false);
    }
  };

  // DELETE: Remove an application
  const handleDelete = async (application) => {
    const confirmed = window.confirm(
      `Delete the application from ${application.fullName}?`
    );

    if (!confirmed) return;

    try {
      setError("");

      await API.delete(
        `/trainer-applications/${application._id}`
      );

      setApplications((previous) =>
        previous.filter(
          (item) => item._id !== application._id
        )
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to delete application."
      );
    }
  };

  // Search and filter
  const filteredApplications = applications.filter(
    (application) => {
      const searchText = search.toLowerCase();

      const searchableFields = [
        application.fullName,
        application.email,
        application.mobile,
        application.qualification,
        application.course,
        application.technicalSkills,
      ];

      const matchesSearch = searchableFields.some(
        (value) =>
          String(value || "")
            .toLowerCase()
            .includes(searchText)
      );

      const matchesStatus =
        statusFilter === "ALL" ||
        application.status === statusFilter;

      return matchesSearch && matchesStatus;
    }
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Trainer Applications
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Review and manage trainer registration applications.
          </p>
        </div>

        <button
          onClick={fetchApplications}
          className="rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          Refresh Applications
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
          placeholder="Search name, email, skills..."
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

      {/* Applications table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading applications...
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No trainer applications found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-5 py-4">Applicant</th>
                  <th className="px-5 py-4">Contact</th>
                  <th className="px-5 py-4">Qualification</th>
                  <th className="px-5 py-4">Course</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Applied On</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredApplications.map((application) => (
                  <tr
                    key={application._id}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-5 py-4">
                      <p className="font-semibold text-gray-800">
                        {application.fullName}
                      </p>

                      <p className="mt-1 max-w-[220px] truncate text-xs text-gray-500">
                        {application.technicalSkills}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p>{application.email}</p>
                      <p className="mt-1 text-gray-500">
                        {application.mobile}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      {application.qualification}
                    </td>

                    <td className="px-5 py-4">
                      {application.course}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          STATUS_COLORS[application.status] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {(application.status || "NEW").replace(
                          "_",
                          " "
                        )}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-gray-500">
                      {application.createdAt
                        ? new Date(
                            application.createdAt
                          ).toLocaleDateString()
                        : "—"}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            openEditModal(application)
                          }
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          Review
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(application)
                          }
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
        Showing {filteredApplications.length} of{" "}
        {applications.length} applications
      </p>

      {/* Review modal */}
      {selectedApplication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <form
            onSubmit={handleUpdate}
            className="max-h-[90vh] w-full max-w-xl space-y-5 overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Review Application
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedApplication.fullName}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
                className="text-xl text-gray-500 hover:text-gray-800"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Applicant information */}
            <div className="grid gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="break-all font-medium">
                  {selectedApplication.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Mobile</p>
                <p className="font-medium">
                  {selectedApplication.mobile}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Qualification
                </p>
                <p className="font-medium">
                  {selectedApplication.qualification}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Preferred Course
                </p>
                <p className="font-medium">
                  {selectedApplication.course}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs text-gray-500">
                  Availability
                </p>
                <p className="font-medium">
                  {selectedApplication.availability}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs text-gray-500">
                  Technical Skills
                </p>
                <p className="whitespace-pre-wrap font-medium">
                  {selectedApplication.technicalSkills}
                </p>
              </div>

              {selectedApplication.message && (
                <div className="sm:col-span-2">
                  <p className="text-xs text-gray-500">
                    Applicant Message
                  </p>
                  <p className="whitespace-pre-wrap font-medium">
                    {selectedApplication.message}
                  </p>
                </div>
              )}
            </div>

            {/* Update status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Application Status
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

            {/* Admin notes */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Admin Notes
              </label>

              <textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                rows={3}
                placeholder="Add interview feedback or review notes..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
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